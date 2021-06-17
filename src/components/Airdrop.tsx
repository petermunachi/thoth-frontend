import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTimeRemaining, tertiaryColor } from '../utils/helpers';
import BgBannerRotate from "../assets/img/bg-banner-rotate.png";
import { secondaryColor, blueColor } from '../utils/helpers';
import Card from "./Card";
import Layout from "./Layout";


const Wrapper = styled.section`
  background-image: url(${BgBannerRotate});
  background-size: cover;
  background-position: top;
  padding: 2rem .10rem 5rem .10rem;

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${secondaryColor};
  }

  .countdown-container {
    margin: 2rem;
  }

  .countdown-container div {
    border: 1px solid #0e0e3c;
  }

  ul {
    border-left: 1px dashed #cccccc;
    padding-left: 30px;
    margin: 0;
    margin-left: 10px;
    list-style-type: none;
  }

  ul li:first-child {
    margin-top: 0;
  }

  ul li h5 {
    font-weight: 700;
    position: relative;
    z-index: 1;
    color: ${tertiaryColor}
  }

  ul li h5::after {
    position: absolute;
    left: -40px;
    top: 0;
    content: "\f26a";
    color: ${blueColor};
    font-family: bootstrap-icons !important;
    font-weight: 600;
  }

`
const Airdrop = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const deadline = 'June 30 2021 23:59:59 GMT+0200';
    let remainingTime = getTimeRemaining(deadline);

    const timeout = setTimeout(() => {
      setTotal(remainingTime.total)
      if (total > 0) {
        setDays(remainingTime.days);
        setHours(remainingTime.hours);
        setMinutes(remainingTime.minutes);
        setSeconds(remainingTime.seconds);
      }           
    },1000);
    return () => clearTimeout(timeout);

  })



  return (
    <Layout title="Claim Airdrop">

      <Wrapper>
  
        <div id="airdrop" className="airdrop">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="">Steps To Join THT Token Airdrop </h1>
                <div className="mt-5">
                  <ul>
                    <li>
                      <h5>Follow Our Twitter Channel</h5>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia adipisci facilis optio ratione nostrum quo eius dolor. 
                      </p>
                    </li>
                    <li>
                      <h5>Join Telegram Group And Channel</h5>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia adipisci facilis optio ratione nostrum quo eius dolor.
                      </p>
                    </li>
                    <li>
                      <h5>Fill Our Google Form</h5>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia adipisci facilis optio ratione nostrum quo eius dolor.
                      </p>
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="col-md-6">
    
                <div className="p-3 pb-5">
                  <Card backgroundColor={'#fff'}>
                    <div className="d-flex align-items-center justify-content-center mt-4">
        
                      <div className="countdown-container text-center">
                        <div className="bg-gray border-circle text-dark border-radius-10 w-5" >
                          <h4 className="p-4 text-center text-primary-gradient font-weight-bold">{days}</h4>
                        </div>
                        <small className="font-weight-bold text-primary-gradient h6 text-uppercase">Days</small>
                      </div>
        
                      <div className="countdown-container text-center">
                        <div className="bg-gray border-circle text-dark border-radius-10 w-5" >
                          <h4 className="p-4 text-center text-primary-gradient font-weight-bold">{hours}</h4>
                        </div>
                        <small className="font-weight-bold text-primary-gradient h6 text-uppercase">Hours</small>
                      </div>
        
                      <div className="countdown-container text-center">
                        <div className="bg-gray border-circle text-dark border-radius-10  w-5 ">
                          <h4 className="p-4 text-center text-primary-gradient font-weight-bold">{minutes}</h4>
                        </div>
                        <small className="font-weight-bold text-primary-gradient h6 text-uppercase">Minutes</small>
                      </div>
        
                      <div className="countdown-container text-center">
                        <div className="bg-gray border-circle text-dark border-radius-10 w-5" >
                          <h4 className="p-4 text-center text-primary-gradient font-weight-bold">{seconds}</h4>
                        </div>
                        <small className="font-weight-bold text-primary-gradient h6 text-uppercase">Seconds</small>
                      </div>
        
                    </div>
                  
                    <div className="center-div">
                      <h5 className="text-center">
                        The countdown of airdrop and token Sale before listing on Pancakeswap
                      </h5>
  
                      <div className="py-3 d-flex justify-content-evenly">
                        <div className="">
                          <button className="custom-primary-btn">Claim Airdrop</button>
                        </div>
                        <div className="ml-2">
                          <Link to="/app" className="custom-tertiary-btn">Join the Thoth Token ICO</Link>
                        </div>
                      </div>
                      
        
                    </div>
                  </Card>
                </div>
              
              </div>
            </div>
          </div>
    
    
        </div>
        
      </Wrapper>
      
    </Layout>
   );
}
 
export default Airdrop;


