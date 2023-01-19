import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser, handlerForgete, facebookSignin, googleSignin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const [resetEmail, setresetEmail] = useState(' ')

    const location = useLocation();
    const navogate = useNavigate();
    const from = location.from?.state.pathname || '/'

    const handelLogin = data => {
        loginUser(data.email, data.password)
            .then(result => {
                // setLoginUserEmail(data.email);
                toast.success("Login Successfully");
                navogate(from, { replace: true })

            }).catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            })
    }

    const handlerFacebookSignin =() =>{
        facebookSignin()
        .then(result =>{
            const user = result.user;
            console.log(user)
            navogate(from, { replace: true })
        })
    }

    const handlerGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login Successfully")
                navogate(from, { replace: true })

            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message)
            })

    }

    const handlerForgetePassword = () => {
        handlerForgete(resetEmail)
            .then(() => {
                alert(' Password reaste email send. Please chck your email')
            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div className="hero loginBG">
            <div className='card shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)]  shadow-black border border-gray-800 h[800px] w-96 md:w-3/6 lg:w-2/6 m-auto bg-transparen text-white py-4 px-6 rounded-none my-12'>
                <div >
                    <h2 className="text-4xl font-bold text-center mb-7">Login !</h2>
                    <form onSubmit={handleSubmit(handelLogin)}>
                        <div className="form-control w-full relative justify-center mb-5">
                            <label className="label absolute ml-1">
                              <FiMail className='text-gray-700'></FiMail>
                            </label>
                            <input type="email" className="input rounded-none input-primary w-full text-black px-8"  name='email'  {...register("email",
                                {
                                    onBlur: (event) => setresetEmail(event.target.value)
                                },
                                { required: "Email Address is required" })} placeholder='Email or Phone' />
                            {errors.email && <p className='text-orange-400'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-fullrelative justify-center">
                            <label className="label absolute ml-1">
                              <FaLock className='text-gray-700'></FaLock>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password Address is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or length" }
                                })} placeholder='Password'
                                className="input input-bordered bg-none input-primary w-full rounded-none text-black px-8" />
                            {errors.password && <p className='text-orange-400'>{errors.password?.message}</p>}
                        </div>
                        <div className='my-3'>
                            <b>
                                <Link onClick={handlerForgetePassword} className="text-blue-500 underline">Forgete Password! </Link>
                            </b>
                        </div>

                        <input className='hover:bg-yellow-500 rounded border-2 mt-8 border-yellow-500 text-yellow-500 hover:text-white text-lg uppercase font-semibold w-full py-2' value="Login" type="submit" />
                        <div>
                            {
                                loginError && <p className='text-orange-400'>{loginError}</p>
                            }
                        </div>
                    </form>
                    <p className="divider text-sm">OR LOGIN WITH</p>
                    <div className='flex justify-between gap-5 w-full'>
                        <button onClick={handlerGoogleSignin} className='btn rounded-none btn-outline text-white normal-case w-2/5'><FcGoogle className='text-2xl mr-2'></FcGoogle> Google</button>
                        <button onClick={handlerFacebookSignin} className='btn rounded-none  btn-outline border-none bg-blue-700 w-lg text-white normal-case w-2/5'><BsFacebook className='text-2xl mr-2 text-whait' ></BsFacebook> Facebook</button>
                    </div>
                    <p className='mt-4 mb-8 text-center'> New to Game Space ? <Link className='text-blue-500 font-bold underline' to='/register'>Create new Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;