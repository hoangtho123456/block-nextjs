import React from 'react';

const WebDesignBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`c-banner1 c-banner1--type1 page-desc ss-radius-bottom2-2`}>
        <div className="container">
          <div className="desc34">Phasellus blandit mi ut massa pulvinar</div>
          <h1 className="page-title">Phasellus blandit mi ut massa pulvinar Phasellus blandit mi ut massa pulvinar</h1>
        </div>
        <div className="imgbg">
          <img src="/images/bg-svg/04-01.svg" alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default WebDesignBanner;
