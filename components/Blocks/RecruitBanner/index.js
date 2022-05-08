import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const Banner = ({
  classSpacing='section-b',
  children}) => {
  return (
    <div className={`${styles.mg48} ${classSpacing}`}>
      <div className={styles["mg48_box1"]+" "+styles["mg48_box1-pt1"]}>
        <div className="container">
          <div className={styles["row-1"]}>
            <div className={"xstitle "+styles.xstitle}>
              <h1>TEST TITLE</h1>
            </div>
            <div className={"xldesc "+styles["xldesc"]}>
              Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo.
            </div>
          </div>
          <div className={`row section-b grid-space-60 ${styles["row-2"]} ${styles["box1"]}`}>
            <div className="col-sm-8 col-md-8">
              <p>Proin id mauris euismod, pulvinar neque ut, convallis mi. Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor.</p>
              <p>Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus</p>
            </div>
            <div className="col-sm-4 col-md-4">
              <Image 
                src="/images/items/join-our-team.png"
                alt="join-our-team"
                width={340}
                height={376}
                // layout="responsive"
              />
            </div>
          </div>   
        </div>
        <div className={styles.bgimg}>
          <img src="/images/07-04-1.png" alt="img" loading="lazy"/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
