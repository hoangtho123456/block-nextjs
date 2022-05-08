import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/AboutVision.module.css';
const AboutVision = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className="row grid-space-80">
          <div className={`col-sm-5 ${styles["col-1"]}`}>
            <div className={styles["item"]}>
              <div className={styles["img"]}>
                <Image 
                  src="/images/items/logo-mb.png"
                  alt="Picture of the author"
                  width={219}
                  height={149}
                />
              </div>
              <div className="text-justify">
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Contrary to popular belief, <strong>Lorem Ipsum</strong> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
              </div>
            </div>
          </div>
          <article className={`col-sm-7 ${styles["col-2"]}`}>
            <div className={styles.title}>
              <h2>Lorem ipsump</h2>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t10"></i>
                <div className={styles.title}>
                  <h3>Lorem ipsump FIRST</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <ul>
                  <li>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</li>
                  <li>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC</li>
                </ul>
              </div>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t11"></i>
                <div className={styles.title}>
                  <h3>Vision</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>Richard McClintock, a Latin professor</p>
                <ul>
                  <li> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
                  <li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default AboutVision;
