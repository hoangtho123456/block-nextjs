import React from 'react';

import styles from '../../GeneralStyles/AboutBanner.module.css';
const SeoBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`page-desc ss-radius-bottom2-2 full ${styles.mg63} ${styles["mg63-bg4"]}`}>
        <div className="container">
          <section className={`page-title ${styles["title"]}`}>
            SEO cho website
          </section>
          <div className={"desc "+styles.desc}>
            Tăng sự hiện diện của website trên kết quả tìm kiếm Google
          </div>
        </div>
        <div className={`imgbg ${styles['imgbg']} ${styles['bg-4']}`}></div>
      </div>
    </div>
  );
}

export default SeoBanner;
