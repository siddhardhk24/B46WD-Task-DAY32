import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Read.css'

function Read() {

    const [apiData, setAPIData] = useState([]);
    const navigate = useNavigate();

    const deleteFun = async (id)=> {
      await axios.delete(API_URL + id);
      callGetAPI();

  }

  const updateFun = ({ bookname, authorname, description, isbn, id })=> 
  {
      localStorage.setItem('id', id)
      localStorage.setItem('bookname', bookname)
      localStorage.setItem('authorname', authorname)
      localStorage.setItem('description', description)
      localStorage.setItem('isbn', isbn)
      
      navigate('/Update')

  }

    const callGetAPI = async () => {

      const resp = await axios.get(API_URL);
      setAPIData(resp.data);
      

    }

    useEffect( ()=> {

      callGetAPI();

    },[])

  return (
    <div class = "bodyclass">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">ISBN</th>
      <th scope="col">Description</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
  {
            apiData.map( data => (
              <tr key={data.id}>
          <td>{data.bookname}</td>
          <td>{data.authorname}</td>
          <td>{data.isbn}</td>
          <td>{data.description}</td>
          <td><button type="button" onClick={ ()=>

    deleteFun(data.id)}>Delete</button></td>
    <td><button type="button" onClick={ ()=>
        updateFun(data)}>Update</button></td>
          </tr>
             ) )
          }
  </tbody>
</table>
    </div>
  )
}

export default Read