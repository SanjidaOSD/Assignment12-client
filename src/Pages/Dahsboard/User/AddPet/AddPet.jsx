import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";


const AddPet = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleAddPet = () => {
        console.log("Form Submitted");
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Add Pet</h1>
            <div>
                <form onSubmit={handleSubmit(handleAddPet)}>
                    <select className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" {...register("petCategory", { required: true })}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                        <option value="rabbits">Rabbits</option>
                    </select>
                    {errors.petName && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Pet Name" name="petName" {...register("petName", { required: true })} />
                    {errors.petName && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Pet Age" name="petAge" {...register("petAge", { required: true })} />
                    {errors.petAge && <span>This field is required</span>}

                    <input className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Pet Location" name="petLocation" {...register("petLocation", { required: true })} />
                    {errors.petLocation && <span>This field is required</span>}

                    <textarea cols={2} className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    <textarea cols={5} className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Long Description" name="longDescription" {...register("longDescription", { required: true })} />
                    {errors.longDescription && <span>This field is required</span>}

                    <div>
                        <Button type="submit">Add Pet</Button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddPet;