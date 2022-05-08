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
            <h1>About Block Test</h1>
          </section>
          <div className={"desc "+styles.desc}>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className={`imgbg ${styles.imgbg}`}></div>
      </div>
    </div>
  );
}

export default Banner;
