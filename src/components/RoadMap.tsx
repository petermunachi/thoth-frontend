import React from 'react';
import styled from 'styled-components';
import DoubleBorderCard from './DoubleBorderCard';
import Layout from './Layout';
import { primaryColor, secondaryColor, tertiaryColor } from '../utils/helpers';
import BgBannerRotate from "../assets/img/bg-banner-rotate.png";



const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 5rem;
  background-image: url(${BgBannerRotate});

  small {
    color: ${tertiaryColor};
  }

  .roadmap-box h1 {
    color: ${primaryColor};
  }

`;
const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  small {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${secondaryColor};
    display: block;
  }

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.3rem;
  }


  
 
`;

const RoadMap = () => {
  return (
    <Layout title="Roadmap">

      <Wrapper>
        <section id="roadmap" className="roadmap">
          <div className="container">
            <HeaderWrapper>
              <small>Our short and long term goals</small>
              <h1 className="text-primary-gradient">Our RoadMap</h1>
            </HeaderWrapper>
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-12" data-aos="fade-up" data-aos-delay="100">
                <DoubleBorderCard>
                  
                  <div className="roadmap-box">
                    <h1 className="h3 text-center pb-2">Q4 2021</h1>
                    <div className="d-flex align-items-center">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Project launched .</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Thoth Protocol Contract.</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Airdrop for THT Tokens to consumers.</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Announcing partnership and token distribution IFO/IEO/ICO. </small>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Staking pool goes live, First game goes live.</small>
                    </div>
    
                  </div>
    
                </DoubleBorderCard>
              </div>
    
              <div className="col-md-4 col-sm-12">
                <DoubleBorderCard>
                  <div className="roadmap-box">
                    <h1 className="h3 text-center pb-2">Q1 2022</h1>
                    <div className="d-flex ">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Major exchange listing.</small>
                    </div>
                  </div>
                </DoubleBorderCard>
                <br />
                <DoubleBorderCard>
                  <div className="roadmap-box">
                    <h1 className="h3 text-center pb-2">Q2 2022</h1>
                    <div className="d-flex align-items-center">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>V2 goes life with updated features and more games.</small>
                    </div>
                  </div>
                </DoubleBorderCard>
              </div>
    
              <div className="col-md-4 col-sm-12">
                <DoubleBorderCard>
                  <div className="roadmap-box h-25rem">
                    <h1 className="h3 text-center pb-2">Q3 2022</h1>
                    <div className="d-flex ">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>Announcing big partnership.</small>
                    </div>
                  </div>
                </DoubleBorderCard>
                <br />
                <DoubleBorderCard>
                  <div className="roadmap-box h-25rem">
                    <h1 className="h3 text-center pb-2">Q4 2022</h1>
                    <div className="d-flex ">
                      <h4  className="font-2"><i className=" text-primary-gradient bi bi-lock-fill"></i></h4>
                      <small>New features/activities goes live.</small>
                    </div>
                  </div>
                </DoubleBorderCard>
              </div>
    
              
    
            </div>
          </div>
        </section>
       
      </Wrapper>
    
    
    </Layout>
  );
}

export default RoadMap;