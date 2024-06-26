// import React from 'react'
import { Button,  Label, TextInput, Textarea } from 'flowbite-react';
import { bookCategories } from '../helper/Helper';
import { useState } from 'react';
import {useParams, useNavigate , useLoaderData } from 'react-router-dom';

const EditBooks = () => {

    const { id } = useParams();
    const {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl} = useLoaderData();

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    console.log("selectedBookCategory==>>", selectedBookCategory)

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setSelectedBookCategory(e.target.value);
    }
    
    const Navigate = useNavigate();

    const handleBookSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageUrl = form.imageUrl.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const updateBookObj = {
            bookTitle, 
            authorName,  
            imageUrl,  
            category, 
            bookDescription,
            bookPDFURL
        };       

        console.log(updateBookObj)

        // send data to db 

        fetch(`${import.meta.env.VITE_API_URL}/book/${id}`,{
            method:"PATCH",
            headers : { "Content-Type" : "application/json"},
            body: JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data =>{

            alert("book update successfully");
            // form.reset();
            Navigate('/admin/dashboard/manage');
        })

    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold capitalize'>{`Update ${bookTitle} book details`}</h2>
            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/** first rows */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <Label
                                htmlFor='bookTitle'
                                value='Book Title'
                            />
                        </div>
                        <TextInput
                            id='bookTitle'
                            name='bookTitle'
                            placeholder='Book Name'
                            required
                            type='text'
                            defaultValue={bookTitle}
                        />
                    </div>

                    {/* Author Name */}
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <Label
                                htmlFor='authorName'
                                value='Author Name'
                            />
                        </div>
                        <TextInput
                            id='authorName'
                            name='authorName'
                            placeholder='Author Name'
                            required
                            type='text'
                            defaultValue={authorName}
                        />
                    </div>
                </div>

                {/* 2nd rows */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <Label
                                htmlFor='imageUrl'
                                value=' book image URL'
                            />
                        </div>
                        <TextInput
                            id='imageUrl'
                            name='imageUrl'
                            placeholder='book image URL'
                            required
                            type='text'
                            defaultValue={imageUrl}
                        />
                    </div>

                    {/* Category */}
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <Label
                                htmlFor='inputState'
                                value='Book Category'
                            />
                        </div>

                        <select name="categoryName" id="inputState" className='w-full rounded' defaultValue={category}
                            onChange={handleOnChange}>
                            {
                                bookCategories.map((opt) => {
                                    return (
                                        <option value={opt} key={opt}>{opt}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                {/** third rows */}
                <div>
                    <div className='mb-2 block'>
                        <Label
                            htmlFor='bookDescription'
                            value='Book Description'
                        />
                    </div>
                    <Textarea
                        id='bookDescription'
                        name='bookDescription'
                        placeholder='leave a comment ...'
                        required
                        rows={4}
                        defaultValue={bookDescription}
                    />                    
                </div>
                {/** book pdf link */}
                <div>
                    <div className='mb-2 block'>
                        <Label
                        htmlFor='bookPDFURL'
                        value='Book PDF URL'
                        />
                    </div>
                    <TextInput
                    id="bookPDFURL"
                    name='bookPDFURL'
                    placeholder='book pdf url'
                    required
                    type='text'
                    defaultValue={bookPdfUrl}
                    />
                </div>
                <Button type='submit' className='mt-5'>
                    Update Book
                </Button>
            </form>
        </div>
    )
}

export default EditBooks;

//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="email1" value="Your email" />
//     </div>
//     <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
//   </div>
//   <div>
//     <div className="mb-2 block">
//       <Label htmlFor="password1" value="Your password" />
//     </div>
//     <TextInput id="password1" type="password" required />
//   </div>
//   <div className="flex items-center gap-2">
//     <Checkbox id="remember" />
//     <Label htmlFor="remember">Remember me</Label>
//   </div>
//   <Button type="submit">Submit</Button>

// 4:17:20 hr:min:sec