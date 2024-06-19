import { Navigate, useLocation } from "react-router";
import { ImSpinner } from "react-icons/im";
import PropTypes from 'prop-types';
import UseAuth from "../Hook/UseAuth";



const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
};
export default PrivateRoute; 