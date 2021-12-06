import React from 'react';
import styles from './style.module.css';
const Banner = ({
  classSpacing='',
  children
}) => {
  return (
    <div className={`l-section ${classSpacing}`}>
      <div className={`l-subsection with_parallax ${styles["banner1"]}`} 
        style={{backgroundImage: 'url(/images/new-bg/banner.jpg)'}}>
        <div className={`l-subsection-h`}>
          <div className={`l-subsection-hh g-html i-cf`}>
            <div className={`${styles['title1']}`}>
              Banner <span className='highlight'>Test</span>
            </div>
            <div className={`${styles.title2}`}>
              What is Lorem Ipsum?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
