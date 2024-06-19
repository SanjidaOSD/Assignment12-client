import { Helmet } from "react-helmet";
import UseAuth from "../../../../Hook/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from 'sweetalert2'
import MyAddedPetsTable from "../../../../components/Dashboard/Tables/MyAddedPetsTable";
import toast from "react-hot-toast";

const MyAddedPets = () => {

    const { user } = UseAuth()
    const axiosSecure = useAxiosSecure()
    const { data: myAddedPets = [], refetch } = useQuery({
        queryKey: ['myAddedPets'],
        enabled: !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-added-pets/${user.email}`)
            return data;
        }
    })

    const handlePetDelete = (id) => {
        Swal.fire({
            title: "Confirm your deletation",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/pet-data-delete/${id}`)
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success(`Pet Deleted Successfully`)
                    }
                } catch (err) {
                    toast.error('Pet Delete Failed')
                }
            }
        });
        close()
    }

    const handleAdoptions = async(id) => {
        const updateAdoption = { adopted: true }
        try {
            const { data } = await axiosSecure.patch(`/pet-data-update/${id}`, updateAdoption)
            if (data.modifiedCount > 0) {
                refetch()
                toast.success("Adopted Status Updated")
            }
        } catch (err) {
            toast.success("Adopted Status Update Failed")
        }
    }

    return (
        <div>
            <Helmet>
                <title>My Added Pet | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">My Added Pet</h1>
            <div>
                <MyAddedPetsTable myAddedPets={myAddedPets} handlePetDelete={handlePetDelete} handleAdoptions={handleAdoptions} />
            </div>
        </div>
    );
};

export default MyAddedPets;