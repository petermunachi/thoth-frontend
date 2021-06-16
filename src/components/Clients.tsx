import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import JulswapLogo from '../assets/partners-img/logo-julswap.png';
import InchLogo from '../assets/partners-img/logo-inch.png';
import CointelegraphLogo from '../assets/partners-img/logo-cointelegraph.png';
import PancakeswapLogo from '../assets/partners-img/logo-pancakeswap.png';

const Wrapper = styled.section`

  .swiper-wrapper{
    align-items: center;
  }
  .img-container{
    width: 60%;
  }
`

const Clients = () => {
  return (
    <Wrapper>
      <div className="container mt-3 mb-5">
      
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          autoplay={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints = {{
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
        >
          <SwiperSlide>
            <div className="img-container">
              <img src={JulswapLogo} width="100%" height="100%" alt="Julswap logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={CointelegraphLogo} width="100%" height="100%" alt="Cointelegraph Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={InchLogo} width="100%" height="100%" alt="" data-aos="zoom-in" data-aos-delay="500" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={PancakeswapLogo} width="100%" height="100%" alt="" data-aos="zoom-in" data-aos-delay="500" />
            </div>
          </SwiperSlide>
        </Swiper>
        
  
      </div>
    </Wrapper>

  );
};

export default Clients;
