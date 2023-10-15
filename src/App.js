import React from 'react';
import './App.css'
import CreateC from './Components/CreateC';
import Update from './Components/Update';
import Read from './Components/Read';

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className='App1'>
      <div className='header center'>
     <h3>Library Management</h3>
      </div>
      <div className='body'>
    <BrowserRouter>
    <h3>Click Here to Add Book Entry: <Link to='/CreateC'>Create</Link> </h3>
    

    <Routes>
      
      <Route path="/CreateC" element={<CreateC />}></Route>
      <Route path="/Read" element={<Read />}></Route>
      <Route path="/Update" element={<Update />}></Route>
     
    </Routes>
    </BrowserRouter>    
      </div>
      </div>
  )
}


export default App
