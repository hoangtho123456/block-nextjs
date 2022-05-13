import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const AboutIntro = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>Lorem Ipsump Test Dev</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
