import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllDonationCampaigns = () => {
    const axiosPublic = useAxiosPublic()
    const {data : AllDonationCampaigns = [], isLoading, refetch} = useQuery({
        queryKey :['AllDonationCampaigns'],
        queryFn : async()=>{
            const {data} = await axiosPublic.get('/donationCampaigns');
            return data;
        }
    })

    return [AllDonationCampaigns, isLoading, refetch]
};

export default useAllDonationCampaigns;