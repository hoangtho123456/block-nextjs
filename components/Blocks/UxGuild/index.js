import React from 'react';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const UxGuild = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <h2>UX/UI</h2>
          <div className={`desc2 ${styles["text1"]}`}>
            Est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
          </div>
        </div>
        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}>
                <i className="icm50 icon-t5"/>
              </p>
              <div className={styles["sec1"]}>
                <h3>Coder</h3>
              </div>
              <p className="text-justify">Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className="icm50 icon-20"/>
              </p>
              <div className={styles["sec1"]}>
                <h3>Marketer</h3>
              </div>
              <p className="text-justify">
                Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className="icm50 icon-t32"/></p>
              <div className={styles["sec1"]}>
                <h3>Analyser</h3>
              </div>
              <p className="text-justify">Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxGuild;
