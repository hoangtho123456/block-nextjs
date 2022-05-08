import React from 'react';
import Link from 'next/link';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const HomeService = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <h2>Neque porro quisquam est qui dolorem ipsum quia!</h2>
          <div className={`desc2 ${styles["text1"]}`}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>
        </div>
        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t16"/></p>
              <div className={`${styles.sec1}`}>
                <Link href="/">
                  <a className={styles.url1}>
                    <h3>Lorem Ipsum</h3>
                  </a>
                </Link>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t18"/></p>
              <div className={`${styles.sec1}`}>
                <h3>Management website</h3>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t21"/></p>
              <div className={`${styles.sec1}`}>
                <Link href="/"><a className={styles.url1}>
                  <h3>SEO Service</h3></a></Link>
              </div>
              <p className="text-justify">
                Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
