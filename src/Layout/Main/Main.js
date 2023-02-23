import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Footer from "../../Pages/Shared/Footer/Footer";
import Loader from "../../Pages/Shared/Loader/Loader";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
// import MessengerCustomerChat from "react-messenger-customer-chat";

const Main = () => {
  const { userLoading } = useContext(AuthContext);
  if (userLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <MessengerCustomerChat
        pageId="113927341610869"
        appId="3256605467984450"
      /> */}
      <Footer />
    </div>
  );
};

export default Main;
