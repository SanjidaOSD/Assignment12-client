import { useParams } from "react-router-dom";
import usePetDetailsByID from "../../Hook/usePetDetailsByID";
import { ImSpinner } from 'react-icons/im';
import { Helmet } from "react-helmet";
import { GrLocation } from 'react-icons/gr';
import { useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import { Button } from "@material-tailwind/react";
import { DialogPanel, Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";

const PetDetails = () => {
    const { id } = useParams()
    const { user, loading } = UseAuth()
    const axiosSecure = useAxiosSecure()
    let [isOpen, setIsOpen] = useState(false)
    const [petData, isLoading] = usePetDetailsByID(id)
    const { _id, petName, petCategory, petAge, petLocation, shortDescription, longDescription, adopted, petImageURL } = petData || {};
    const { register, handleSubmit, formState: { errors } } = useForm();

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    const handleAdopt = async (data) => {
        const newAdoptRequest = {
            petId: _id,
            petName: petName,
            status : 'pending',
            ...data
        }

        try {
            const { data } = await axiosSecure.post('/adopt-request', newAdoptRequest)
            if (data.insertedId) {
                toast.success("Request submitted successfully.")
            }
        } catch (err) {
            toast.success("Request submit failed.")
        }
    }

    if (isLoading || loading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>Pet Details | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Pet Details of {petName}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16">
                <div>
                    <img className="w-full h-full object-cover rounded-lg" src={petImageURL} alt="Pet Image" />
                </div>
                <div className="w-full bg-blue-50 rounded-lg p-10">
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
                        <button onClick={open} className='w-[120px] block mt-5 text-white hover:bg-gray-700 border-none outline-none duration-300 bg-gray-900 px-5 text-center py-2 rounded-lg text-lg font-semibold'> Adopt </button>
                    </div>
                    <div>
                        <Transition appear show={isOpen}>
                            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-40">
                                    <div className="flex min-h-full items-center justify-center p-4">
                                        <TransitionChild
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 transform-[scale(95%)]"
                                            enterTo="opacity-100 transform-[scale(100%)]"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 transform-[scale(100%)]"
                                            leaveTo="opacity-0 transform-[scale(95%)]"
                                        >
                                            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 ">
                                                <DialogTitle as="h3" className="text-2xl font-semibold text-center text-gray-700">
                                                    Adopt - {petName}
                                                </DialogTitle>
                                                <div>
                                                    <div>
                                                        <div className="mt-5">
                                                            <img className="w-full h-[160px] object-cover rounded-lg" src={petImageURL} alt="Pet Image" />
                                                        </div>
                                                        <div className="w-full bg-blue-50 rounded-lg">
                                                            <h2 className="text-2xl font-semibold mt-3">Pet Name - {petName}</h2>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={handleSubmit(handleAdopt)} className="block w-full mx-auto font-semibold">
                                                        <label htmlFor="userName" className="mt-3 block"> User Name : </label>
                                                        <input value={user?.displayName} className="block border w-full px-5 py-2 mt-1" type="text" placeholder="User Name" name="userName"{...register("userName")} />

                                                        <label htmlFor="userEmail" className="mt-3 block"> User Email : </label>
                                                        <input value={user?.email} className="block border w-full px-5 py-2 mt-1" type="text" placeholder="User Email" name="userEmail"{...register("userEmail")} />

                                                        <label htmlFor="userPhone" className="mt-3 block"> User Phone : </label>
                                                        <input className="block border w-full px-5 py-2 mt-1" type="text" placeholder="User phone" name="userPhone"{...register("userPhone", { required: true })} />
                                                        {errors.userPhone && <span className="text-red-500">This field is required</span>}

                                                        <label htmlFor="userAddress" className="mt-3 block"> User Address : </label>
                                                        <input className="block border w-full px-5 py-2 mt-1" type="text" placeholder="User address" name="userAddress"{...register("userAddress", { required: true })} />
                                                        {errors.userAddress && <span className="text-red-500">This field is required</span>}
                                                        <div className="mt-4 flex justify-center">
                                                            <Button
                                                                type="submit"
                                                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-2 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                                                onClick={close}
                                                            >
                                                                Submit
                                                            </Button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;