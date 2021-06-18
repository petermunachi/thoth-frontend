import React from 'react';
import DoubleBorderCard from './DoubleBorderCard';



const TokenomicsFeaturesBox = () => {

  return (
    <>
      <div className="col-md-4">
        <div className="white-space-nowrap">
          <DoubleBorderCard width="90%">
            <div className="d-flex align-items-center">
              <h4 className="tokenomics_icon">
                <i className=" bi bi-wallet"></i>
              </h4>
              <div className="text-container">
                <h3 className="">Max Supply</h3>
                <p>THT Tokens : 510,000,000</p>
              </div>
            </div>
          </DoubleBorderCard>
        </div>
      </div>

      <div className="col-md-4">
        <div className="white-space-nowrap">
          <DoubleBorderCard width="90%">
            <div className="d-flex align-items-center">
              <h4 className="tokenomics_icon">
                <i className="bi bi-building"></i>
              </h4>
              <div className="text-container">
                <h3 className="">Current Phase</h3>
                <p>1 out of 20</p>
              </div>
            </div>
          </DoubleBorderCard>
        </div>
      </div>

      <div className="col-md-4">
        <div className="white-space-nowrap">
          <DoubleBorderCard width="90%">
            <div className="d-flex align-items-center">
              <h4 className="tokenomics_icon">
                <i className="bi bi-view-stacked"></i>
              </h4>
              <div className="text-container">
                <h3 className="">Block Explorer</h3>
                <p>BSC Scan : View </p>
              </div>
            </div>
          </DoubleBorderCard>
        </div>
      </div>
    </>
  )

}

export default TokenomicsFeaturesBox;