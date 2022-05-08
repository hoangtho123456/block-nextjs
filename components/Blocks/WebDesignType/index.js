import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxImportant.module.css';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1199, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
  },
  largeMobile: {
    breakpoint: { max: 767, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const WebDesignType = ({
  classSpacing='section-t',
  deviceType,
  children
}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg06"]}`}>
        <div className="container">
          <section className={`section-header ${styles["header"]}`}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit MB.</h2>
            <div className={`desc ${styles.desc}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
            </div>
          </section>
          {deviceType == "desktop" ? (
          <Carousel 
            responsive={responsive} 
            autoPlay={false}
            containerClass={`c-carousel1 ${styles["teamSlider"]}`}>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Nullam dignissim pretium leo ac ultrices.</h3>
                </a>
                <div className="text-justify">
                  Lorem ipsum honcus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.</h3></a>
                <div className="text-justify">
                  Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
                </div>
              </div>
            </div>
          </Carousel>
          ) : (
            <div className={styles["teamSlider"]}>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Nullam dignissim pretium leo ac ultrices.</h3>
                  </a>
                  <div className="text-justify">
                    Lorem ipsum honcus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.</h3></a>
                  <div className="text-justify">
                    Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WebDesignType;
