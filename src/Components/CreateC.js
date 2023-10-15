import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {API_URL} from '../constants/URL'
import React, { useState } from 'react'

function CreateC() {

    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {
            bookname: "",
            authorname: "",
            isbn: "",
            description: ""
        },
        validate: ((values) => {
            let errors = {}

            if (!values.bookname) {
                errors.bookname = "Enter the title of the Book";
            }

            if (!values.authorname) {
                errors.authorname = "Author field can't be empty";
            }

            if (!values.isbn) {
                errors.isbn = "Please enter ISBN number";
            }
           

            if (!values.description) {
                errors.description = "This can't be empty";
            }

            return errors;
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post(API_URL, values);
                setLoading(false);
                navigate("/Read");
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    })

    return (
        <>
            
            <div className='container mt-4'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Title of the Book</label>
                            <input name='bookname' value={myFormik.values.bookname} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.bookname ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.bookname} </span>
                        </div>
                        <div className='col-lg-6'>
                            <label>Name of the Author</label>
                            <input name='authorname' value={myFormik.values.authorname} onChange={myFormik.handleChange}
                                type={'text'} className={`form-control ${myFormik.errors.authorname ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.authorname} </span>
                        </div>
                        
                        
                        <div className='col-lg-6 mt-2'>
                            <label>ISBN</label>
                            <input name='isbn' value={myFormik.values.isbn} onChange={myFormik.handleChange}
                                type={'number'} className={`form-control ${myFormik.errors.isbn ? "is-invalid" : ""} `} >
                            </input>
                            <span style={{ color: "red" }}>{myFormik.errors.isbn} </span>
                        </div>
                        <div className='col-lg-12 mt-2'>
                            <label>Detailed Description of the Book</label>
                            <textarea name='description' value={myFormik.values.description} onChange={myFormik.handleChange}
                                type='text' className={`form-control ${myFormik.errors.description ? "is-invalid" : ""} `}
                                style={{ height: "150px" }} >
                            </textarea>
                            <span style={{ color: "red" }}>{myFormik.errors.description} </span>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <input disabled={isLoading} type='submit' value={isLoading ? "Creating..." : "Create"} className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateC