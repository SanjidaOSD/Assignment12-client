import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Button } from "@material-tailwind/react";
import usePetDetailsByID from "../../../../Hook/usePetDetailsByID";
import uploadImage from './../../../../utility/utility';
import toast from "react-hot-toast";
import { ImSpinner } from 'react-icons/im';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';

const PetUpdate = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm();
    const [petData, isLoading] = usePetDetailsByID(id);
    const { _id, petName, petImageURL, petCategory, petAge, petLocation, shortDescription, longDescription } = petData || {};
    const [editorContent, setEditorContent] = useState('');

    useEffect(() => {
        if (longDescription) {
            setEditorContent(longDescription);
            setValue("longDescription", longDescription);
        }
    }, [longDescription, setValue]);

    const handleUpdatePet = async (data) => {
        const { petName, petCategory, petAge, petImage, petLocation, shortDescription, longDescription } = data || {};

        let petPhoto = petImageURL;
        const existImage = !!data.petImage[0];
        if (existImage) {
            const newURL = await uploadImage(petImage[0]);
            petPhoto = newURL;
        }

        const newUpdatedPet = { petName, petCategory, petAge, petImage, petImageURL: petPhoto, petLocation, shortDescription, longDescription };

        try {
            const { data } = await axiosSecure.patch(`/pet-data-update/${_id}`, newUpdatedPet);
            if (data.modifiedCount > 0) {
                toast.success("Updated Successfully");
            }
        } catch (err) {
            toast.success("Update Failed");
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10"><ImSpinner className="text-3xl animate-spin text-center text-green-500" /></div>;
    }

    return (
        <div>
            <Helmet>
                <title>Update Pet | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Update Pet</h1>
            <div>
                <form onSubmit={handleSubmit(handleUpdatePet)}>
                    <select defaultValue={petCategory} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" {...register("petCategory", { required: true })}>
                        <option value="">Pet Category</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                        <option value="rabbits">Rabbits</option>
                    </select>
                    {errors.petCategory && <span>This field is required</span>}

                    <input defaultValue={petName} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Pet Name" name="petName" {...register("petName", { required: true })} />
                    {errors.petName && <span>This field is required</span>}

                    <input defaultValue={petAge} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Pet Age" name="petAge" {...register("petAge", { required: true })} />
                    {errors.petAge && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="file" placeholder="Pet Image" name="petImage" {...register("petImage")} />
                    {errors.petImage && <span>This field is required</span>}

                    <input defaultValue={petLocation} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Pet Location" name="petLocation" {...register("petLocation", { required: true })} />
                    {errors.petLocation && <span>This field is required</span>}

                    <textarea defaultValue={shortDescription} rows={2} className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    <Controller
                        name="longDescription"
                        control={control}
                        defaultValue={longDescription || ''}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <ReactQuill
                                theme="snow"
                                className="my-3"
                                placeholder="Long Description"
                                value={editorContent}
                                onChange={(content, delta, source, editor) => {
                                    const plainText = editor.getText(); // Get plain text without HTML tags
                                    setEditorContent(content);
                                    field.onChange(plainText);
                                }}
                            />
                        )}
                    />
                    {errors.longDescription && <span>This field is required</span>}

                    <div className="flex justify-center items-center mt-5">
                        <Button type="submit">Update Pet</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PetUpdate;
