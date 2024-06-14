import { Helmet } from "react-helmet";

const MyCampaign = () => {
    return (
        <div>
            <Helmet>
                <title>My Campaign | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">My Campaign</h1>
        </div>
    );
};

export default MyCampaign;