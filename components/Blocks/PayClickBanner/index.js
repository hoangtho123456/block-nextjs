import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const PayClickBanner = ({
  classSpacing='',
  children}) => {
  return (
    <div className={`page-desc ss-radius-bottom2-2 ${styles["p-gl1"]} ${classSpacing}`}>
      <div className="container">
        <p className="text-center">
          <Image 
            src="/images/items/google.png"
            alt="Picture"
            width={177}
            height={59}
          />
        </p>
        <h1 className="page-title" />
        <h1>Loremp Ipsump Tip Info</h1>
        <div className="desc-sm">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
      </div>
      <div className="imgbg middle">
        <img
          src="/images/new-bg/4.jpg"
          alt="alt"
        />
      </div>
    </div>
  );
}

export default PayClickBanner;
