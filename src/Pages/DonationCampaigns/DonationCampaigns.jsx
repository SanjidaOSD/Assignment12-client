import { Helmet } from "react-helmet";
import useAllDonationCampaigns from "../../Hook/useAllDonationCampaigns";
import CampCard from "../../components/CampCard/CampCard";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DonationCampaigns = () => {

    const [AllDonationCampaigns, isLoading] = useAllDonationCampaigns();

    // TODO : Implement Infinity Scroll

    return (
        <div>
            <Helmet>
                <title>Donation Campaigns | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Donation Campaigns</h1>
            {
                isLoading ?
                    <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                        <div>
                            <h1><Skeleton /> </h1>
                            <h1><Skeleton count={5} /> </h1>
                        </div>
                        <div>
                            <h1><Skeleton /> </h1>
                            <h1><Skeleton count={5} /> </h1>
                        </div>
                        <div>
                            <h1><Skeleton /> </h1>
                            <h1><Skeleton count={5} /> </h1>
                        </div>
                        <div>
                            <h1><Skeleton /> </h1>
                            <h1><Skeleton count={5} /> </h1>
                        </div>
                        <div>
                            <h1><Skeleton /> </h1>
                            <h1><Skeleton count={5} /> </h1>
                        </div>
                        <div>
                            <h1><Skeleton /> </h1>
                            <h1><Skeleton count={5} /> </h1>
                        </div>
                    </div>
                    :
                    <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                        {
                            AllDonationCampaigns.map(campaign => <CampCard key={campaign._id} campaign={campaign} />)
                        }
                    </div>
            }
        </div>
    );
};


export default DonationCampaigns;