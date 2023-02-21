import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill, BsPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Register.css";
import { AuthContext } from "../../../context/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../slice/auth/authSlice";
import useToken from "../../../Hooks/useToken/useToken";
import useTitle from "../../../Hooks/useTitle/useTitle";

const Register = () => {
  const { googleSignin, updateUser } = useContext(AuthContext);
  useTitle("Register");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSingUpError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [createUserEmail, setCeateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.from?.state.pathname || "/";

  const dispatch = useDispatch();
  const { isError, error } = useSelector((state) => state.auth);

  if (token) {
    navigate(from, { replace: true });
  }

  const handelSignUp = ({ email, password }) => {
    dispatch(createUser({ email, password }));
  };

  // const handlerGoogleSignin = () => {
  //   dispatch(googleSingIn());
  // };

  const handlerGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        updateUser(userInfo)
          .then(() => {
            if (userInfo.email) {
              fetch(`https://gamespace-server.vercel.app/users`)
                .then((data) => data.json())
                .then((result) => {
                  const userEmail = result.find(
                    (userEmail) => userEmail.email === userInfo.email
                  );
                  if (!userEmail) {
                    saveUser(userInfo.name, userInfo.email, userInfo.photoURL);
                    toast.success("Login Successfully");
                  } else {
                    navigate(from, { replace: true });
                    alert("alrady User Create");
                  }
                });
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
        setCeateUserEmail(email);
      });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // error show
  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

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
                className="input input-primary input-bordered rounded-none w-full text-gray-400 focus:text-white  px-8 "
              />
              {errors.name && (
                <p className="text-orange-400 mt-2">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full relative mt-8">
              <label className="absolute ml-2 mt-4 text-gray">
                <FiMail className="text-gray-400 focus:text-white"></FiMail>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                placeholder="Email or Phone"
                className="input input-primary rounded-none input-bordered w-full text-gray-400 focus:text-white px-8"
              />
              {errors.email && (
                <p className="text-orange-400 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full relative mt-8">
              <label className="absolute ml-2 mt-4 text-gray">
                <FaLock className="text-gray-400 focus:text-white"></FaLock>
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
                className="input input-bordered w-full rounded-none input-primary text-gray-400 focus:text-white px-8"
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
          <div
            onClick={handlerGoogleSignin}
            className="hover:bg-yellow-500 rounded border-2
              flex justify-center items-center border-yellow-500 text-yellow-500 hover:text-white text-lg py-2 uppercase font-semibold w-full cursor-pointer"
          >
            <FcGoogle className="text-lg mr-2"></FcGoogle> <p>Google </p>
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
