import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import UseAuth from "../../../../Hook/UseAuth";
import MyCampaignTable from "../../../../components/Dashboard/Tables/MyCampaignTable";
import toast from "react-hot-toast";
import { ImSpinner } from 'react-icons/im';

const MyCampaign = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loading} =UseAuth()
    const {data : myCampaigns =[], isLoading, refetch } = useQuery({
        queryKey : ["MyCampaigns"],
        enabled : !!user,
        queryFn : async()=>{
            const {data} = await axiosSecure.get(`/donation-campaigns/${user.email}`)
            return data;
        }
    })


    const handlePause = async(id) =>{
        try{
            await axiosSecure.patch(`/pause-true/${id}`)
            refetch()
            toast.success('Campaign Paused Successfully')
        }catch(err){
            toast.success('Campaign Pause Failed')
        }
    }

    const handleActive = async(id) =>{
        try{
            await axiosSecure.patch(`/pause-false/${id}`)
            refetch()
            toast.success('Campaign Activate Successfully')
        }catch(err){
            toast.success('Campaign Acivate Failed')
        }
    }

    if (isLoading || loading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>My Campaign | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">My Campaign</h1>
            <div>
                <MyCampaignTable handlePause={handlePause} handleActive={handleActive} myCampaings={myCampaigns}/>
            </div>
        </div>
    );
};


export default MyCampaign;