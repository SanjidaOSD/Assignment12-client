import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Menubar from "../components/Menubar/Menubar";

const Main = () => {
    return (
        <div>
            <div className="container mx-auto px-5">
                <Menubar />
                <div className="min-h-[calc(100vh-300px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;