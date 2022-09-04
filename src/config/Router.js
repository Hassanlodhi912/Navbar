import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import React from 'react'
import Home from "../screen/Home";
import Navbar from "../component/Navbar";
  
  export default function Router() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    )
  }
  