import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { primaryColor, primaryFont, secondaryColor, tertiaryColor } from '../utils/helpers';

const Wrapper = styled.header`
  padding: 1rem .10rem;
  width: 90%;
  margin: 0 auto;
  border-radius: 30px;
  display: flex;
  align-items: center;
  background: #fff;
    
  .logo-container{
    padding-left: 5rem;
  }

  .logo-container h1 {
    font-size: 1.8rem;
  }

  .nav-container{
    padding-left: 10rem;
  }

  .navbar-list a{
    font-family: ${primaryFont};
    text-decoration: none;
    color: ${tertiaryColor};
    padding: 0 .7rem;
    display: inline-block;
  }

  .navbar-list a:hover {
    color: ${primaryColor};
  }

  .launch-container {
    padding-left: 10rem;
  }

  .selected {
    color: ${primaryColor} !important;
  }
  
`;

const Navbar = () => {
  
  const location = useLocation();

  return (
    
    <Wrapper>
      <div className="logo-container">
        {/* <img alt="Site Logo" src={Logo} width="100%" height="100%" /> */}
        <h1>Thoth Finance</h1>
      </div>
      <nav className="nav-container d-flex justify-content-between align-items-center">
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

