import { LiaHandPointRightSolid } from "react-icons/lia";

const CallToAction = () => {
    return (
        <div className="pb-16">
            <div>
                <h3 className="text-2xl font-semibold text-center">Pet Adopt Benefits</h3>
                <p className="max-w-[500px] mx-auto text-center font-medium py-3"> Benefits of pet adoption include companionship, joy, improved mental health, and saving lives by providing loving homes.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-12">
                <div className="pt-10 flex flex-col gap-5">
                    <div className="flex gap-4 max-w-[600px]">
                        <LiaHandPointRightSolid className="text-3xl w-16" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Provides loving companionship</h3>
                            <p>Provides loving companionship: Pets offer unconditional love, loyalty, and companionship, enriching daily life experiences.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 max-w-[600px] mt-5">
                        <LiaHandPointRightSolid className="text-3xl w-16" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Enhances mental and emotional</h3>
                            <p>Enhances mental and emotional well-being: Interacting with pets can reduce stress, anxiety, and loneliness.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 max-w-[600px] mt-5">
                        <LiaHandPointRightSolid className="text-3xl w-12" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Saves a life</h3>
                            <p>Adopting from shelters or rescues gives homeless pets a chance for a better life.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 max-w-[600px] mt-5">
                        <LiaHandPointRightSolid className="text-3xl w-12" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Reduces stress</h3>
                            <p>Pet ownership has been shown to lower blood pressure and promote relaxation.</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.postimg.cc/NfB1cx4v/1524069748525.jpg" alt="Pet adopt image" />
                </div>
            </div>
        </div>
    );
};

export default CallToAction;