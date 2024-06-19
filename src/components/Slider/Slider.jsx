import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';

const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex gap-10 flex-col md:flex-row justify-center items-center bg-white'>
                        <div className='w-[90%] md:w-1/2 flex flex-col justify-center px-16'>
                            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-start leading-[60px]'> <span className='font-extrabold text-blue-900'>Donate</span> to Your Favorite Pets</h1>
                            <p className='mt-5 mb-10 font-medium text-center md:text-start'>Donate to support my favorite pets affectionate, playful, and loyal companions that bring joy, comfort, and unconditional love to every home.</p>
                            <div className="flex justify-center md:justify-start">
                                <Button className='bg-gray-900 hover:bg-blue-900 normal-case text-base px-10 py-2 ml-1 rounded-lg'>See All</Button>
                            </div>
                        </div>
                        <div className='w-[90%] md:w-1/2'>
                            <img className='w-full h-[380px] object-cover' src="https://i.postimg.cc/TPjXbGZs/360-F-398045187-CM9rw-QKbu-QSFt4-Fzk-Wj-E66-Nvc2-YQ29j5.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
        
                <SwiperSlide>
                    <div className='flex gap-10 flex-col md:flex-row justify-center items-center bg-white'>
                        <div className='w-[90%] md:w-1/2 flex flex-col justify-center px-16'>
                            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-start leading-[60px]'> <span className='font-extrabold text-blue-900'>Adopt</span> Your Favorite Pets</h1>
                            <p className='mt-5 mb-10 font-medium text-center md:text-start'>Adopt a pet: Gain a loyal, loving companion who brings joy and comfort, enriching your life with endless affection and fun.</p>
                            <div className="flex justify-center md:justify-start">
                                <Button className='bg-gray-900 hover:bg-blue-900 normal-case text-base px-10 py-2 ml-1 rounded-lg'>See All</Button>
                            </div>
                        </div>
                        <div className='w-[90%] md:w-1/2'>
                            <img className='w-full h-[380px] object-cover' src="https://i.postimg.cc/j2m19kpN/depositphotos-78863402-stock-photo-goup-of-parrots-in-front.webp" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex gap-10 flex-col md:flex-row justify-center items-center bg-white'>
                        <div className='w-[90%] md:w-1/2 flex flex-col justify-center px-16'>
                            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-start leading-[60px]'> <span className='font-extrabold text-blue-900'>Create Campaign </span> For Donation To Pets</h1>
                            <p className='mt-5 mb-10 font-medium text-center md:text-start'>Adopt Love, Save Lives is a heartwarming initiative aimed at connecting abandoned pets with caring families by choosing adoption</p>
                            <div className="flex justify-center md:justify-start">
                                <Button className='bg-gray-900 hover:bg-blue-900 normal-case text-base px-10 py-2 ml-1 rounded-lg'>See All</Button>
                            </div>
                        </div>
                        <div className='w-[90%] md:w-1/2'>
                            <img className='w-full h-[380px] object-cover' src="https://i.postimg.cc/cCzqWJnv/portrait-dog-with-cat-isolated-on-white-background-generative-ai-free-photo.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
        
            </Swiper>
        </div>
    );
};

export default Slider;