import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import {NotFound} from "./pages/NotFound.jsx";
import {SearchForm} from "./components/SearchForm.jsx";
import Search from "./pages/Search.jsx";

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar></Navbar>
                <SearchForm></SearchForm>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/products/:id" element={<Product/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
