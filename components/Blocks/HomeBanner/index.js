import React from 'react';
import styles from './style.module.css';
const Banner = ({
  classSpacing='',
  children
}) => {
  return (
    <div className={`l-section ${classSpacing}`}>
      <div className={`l-subsection with_parallax ${styles["banner1"]}`} 
        style={{backgroundImage: 'url(/images/new-bg/header-mangoads.jpeg)'}}>
        <div className={`l-subsection-h`}>
          <div className={`l-subsection-hh g-html i-cf`}>
            <div className={`${styles['title1']}`}>
              Mango<span className='highlight'>Ads</span>
            </div>
            <div className={`${styles.title2}`}>
              Your business solutions destination
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
