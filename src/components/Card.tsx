import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  bgColor: string;
}

type Props = {
  children: any;
  backgroundColor: string;
}

const Wrapper = styled.section<WrapperProps>`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2rem;
  background-color: ${({bgColor}) => bgColor || "#fff"};
  
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

`;

const Card: React.FC<Props> = ({ backgroundColor, children }) => {

  return(
    <Wrapper bgColor={backgroundColor}>
      {children}
    </Wrapper>
              
  )
    
}

export default Card;