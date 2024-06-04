import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './create';
import Update from './update';


function App() {
  return (
      <div>

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:Id' element={<Update/>}></Route>
        </Routes>
        
        </BrowserRouter>
      </div>
  );
}

export default App;
