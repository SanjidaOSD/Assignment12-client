import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import UseAuth from "../../../../Hook/UseAuth";
import { ImSpinner } from 'react-icons/im';
import AdoptionRequestTable from "../../../../components/Dashboard/Tables/AdoptionRequestTable";
import toast from "react-hot-toast";

const AdoptionRequest = () => {
    const { user, loading } = UseAuth()
    const axiosSecure = useAxiosSecure()

    // Get all requested to adopt pet data
    const { data: adoptionList = [], isLoading: isAdoptionListLoading, refetch } = useQuery({
        queryKey: ["AdoptionList"],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/adopt-request');
            return data;
        }
    })

    // Get all pets data by email
    const { data: pets = [], isLoading: isPetsLoading } = useQuery({
        queryKey: ["MyAddedPets"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-added-pets/${user?.email}`);
            return data;
        }
    })

    // Filtered which pet is requested.
    const filteredPet = []
    for (const adoptPet of adoptionList) {
        for (const pet of pets) {
            if (adoptPet.petId === pet._id) {
                filteredPet.push(adoptPet)
            }
        }
    }

    // Handle Accecpt request
    const handleAccept = async (id) => {
        try {
            await axiosSecure.patch(`/accept-adopt-request/${id}`)
            refetch()
            toast.success('Request Accepted')

        } catch (err) {
            toast.success('Request Accept Failed')
        }
    }

    // Handle Remove request
    const handleRemove = async (id) => {
        try {
            await axiosSecure.delete(`/adopt-request/${id}`)
            refetch()
            toast.success('Request Rejected')

        } catch (err) {
            toast.success('Request Reject Failed')
        }
    }

    if (loading || isAdoptionListLoading || isPetsLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>Adoption Request | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Adoption Request</h1>
            <div>
                <AdoptionRequestTable filteredPet={filteredPet} handleRemove={handleRemove} handleAccept={handleAccept} />
            </div>
        </div>
    );
};

export default AdoptionRequest;