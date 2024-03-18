// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  const getBooksData = async () => {
    const response = await axios.get("http://localhost:5000/all-books");
    console.log(response.data)
    setBooks(response.data)
  }

  useEffect(() => {
    getBooksData()
  }, [])
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-4">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          books.map((book) => {
            return (
              <Card key={book._id}
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"

              >
                <img src={book.imageUrl} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.bookTitle}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {book.bookDescription}
                </p>

                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 ">
                  Buy Now
                </button>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shop