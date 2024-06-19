import { Helmet } from "react-helmet";
import UseAuth from "../../Hook/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const GoogleLogin = () => {
  const { googleLogin } = UseAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';

  const handleGoogleLogin = socialProvider => {
    socialProvider()
      .then(result => {
        if (result.user) {
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
            photo: result.user?.photoURL,
            role : 'user'
          }
          axiosPublic.post('/users', userInfo)
            .then(()=> {
              navigate('/');
            })
          navigate(from)
        }
      })
  }



  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Google log in</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <button onClick={() => handleGoogleLogin(googleLogin)} className="btn w-full bg-blue-50 flex hover:bg-blue-50 duration-200 justify-center items-center gap-4 py-2 my-1 rounded-lg">Log in with <FcGoogle></FcGoogle></button>
    </div>
  );
};

export default GoogleLogin;