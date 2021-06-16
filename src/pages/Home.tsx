import React from 'react';

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Airdrop from "../components/Airdrop";
import styled from 'styled-components';
import BgBanner from "../assets/img/bg-banner.png";


const Wrapper = styled.section`
  background-image: url(${BgBanner});
  background-size: cover;
  background-position: top;
  padding: 2rem .10rem;
  height: 80vh;
  
  .features small {
    font-size: 1.3rem;
    font-weight: bold;
    color: rgb(248, 112, 85);
  }
 
`;

const Home = () => {

  return(
    <Layout title="Home">
      <div className="home-container"> 
        <Wrapper>
          <Navbar />
          <Banner />
        </Wrapper>

        <Clients />

        <Features />
        <Airdrop />
  
        <Footer />
      </div>
    </Layout>
  )
    
}

export default Home;