import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const PayClickWhy = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg28} ${classSpacing}`}>
      <div className="container">
        <h2 className={styles.mg28_title}>
          Cras ac nunc sem. In aliquam mauris vel risus pharetra
        </h2>
        <div className="row">
          <div className="col-md-5 col-lg-4">
            <div className={styles["item"]}>
              <div className={`${styles["inner"]}`}>
                <Image 
                  src="/images/items/click-design.jpg"
                  alt="Picture of the author"
                  width={360}
                  height={251}
                />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="b">
              Cras ac nunc sem. In aliquam mauris vel risus pharetra
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t2" />
                  </div>
                  <div className={styles.text}>
                    Mauris nec bibendum diam. Maecenas non leo ornare
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t21" />
                  </div>
                  <div className={styles.text}>Mauris nec bibendum diam.</div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t32" />
                  </div>
                  <div className={styles.text}>
                    Quisque ut faucibus arcu. Fusce eget diam sollicitudin, 
                    blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t49" />
                  </div>
                  <div className={styles.text}>
                    Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t26" />
                  </div>
                  <div className={styles.text}>Quisque ut et volutpat ante tristique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayClickWhy;
