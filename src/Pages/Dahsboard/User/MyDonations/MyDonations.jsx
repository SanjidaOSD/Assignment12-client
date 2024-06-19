import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hook/UseAuth";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { ImSpinner } from 'react-icons/im';
import { Helmet } from "react-helmet";
import MyDonationsTable from "../../../../components/Dashboard/Tables/MyDonationsTable";
import toast from "react-hot-toast";

const MyDonations = () => {

    const { user, loading } = UseAuth()

    const axiosSecure = useAxiosSecure()
    const { data: MyDonationsData = [], isLoading, refetch } = useQuery({
        queryKey: ["MyDonations"],
        enabled: !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/donation-payment/${user.email}`)
            return data;
        }
    })

    const handleRefund = async(id) =>{
        try{
            const {data} = await axiosSecure.delete(`/delete-donation/${id}`)
            if(data.deletedCount > 0){
                refetch()
                toast.success("Applied for refund")
            }
        }catch(err){
            toast.success("Refund apply failed")
        }
    }

    if (isLoading || loading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>My Donations | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">My Donations</h1>
            <div>
                <MyDonationsTable handleRefund={handleRefund} MyDonationsData={MyDonationsData}/>
            </div>
        </div>
    );
};

export default MyDonations;