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
              Posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamIntro;
