import React, { useState, useEffect } from 'react';
import { getTimeRemaining } from '../utils/helpers';
import styled from 'styled-components';
import { secondaryColor } from '../utils/helpers';
import Card from "./Card";
import BgBanner from "../assets/img/bg-banner.png";


const Wrapper = styled.section`
  background-image: url(${BgBanner});
  background-size: cover;
  background-position: top;
  padding: 2rem .10rem;

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${secondaryColor};
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
    var t = getTimeRemaining(deadline);

    const timeout = setTimeout(() => {
      setTotal(t.total)
      if (total > 0) {
        setDays(t.days);
        setHours(t.hours);
        setMinutes(t.minutes);
        setSeconds(t.seconds);
      }           
    },1000);
    return () => clearTimeout(timeout);

  })



  return ( 
    <Wrapper>

      <section id="airdrop" className="airdrop">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="">Steps To Join Airdrop </h1>
              
            </div>
            <div className="col-md-6">
  
              <div className="p-3 pb-5">
                <Card>
                  <div className="d-flex align-items-center justify-content-center mt-4">
      
                    <div className="countdown-container text-center">
                      <div className="bg-white text-dark border-radius-10 w-5" >
                        <h4 className="p-4 text-center font-weight-bold">{days}</h4>
                      </div>
                      <small className="font-weight-bold text-white h6 text-uppercase">Days</small>
                    </div>
      
                    <div className="countdown-container text-center">
                      <div className="bg-white text-dark border-radius-10 w-5" >
                        <h4 className="p-4 text-center font-weight-bold">{hours}</h4>
                      </div>
                      <small className="font-weight-bold text-white h6 text-uppercase">Hours</small>
                    </div>
      
                    <div className="countdown-container text-center">
                      <div className="bg-white text-dark border-radius-10  w-5 ">
                        <h4 className="p-4 text-center font-weight-bold">{minutes}</h4>
                      </div>
                      <small className="font-weight-bold text-white h6 text-uppercase">Minutes</small>
                    </div>
      
                    <div className="countdown-container text-center">
                      <div className="bg-white text-dark border-radius-10 w-5" >
                        <h4 className="p-4 text-center font-weight-bold">{seconds}</h4>
                      </div>
                      <small className="font-weight-bold text-white h6 text-uppercase">Seconds</small>
                    </div>
      
                  </div>
                
                  <div className="center-div">
                    <h5 className="text-center">
                      The countdown of airdrop and token Sale before listing on Pancakeswap
                    </h5>
                    <div className="pt-3 pb-3">
                      
                      <button className="custom-primary-btn center-div">
                        Claim Airdrop
                      </button>
      
                    </div>
      
                  </div>
                </Card>
              </div>
            
            </div>
          </div>
        </div>
  
  
      </section>
     
    </Wrapper>
   
   );
}
 
export default Airdrop;


