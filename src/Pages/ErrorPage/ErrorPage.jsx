import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Button } from "@material-tailwind/react";
import Menubar from "../../components/Menubar/Menubar";

const ErrorPage = () => {
    return (
        <div>
            <Menubar/>
            <div className="min-h-[calc(100vh-300px)] flex justify-center items-center flex-col">
                <h1 className="text-5xl mt-3 text-red-600 font-semibold">404</h1>
                <p>Something went wrong</p>
                <Link to={'/'}> <Button className="mt-10"> Home </Button> </Link>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;