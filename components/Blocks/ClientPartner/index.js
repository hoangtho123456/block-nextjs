import React from 'react';
// import Image from "next/image";
import styles from './style.module.css';

const Banner = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles["mg42"]} ${classSpacing}`}>
      <div className="container">
        <div className={`row ${styles["list"]}`}>
            {Array.apply(0, Array(10)).map(function (x, i) {
              return (
                <div className="col-xs-6 col-sm-4 col-md-3">
                  <div className={`tRes_68 ${styles.item}`}>
                    <img src="/images/items/logo-mb.png" 
                      alt="5-1-th-truemilk-2" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Banner;
