import React, { useState, useEffect } from 'react'
import { API_URL } from '../constants/URL';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Update.css'


function Update() {

  const [bookname, setBookName] = useState("");
  const [isbn, setISBN] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

 const updateUser = async () => {
      await axios.put((API_URL + id), {

        authorname,
        bookname,
        description,
        isbn,
        id
      }
      )
      navigate('/Read')
  }

  useEffect(()=> {

    setId(localStorage.getItem('id', id))
    setAuthorName(localStorage.getItem('authorname', authorname))
    setBookName(localStorage.getItem('bookname', bookname))
    setDescription(localStorage.getItem('description', description))
    setISBN(localStorage.getItem('isbn', isbn))

  }, [])


  return (
    <div>
          <form class = "formdsn">
        Name of the Book: <input class = "inputtxt1" value = {bookname} type="text" placeholder="Enter the Book Name" 
        onChange={ event =>
        {
          setBookName(event.target.value)
        } }>
          </input><br></br><br></br>

        Author of the Book: <input class = "inputtxt1" value = {authorname} type="text" placeholder="Enter the Author Name" 
        onChange={ event =>
        {
          setAuthorName(event.target.value)
        } }>
          </input><br></br><br></br>  


         ISBN Number: <input class = "number1" value = {isbn} type = "number" placeholder="Enter Your ISBN Number" onChange={ event => 
         {
            setISBN(event.target.value)

         } }></input><br></br><br></br>

        Description: <input class = "inputtxt1" value = {description} type="text" placeholder="Enter the Description" 
        onChange={ event =>
        {
          setDescription(event.target.value)
        } }>
          </input><br></br><br></br>
        <button class = "btn" type="button" onClick={updateUser}>Update</button>

      </form>
    </div>
  )
}

export default Update