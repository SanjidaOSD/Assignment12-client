import { useParams } from "react-router-dom";
import usePetDetailsByID from "../../Hook/usePetDetailsByID";
import { ImSpinner } from 'react-icons/im';
import { Helmet } from "react-helmet";
import { GrLocation } from 'react-icons/gr';
import { useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import { toast } from "react-toastify";
import AdoptModal from "../../components/AdoptModal/AdoptModal";

const PetDetails = () => {
    const { id } = useParams()
    const { user, loading } = UseAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [petData, isLoading] = usePetDetailsByID(id)
    const { petName, petCategory, petAge, petLocation, shortDescription, longDescription, adopted, petImageURL } = petData || {};

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    const handleAdopt = async (data) => {
        console.log(data);
        // try {
        //     close()
        //     toast.success("Adopeted Successfully")
        // } catch (err) {
        //     toast.error("Adopt Failed")
        // }
    }

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>Pet Details | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-8">Pet Details of {petName}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16">
                <div>
                    <img className="w-full h-auto object-cover rounded-lg" src={petImageURL} alt="Pet Image" />
                </div>
                <div className="w-full bg-gray-50 rounded-lg p-10">
                    <h2 className="text-2xl font-semibold">Pet Name : {petName}</h2>
                    <p className='flex gap-3 items-center font-semibold my-2'> <GrLocation />  {petLocation}</p>
                    <div className="flex gap-5 mt-5 mb-2">
                        <h2 className="px-5 py-2 text-lg font-semibold rounded-md bg-green-100 border-2 border-green-600">{petCategory}</h2>
                        <h3 className="px-5 py-2 text-lg font-semibold rounded-md bg-blue-100 border-2 border-blue-600">Age - {petAge} Years</h3>
                        <h3 className="px-5 py-2 text-lg font-semibold rounded-md bg-yellow-100 border-2 border-yellow-600">{adopted ? "Adopted" : "Not Adopted"}</h3>
                    </div>
                    <div>
                    </div>
                    <hr className="border border-gray-300 border-dashed my-5" />
                    <p className="text-lg font-medium">{shortDescription}</p>
                    <p className="text-base mt-3">{longDescription}</p>
                    <div>
                        <button onClick={open} className='w-[120px] block mt-5 hover:text-white hover:bg-gray-700 duration-300 bg-gray-200 px-5 text-center py-2 rounded-lg text-lg font-semibold'> Adopt </button>
                    </div>
                    <div>
                        <AdoptModal isOpen={isOpen} user={user} isUserLoading={loading} petData={petData} close={close} handleAdopt={handleAdopt}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;