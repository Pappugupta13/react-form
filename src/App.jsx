
import React, { useState } from 'react';
import { Route, Routes, } from 'react-router-dom';
import {Data} from './newF/data';
import Portfolio, {portfolio} from './component/portfolio';
import Login from './component/Login';
function App() {
 
    return (
        <>
            <Routes>
                <Route path='/' element={<Portfolio/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>


        </>
    )
}

export default App;
