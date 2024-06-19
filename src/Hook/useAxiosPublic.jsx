import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://m72-assignment12-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;