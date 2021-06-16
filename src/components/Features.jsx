import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { primaryColor, secondaryColor, tertiaryColor } from '../utils/helpers';

const HeaderWrapper = styled.section`
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
  padding: 2rem 0 7rem 0;


  .text-container h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    color: ${secondaryColor};
  }
  .text-container p {
    color: ${tertiaryColor};
    font-weight: 500;
  }
`


const Features = () => {

  return (
    <Wrapper>

      <div id="features" className="container pt-4">
        <HeaderWrapper>
          <small className="">Our Features</small>
          <h1 className="text-primary-gradient">Thoth Finance Features</h1>
        </HeaderWrapper>
  
        <div className="row">
          <div className="col-md-4">
            <Card backgroundColor="#ededed5c">
              <div className="">
                <i className="feature-box__icon icon-basic-compass"></i>
              </div>
              <div className="text-container">
                <h1>Swap your tokens</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo unde eius esse quod nesciunt molestia.
                </p>         
              </div>
            </Card>
          
          </div>
          <div className="col-md-4">
            <Card>
              <div className="">
                <i className="feature-box__icon icon-basic-map"></i>
              </div>
              <div className="text-container">
                <h1>Staking Pool</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo unde eius esse quod nesciunt molestia.
                </p>         
              </div>
            </Card>
          
          </div>
          <div className="col-md-4">
            <Card backgroundColor="#ededed5c">
              <div className="">
                <i className="feature-box__icon icon-basic-compass"></i>
              </div>
              <div className="text-container">
                <h1>Lottory</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo unde eius esse quod nesciunt molestia.
                </p>         
              </div>
            </Card>
          
          </div>
        </div>
      
      </div>
    
    </Wrapper>
  )

}

export default Features;