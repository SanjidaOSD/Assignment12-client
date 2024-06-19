import { Link } from "react-router-dom";
import GoogleLogin from "../Login/GoogleLogin";
import Github from "../Login/GithubLogin";
import { Helmet } from "react-helmet";

const Login = () => {


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Now</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="md:mt-24">
                <div className="card shrink-0 w-full h-full max-w-sm mx-auto rounded-xl shadow-2xl  p-4">
                    <h2 className="text-4xl text-center mt-6 mb-6 font-bold">Login Form</h2>

                    <Link to='/emailLogin'><button className="btn w-full bg-blue-50 flex hover:bg-blue-50 duration-200 justify-center items-center gap-4 py-2 my-1 rounded-lg">Log in with Email</button></Link>

                    <GoogleLogin></GoogleLogin>
                    <Github></Github>
                    <p className="text-center mb-4 mt-6">Don&apos;t have an account! <Link to='/signUp' className="text-purple-700 font-bold hover:scale-105">SignUp</Link></p>

                </div>
            </div>
        </div>





    );
};

export default Login;