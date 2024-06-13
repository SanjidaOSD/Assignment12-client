import { Helmet } from "react-helmet";
import UseAuth from "../../../../Hook/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import MyAddedPetsTable from "../../../../components/Dashboard/Tables/MyAddedPetsTable";

const MyAddedPets = () => {

    const { user } = UseAuth()
    const axiosSecure = useAxiosSecure()
    const { data: myAddedPets = [], refetch } = useQuery({
        queryKey: ['myAddedPets'],
        enabled: !!user,
        queryFn: async () => {
            const { data } = await axiosSecure(`/my-added-pets/${user?.email}`)
            return data;
        }
    })

    const handleCampDelete = (id) => {
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
                    const { data } = await axiosSecure.delete(`/camp/${id}`)
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success(`Camp Deleted Succefully`)
                    }
                } catch (err) {
                    toast.error('Camp Delete Failed')
                }
            }
        });
        close()
    }

    return (
        <div>
            <Helmet>
                <title>My Added Pet | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">My Added Pet</h1>
            <div>
                <MyAddedPetsTable myAddedPets={myAddedPets} />
            </div>
        </div>
    );
};

export default MyAddedPets;