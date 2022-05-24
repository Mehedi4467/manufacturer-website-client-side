import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo/logo.png';
import Spinner from '../Spinner/Spinner';
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../Hooks/useToken';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();


    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, from, token]);

    if (gLoading || loading) {
        return <Spinner></Spinner>;
    }
    return (
        <div className=" flex justify-center items-center my-6">
            <div className="card w-full md:w-1/3  bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex justify-center">
                        <img src={logo} width="100" alt="shop in shop black logo" />
                    </div>
                    <h2 className="card-title mx-auto text-[#95C73B] mb-2 text-2xl">Login</h2>

                    {gError || error ? (
                        <p className="text-warning text-center mb-4 text-lg">
                            {gError?.message} {error?.message}
                        </p>
                    ) : (
                        ""
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered input-warning w-full"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Please enter valid email",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.email.message}
                                        </span>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered input-warning w-full "
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Must be six characters or longer",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.password.message}
                                        </span>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="card-actions w-full">
                            <button type="submit" className="btn w-full  bg-[#F47140] ">
                                Login
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox mr-2" />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                            <div>
                                <h2>
                                    <Link to="/resetpassword" className="text-orange-400">
                                        Forgot Password
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid  card  rounded-box place-items-center">
                            <div>
                                <h2>
                                    Don’t have an account?{" "}
                                    <Link className="text-orange-400" to="/registration">
                                        Registration Now!
                                    </Link>
                                </h2>
                            </div>
                        </div>
                        <div className="divider">OR</div>

                        <div className="grid  card  rounded-box place-items-center">
                            <SocialLogin signInWithGoogle={signInWithGoogle}></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;