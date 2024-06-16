import { Helmet } from "react-helmet";

const AllDonations = () => {
    return (
        <div>
            <Helmet>
                <title>All Donations | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">All Donations</h1>
        </div>
    );
};

export default AllDonations;