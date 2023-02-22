import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../Hooks/useTitle/useTitle";
import ConfirmationModal from "../../Modal/ConfirmationModal/ConfirmationModal";
import Title2 from "../../Shared/DashTitle/Title2";
import Loader from "../../Shared/Loader/Loader";

const MyOrder = (props) => {
  const { user } = useContext(AuthContext);
  useTitle("Dashboard/MyOrders");
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
      console.log(data);
      return data;
    },
  });

  const closeModal = () => {
    setDeleteProduct(null);
  };

  const handleDelete = (product) => {
    fetch(`https://gamespace-server.vercel.app/orderedGames/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${product?.name} order deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }
  if (orderedGames.length === 0) {
    return (
      <div className=" text-center h-[92vh] flex justify-center items-center">
        <div>
          <Title2 colored={"Order"}>No</Title2>
          <Link to="/shop" className="btn btn-primary">
            Lets Start Gaming
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto w-11/12 py-10">
        <Title2 colored={"Order"}>My</Title2>
        <div className="overflow-x-auto">
          <table className="table w-full">
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
                        <button className="btn border-none hover:bg-green-500 bg-yellow-400 btn-sm text-secondary">
                          Pay
                        </button>
                      </Link>
                    )}
                    {games.price && games.paid && games?.gameDownload && (
                      <a
                        href={games.gameDownload}
                        className="btn border-none hover:bg-green-500 bg-yellow-400 btn-sm text-secondary "
                        title="Download Game"
                      >
                        <FiDownload className="text-xl " />
                      </a>
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
  }
};

export default MyOrder;
