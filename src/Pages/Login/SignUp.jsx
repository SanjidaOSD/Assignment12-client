import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import UseAuth from "../../Hook/UseAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Button } from "@material-tailwind/react";
import uploadImage from "../../utility/utility";

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const [registerError, setRegisterError] = useState(' ');
    const [success, setSuccess] = useState(' ');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, updateUserProfile } = UseAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()

    // Navigation system
    const navigate = useNavigate();
    const from = '/login';


    const onSubmit = async (data) => {

        const { email, password, name, photo } = data;

        if (password.length < 6) {
            setRegisterError('password should be at-least 6 character or longer')
            toast.error('password should be at-least 6 character or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one upper case character')
            toast.error('Your password should have one upper case character')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have one lower case character')
            toast.error('Your password should have one lower case character')
            return;
        }

        setRegisterError('');
        setSuccess('');

        try {
            const image = await uploadImage(photo[0]);
            // create user and updateProfile
            createUser(email, password)
                .then(async (result) => {
                    await updateUserProfile(name, image)
                    const userInfo = {
                        email: result.user?.email,
                        name: name,
                        photo: image,
                        role: 'user'
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(()=> {
                            navigate('/');
                        })
                    toast.success('User created successfully')
                    navigate(from)
                })
                .catch(error => {
                    setRegisterError(error.message);
                    toast.error('Failed to sign in. Please try again.');

                })
        } catch (err) {
            toast.error('Sign in failed')
        }
    }

    return (
        <div className="pb-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-3xl text-center mt-6 mb-6 font-bold text-red-700">Please Register</h2>
            <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 p-10 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label mt-5 block">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="name" name="name" className="px-5 w-full py-2 mt-1 block border border-gray-100"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label mt-5 block">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" placeholder="photo" name="photo" className="px-5 w-full py-2 mt-1 block border border-gray-100"
                            {...register("photo")}
                        />
                        {errors.photo && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className=" mt-5 block">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="px-5 w-full py-2 mt-1 block border border-gray-100"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label mt-5 block">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="password" name="password"
                                className="input input-bordered w-full px-5 py-2 mt-1 block border border-gray-100"
                                {...register("password", { required: true })}
                            />
                            <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                            {errors.password && <span className="text-red-800">This field is required</span>}
                        </div>
                        <label className="label mt-5 block">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our terms and condition</label>
                    </div>
                    <div className="form-control mt-6 flex justify-center items-center">
                        <Button className="" type="submit">Register</Button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-800 p-4">{registerError}</p>
                }
                {
                    (success && <p className="text-green-700 text-center">{success}</p>)
                }
                <p className="text-center mb-4">All ready have an account! <Link to='/login' className="text-red-700 font-bold">Login</Link></p>
            </div>
            {/* <ToastContainer /> */}

        </div>
    );
};

export default SignUp;