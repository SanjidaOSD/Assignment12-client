import { Helmet } from "react-helmet";

const AllPets = () => {
    return (
        <div>
            <Helmet>
                <title>All Pets | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">All Pets</h1>
        </div>
    );
};

export default AllPets;