import {useState , useEffect } from 'react'
import axios from 'axios';
import BooksCards from '../component/BooksCards';

const BestSellerBooks = () => {
    const [books , setBooks] = useState([]);

    const getAllBooks = async() =>{
        const response = await axios.get("http://localhost:5000/all-books");
        // console.log(response.data)
        setBooks(response.data);
        // setBooks(response.data.slice(0,5)); to show limited data
    };

    useEffect(()=>{
        getAllBooks();
    },[])
  return (
    <div>
        <BooksCards books={books} headline="Best Seller Books"/>
        
    </div>
  )
}

export default BestSellerBooks