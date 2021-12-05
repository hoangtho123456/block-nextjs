import React from 'react';

import styles from '../../GeneralStyles/ClientBanner.module.css';
const Banner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["wrap-ss"]}`}>
        <div className="container">
          <div className={styles.mg02}>
            <div className={styles.title1}>
              Khách hàng của <span className="cl1">MangoAds</span></div>
            <div className={styles.text}>Doanh nghiệp đối tác</div>
          </div>
        </div>
        <img className="imgsb" src="/images/bg-svg/08-01.svg" alt="img" />
      </div>
    </div>
  );
}

export default Banner;
