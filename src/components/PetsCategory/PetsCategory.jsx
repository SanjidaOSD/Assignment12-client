import { LuDog } from "react-icons/lu";
import { IoLogoOctocat } from "react-icons/io5";
import { GiRabbitHead } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";

const PetsCategory = () => {
    return (
        <div className="py-20">
            <div>
                <h3 className="text-2xl font-semibold text-center">Pets Category</h3>
                <p className="max-w-[500px] mx-auto text-center font-medium py-3"> Find your perfect companion among dogs, cats, small animals, birds, reptiles, fish, and farm animals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
                <div className="bg-blue-50 shadow-md rounded-lg p-10 flex justify-center items-center flex-col">
                    <div>
                        <LuDog className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-center my-3">Dog</h3>
                        <p className="font-medium text-center">Adopt dogs Loyal, loving companions for families and individuals.</p>
                    </div>
                </div>
                <div className="bg-blue-50 shadow-md rounded-lg p-10 flex justify-center items-center flex-col">
                    <div>
                        <IoLogoOctocat className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-center my-3">Cat</h3>
                        <p className="font-medium text-center">Adopt cats Independent, affectionate, perfect for various lifestyles and homes.</p>
                    </div>
                </div>
                <div className="bg-blue-50 shadow-md rounded-lg p-10 flex justify-center items-center flex-col">
                    <div>
                        <GiRabbitHead className="text-6xl" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-center my-3">Rabbits</h3>
                        <p className="font-medium text-center">Adopt rabbits Gentle, social, ideal for indoor spaces and families.</p>
                    </div>
                </div>
                <div className="bg-blue-50 shadow-md rounded-lg p-10 flex justify-center items-center flex-col">
                    <div>
                        <IoFishOutline className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-center my-3">Fish</h3>
                        <p className="font-medium text-center">Adopt fish Vibrant, calming, ideal for adding tranquility to homes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetsCategory;