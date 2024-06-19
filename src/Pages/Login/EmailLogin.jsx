import { useForm } from "react-hook-form";
import UseAuth from "../../Hook/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

const EmailLogin = () => {

    const { signInUser } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        const { email, password } = data;

        signInUser(email, password)
            .then(()=> {
                toast.success('Logged in successfully')
                navigate(location?.state ? location.state : '/');
            })
            .catch(()=> {
                toast.error('Failed to sign in. Please try again.');
            })
    }

    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Email log in</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-3xl text-center mt-6 mb-6 font-bold text-red-700">Login Form</h2>
            <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl p-6 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered rounded-md block px-3 py-2 w-full bg-gray-200" required
                            {...register("email", { required: true })}
                        />
                      {errors.email && <span className="text-gray-800">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label block mt-3">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                className="input input-bordered bg-gray-200 block px-3 py-2 rounded-md w-full"
                                required
                                {...register("password", { required: true })}
                            />
                            <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                            {errors.password && <span className="text-red-800">This field is required</span>}
                        </div>
                        <label className="label block">
                            <a href="#" className="label-text-alt link link-hover mt-2 block">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 flex justify-center items-center mb-5">
                        <Button type="submit" className="btn hover:bg-gray-700 text-white  bg-red-700">Login</Button>
                    </div>
                </form>
                <p className="text-center mb-4">Don&apos;t have an account! <Link to='/signUp' className="text-red-700 font-bold">Register</Link></p>

            </div>
        </div>
    );
};

export default EmailLogin;