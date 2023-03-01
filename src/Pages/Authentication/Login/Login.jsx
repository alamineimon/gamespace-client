import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Login.css";
import useTitle from "../../../Hooks/useTitle/useTitle";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  useTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { googleSignin, loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  // const [resetEmail, setresetEmail] = useState(" ");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // redux
  const { isLoading, email, error, isError } = useSelector(
    (state) => state.auth
  );

  const handelLogin = ({ email, password }) => {
    loginUser(email, password).then((res) => navigate(from, { replace: true }));
  };

  // user login state management
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  const handlerGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  // const handlerForgetPassword = () => {
  //   handleForget(resetEmail)
  //     .then(() => {
  //       alert(
  //         " Password reset request send to your email. Please check your email"
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="hero loginBG">
      <div className="card shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)] shadow-black border border-yellow-800 h[800px] xs:w-11/12 sm:w-96 md:w-3/6 lg:w-2/6 m-auto bg-transparen text-white py-4 px-6 rounded-none my-12">
        <div>
          <h2 className="text-4xl font-bold text-center mb-7">Login !</h2>
          <form onSubmit={handleSubmit(handelLogin)}>
            <div className="form-control w-full relative">
              <label className="absolute ml-2 mt-4 text-gray">
                <FiMail className="text-gray-400"></FiMail>
              </label>
              <input
                type="email"
                className="input input-bordered bg-none input-primary w-full rounded-none text-gray-400 px-8 "
                name="email"
                {...register(
                  "email",
                  { required: "Email or Phone is required" }
                  // {
                  //   onBlur: (event) => setresetEmail(event.target.value),
                  // }
                )}
                placeholder="Email or Phone"
              />
              {errors.email && (
                <p className="text-orange-400 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full relative mt-8">
              <label className=" absolute ml-2 mt-4 text-gray">
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
                })}
                placeholder="Password"
                className="input input-bordered bg-none input-primary w-full rounded-none text-gray-400 px-8"
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
            {/* <div className="my-3">
              <b>
                <Link
                  onClick={handlerForgetPassword}
                  className="text-blue-500 underline"
                >
                  Forget Password!{" "}
                </Link>
              </b>
            </div> */}

            <input
              className="hover:bg-yellow-500 rounded border-2 mt-8 border-yellow-500 text-yellow-500 hover:text-white text-lg uppercase font-semibold w-full py-2 cursor-pointer"
              value="Login"
              type="submit"
            />
          </form>
          <p className="divider text-sm">OR LOGIN WITH</p>

          <div
            onClick={handlerGoogleSignin}
            className="hover:bg-yellow-500 rounded border-2
              flex justify-center items-center border-yellow-500 text-yellow-500 hover:text-white text-lg py-2 uppercase font-semibold w-full cursor-pointer"
          >
            <FcGoogle className="text-lg mr-2"></FcGoogle> <p>Google</p>
          </div>

          <p className="mt-4 mb-8 text-center">
            {" "}
            New to Game Space ?{" "}
            <Link className="text-blue-500 font-bold underline" to="/register">
              Create new Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
