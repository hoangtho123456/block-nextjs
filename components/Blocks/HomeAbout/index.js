import React from 'react';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const About = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <div><h2>Lorem Ipsum</h2></div>
          <div className={`desc2 ${styles["text1"]}`}>
            "Neque porro quisquam est qui dolorem ipsum 
            quia dolor sit amet, consectetur, 
            adipisci velit..."
          </div>
        </div>

        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t11`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Lorem Ipsum</h3>
              </section>
              <p className="text-justify">
                It is a long established fact that a reader 
                will be distracted by the readable content 
                of a page when looking at its layout. 
                The point of using Lorem Ipsum is 
                that it has a more-or-less normal 
                distribution of letters, as opposed to 
                using 'Content here, content here', 
                making it look like readable English.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t42`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Lorem Ipsum</h3>
              </section>
              <p className="text-justify">
                Various versions have evolved over the years, 
                sometimes by accident, sometimes on 
                purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
