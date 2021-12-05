import React from 'react';

// import styles from './style.module.css';
const Banner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`c-banner1 c-banner1--type1 page-desc ss-radius-bottom2-2`}>
        <div className="container">
          <div className="desc34">Chào mừng bạn đến với</div>
          <h1 className="page-title">Product Team</h1>
        </div>
        <div className="imgbg">
          <img src="/images/bg-svg/04-01.svg" alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
