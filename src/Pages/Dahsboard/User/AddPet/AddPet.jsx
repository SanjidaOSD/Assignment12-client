import { Button } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import UseAuth from "../../../../Hook/UseAuth";
import { Helmet } from "react-helmet";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uploadImage from './../../../../utility/utility';
import { useState } from 'react';

const AddPet = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const { user } = UseAuth();
    const [editorContent, setEditorContent] = useState('');

    const handleAddPet = async (data) => {
        const { petName, petCategory, petAge, petLocation, petImage, shortDescription, longDescription } = data;
        const date = new Date().toLocaleDateString();

        try {
            const petImageURL = await uploadImage(petImage[0]);
            const newPet = { petName, petCategory, petAge, petLocation, shortDescription, longDescription, date: date, adopted: false, email: user?.email, petImageURL };
            const { data } = await axiosSecure.post('/pet', newPet);
            if (data.insertedId) {
                toast.success("Pet added successfully");
            }
        } catch (err) {
            toast.error("Pet added failed");
        }
    };

    return (
        <div>
            <Helmet>
                <title>Add Pet | Pet House</title>
            </Helmet>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Add Pet</h1>
            <div>
                <form onSubmit={handleSubmit(handleAddPet)}>
                    <select className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" {...register("petCategory", { required: true })}>
                        <option value="">Pet Category</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                        <option value="rabbits">Rabbits</option>
                    </select>
                    {errors.petCategory && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Pet Name" {...register("petName", { required: true })} />
                    {errors.petName && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Pet Age" {...register("petAge", { required: true })} />
                    {errors.petAge && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="file" {...register("petImage", { required: true })} />
                    {errors.petImage && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Pet Location" {...register("petLocation", { required: true })} />
                    {errors.petLocation && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-blue-50 rounded-md w-full my-3" type="text" placeholder="Short Description" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    <div>
                        <Controller
                            name="longDescription"
                            control={control}
                            defaultValue=""
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
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <Button type="submit">Add Pet</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPet;
