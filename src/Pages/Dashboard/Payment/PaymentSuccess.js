import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const transactionId = query.get("transactionId");

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(
      `https://gamespace-server.vercel.app/orderedgames/by-transaction-id/${transactionId}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [transactionId]);

  if (!order?._id) {
    return <div>No order found</div>;
  }
  
  return (
    <div>
      <h4 className="text-4xl my-5 text-center">
        Your Order<span className="text-primary"> Summary</span>
      </h4>
      {/* <h2>Your Order Summary</h2> */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>transactionId</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{order.serviceName}</td>
              <td>{order.price}</td>
              <td>{order.address}</td>
              <td>{transactionId}</td>
            </tr>
          </tbody>
        </table>

        <button
          className="btn btn-primary mx-auto  my-5 block print:hidden"
          onClick={() => window.print()}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
