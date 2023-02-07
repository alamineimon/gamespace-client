import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <MessengerCustomerChat
        pageId="113927341610869"
        appId="3256605467984450"
      />
      <Footer />
    </div>
  );
};

export default Main;
