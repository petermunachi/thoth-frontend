import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor, secondaryColor, tertiaryColor } from '../utils/helpers';
import BgFooter from "../assets/img/bg-banner-flat-2.png";

const FooterWrapper = styled.footer`
  background-image: url(${BgFooter});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding: 3rem 0 1rem 0;

  .row h1 {
    color: ${primaryColor};
    text-transform: capitalize;
    font-weight: bold;
  }

  .row h2 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${primaryColor}
  }

  .row h1, h2 {
    font-size: 1.5rem;
  }

  .row p {
    color: ${tertiaryColor}
  }

  .row .mail-text {
    color: ${secondaryColor}
  }

  .quick-link-text {
    padding-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding-bottom: .5rem;
  }

  ul li a {
    text-decoration: none;
    color: ${secondaryColor};
    font-weight: 600;
  }

  ul li a:hover, .mail-text:hover {
    color: ${primaryColor};
  }


  .copyright-text {
    padding: 5rem 0 3rem 0;
    font-size: 1.2rem;
    color: ${secondaryColor}
  }

  @media only screen and (max-width: 56.25em) {
    .col-md-4 {
      margin-bottom: 2.5rem;
    }

    .row h2 {
      font-size: 2rem;
    }

    .copyright-text {
      padding: 0 0 1.5rem 0;
      font-size: 1rem;
    }
  }



  
`;


const Footer = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FooterWrapper>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo-container">
              <h2 className="">Thoth Finance</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id corrupti et labore eaque, voluptate, modi neque soluta ducimus veritatis voluptatem laborum.
              </p>
              <div className="mt-4">
                <Link to="/app" className="custom-secondary-btn">Join the Thoth Token ICO</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h1 className="quick-link-text">Quick Links</h1>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/home#road-map">Road Map</Link></li>
              <li><Link to="/home#tokenomics">Tokenomics</Link></li>
              <li><Link to="/home#features">Our Features</Link></li>
              <li><Link to="/documentation">Documentation</Link></li>
              <li><Link to="/whitepaper">White Paper</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <h1>Launch Thoth finance</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta ab saepe, animi consectetur
              </p>
              <div className="mt-4">
                <Link to="/app" className="custom-primary-btn">Launch App</Link>
              </div>

            </div>
            <div className="mt-5">
              <h1>Get in touch with us</h1>
              <div className="d-flex align-items-center">
                <h4><i className="font-2 text-primary-gradient bi bi-mailbox2"></i></h4>
                <h6 className="mx-2">
                  <Link 
                    to="mailto:hello@thoth.finanace?subject=Contacting Thoth finance"
                    className="mail-text"
                  >
                    hello@thoth.finanace
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      
        <h3 className="text-center copyright-text">Thoth Finance, Copyright &copy; {currentYear}. All Rights Reserved.</h3>
      </div>

    </FooterWrapper>
  )

}

export default Footer;
