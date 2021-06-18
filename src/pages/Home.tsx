import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { secondaryColor, tertiaryColor, primaryColor, blueColor } from '../utils/helpers';

// IMAGES
import BgBanner from "../assets/img/bg-banner-2.png";
import TableBg from "../assets/img/bg-1.svg";
import BannerImg from '../assets/img/illustration-6.svg';

// COMPONENTS
import TokenomicsFeaturesBox from '../components/TokenomicsFeaturesBox';
import DistributionTable from '../components/DistributionTable';
import Card from "../components/Card";

import Layout from "../components/Layout";

import Navbar from "../components/Navbar";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Airdrop from "../components/Airdrop";
import RoadMap from "../components/RoadMap";
import Footer from "../components/Footer";


const HeaderWrapper = styled.section`
  background-image: url(${BgBanner});
  background-size: cover;
  background-position: top;
  padding: 2rem .10rem;
  background-repeat: no-repeat;
  height: 80vh;
  
  .features small {
    font-size: 1.3rem;
    font-weight: bold;
    color: rgb(248, 112, 85);
  }

  @media only screen and (max-width: 56.25em) {
    padding: 0 0 2rem 0rem;
    height: 100vh;
  }
 
`;

const BannerWrapper = styled.div`
  padding: 3rem 0;

  .img-container{
    width: 90%;
  }


  .buttons-container {
    display: flex;
    align-items-center;
  }

  .buttons-container .airdrop-btn-container {
    margin-left: 1.2rem;
  }

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${secondaryColor};
  }

  p {
    color: ${tertiaryColor};
    font-size: 1.1rem;
    text-align: justify;
    padding: .8rem 0;
    font-weight: 500;

  }

  .ml-2 {
    margin-left: 1.2rem;
  }


  @media only screen and (max-width: 56.25em) {
    padding-bottom: 0;


    .img-container{
      display: none;
    }

    .text-container h1 {
      font-size: 2rem;
      text-align: center;
    }
    .text-container p {
      text-align: left;
    }

    .buttons-container {
      display: block;
      
    }

    .buttons-container .airdrop-btn-container {
      margin-left: 0;
    }

    .buttons-container a, .buttons-container button {
      display: block;
      text-align: center;
      
    }

    .buttons-container div {
      margin-bottom: 1rem;
    }


  }
`
const TokenomicsWrapper = styled.section`
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
    font-size: 1.2rem;
    color: ${primaryColor};
  }

  .pdf-link:hover {
    color: ${blueColor};
  }

  .distribute-container {
    background-image: url(${TableBg});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding: 2rem .10rem;
  }

  .distribute-container h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${secondaryColor};
    text-align: center;
  }

  .buttons-container {
    display: flex;
    align-items: center;
  }


  @media only screen and (max-width: 56.25em) {
    padding: 1rem 0;

    .tokenomics-box-container .col-md-4{
      margin-bottom: 2rem;
    }

    .docs-container {
      margin-top: 2rem;
    }

    .docs-container h1 {
      font-size: 1.5rem;
    }

    .docs-container .buttons-container {
      display: block;
    }

    .docs-container .buttons-container .pdf-container {
      margin-left: 0;
    }

    .docs-container .buttons-container a, .docs-container .buttons-container button {
      display: block;
      text-align: center;

    }

    .docs-container .buttons-container button {
      width: 100%;
    }

    .docs-container .buttons-container div {
      margin-bottom: .7rem;
    }

    .distribute-container {
      padding: 1rem .10rem;
    }

    .distribute-container h1 {
      font-size: 1.5rem;
    }



  }
  

`;

const TokenomicsHeaderWrapper = styled.div`
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

  @media only screen and (max-width: 56.25em) {
    margin-bottom: 2rem;

    h1 {
      font-size: 1.5rem;
    }
    small {
      font-size: 1rem;
    }
  }

  
 
`;


const CommunitiesWrapper = styled.section`
  padding: 5rem 0;

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2rem;
    color: ${secondaryColor};
  }

  p {
    color: ${tertiaryColor};
    font-size: 1.1rem;
    text-align: justify;
    padding: .8rem 0;

  }

  .pdf-container {
    margin-left: 1.2rem;
  }

  .pdf-link {
    font-size: 1.2rem;
    color: ${primaryColor};
  }

  .pdf-link:hover {
    color: ${blueColor};
  }

  ul {
    list-style: none;
  }
  ul li {
    display: inline-block;
    margin: 0 .8rem;
  }

  .text-container-1 {
    display: flex;
    align-items: center
  }

  .text-container-2 {
    display: none;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 3rem 0;

    h1 {
      font-size: 1.5rem;
    }

    .pdf-link {
      font-size: 1rem;
    }

    .icon-container {
      margin-bottom: 2rem;
    }

    .icon-container .font-4 {
      font-size: 2rem;
    }

    .icon-container ul {
      padding: 0;
      margin: 1rem 0 0 0;
    }

    .text-container-2 {
      display: flex;
      align-items: center
    }
    
    .text-container-1 {
      display: none;
    }

  }
`;

const Home = () => {

  return(
    <Layout title="Home">
      <div className="home-container"> 
        <HeaderWrapper>
          <Navbar />
          <BannerWrapper>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="img-container">
                    <img alt="banner" src={BannerImg} width="100%" height="100%" />
                  </div>
                </div>
                <div className="col-md-5">

                  <div className="text-container">
                    <h1>A decentralised gaming and staking platform </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Quisquam consectetur voluptates natus,
                      doloremque facilis autem alias omnis inventore ab! Maiores, aliquam!</p>
                    <div className="buttons-container">
                      <div className="">
                        <Link to="/app" className="custom-primary-btn">Join the Thoth Token ICO</Link>
                      </div>
                      <div className="ml-2 airdrop-btn-container">
                        <NavLink to="#airdrop" className="custom-secondary-btn">Claim Airdrop</NavLink>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </BannerWrapper>

        </HeaderWrapper>
        <>
          <Clients />
          <Features />
          <Airdrop />
        </>
        <TokenomicsWrapper>
          <div id="tokenomics" className="pt-4">
            <div className="container">
              <TokenomicsHeaderWrapper>
                <small className="">Supply and demand characteristics of Thoth Token</small>
                <h1 className="text-primary-gradient">Tokenomics</h1>
              </TokenomicsHeaderWrapper>

              <div className="tokenomics-box-container">
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

                        <div className="buttons-container">
                          <div className="">
                            <Link to="/app" className="custom-primary-btn">Documentation</Link>
                          </div>
                          <div className="pdf-container">
                            <Link to="/app" className="pdf-link">
                              White Paper <i className="text-primary-gradient font-1 bi bi-file-pdf"></i>
                            </Link>
                            
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
        </TokenomicsWrapper>


        <RoadMap />
        
        <CommunitiesWrapper>
          <div className="container">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-md-6">
                <div className="">
                  <h1>Join our Community</h1>
                  <p>Get help, join the conversation, and learn more about Thoth Finance.</p>

                  <div className="text-container-1">
                    <div className="">
                      <Link to="/app" className="custom-primary-btn">Documentation</Link>
                    </div>
                    <div className="pdf-container">
                      <Link to="/app" className="pdf-link">
                        White Paper <i className="text-primary-gradient font-1 bi bi-file-pdf"></i>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-container">
                  <ul>
                    <li>
                      <Link to="/">
                        <div>
                          <i className="text-primary-gradient font-4 bi bi-telegram"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div>
                          <i className="text-primary-gradient font-4 bi bi-twitter"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div>
                          <i className="text-primary-gradient font-4 bi bi-github"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div>
                          <i className="text-primary-gradient font-4 bi bi-reddit"></i>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div>
                          <i className="text-primary-gradient font-4 bi bi-facebook"></i>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              
              
                <div className="text-container-2">
                  <div className="">
                    <Link to="/app" className="custom-primary-btn">Documentation</Link>
                  </div>
                  <div className="pdf-container">
                    <Link to="/app" className="pdf-link">
                      White Paper <i className="text-primary-gradient font-1 bi bi-file-pdf"></i>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </CommunitiesWrapper>

        <Footer />
  
      </div>
    </Layout>
  )
    
}

export default Home;