import React from "react";

import {  Route, Routes } from 'react-router-dom';

import Front from './Views/Front';
import Login from './Views/Login';
import Register from './Views/Register';

const Main =()=>(
  
    <Routes>
         <Route exact path="/" Component={Front}/>
         <Route  path="/login" Component={Login}/>
         <Route path="/register" Component={Register}/>
    </Routes>
   
    
    )

export default Main;