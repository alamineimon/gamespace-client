import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { BsFacebook, BsPersonFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaLock } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import './Register.css'

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleSignin, facebookSignin, updateUser } = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState("")
    const [createUserEmail, setCreateUserEmail] = useState();

    const location = useLocation();
    const navogate = useNavigate();
    const from = location.from?.state.pathname || '/'

    const handelSignUp = data => {
        setSingUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                        navogate(from, { replace: true })
                        console.log(user)
                        toast.success("User Create Succesfully");
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                setSingUpError(error.message)

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
                const userInfo = {
                    displayName: user.displayName,
                    uid: user.uid,
                    email: user.email
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(userInfo.displayName, userInfo.email, user.uid);
                        toast.success("Login Successfully")
                        navogate(from, { replace: true })

                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const saveUser = (name, email) => {
        setCreateUserEmail(name, email);

    }



    return (
        <div className="hero registerBG">
            <div className='card shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)] shadow-black border border-gray-800 h[800px] xs:w-11/12 sm:w-96 md:w-3/6 lg:w-2/6 m-auto  text-white py-4 px-6 rounded-none my-12'>
                <div >
                    <h2 className="text-4xl font-bold text-center mb-7">Sign Up !</h2>
                    <form onSubmit={handleSubmit(handelSignUp)}>
                        <div className="form-control w-full relative justify-center mb-5 ">
                            <label className="label absolute ml-1">
                                <BsPersonFill className='text-gray-400 text-xl'></BsPersonFill>
                            </label>
                            <input type="name" name='name'  {...register("name", { required: "name Address is required" })} placeholder='User Name' className="input input-primary input-bordered rounded-none w-full text-gray-400 px-8" />
                            {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full relative justify-center mb-5">
                            <label className="label absolute ml-1">
                                <FiMail className='text-gray-400'></FiMail>
                            </label>
                            <input type="email" name='email'  {...register("email", { required: "Email Address is required" })} placeholder='Email or Phone' className="input input-primary  rounded-none input-bordered w-full text-gray-400 px-8" />
                            {errors.email && <p className='text-orange-400'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full relative justify-center">
                            <label className="label absolute ml-1">
                                <FaLock className='text-gray-400'></FaLock>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password Address is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or length" },
                                    // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be Strong" }
                                })} placeholder='Password'
                                className="input input-bordered w-full rounded-none input-primary text-gray-400 px-8" />
                            {errors.password && <p className='text-orange-400'>{errors.password?.message}</p>}
                        </div>
                        <br />

                        <input className='hover:bg-yellow-500 rounded border-2 mt-8 border-yellow-500 text-yellow-500 hover:text-white text-lg uppercase font-semibold w-full py-2' value="Sign Up" type="submit" />
                        <div>
                            {
                                signUpError && <p className='text-orange-400'>{signUpError}</p>
                            }
                        </div>
                    </form>
                    <p className="divider text-sm">OR LOGIN WITH</p>
                    <div className='flex justify-between gap-5 w-full'>
                        <button onClick={handlerGoogleSignin} className='btn rounded-none btn-outline text-white normal-case w-2/5'><FcGoogle className='text-2xl mr-2'></FcGoogle> Google</button>
                        <button onClick={handlerFacebookSignin} className='btn rounded-none btn-outline border-none bg-blue-700 w-lg text-white normal-case w-2/5'><BsFacebook className='text-2xl mr-2 text-whait' ></BsFacebook> Facebook</button>
                    </div>
                    <p className='mt-4 mb-8 text-center'> Alrady Habe an Account ? <Link className='text-blue-500 font-bold underline' to='/login'>Please Login !</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;