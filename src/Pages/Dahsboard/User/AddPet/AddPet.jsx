import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import UseAuth from "../../../../Hook/UseAuth";


const AddPet = () => {
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = UseAuth()


    const handleAddPet = async(data) => {
        const date = new Date().toLocaleDateString();
        const newPet = {...data, date : date, adopted : false, email : user?.email}
        try{
            const {data} = await axiosSecure.post('/pet', newPet)
            console.log(data);
            if(data.insertedId){
                toast.success("Pet added successfully")
            }
        }catch(err){
            toast.error("Pet added failed")
        }
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center pt-16 pb-10">Add Pet</h1>
            <div>
                <form onSubmit={handleSubmit(handleAddPet)}>
                    <select className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" {...register("petCategory", { required: true })}>
                        <option value="">Pet Category</option>
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

                    <textarea rows={2} className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Short Description" name="shortDescription" {...register("shortDescription", { required: true })} />
                    {errors.shortDescription && <span>This field is required</span>}

                    <textarea rows={5} className="block px-5 py-2 bg-gray-100 rounded-md w-full my-3" type="text" placeholder="Long Description" name="longDescription" {...register("longDescription", { required: true })} />
                    {errors.longDescription && <span>This field is required</span>}

                    <div className="flex justify-center items-center mt-5">
                        <Button type="submit">Add Pet</Button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddPet;