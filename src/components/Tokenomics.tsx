import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryColor, secondaryColor, tertiaryColor } from '../utils/helpers';
import TokenomicsFeaturesBox from './TokenomicsFeaturesBox';
import DistributionTable from './DistributionTable';
import Layout from './Layout';
import TableBg from "../assets/img/bg-1.svg";

import Card from './Card';

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;

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

  p {
    color: ${tertiaryColor};
    font-size: 1.1rem;
  }

  
 
`;

const Wrapper = styled.section`
  padding: 5rem 0;

  .text-container {
    margin-left: 1rem;
  }
  .text-container h3 {
    color: ${secondaryColor};
    font-size: 1.1rem;
  }
  .text-container p {
    color: ${secondaryColor};
    font-size: 1rem;
  }

  .docs-container {
    margin-top: 8rem;
  }

  .docs-container h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1.7rem;
    color: ${secondaryColor};
  }

  .docs-text-container {
    padding: 1rem;
  }

  .pdf-container {
    margin-left: 1.2rem;
  }

  .pdf-link {
    color: ${primaryColor};
    font-size: 1.2rem;
  }

  .distribute-container {
    background-image: url(${TableBg});
    background-size: cover;
    background-position: top;
    padding: 2rem .10rem;
  }

  .distribute-container h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${secondaryColor};
    text-align: center;
  }
  

`;


const Tokenomics = () => {

  return (
    <Layout title="Tokenomics">

      <Wrapper>
        <div id="tokenomics" className="pt-4">
          <div className="container">
            <HeaderWrapper>
              <small className="">Supply and demand characteristics of Thoth Token</small>
              <h1 className="text-primary-gradient">Tokenomics</h1>
            </HeaderWrapper>
  
            <div className="">
              <div className="row">
                <TokenomicsFeaturesBox />
              </div>
            </div>
            
            <div className="docs-container">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <Card borderRadius="20px">
                    <div className="docs-text-container">
                      <h1 className="text-capitalize">documentation and white paper </h1>
                      <p className="my-3">Learn more about Thoth Token (THT) in the documentation and white paper</p>
  
                      <div className="d-flex align-items-center">
                        <div className="">
                          <Link to="/app" className="custom-primary-btn">Documentation</Link>
                        </div>
                        <div className="pdf-container">
                          <Link to="/app" className="pdf-link">White Paper</Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
  
            </div>
  
            
          </div>
        
  
          <div className="distribute-container">
            <div className="container-fluid mt-5">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <h1>Token Distribution</h1>
                  <Card backgroundColor="#ffffff17" >
                    <div className="table-responsive-sm py-5">
                      <DistributionTable />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
  
        
        </div>
      </Wrapper>
    
    
    </Layout>
  )

}


export default Tokenomics;