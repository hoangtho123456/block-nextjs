import React from 'react';

import styles from '../../GeneralStyles/TeamIntro.module.css';
const EcomIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <section className={`${styles["mg55"]}`}>
        <div className="container">  
          <div className={`largedesc ${styles.largedesc}`}>
            <div className={styles.img}>
              <img src="/images/img-svg/img-15.svg" alt="img" />
            </div>
            <p style={{marginBottom:0}}>
              Cung cấp giải pháp thương mại điện tử toàn diện 
              cho doanh nghiệp của bạn
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EcomIntro;
