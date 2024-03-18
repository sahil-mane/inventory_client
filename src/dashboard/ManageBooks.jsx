// import React from 'react'

import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom'

const ManageBooks = () => {
  const [Books, setBooks] = useState([]);

  const getBookDataList = async () => {
    const res = await axios.get("http://localhost:5000/all-books")
    console.log(res.data)
    setBooks(res.data)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/book/${id}`);
      setBooks(Books.filter(book => book._id !== id));
      toast.success("Data deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete data!");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    getBookDataList();
  }, [])
  return (
    <div className="lg:px-24 px-4 py-4">
      <div className="p-4 my-3 flex justify-between">
        <h2 className="text-5xl font-bold capitalize">
          Mange your Books({Books.length})
        </h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-cyan-300 "
        onClick={()=>navigate('/admin/dashboard/upload')} >        
        <GoPlus /> Add
        </button>
      </div>
      <table className="w-[1180px]  divide-gray-200 text-center">
        <thead className="text-center">
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Sr no.</th>
            <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
            <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Book Title</th>
            <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Prices</th>
            <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-200">
          {Books &&
            Books.map((book, index) => {
              return (
                <tr key={book._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.authorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.bookTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹499</td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-4 justify-center items-center">
                    <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                      <FiEdit className="hover:text-green-400" />
                    </Link>
                    /
                    <button type="button" onClick={() => handleDelete(book._id)}>
                      <FaRegTrashCan className="hover:text-red-400" />
                    </button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}

export default ManageBooks