import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import TrendingServiceCard from "./TrendingServiceCard";
import { Link } from "react-router-dom";


const TrendingServices = () => {
    const [ tServices , setTServices ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        axios.get('https://electro-savvy-server-side.vercel.app/trending-services')
        .then(res => {
            setTServices(res.data)
            setLoading(false)
        })
    },[])
    return (
        <div className="py-20">
            <h1 className="text-3xl font-bold text-center mb-10 mt-4">Trending Services</h1>
            {
            loading ? <div className="flex justify-center my-[200px]"><span className="loading loading-bars loading-lg"></span></div>
            :
            <div className="max-w-screen-xl mx-auto px-6 lg:p-1">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={ true }
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        tServices.map(tService => <SwiperSlide key={tService._id}><TrendingServiceCard tService={tService}></TrendingServiceCard></SwiperSlide>)
                    }
                </Swiper>
            </div>
            }
            <div className="max-w-[100px] mx-auto my-6">
            <Link to='/all-service' className="text-center underline ">See all service</Link>
            </div>
        </div>
    );
};

export default TrendingServices;