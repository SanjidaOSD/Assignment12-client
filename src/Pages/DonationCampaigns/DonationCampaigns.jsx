import { Helmet } from "react-helmet";
import useAllDonationCampaigns from "../../Hook/useAllDonationCampaigns";
import CampCard from "../../components/CampCard/CampCard";
import { ImSpinner } from 'react-icons/im';

const DonationCampaigns = () => {

    const [AllDonationCampaigns, isLoading] = useAllDonationCampaigns();

    // TODO : Apply filter in show card data

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>Donation Campaigns | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Donation Campaigns</h1>
            <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                {
                    AllDonationCampaigns.map(campaign => <CampCard key={campaign._id} campaign={campaign} />)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;