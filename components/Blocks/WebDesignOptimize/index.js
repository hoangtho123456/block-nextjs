import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/AboutVision.module.css';
const WebDesignOptimize = ({
  classSpacing='section-t',
  children
}) => {
  return (
    <div className={`${styles["mg10"]} ${classSpacing}`}>
      <div className="container">
        <div className="row grid-space-80">
          <div className={`col-sm-5 ${styles["col-1"]}`}>
            <div className={styles["item"]}>
              <div className={styles["img"]}>
                <Image 
                  src="/images/items/speed-a.jpeg"
                  alt="Picture of the author"
                  width={328}
                  height={246}
                  layout="responsive"
                />
              </div>
              <div>
                <p>Curabitur sit amet neque rat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. </p>
              </div>
            </div>
          </div>
          <article className={`col-sm-7 ${styles["col-2"]}`}>
            <div className={styles.title}>
              <h2>Optimize page speed</h2>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t23" />
                <div className={styles.title}>
                  <h3>AMP web development</h3>
                </div>
              </div>
              <div>
                <p>Sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. </p>
              </div>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t14" />
                <div className={styles.title}><h3>PWA</h3></div>
              </div>
              <div>
                <p>PWA Curabitur sit amet neque rhoncus sem blandit accumsan mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper.</p>
              </div>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t20" />
                <div className={styles.title}>
                  <h3>Marketing team</h3>
                </div>
              </div>
              <div>
                <p>Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default WebDesignOptimize;
