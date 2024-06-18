import { Helmet } from "react-helmet";
import UseAuth from "../../Hook/UseAuth";
import { FaGithub } from "react-icons/fa";
// import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";


const Github = () => {
  const { githubLogin } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';

  const handleGithubLogin = socialProvider => {
    socialProvider()
      .then(result => {
        if (result.user) {
          navigate(from)
        }
      })
  }



  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GitHub login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <button onClick={() => handleGithubLogin(githubLogin)} className="btn w-full bg-blue-50 flex hover:bg-blue-50 duration-200 justify-center items-center gap-4 py-2 my-1 rounded-lg">Log in with <FaGithub /></button>
    </div>
  );
};

export default Github;