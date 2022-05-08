import React from 'react';
// import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const EmailCardImgRight = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/mga-3.jpg"
                alt="Picture"
                width={536}
                height={402}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h3>Strategy</h3>
                    <div>
                      <p>Proin id mauris euismod, pulvinar neque ut, convallis mi. Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailCardImgRight;
