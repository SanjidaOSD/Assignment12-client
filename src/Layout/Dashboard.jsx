import { Outlet } from 'react-router-dom';
import Sidebar from './../components/Dashboard/Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <div className='container mx-auto px-10 md:px-40'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;