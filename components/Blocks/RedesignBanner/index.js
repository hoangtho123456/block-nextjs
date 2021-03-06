import React from 'react';

const RedesignBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`c-banner1 c-banner1--type1 page-desc ss-radius-bottom2-2`}>
        <div className="container">
          <div className="desc34">Est risus bibendum libero</div>
          <h1 className="page-title">Phasellus blandit mi</h1>
        </div>
        <div className="imgbg">
          <img src="/images/bg-svg/04-01.svg" alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default RedesignBanner;
