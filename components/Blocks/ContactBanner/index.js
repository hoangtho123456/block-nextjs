import React from 'react';

import styles from '../../GeneralStyles/AboutBanner.module.css';
const Banner = ({
  classSpacing='',
  layout='pageContact',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`page-desc full ss-radius-bottom2-2 c-banner2 ${styles.mg63}`}>
        <div className={"container"}>  
          {layout==='pageContact'?(
            <section className={styles.divtext}>
              <h1 className={styles["title"]}>Contact Loremp Ipsump</h1>
              <div className={"desc "+styles.desc}>
                Loremp Ipsump Tester
                </div>
            </section>
          ):(
            <>
              <h1 className={styles["title"]}>Loremp Ipsump Contact</h1>
              <div className={"desc "+styles.desc}>
                Loremp Ipsump Tester
              </div>
            </>
          )}
        </div>
        <div className={`imgbg ${styles.imgbg}`}></div>
      </div>
    </div>
  );
}

export default Banner;
