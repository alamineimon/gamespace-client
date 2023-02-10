import React, { useContext, useState } from "react";
import "./Subcribtion.css";
import { SiMinutemailer } from "react-icons/si";
import { AuthContext } from "../../../../context/AuthProvider";
import toast from "react-hot-toast";




const Subcribtion = () => {
  const { user } = useContext(AuthContext)
  const [formState, setFormstate] = useState({});

  const changeHandler = (event) => {
    setFormstate({ ...formState, [event.target.name]: event.target.value });

  }

  const submitHanlder = (event) => {
    event.preventDefault()
    const emailConfig = {
      Host: "smtp.elasticemail.com",
      Username: "delowerhossain20201@yopmail.com",
      Password: "A50646288A1EC91316BFF9A2BD75EB626852",
      Port: 2525,
      To: 'delowerhossain20201@yopmail.com',
      From: "hdelower68@gmail.com",
      Subject: "New member on our GameSpace",
      Body: `${user.displayName} conneted to our website over email.`

    }
    if (window.Email) {
      window.Email.send(emailConfig).then(() => toast.success('email sent seuccesfully')
      )
    }
  }


  return (
    <div className="flex justify-center  w-full  ">
      <div className="lg:flex  bg-transparent justify-center items-center px-4">
        <div className="lg:flex sm:block items-center justify-around  rounded-t-full bg-black w-full pt-6 pb-4 px-8">
          <div className="text-lg lg:mx-4  text-center sm:ml-10 md:text-2xl">
            <h1 className="text-white font-bold">Our</h1>
            <h1 className="text-yellow-400 font-bold"> Newsletter</h1>
          </div>
          <div className="flex justify-center items-center lg:mx-4 ">
            <form className=" doangel flex justify-center items-center  text-black  font-bold bg-yellow-500 file-input-bordered" action="" onSubmit={submitHanlder} >
              <input
                className="w-24 p-2  md:w-48 lg:w-96 dark:text-gray-100"
                onChange={changeHandler}
                type="email"
                name="email"
                value={formState.email}
                placeholder="Your Email" />
              <input className="ml-1 pointer" type="submit" value="SUBSCRIBE"/>
              <p className="pr-2 text-lg text-black ">
                <SiMinutemailer />
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Subcribtion;
