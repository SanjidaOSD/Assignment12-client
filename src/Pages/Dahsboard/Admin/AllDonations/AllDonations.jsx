import { Helmet } from "react-helmet";
import useAllDonationCampaigns from "../../../../Hook/useAllDonationCampaigns";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import AllDonationTable from "../../../../components/Dashboard/Tables/AllDonationTable";

const AllDonations = () => {
    const axiosSecure = useAxiosSecure()
    const [AllDonationCampaigns, isLoading, refetch] = useAllDonationCampaigns()

    // TODO : Functionality not working...


    const handleDelete = (id) =>{
        
    }

    const handleUpdate = (id) =>{

    }

    const handlePause = (id) =>{

    }

    return (
        <div>
            <Helmet>
                <title>All Donations | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">All Donations</h1>
            <div>
                <AllDonationTable AllDonationCampaigns={AllDonationCampaigns} handleDelete={handleDelete} handleUpdate={handleUpdate} handlePause={handlePause} />
            </div>
        </div>
    );
};

export default AllDonations;