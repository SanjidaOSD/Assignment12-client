import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import UseAuth from "../../../../Hook/UseAuth";
import { Button } from "@material-tailwind/react";
import uploadImage from "../../../../utility/utility";
import { toast } from 'react-hot-toast';

const CreateCampaign = () => {

    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = UseAuth()

    const handleCreateCampaign = async (data) => {
        const { campaignName, maxDonationAmount, lastDate, donationImage, shortDescription, longDescription } = data || {}
        const createdDate = new Date().toLocaleDateString()

        try {
            const donationImageURL = await uploadImage(donationImage[0])
            const newCampaign = { campaignName, maxDonationAmount, lastDate, shortDescription, longDescription, donationImageURL, createdDate, campaignCreator: user?.email }
            const { data } = await axiosSecure.post('/create-campaign', newCampaign)
            console.log(data);
            if(data.insertedId) {
                console.log("Data : ", data);
                toast.success('Campaign Created Successfully')
            }
        } catch (err) {
            toast.error('Campaign Created Failed')
        }
    }

    return (
        <div>
            <Helmet>
                <title>Create Donation Campaign | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Create Donation Campaign</h1>
            <div>
                <form onSubmit={handleSubmit(handleCreateCampaign)}>

                    <label className="block mt-3">Campaign Name</label>
                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-1" type="text" placeholder="Donation Campaign Name" name="campaignName" {...register("campaignName", { required: true })} />
                    {errors.campaignName && <span>This field is required</span>}

                    <label className="block mt-3">Campaign Image</label>
                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-1" type="file" placeholder="Donation Pet Image" name="donationImage" {...register("donationImage", { required: true })} />
                    {errors.donationImage && <span>This field is required</span>}

                    <label className="block mt-3">Maximum Donation Amount</label>
                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-1" type="number" placeholder="Maximum Donation Amount" name="maxDonationAmount" {...register("maxDonationAmount", { required: true })} />
                    {errors.maxDonationAmount && <span>This field is required</span>}

                    <label className="block mt-3">Last Date</label>
                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-1" type="date" placeholder="Last Date" name="lastDate" {...register("lastDate", { required: true })} />
                    {errors.lastDate && <span>This field is required</span>}

                    <label className="block mt-3">Short Description</label>
                    <textarea rows={2} className="block px-5 py-2 bg-gray-100 rounded-md w-full my-1" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    <label className="block mt-3">Long Description</label>
                    <textarea rows={5} className="block px-5 py-2 bg-gray-100 rounded-md w-full my-1" type="text" placeholder="Long Description" name="longDescription" {...register("longDescription", { required: true })} />
                    {errors.longDescription && <span>This field is required</span>}

                    <div className="flex justify-center items-center mt-5">
                        <Button type="submit">Create Campaign</Button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CreateCampaign;