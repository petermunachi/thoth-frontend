import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { secondaryColor, tertiaryColor } from '../utils/helpers';


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

const Wrapper = styled.section`
  padding: 2rem 0 7rem 0;

  .features {
    padding-top: 1.5rem;
  }
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

  @media only screen and (max-width: 56.25em) {
    padding: 0 0 3rem 0;

    .features {
      padding-top: 0;
    }

    .features .col-md-4 {
      padding-top: 1rem;
    }

    .feature-box__icon {
      font-size: 3rem;
    }

    .text-container h1 {
      font-size: 1.3rem;
    }



  }
`


const Features = () => {

  return (

    <Wrapper>

      <div id="features" className="container features">
        <HeaderWrapper>
          <small className="">Our Features</small>
          <h1 className="text-primary-gradient">Thoth Finance Features</h1>
        </HeaderWrapper>
  
        <div className="row">
          <div className="col-md-4">
            <Card backgroundColor="#ededed5c">
              <div className="">
                <i className="feature-box__icon bi bi-currency-exchange"></i>
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
                <i className="feature-box__icon bi bi-controller"></i>
              </div>
              <div className="text-container">
                <h1>Gaming</h1>
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
                <i className="feature-box__icon bi bi-basket-fill"></i>
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
          
        </div>
      
      </div>
    
    </Wrapper>
    
      
  )

}

export default Features;