import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const UxBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles.mg31} ${styles.mg311} ${styles["mg311-bg3"]}`}>
        <div className="container">
          <div className={`page-desc ${styles["page-desc"]}`}>
            <h1>UX/UI DESIGN</h1>
            <div className={`desc ${styles.desc}`}>
              Dịch vụ thiết kế UX / UI cho website/app tại MangoAds
            </div>
          </div>
          <div className={`${styles.largeimg}`}>
            <Image 
              src="/images/items/ux-banner.png"
              alt="hinh-ux-ui"
              width={1140}
              height={570}
              layout="responsive"
            />
          </div>
        </div>
        <div className={`${styles.imgbg}`}>
          <img className="imgsb" 
            src="/images/bg-svg/10-01.png" alt="img"
            loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default UxBanner;
