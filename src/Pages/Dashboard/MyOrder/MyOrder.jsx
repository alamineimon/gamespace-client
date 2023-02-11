import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import ConfirmationModal from "../../Modal/ConfirmationModal/ConfirmationModal";
import Title2 from "../../Shared/DashTitle/Title2";

const MyOrder = (props) => {
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const url = `https://gamespace-server.vercel.app/orderedGames?email=${user?.email}`;
  const {
    data: orderedGames = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orderedGames", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const closeModal = () => {
    setDeleteProduct(null);
  };

  const handleDelete = (product) => {
    fetch(`https://gamespace-server.vercel.app/orderedGames/${product._id}`, {
      method: "DELETE",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${product?.name} order deleted successfully`);
        }
      });
  };

  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }
  return (
    <div>
      <h1 className="text-lg lg:text-3xl font-bold capitalize mb-5 text-center">My <span className="text-primary">Order</span></h1>
      <div className="overflow-x-auto">
        <table className="table w-3/4">
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Mobile</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderedGames?.map((games, i) => (
              <tr key={games._id}>
                <th>{i + 1}</th>
                <td>{games?.name}</td>
                <td>{games?.mobile}</td>
                <td>{games?.productName}</td>
                <td>{games?.price}</td>
                <td>{games.location}</td>
                <td>
                  {games.price && !games.paid && (
                    <Link to={`/dashboard/payment/${games._id}`}>
                      <button className="btn border-none hover:bg-green-500 bg-yellow-400 btn-sm text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {games.price && games.paid && (
                    <span className="text-green-600">Paid</span>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeleteProduct(games)}
                    htmlFor="confirmation-modal"
                    className="btn border-none bg-red-500 btn-sm text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <ConfirmationModal
          successAction={handleDelete}
          modalData={deleteProduct}
          closeModal={closeModal}
          title={`Are you sure you wanna delete? `}
          message={`If you delete ${deleteProduct.name}.  It cann't be undone`}
        />
      )}
    </div>
  );
};

export default MyOrder;
