import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaUser } from "react-icons/fa";


const FeaturedStories = () => {
    return (
        <div className="pb-20">
            <div>
                <h3 className="text-2xl font-semibold text-center">Featured Stories</h3>
                <p className="max-w-[500px] mx-auto text-center font-medium py-3"> Each month, feature a detailed story of a recently adopted pet, complete with photos and quotes from the new owners.</p>
            </div>
            <div>
                <div className="flex gap-10 justify-center items-center mt-12">
                    <div className="w-full lg:w-1/2">
                        <img className="rounded-xl" src="https://i.postimg.cc/DzMnnFb4/little-girl-relaxing-on-bed-600nw-689876338.webp" alt="Cat Image" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div>
                            <BiSolidQuoteLeft className="text-5xl" />
                            <h3 className="text-xl font-semibold mt-2 mb-2">A sweet cat</h3>
                            <p className="text-sm font-medium text-justify">Whiskers is a sweet, affectionate cat with a gentle disposition and a heart full of love. This charming feline enjoys quiet moments of cuddling and is always ready to offer a comforting purr. Whiskers is looking for a forever home where she can share her warmth and companionship with a loving family. If you are seeking a loyal and soothing presence, Whiskers is the perfect addition to your home. Adopt Whiskers and experience the joy of unconditional feline love. affectionate cat with a gentle disposition and a heart full of love. This charming feline enjoys quiet moments of cuddling and is always ready to offer a comforting purr. Whiskers is looking for a forever home where she can share her warmth and companionship with a loving family. If you are seeking a loyal and soothing presence, Whiskers is the perfect addition to your home. Adopt Whiskers and experience the joy of unconditional feline love.</p>
                        </div>
                        <div className="flex gap-3 items-center mt-5">
                            <div>
                                <FaUser/>
                            </div>
                            <div>
                                <h4 className="font-semibold">Sanjida Ema</h4>
                                <p>sanjidaema@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedStories;