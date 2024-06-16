import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import UsersTable from "../../../../components/Dashboard/Tables/UsersTable";
import { ImSpinner } from 'react-icons/im';
import toast from "react-hot-toast";

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/users")
            return data;
        }
    })

    const handleAdmin = async (id) => {
        try{
            const {data} = await axiosSecure.patch(`/users/${id}`)
            if(data.modifiedCount > 0){
                refetch()
                toast.success("Admin Created Successfully")
            }
            
        }catch(err){
            toast.error("Admin Create Failed")
        }
    }

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>All Users | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">All Users</h1>
            <div>
                <UsersTable users={users} handleAdmin={handleAdmin} />
            </div>
        </div>
    );
};

export default Users;