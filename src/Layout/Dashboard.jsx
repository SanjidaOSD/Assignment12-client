import { Outlet } from 'react-router-dom';
import Sidebar from './../components/Dashboard/Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <div className='container px-10 ml-64'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;