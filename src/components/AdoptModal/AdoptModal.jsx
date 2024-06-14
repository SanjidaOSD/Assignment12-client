import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { Fragment } from "react";
import { FaDollarSign, FaEnvelope, FaLocationArrow, FaUser, FaUserDoctor } from 'react-icons/fa6';


const AdoptModal = (isOpen, user, isUserLoading, petData, close, handleAdopt) => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={close}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-50' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >

                            <DialogPanel className='w-full max-w-[700px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <div className='flex flex-col mt-2 justify-between'>
                                    <form onSubmit={handleSubmit(handleAdopt)} className="block w-[90%] mx-auto">
                                        <div>
                                            <p className='text-center font-semibold pb-3 text-green-500'>Camp Information </p>
                                            <hr className='max-w-[200px] mb-3 mx-auto border-gray-400' />
                                            <div>
                                                <h1 className='font-semibold text-lg'>{}</h1>
                                                <div className='flex items-center gap-2 font-semibold mt-3'>
                                                    <FaDollarSign />
                                                    <p>Price : ${}</p>
                                                </div>
                                                <div className='flex items-center gap-2 font-medium my-3'>
                                                    <FaLocationArrow />
                                                    <p>{}</p>
                                                </div>
                                                <div className='flex items-center gap-2 font-medium'>
                                                    <FaUserDoctor />
                                                    <p>{}</p>
                                                </div>
                                            </div>
                                            <hr className='border-gray-300 my-5 border-dashed' />
                                            <div>
                                                <p className='text-center font-semibold pb-3 text-green-500'>Participant Information </p>
                                                <hr className='max-w-[200px] mb-3 mx-auto border-gray-400' />
                                                <div>
                                                    <div className='flex gap-2 font-medium'>
                                                        <FaUser className='mt-1' />
                                                        <p>{user.displayName}</p>
                                                    </div>
                                                    <div className='flex gap-2 font-medium mt-2'>
                                                        <FaEnvelope className='mt-1' />
                                                        <p>{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Age */}
                                            <label className="block mt-3">Age</label>
                                            <input className="block border w-full px-5 py-2 mt-1" type="number" placeholder="Age" name="age"{...register("age", { required: true })} />
                                            {errors.age && <span className="text-red-500">This field is required</span>}

                                            {/* Gender */}
                                            <label className="block mt-3">Gender</label>
                                            <select defaultValue={""} className="block border w-full px-5 py-2 mt-1" {...register("gender", { required: true })}>
                                                <option value="" disabled>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.gender && <span className="text-red-500">This field is required</span>}

                                        </div>
                                        {/* Phone Number */}
                                        <label className="block mt-3">Phone</label>
                                        <input className="block border w-full px-5 py-2 mt-1" type="text" placeholder="Phone" name="phone"{...register("phone", { required: true })} />
                                        {errors.phone && <span className="text-red-500">This field is required</span>}

                                        {/* Emergency Contact */}
                                        <label className="block mt-3">Emergency Contact</label>
                                        <input className="block border w-full px-5 py-2 mt-1" type="text" placeholder="Emergency Contact" name="emergencyContact"{...register("emergencyContact", { required: true })} />
                                        {errors.emergencyContact && <span className="text-red-500">This field is required</span>}

                                        <div className='flex justify-between mt-5'>
                                            <Button
                                                type="submit"
                                                className="bg-green-500 normal-case px-3 py-3 text-[15px] font-semibold mx-auto w-[80px] flex justify-center items-center">
                                                Submit
                                            </Button>
                                            <Button
                                                onClick={close}
                                                className="bg-green-500 normal-case px-3 py-3 text-[15px] font-semibold  mx-auto flex justify-center items-center">
                                                {
                                                    'Cancel'
                                                }
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
    );
};

AdoptModal.propTypes = {
    isOpen: PropTypes.boolean,
    isUserLoading: PropTypes.boolean,
    handleAdopt: PropTypes.func,
    close: PropTypes.func,
    user: PropTypes.object,
    petData: PropTypes.object,
};

export default AdoptModal;