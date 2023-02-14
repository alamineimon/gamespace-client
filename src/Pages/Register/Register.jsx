import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import {
  BsEyeFill,
  BsEyeSlashFill,
  BsFacebook,
  BsPersonFill,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Register.css";
import useToken from "../../Hooks/useToken/useToken";
import { useQuery } from "@tanstack/react-query";


const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {user, createUser, googleSignin, facebookSignin, updateUser } =
    useContext(AuthContext);
  const [signUpError, setSingUpError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [createUserEmail, setCeateUserEmail] = useState('')
  const [token] = useToken(createUserEmail);
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.from?.state.pathname || "/";
  
    if(token){
      navigate(from, { replace: true });
    }


  const handelSignUp = (data) => {
    setSingUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: data.name,
          email:data.email,
          photoURL: user.photoURL,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.photoURL);
            console.log(user);
            toast.success("User Create Succesfully");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSingUpError(error.message);
      });
  };

  const handlerFacebookSignin = () => {
    facebookSignin().then((result) => {
      const user = result.user;
      console.log(user);
      const userInfo = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      saveUser(userInfo.name, userInfo.email, userInfo.photoURL);
    });
  };

  const handlerGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user)
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photoURL:user.photoURL,
          
        };
        updateUser(userInfo)
          .then(() => {
            if( userInfo.email){
              fetch(`https://gamespace-server.vercel.app/users`)
              .then(data => data.json())
              .then(result => {
                const userEmail = result.find(userEmail => userEmail.email === userInfo.email );
                if(!userEmail){
                  saveUser(userInfo.name, userInfo.email, userInfo.photoURL);
                  toast.success("Login Successfully");
                }
                else{
                  navigate(from, { replace: true });
                  alert('alrady User Create')
                }
              })
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const saveUser = (name, email, photoURL) => {
    const user = { name, email, photoURL };
    fetch("https://gamespace-server.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCeateUserEmail(email);
      });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  return (
    <div className="hero registerBG">
      <div className="card shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)] shadow-black border border-gray-800 xs:w-11/12 sm:w-96 md:w-3/6 lg:w-2/6 m-auto  text-white py-4 px-6 rounded-none my-12">
        <div>
          <h2 className="text-4xl font-bold text-center mb-7">Sign Up !</h2>
          <form onSubmit={handleSubmit(handelSignUp)}>
            <div className="form-control w-full relative ">
              <label className="absolute ml-2 mt-4 text-gray">
                <BsPersonFill className="text-gray-400 text-xl"></BsPersonFill>
              </label>
              <input
                type="name"
                name="name"
                {...register("name", { required: "Name is required" })}
                placeholder="User Name"
                className="input input-primary input-bordered rounded-none w-full text-gray-400 px-8"
              />
              {errors.name && (
                <p className="text-orange-400 mt-2">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full relative mt-8">
              <label className="absolute ml-2 mt-4 text-gray">
                <FiMail className="text-gray-400"></FiMail>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                placeholder="Email or Phone"
                className="input input-primary rounded-none input-bordered w-full text-gray-400 px-8"
              />
              {errors.email && (
                <p className="text-orange-400 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full relative mt-8">
              <label className="absolute ml-2 mt-4 text-gray">
                <FaLock className="text-gray-400"></FaLock>
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or length",
                  },
                  // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be Strong" }
                })}
                placeholder="Password"
                className="input input-bordered w-full rounded-none input-primary text-gray-400 px-8"
              />
              {errors.password && (
                <p className="text-orange-400 mt-2">
                  {errors.password?.message}
                </p>
              )}
              <label className=" right-2 mt-4 cursor-pointer absolute text-gray">
                {passwordShown ? (
                  <BsEyeSlashFill
                    onClick={togglePassword}
                    className="text-xl"
                  ></BsEyeSlashFill>
                ) : (
                  <BsEyeFill
                    onClick={togglePassword}
                    className="text-xl"
                  ></BsEyeFill>
                )}
              </label>
            </div>
            <br />

            <input
              className="hover:bg-yellow-500 rounded border-2 mt-5 border-yellow-500 text-yellow-500 hover:text-white text-lg uppercase font-semibold w-full py-2 cursor-pointer"
              value="Sign Up"
              type="submit"
            />
            <div>
              {signUpError && <p className="text-orange-400">{signUpError}</p>}
            </div>
          </form>
          <p className="divider text-sm">OR LOGIN WITH</p>
          <div className="flex justify-between gap-5 w-full">
            <button
              onClick={handlerGoogleSignin}
              className="btn rounded-none btn-outline text-white normal-case w-2/5"
            >
              <FcGoogle className="text-2xl mr-2"></FcGoogle> Google
            </button>
            <button
              onClick={handlerFacebookSignin}
              className="btn rounded-none btn-outline border-none bg-blue-700 w-lg text-white normal-case w-2/5"
            >
              <BsFacebook className="text-2xl mr-2 text-whait"></BsFacebook>{" "}
              Facebook
            </button>
          </div>
          <p className="mt-4 mb-8 text-center">
            {" "}
            Alrady Habe an Account ?{" "}
            <Link className="text-blue-500 font-bold underline" to="/login">
              Please Login !
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
