import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import CommentCard from "./CommentCard";


const CommentSection = () => {
    const [ comments , setComments ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        axios.get('https://electro-savvy-server-side.vercel.app/comments')
        .then(res => {
            setComments(res.data)
            setLoading(false)
        })
    },[])
    return (
        <div className="py-20">
            <h1 className="text-3xl font-bold text-center mb-10 mt-4">What Our Customer Are Saying</h1>
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
                        600: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        900: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        1150: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        comments.map(coment => <SwiperSlide key={coment._id}><CommentCard coment={coment}></CommentCard></SwiperSlide>)
                    }
                </Swiper>
            </div>
            }
        </div>
    );
};

export default CommentSection;