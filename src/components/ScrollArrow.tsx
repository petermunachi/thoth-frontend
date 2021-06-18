import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: .8rem;
  background-color: #ffffffba;
  text-align: center;
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  right: 2rem;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media only screen and (max-width: 56.25em) {
    padding: .2rem .5rem;
    width: 3rem;
    bottom: 15px;
    right: 1rem;
    
  }

`;
const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);


  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    }
  }, [showScroll])

  return (
    <Wrapper>
      <i onClick={scrollTop} className="text-primary-gradient font-2 bi bi-arrow-up-circle"></i>
    </Wrapper>
  )

}


export default ScrollArrow;