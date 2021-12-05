import React from 'react';

import styles from '../../GeneralStyles/AboutBanner.module.css';
const EnterpriseBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`page-desc ss-radius-bottom2-2 full ${styles.mg63} ${styles["mg63-bg4"]}`}>
        <div className="container">
          <section className={`page-title ${styles["title"]}`}>
            <h1>SEO for enterprise</h1>
          </section>
          <div className={"desc "+styles.desc}>
            SEO cho các doanh nghiệp lớn đòi hỏi 
            những bước tối ưu phức tạp hơn
          </div>
        </div>
        <div className={`imgbg ${styles['imgbg']} ${styles['bg-3']}`}></div>
      </div>
    </div>
  );
}

export default EnterpriseBanner;
