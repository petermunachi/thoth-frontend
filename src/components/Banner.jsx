import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BannerImg from '../assets/img/illustration-6.svg';
import { secondaryColor } from '../utils/helpers';


const Wrapper = styled.div`
  padding: 3rem 0;

  .img-container{
    width: 90%;
  }

  .text-container{
    width: 90%;
  }

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${secondaryColor};
  }

  p {
    color: rgba(0,0,0,.9);
    font-size: 1.1rem;
    text-align: justify;
    padding: .8rem 0;

  }

  .ml-2 {
    margin-left: 1.2rem;
  }
`
const Banner = () => {


  return (
    <Wrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="img-container">
              <img alt="banner" src={BannerImg} width="100%" height="100%" />
            </div>
          </div>
          <div className="col-md-6">

            <div className="text-container">
              <h1>A decentralised gaming and staking platform </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Quisquam consectetur voluptates natus, 
                doloremque facilis autem alias omnis inventore ab! Maiores, aliquam!</p>
              <div className="pt-3 d-flex">
                <div className="">
                  <Link to="/app" className="custom-primary-btn">Join the Thoth Token ICO</Link>
                </div>
                <div className="ml-2">
                  <NavLink to="#airdrop" className="custom-secondary-btn">Claim Airdrop</NavLink>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

    </Wrapper>

  );
}


export default Banner;

