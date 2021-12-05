import React from 'react';

import styles from '../../GeneralStyles/AboutBanner.module.css';
const Banner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`page-desc ss-radius-bottom2-2 full ${styles.mg63}`}>
        <div className="container">
          <section className={`page-title ${styles["title"]}`}>
            <h1>Về MangoAds</h1>
          </section>
          <div className={"desc "+styles.desc}>
            Giải pháp công nghệ toàn diện cho doanh nghiệp của bạn
          </div>
        </div>
        <div className={`imgbg ${styles.imgbg}`}></div>
      </div>
    </div>
  );
}

export default Banner;
