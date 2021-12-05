import React from 'react';

import styles from '../../GeneralStyles/TeamIntro.module.css';
const TeamIntro = ({
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
              Chúng tôi là đội ngũ kết nối liên kết mọi vận hành 
              và xây dựng sản phẩm của tập thể MangoAds
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamIntro;
