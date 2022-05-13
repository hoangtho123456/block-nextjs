import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const AboutVision = ({
  classSpacing='section-t',
  children
}) => {
  return (
    <div className={`ss-radius-bottom ${styles["p-about"]} ${classSpacing}`}>
        <div className="container">
          <div className={`dl-table cols-2 ${styles["cols-2"]}`}>
            <article className={styles.divtext}>
              <h1 className={styles.title}>
                Where can I get some?
              </h1>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            </article>
            <div>
              <Image 
                src="/images/items/ux-2.jpg"
                alt="Picture of the author"
                width={540}
                height={567}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutVision;
