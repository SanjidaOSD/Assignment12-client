import { BiDonateHeart } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
 

const AboutUs = () => {
    return (
        <div className="pb-20">
            <div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">About Us</h3>
                    <p className="max-w-[500px] mx-auto text-center font-medium py-3"> where we believe every pet deserves a loving home and every home deserves a loving pet. </p>
                </div>
                <div className="mt-12 flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2">
                        <img className="rounded-xl w-[90%]" src="https://i.postimg.cc/L4NsJBSp/About-Us.jpg" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
                        <div>
                            <h1 className="text-2xl font-semibold mb-3">Who We Are?</h1>
                            <p>We have facilitated countless successful adoptions and are committed to ensuring each adoption is a positive experience for both the pet and the adopter. Our dedicated team of volunteers and staff work tirelessly to provide excellent care and support to animals in need, preparing them for their forever homes.</p>
                        </div>
                        <div className="flex gap-5 justify-between">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex gap-5 mt-16 max-w-[300px]">
                                    <div>
                                        <BiDonateHeart className="text-2xl"/>
                                    </div>
                                    <div>
                                        <h1 className="text-lg font-medium mb-1">Donation for pets</h1>
                                        <p>Our dedicated team of volunteers and support to animals in need, preparing them for their forever homes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-16 max-w-[300px]">
                                    <div>
                                        <MdOutlinePets  className="text-2xl"/>
                                    </div>
                                    <div>
                                        <h1 className="text-lg font-medium mb-1">Adopt favorite pet</h1>
                                        <p>Pet adoption benefits: companionship, joy, mental health improvement, saving lives, and family enrichment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;