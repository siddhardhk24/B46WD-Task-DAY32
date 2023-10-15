import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './Create.css'
import {API_URL} from '../constants/URL'
import { useFormik } from "formik";

function Create() {
  
  const [bookname, setBookName] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [isbn, setISBN] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();



  const validationSchema = Yup.object({
    name: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required')
  });



  const onSubmit = async ()=> {

    await axios.post(API_URL, {

      bookname,
      authorname,
      isbn,
      description
    })
    navigate('/Read')

  }

  const formik = useFormik({ initialValues: { name: "", author: "", isbn: "", description: "" } ,
   validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
   } )

   console.log("Error: ", formik.errors)
  return (

    
    <div>
     
      <form class = "formdsn" >

        Name of the Book: <input className = "inputtxt" name = "name" value = {bookname} type="text" placeholder="Enter the Book Name" 
        onChange={ event =>
        {
          setBookName(event.target.value)
        } }>
          </input>
          {/* <ErrorMessage name="name" component="div" className="error" /> */}
          <br></br><br></br>

          

        Author of the Book: <input className = "inputtxt" name = "author" value = {authorname} type="text" placeholder="Enter the Author Name" 
        onChange={ event =>
        {
          setAuthorName(event.target.value)
        } }>
          </input>
          {/* <ErrorMessage name="author" component="div" className="error" /> */}
          <br></br><br></br>  


         ISBN Number: <input className = "number" value = {isbn} name = "isbn" type = "number" placeholder="Enter Your ISBN Number" onChange={ event => 
         {
            setISBN(event.target.value)

         } }></input><br></br><br></br>

        Description: <input className = "inputtxt" value = {description} name = "description" type="text" placeholder="Enter the Description" 
        onChange={ event =>
        {
          setDescription(event.target.value)
        } }>
          </input><br></br><br></br>
        <button class = "btn" type="Submit" onClick={onSubmit}>Submit</button>

      </form>
     
     
    </div>
  )
      }

export default Create