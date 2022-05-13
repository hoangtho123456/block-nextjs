import React from 'react';

import styles from '../../GeneralStyles/ClientBanner.module.css';
const CroBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["wrap-ss"]}`}>
        <div className="container">
          <div className={styles.mg02}>
            <div className={styles.title1}>
              <h1>Test discord loriptim</h1>
            </div>
            <div className={styles.text}>
              Test loremp inpsump discord loriptim
            </div>
          </div>
        </div>
        <img className="imgsb" src="/images/bg-svg/08-01.svg" alt="img" />
      </div>
    </div>
  );
}

export default CroBanner;
