import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { secondaryColor, tertiaryColor } from '../utils/helpers';

const Wrapper = styled.section`
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

  ul {
    list-style: none;
  }
  ul li {
    display: inline-block;
    margin: 0 .8rem;
  }
`;

const Communities = () => {


  return (
    <Wrapper>
      <div className="container">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-md-6">
            <div className="">
              <h1>Join our Community</h1>
              <p>Get help, join the conversation, and learn more about Thoth Finance.</p>
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
          </div>
        </div>
      </div>
    </Wrapper>
  )

}


export default Communities;