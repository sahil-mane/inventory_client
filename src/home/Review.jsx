// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react'
import proPic from '../assets/profile.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';

const Review = () => {

    const slides = Array.from({ length: 12 }, (_, index) => (
        <SwiperSlide key={index} className='shadow-2xl bg-white py-8 px-4 md:m-5 md:mx-2  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis mollitia, non cumque nostrum magni voluptate in animi
                        dignissimos quo numquam quaerat rerum. Enim at praesentium ipsum cumque.
                        Voluptas, nam quas.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Sahil mane</h5>
                    <p className='text-base'>Genral manager , Vonatech IT solution</p>
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="my-12 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    
                >                   

                        {slides}
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Review

