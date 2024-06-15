import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCampaignDonationDetailsByID = (id) => {
    const axiosSecure = useAxiosSecure()
    const { data: campaignData = {}, isLoading } = useQuery({
        queryKey: ["campaignData"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/donation-campaign-details/${id}`)
            return data;
        }
    })
    return [campaignData, isLoading]
};

export default useCampaignDonationDetailsByID;