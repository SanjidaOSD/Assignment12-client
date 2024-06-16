import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import UseAuth from "../../../../Hook/UseAuth";
import MyCampaignTable from "../../../../components/Dashboard/Tables/MyCampaignTable";
import toast from "react-hot-toast";

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
            const {data} = await axiosSecure.patch(`/pause-true/${id}`)
            console.log(data);
            refetch()
            toast.success('Campaign Paused Successfully')
        }catch(err){
            toast.success('Campaign Pause Failed')
            console.log(err);
        }
    }

    const handleActive = async(id) =>{
        try{
            const {data} = await axiosSecure.patch(`/pause-false/${id}`)
            console.log(data);
            refetch()
            toast.success('Campaign Activate Successfully')
        }catch(err){
            toast.success('Campaign Acivate Failed')
            console.log(err);
        }
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