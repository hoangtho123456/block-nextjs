import React from 'react';

import styles from '../../GeneralStyles/PayClickService.module.css';
const PayClickService = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles["mg62"]} ${classSpacing}`}>
      <div className={`container ${styles.container}`}>
        <section className={`section-header ${styles["header"]}`}>
          <h2>Dịch vụ PPC trên nền tảng Google Ads</h2>
          <div className="desc">
            Chúng tôi cung cấp đa dạng các loại dịch vụ PPC trên nền tảng
            Google Ads và Ad Network.
          </div>
        </section>
        <div className={`${styles["slide1-sp"]} th-slider1-js`}>
          <div className={`${styles["row-1"]} inner1-js`}>
            <div className={`${styles.width} item1-js`}>
              <a href="javascript:void(0)" className={`tRes ${styles.item}`}>
                <div className={styles.text}>
                  <div className={`icm50 ${styles.img}`}>
                    <i className="icon-t7" />
                  </div>
                  <div className={styles.title}>
                    <h3>
                      Google Ads <br />
                      (Search)
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div className={`${styles.width} item1-js`}>
              <a href="javascript:void(0)" className={`tRes ${styles.item}`}>
                <div className={styles.text}>
                  <div className={`icm50 ${styles.img}`}>
                    <i className="icon-t42" />
                  </div>
                  <div className={styles.title}>
                    <h3>
                      Google Display <br />
                      (GDN)
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div className={`${styles.width} item1-js`}>
              <a href="javascript:void(0)" className={`tRes ${styles.item}`}>
                <div className={styles.text}>
                  <div className={`icm50 ${styles.img}`}>
                    <i className="icon-t56" />
                  </div>
                  <div className={styles.title}>
                    <h3>Google Shopping</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className={`${styles.width} item1-js`}>
              <a href="javascript:void(0)" className={`tRes ${styles.item}`}>
                <div className={styles.text}>
                  <div className={`icm50 ${styles.img}`}>
                    <i className="icon-t41" />
                  </div>
                  <div className={styles.title}>
                    <h3>YouTube Ads</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className={`${styles.width} item1-js`}>
              <a href="javascript:void(0)" className={`tRes ${styles.item}`}>
                <div className={styles.text}>
                  <div className={`icm50 ${styles.img}`}>
                    <i className="icon-t55" />
                  </div>
                  <div className={styles.title}>
                    <h3>Remarketing</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayClickService;
