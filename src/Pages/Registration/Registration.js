import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import logo from '../../Images/logo/logo.png';
import Spinner from '../Spinner/Spinner';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Registration = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [Check, setCheck] = useState(true);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    };

    useEffect(() => {
        if (gUser || user) {
            navigate(from, { replace: true });
        }
    }, [navigate, gUser, from, user]);
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
                    <h2 className="card-title mx-auto mb-2 text-2xl text-[#95C73B]">Registration</h2>
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered input-warning w-full "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>
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

                            <div className="form-control mb-2">
                                <label className="label cursor-pointer">
                                    <input
                                        onClick={() => setCheck(!Check)}
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <span className="label-text">
                                        I agree to the Terms of Use and Privacy Policy
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="card-actions w-full">
                            <button
                                disabled={Check}
                                type="submit"
                                className="btn w-full  bg-[#F47140] "
                            >
                                Registration
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid  card  rounded-box place-items-center">
                            <div>
                                <h2>
                                    Already have an account?{" "}
                                    <Link className="text-orange-400" to="/login">
                                        Login Now!
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

export default Registration;