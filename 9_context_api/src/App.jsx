import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";

function App() {

    return (
        <div className="App">
            <h1>Context API</h1>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
