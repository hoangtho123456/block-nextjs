import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/WebDesignCard.module.css';
const WebCardImgLeft = ({
  classSpacing='',
  children
}) => {
  return (
    <div className={classSpacing}>
      <div className={styles["mg61"]}>
        <div className={`text-justify ${styles["item"]} ${styles["item-left"]}`}>
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.item_img}>
              <Image 
                src="/images/items/aconcept.jpeg"
                alt="Picture of the author"
                width={758}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <h2>Duis at eros sed mi posuere eleifend</h2>
                  <p>
                  Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebCardImgLeft;
