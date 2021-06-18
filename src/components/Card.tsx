import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  bgColor: string | undefined;
  borderRadius: string | undefined;
}

type Props = {
  children: any;
  backgroundColor?: string;
  borderRadius?: string;
}

const Wrapper = styled.section<WrapperProps>`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2rem;
  background-color: ${({bgColor}) => bgColor || "#fff"};
  border-radius: ${({ borderRadius }) => borderRadius || "none"};
  
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media only screen and (max-width: 56.25em) {
    padding: 1rem;
  }

`;

const Card: React.FC<Props> = ({ backgroundColor, borderRadius, children }) => {

  return(
    <Wrapper borderRadius={borderRadius} bgColor={backgroundColor}>
      {children}
    </Wrapper>
              
  )
    
}

export default Card;