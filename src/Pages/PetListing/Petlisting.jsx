import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { ImSpinner } from 'react-icons/im';
import { Helmet } from "react-helmet";
import PetCard from "../../components/Dashboard/PetCard/PetCard";

const Petlisting = () => {

    const axiosSecure = useAxiosSecure()
    const { data: pets = [], isLoading } = useQuery({
        queryKey: ["Pets"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/pets`)
            const filteredPets = data.filter(item => item.adopted === false)
            // TODO : configuration filter
            const newFilteredPets = filteredPets.sort((a, b) => b.date - a.date)
            return newFilteredPets;
        }
    })

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }
    
    return (
        <div>
            <Helmet>
                <title>Pet Listing | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Pet Listing</h1>
            <div className="pb-8">
                <form action="" className="flex w-full justify-center items-center gap-5">
                    <div>
                        <input type="text" name="search" className="block max-w-[260px] mx-auto py-2 px-5 bg-gray-100 font-semibold border rounded-lg" />
                    </div>
                    <div>
                        <button type="submit" className="px-5 py-2 block font-semibold bg-gray-100 rounded-lg">Search</button>
                    </div>
                </form>
            </div>
            <div className="container mx-auto px-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                {
                    pets.map(pet => <PetCard key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default Petlisting;