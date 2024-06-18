import { FaQuoteLeft } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";


const HappyClients = () => {
    return (
        <div className="pb-24">
            <div>
                <h3 className="text-2xl font-semibold text-center">Happy Users</h3>
                <p className="max-w-[500px] mx-auto text-center font-medium py-3"> Our greatest joy comes from the happy stories of our adopters. Here are a few heartwarming  found their perfect companions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                <div className="flex flex-col bg-blue-50 rounded-lg shadow-lg p-8">
                    <div className="flex justify-center">
                        <FaQuoteLeft className="text-4xl mb-5" />
                    </div>
                    <div>
                        <h2 className="text-center">Luna has been a wonderful addition to our family. She is incredibly loving and has bonded with our kids beautifully. We are so grateful to Pet House.</h2>
                        <p className="flex gap-1 justify-center mt-5">
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                        </p>
                    </div>
                    <div className="flex gap-4 items-center justify-center mt-5">
                        <div>
                            <img className="h-10 w-10 rounded-full object-cover" src="https://i.postimg.cc/XY5qYsbY/d559bd5ffda47d35f8d5ce8de8d6f325.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Sarah Rahman</h3>
                            <p>sarah@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-blue-50 rounded-lg shadow-lg p-8">
                    <div className="flex justify-center">
                        <FaQuoteLeft className="text-4xl mb-5" />
                    </div>
                    <div>
                        <h2 className="text-center">Rusty is the perfect companion. His playful nature and affectionate cuddles make every day special. Adopting him was a dream come true.</h2>
                        <p className="flex gap-1 justify-center mt-5">
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                        </p>
                    </div>
                    <div className="flex gap-4 items-center justify-center mt-5">
                        <div>
                            <img className="h-10 w-10 rounded-full object-cover" src="https://i.postimg.cc/02Y2gbdz/360-F-477874414-k-SQ9ip26804g8-B3-It-Ysh5-Xsj-NRgqf693.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Alex Jhon</h3>
                            <p>alex@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-blue-50 rounded-lg shadow-lg p-8">
                    <div className="flex justify-center">
                        <FaQuoteLeft className="text-4xl mb-5" />
                    </div>
                    <div className="">
                        <h2 className="text-center">Adopting Max was the best decision we have ever made. He is brought so much joy and laughter into our home. We can not imagine life without him</h2>
                        <p className="flex gap-1 justify-center mt-5">
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                        </p>
                    </div>
                    <div className="flex gap-4 items-center justify-center mt-5">
                        <div>
                            <img className="h-10 w-10 rounded-full object-cover" src="https://i.postimg.cc/dtYw9JPw/360-F-639641415-l-Ljz-VDVw-L0-Rwd-Nrk-URYFboc4-N21-YIXJR.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Jhon Smith</h3>
                            <p>smith@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-blue-50 rounded-lg shadow-lg p-8">
                    <div className="flex justify-center">
                        <FaQuoteLeft className="text-4xl mb-5" />
                    </div>
                    <div>
                        <h2 className="text-center">We adopted Bella a year ago, and she has filled our lives with endless joy and love. The adoption process was smooth and supportive.</h2>
                        <p className="flex gap-1 justify-center mt-5">
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                            <IoStarSharp className="text-lg text-yellow-600" />
                        </p>
                    </div>
                    <div className="flex gap-4 items-center justify-center mt-5">
                        <div>
                            <img className="h-10 w-10 rounded-full object-cover" src="https://i.postimg.cc/TPp6Pwmq/360-F-364211147-1qg-LVxv1-Tcq0-Ohz3-Faw-Ufrt-ONzz8nq3e.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Adam Alba</h3>
                            <p>adamalba@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClients;