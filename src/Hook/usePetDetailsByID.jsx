import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePetDetailsByID = (id) => {
    const axiosSecure = useAxiosSecure()
    const {data : petData = {}, isLoading} = useQuery({
        queryKey:["petData"],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/pet-data/${id}`)
            return data;
        }
    })
    return [petData, isLoading]
};

export default usePetDetailsByID;