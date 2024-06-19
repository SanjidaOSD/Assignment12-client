import { Helmet } from "react-helmet";
import useAllDonationCampaigns from "../../../../Hook/useAllDonationCampaigns";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import AllDonationTable from "../../../../components/Dashboard/Tables/AllDonationTable";
import toast from "react-hot-toast";
import { ImSpinner } from 'react-icons/im';
import Swal from "sweetalert2";

const AllDonations = () => {
    const axiosSecure = useAxiosSecure()
    const [AllDonationCampaigns, isLoading, refetch] = useAllDonationCampaigns()


    const handleDelete = async(id) => {
        Swal.fire({
            title: "Confirm your deletation",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try{
                    const {data} = await axiosSecure.delete(`/donation-campaign/${id}`)
                    if(data.deletedCount){
                        refetch()
                        toast.success("Campaign Deleted Successfully")
                    }
                }catch(err){
                    toast.error("Campaign Delete Failed")
                }
            }
        });
    }

    const handlePause = async (id) => {
        try {
            await axiosSecure.patch(`/pause-true/${id}`)
            refetch()
            toast.success('Campaign Paused Successfully')
        } catch (err) {
            toast.success('Campaign Pause Failed')
            
        }
    }

    const handleActive = async (id) => {
        try {
            await axiosSecure.patch(`/pause-false/${id}`)
            refetch()
            toast.success('Campaign Activate Successfully')
        } catch (err) {
            toast.success('Campaign Acivate Failed')
        }
    }

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>All Donations | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">All Donations</h1>
            <div>
                <AllDonationTable AllDonationCampaigns={AllDonationCampaigns} handleActive={handleActive} handleDelete={handleDelete}  handlePause={handlePause} />
            </div>
        </div>
    );
};

export default AllDonations;