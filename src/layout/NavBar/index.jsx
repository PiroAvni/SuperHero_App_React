// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchForm } from '../../components'
import logo from '../../../public/images/logo.png'
import './style.css'

const Navbar = ({setName}) => {

  

 function handleSearch(userInput) {
      setName(userInput);
      console.log(userInput);
    }
    return (
      <>
      <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-search">
          <SearchForm handleSearch={handleSearch}   />
          </div>
        </nav>
    <Outlet name={name}/>
      </>
     
    );
  };
  
  export default Navbar;