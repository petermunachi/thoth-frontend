import React from 'react';
import styled from 'styled-components';
import { tertiaryColor, primaryColor } from '../utils/helpers';

const Wrapper = styled.section`
  
  table th {
    color: ${primaryColor};
    font-size: 1.3rem;
    padding: 1.2rem .5rem;
  }

  td {
    color: ${tertiaryColor};
    font-size: 1rem;
    padding: 1rem .5rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 56.25em) {
    table th {
      font-size: 1.1rem;
      padding: 1rem;
      text-align: center;
      white-space: nowrap;
    }

    td {
      color: ${tertiaryColor};
      font-size: .9rem;
      padding: .5rem;
      font-weight: 500;
    }
  }
`;

const DistributionTable = () => {


  return (
    <Wrapper>
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Allocation</th>
            <th scope="col">THT Tokens</th>
            <th scope="col">Percentage</th>
            <th scope="col">Vested</th>
            <th scope="col">TimeLock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seed supporters</td>
            <td>7,000,000 THT</td>
            <td>7%</td>
            <td>True</td>
            <td>10% unlocked after ICO <br /> 90% over 2 years</td>
          </tr>
          <tr>
            <td>Private-sale participants</td>
            <td>2,000,000 THT</td>
            <td>2%</td>
            <td>True</td>
            <td>25% unlocked after ICO <br /> 75% over 6 months</td>
          </tr>
          <tr>
            <td>Team and advisors</td>
            <td>11,000,000 THT</td>
            <td>11%</td>
            <td>True</td>
            <td>100% after 4 years from ICO</td>
          </tr>
          <tr>
            <td>Strategic Partnerships</td>
            <td>9,000,000 THT</td>
            <td>9%</td>
            <td>True</td>
            <td>
              Tokens are released over a period <br /> no less than 48 months.
              <br /> Further details to be announced.
            </td>
          </tr>
          <tr>
            <td>Strategic Ecosystem <br /> grant pool</td>
            <td>7,000,000 THT</td>
            <td>7%</td>
            <td>True</td>
            <td>
              Tokens are released over a period no <br /> less than 48 months.
              <br /> Further details to be announced.
            </td>
          </tr>
          <tr>
            <td>Public-sale participants <br /> (ICO)</td>
            <td>64,000,000 THT</td>
            <td>64%</td>
            <td>True</td>
            <td>
              Sold at $0.20 - $4.20 <br /> Tokens are locked until ICO ends
              <br /> Unsold tokens will be burned.
            </td>
          </tr>
          
        </tbody>
      </table>

    </Wrapper>  

  );
}


export default DistributionTable;

