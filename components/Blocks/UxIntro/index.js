import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const UxIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>UI/UX</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor.</p>
              <p>Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxIntro;
