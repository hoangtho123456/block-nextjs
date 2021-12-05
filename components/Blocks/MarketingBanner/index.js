import React from 'react';

import styles from '../../GeneralStyles/ClientBanner.module.css';
const MarketingBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["wrap-ss"]}`}>
        <div className="container">
          <div className={styles.mg02}>
            <div className={styles.title1}>
              <h1>Dịch vụ <span className="cl1">content marketing</span></h1>
            </div>
            <div className={styles.text}>TẠI MANGOADS</div>
          </div>
        </div>
        <img className="imgsb" src="/images/bg-svg/08-01.svg" alt="img" />
      </div>
    </div>
  );
}

export default MarketingBanner;
