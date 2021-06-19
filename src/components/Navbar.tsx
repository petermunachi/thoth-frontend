import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { primaryColor, primaryFont, secondaryColor, tertiaryColor } from '../utils/helpers';

type WrapperProps = {
  toggleNavbar: boolean;
}


const Wrapper = styled.header<WrapperProps>`
  padding: 1rem .10rem;
  width: 90%;
  margin: 0 auto;
  border-radius: 30px;
  display: flex;
  align-items: center;
  background: #fff;
    
  .nav-container-sm {
    display: none;
  }
  .logo-container{
    padding-left: 5rem;
  }

  .logo-container h1 {
    font-size: 1.8rem;
  }

  .nav-container{
    padding-left: 10rem;
  }

  .navbar-list a {
    padding: 0 .7rem;
  }
  .navbar-list a, .navbar-list-sm a {
    font-family: ${primaryFont};
    text-decoration: none;
    color: ${tertiaryColor};
    display: inline-block;
  }

  .navbar-list a:hover, .navbar-list-sm a:hover {
    color: ${primaryColor};
  }

  .launch-container {
    padding-left: 4rem;
  }

  .selected {
    color: ${primaryColor} !important;
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    border-radius: unset;
    padding: .5rem .10rem;

    .nav-container-sm {
      display: block;
      margin-left: auto;
    }
    
    .logo-container{
      padding-left: 1rem;
    }
    .logo-container h1 {
      font-size: 1.3rem;
    }
    .nav-container-md {
      display: none !important;
    }

    .navbar-list-sm {
      background: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transition: 0.3s;
      height: ${({ toggleNavbar }) =>
        toggleNavbar
          ? '100%'
          : '0'
      };
      width: ${({ toggleNavbar }) =>
        toggleNavbar
          ? '100%'
          : '0'
      };
      opacity: ${({ toggleNavbar }) =>
        toggleNavbar
          ? '1'
          : '0'
      };
      z-index: ${({ toggleNavbar }) =>
        toggleNavbar
          ? '1000'
          : '0'
      };
      
    }

    .navbar-list-sm a {
      display: block;
      text-align: center;
      font-size: 1.1rem;
      padding: 1rem 0;
    }

    .launch-container {
      padding-left: 0;
    }

    .launch-container a {
      padding: .7rem 1rem;
      font-size: 1rem;
    }

    .list-sm {
      padding: 2rem 0;
    }

    .navbar-list-sm .launch-container {
      text-align: center;
      width: 80%;
      margin: 0 auto;
    }

    .close-nav {
      padding: 1.25rem 1rem 1.25rem 0;
      border-bottom: 1px solid ${secondaryColor};
      text-align: right;
      font-weight: bold;
      cursor: pointer;
    }


  }
  
`;

const Navbar = () => {
  
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbarHandler = () => {
    setIsOpen(prev => !prev);
  }

  return (
    
    <Wrapper toggleNavbar={isOpen}>
      <div className="logo-container">
        {/* <img alt="Site Logo" src={Logo} width="100%" height="100%" /> */}
        <h1 className="text-primary-gradient">Thoth Finance</h1>
      </div>
      <div className="nav-container-sm">
        <nav className="d-flex justify-content-between align-items-center">
          <button onClick={toggleNavbarHandler} className="outline-none border-none bg-none px-3" type="button">
            <i className="font-2 text-primary-gradient bi bi-menu-button-fill"></i>
          </button>

          <div className="navbar-list-sm">
            <div onClick={()=> setIsOpen(false)} className="close-nav">
              <i className="font-2 text-primary-gradient bi bi-x-octagon"></i>
            </div>
            <div className="list-sm">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/home#road-map"
                activeClassName={location.hash === '#road-map' ? 'selected' : ''}>
                Road Map
              </NavLink>
              <NavLink to="/home#tokenomics"
                activeClassName={location.hash === '#tokenomics' ? 'selected' : ''}>
                Tokenomics
              </NavLink>
              <NavLink to="/home#features"
                activeClassName={location.hash === '#features' ? 'selected' : ''}>
                Our Features
              </NavLink>
              <NavLink to="/documentation" >Documentation</NavLink>
            </div>
            <div className="launch-container">
              <Link className="custom-primary-btn" to="/app">Launch App</Link>
            </div>
          </div>

        </nav>

      </div>
      <nav className="nav-container nav-container-md d-flex justify-content-between align-items-center">
        <div className="navbar-list">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/home#road-map" 
            activeClassName={location.hash === '#road-map' ? 'selected' : ''}>
            Road Map
          </NavLink>
          <NavLink to="/home#tokenomics" 
            activeClassName={location.hash === '#tokenomics' ? 'selected' : '' }>
            Tokenomics
          </NavLink>
          <NavLink to="/home#features" 
            activeClassName={location.hash === '#features' ? 'selected' : '' }>
            Our Features
          </NavLink>
          <NavLink to="/documentation" >Documentation</NavLink>
        </div>
        <div className="launch-container">
          <Link className="custom-primary-btn" to="/app">Launch App</Link>
        </div>
      </nav>

      
    </Wrapper>

  );
}


export default Navbar;

