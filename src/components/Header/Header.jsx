import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                {/* <p className='header-text fs-18 fw-3'>A web source is a website that collects information about books that visitors are interested in in order to be able to find the media they are interested in. And for this convenience we have created a web source.</p> */}
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header