// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import BooksCards from "../component/BooksCards";

const OtherBooks = () => {
    const [books , setBooks] = useState([]);

    const getAllBooks = async() =>{
        const response = await axios.get("http://localhost:5000/all-books");
        // console.log(response.data)
        // setBooks(response.data);
        setBooks(response.data.slice(4,5)); //to show limited data
    };

    useEffect(()=>{
        getAllBooks();
    },[])
  return (
    <div>
        <BooksCards books={books} headline="Other Books"/>
        
    </div>
  )
}

export default OtherBooks