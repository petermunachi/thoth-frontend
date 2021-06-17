import React from 'react';
import styled from 'styled-components';
import { secondaryColor } from '../utils/helpers';

type WrapperProps = {
  bgColor: string | undefined;
  width: string | undefined;
}

type Props = {
  children: any;
  backgroundColor?: string;
  width?: string;
}

const Wrapper = styled.section<WrapperProps>`
  border: 2px solid ${secondaryColor};
  border-radius: 20px;
  transition: 0.3s;
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  width: ${({ width }) => width || "100%"};
  position: relative;

  ::after {
    content: "";
    border-radius: 20px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 13px;
    left: 13px;
    border-bottom: 2px solid ${secondaryColor};
    border-right: 2px solid ${secondaryColor};
  }
  
  

`;

const DoubleBorderCard: React.FC<Props> = ({ backgroundColor, width, children }) => {

  return (
    <Wrapper width={width} bgColor={backgroundColor}>
      {children}
    </Wrapper>

  )

}

export default DoubleBorderCard;