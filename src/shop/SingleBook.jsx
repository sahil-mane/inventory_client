// import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { Card } from 'flowbite-react';

const SingleBook = () => {
    const { _id, bookTitle, imageUrl, bookDescription, category, bookPdfUrl, authorName } = useLoaderData();
    return (
        <div className='mt-28 px-4 lg:px-24'>
            <div className='flex justify-center items-center'>
                <Card className='w-full' key={_id}>
                    <div className='flex '>
                        <div className=' w-1/2 flex justify-center'>
                            <div>
                                <img src={imageUrl} alt={bookTitle} className=' h-96 rounded-md object-center' />
                                <Link to={bookPdfUrl} target="_blank" rel="noopener noreferrer">
                                    <button className="relative group cursor-pointer text-sky-50  overflow-hidden mt-2 h-12 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                                        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                                        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                                        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                                        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                                        <p className="z-10">See more info</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className=' w-1/2 space-y-8 p-4'>
                            <h2 className='text-5xl font-bold mb-2'>{bookTitle}</h2>
                            <p className='text-gray-700 mb-2'>{bookDescription}</p>
                            <p className='text-gray-700 mb-2'>Category: {category}</p>
                            <p className='text-gray-700 mb-2 flex items-center gap-3'> <FaRegCircleUser />Author: {authorName}</p>

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SingleBook

// <div className='flex flex-row gap-x-10 justify-between items-center p-3' >
//     <div className='col-6'>
//         <img src={imageUrl} alt={_id} className='h-96 rounded-xl' />
//         <Link to={bookPdfUrl} target="_blank" rel="noopener noreferrer">
//             <button className="relative group cursor-pointer text-sky-50  overflow-hidden mt-2 h-12 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
//                 <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
//                 <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
//                 <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
//                 <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
//                 <p className="z-10">See more info</p>
//             </button>
//         </Link>
//     </div>
//     <div className='flex flex-col space-y-7  p-5'>
//         <h2 className='text-5xl font-bold'>{bookTitle}</h2>
//         <h2 className='flex gap-x-2 items-center'><FaRegCircleUser /> {authorName}</h2>
//         <p>{bookDescription}</p>
//         <p className='hover:underline hover:decoration-green-900 '>category:-{category}</p>
//     </div>
// </div>