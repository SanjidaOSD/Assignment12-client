import { useParams } from "react-router-dom";
import useCampaignDonationDetailsByID from "../../../../Hook/useCampaignDonationDetailsByID";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useForm, Controller } from "react-hook-form";
import uploadImage from "../../../../utility/utility";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { ImSpinner } from 'react-icons/im';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const UpdateCampaign = () => {
    const { id } = useParams();
    const [campaignData, isLoading] = useCampaignDonationDetailsByID(id);
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [editorContent, setEditorContent] = useState('');

    // Set initial state for long description from campaignData
    const initialLongDescription = campaignData ? campaignData.longDescription : '';

    const handleUpdateCampaign = async (data) => {
        const { campaignName, maxDonationAmount, lastDate, donationImage, shortDescription } = data || {};

        let campPhoto = campaignData.donationImageURL;
        const existImage = !!data.donationImage[0];
        if (existImage) {
            const newURL = await uploadImage(donationImage[0]);
            campPhoto = newURL;
        }

        try {
            const updateCampaign = { 
                campaignName, 
                maxDonationAmount, 
                lastDate, 
                shortDescription, 
                longDescription: editorContent, // Use editorContent for longDescription
                donationImageURL: campPhoto 
            };
            const { data } = await axiosSecure.patch(`/update-campaign/${campaignData._id}`, updateCampaign);
            if (data.modifiedCount > 0) {
                toast.success('Campaign Updated Successfully');
            }
        } catch (err) {
            toast.error('Campaign Update Failed');
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>;
    }

    return (
        <div>
            <Helmet>
                <title>Update Donation Campaign | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Update Donation Campaign</h1>
            <div>
                <form onSubmit={handleSubmit(handleUpdateCampaign)}>

                    <label className="block mt-3">Campaign Name</label>
                    <input defaultValue={campaignData?.campaignName} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-1" type="text" placeholder="Donation Campaign Name" name="campaignName" {...register("campaignName", { required: true })} />
                    {errors.campaignName && <span>This field is required</span>}

                    <label className="block mt-3">Campaign Image</label>
                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-1" type="file" placeholder="Donation Campaign Image" name="donationImage" {...register("donationImage")} />
                    

                    <label className="block mt-3">Maximum Donation Amount</label>
                    <input defaultValue={parseInt(campaignData.maxDonationAmount)} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-1" type="number" placeholder="Maximum Donation Amount" name="maxDonationAmount" {...register("maxDonationAmount", { required: true })} />
                    {errors.maxDonationAmount && <span>This field is required</span>}

                    <label className="block mt-3">Last Date</label>
                    <input defaultValue={campaignData.lastDate} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-1" type="date" placeholder="Last Date" name="lastDate" {...register("lastDate", { required: true })} />
                    {errors.lastDate && <span>This field is required</span>}

                    <label className="block mt-3">Short Description</label>
                    <textarea defaultValue={campaignData.shortDescription} rows={2} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-1" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    <label className="block mt-3">Long Description</label>
                    <Controller
                        name="longDescription"
                        control={control}
                        defaultValue={initialLongDescription} // Set initial value for long description
                        rules={{ required: true }}
                        render={({ field }) => (
                            <ReactQuill
                                theme="snow"
                                className="my-1"
                                placeholder="Long Description"
                                value={editorContent}
                                onChange={(content, delta, source, editor) => {
                                    const plainText = editor.getText();
                                    setEditorContent(content);
                                    field.onChange(plainText);
                                }}
                            />
                        )}
                    />
                    {errors.longDescription && <span>This field is required</span>}

                    <div className="flex justify-center items-center mt-5">
                        <Button type="submit">Update Campaign</Button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateCampaign;
