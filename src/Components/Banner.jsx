// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import image;
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={ true }
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[EffectFade,Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full' src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={banner3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;