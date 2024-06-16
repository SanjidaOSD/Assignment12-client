import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { ImSpinner } from 'react-icons/im';
import AllPetsTable from "../../../../components/Dashboard/Tables/AllPetsTable";

const AllPets = () => {
    const axiosSecure = useAxiosSecure();
    const { data: AllPets = [], isLoading, refetch } = useQuery({
        queryKey: ["AllPets"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/pets")
            return data;
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Confirm your delete",
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

    const handleAdopt = async (id) => {
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


    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>All Pets | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">All Pets</h1>
            <div>
                <AllPetsTable AllPets={AllPets} handleAdopt={handleAdopt} handleDelete={handleDelete}/>
            </div>
        </div>
    );
};

export default AllPets;