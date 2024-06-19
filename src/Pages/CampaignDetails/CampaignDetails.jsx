import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useCampaignDonationDetailsByID from "../../Hook/useCampaignDonationDetailsByID";
import { ImSpinner } from 'react-icons/im';
import { useState } from 'react';
import { DialogPanel, Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51PRsGNFOyuzcn3yr3JbfDS3r2YTAFD4xIiMExXFkNVQS3RV0wkc77g4JSm3pBw2X8fqDoz9kKczol74Qd47aCClM00bnFJyRf0");

console.log(stripePromise);

const CampaignDetails = () => {
    let [isOpen, setIsOpen] = useState(false)
    const { id } = useParams()
    const [campaignData, isLoading] = useCampaignDonationDetailsByID(id)
    const { campaignName, maxDonationAmount, lastDate, shortDescription, longDescription, donationImageURL } = campaignData || {}
    let [amount, setAmount] = useState(50)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }



    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>
    }

    return (
        <div>
            <Helmet>
                <title>Donation Details | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-5 pb-8">Donation Details of {campaignData.campaignName}</h1>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16">
                    <div>
                        <img className="w-full h-full object-cover rounded-lg" src={donationImageURL} alt="Donation Campaign Image" />
                    </div>
                    <div className="w-full bg-blue-50 rounded-lg p-10">
                        <h1 className="text-2xl font-semibold" >{campaignName}</h1>
                        <h3 className='font-semibold my-2'>Maximum Donation Amount : ${maxDonationAmount}</h3>
                        <p className='font-semibold my-2'>Last Date : {lastDate}</p>
                        <hr className="border border-gray-300 border-dashed my-5" />
                        <p className="text-lg font-medium">{shortDescription}</p>
                        <p className="text-base mt-3">{longDescription}</p>
                        <div className="flex items-center gap-3">
                            <button disabled={campaignData.pauseStatus === true} onClick={open} className='w-[120px] block mt-5 text-white hover:bg-gray-700 duration-300 bg-gray-900 px-5 text-center py-2 rounded-lg text-lg font-semibold'> Donate </button>
                            {
                                campaignData.pauseStatus === true && <p className="text-red-600 mt-5 capitalize text-lg font-semibold">Donation Paused By Owner</p>
                            }
                        </div>
                    </div>
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
                                        <DialogPanel className="w-full max-w-[550px] rounded-xl bg-white p-6 ">
                                            <DialogTitle as="h3" className="text-2xl font-semibold text-center text-gray-700">
                                                Donate to  - {campaignName}
                                            </DialogTitle>
                                            <div className="flex justify-center gap-3 font-semibold mt-3 items-center">
                                                <label >Donation Amount : </label>
                                                <input onBlur={(e) => setAmount(e.target.value)} type="number" className="bg-blue-50 rounded-lg py-2 px-3" placeholder="Amount" />
                                            </div>
                                            <div className="mt-5">
                                                <Elements stripe={stripePromise}>
                                                    <CheckoutForm amount={amount} campaignData={campaignData} />
                                                </Elements>
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
    );
};

export default CampaignDetails;