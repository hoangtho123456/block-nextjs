import React from 'react';
import styles from './style.module.css';

const HomeBannerOne = ({
  classSpacing='',
  children
}) => {
  return (
    <div className={`${styles["p-home"]} ${classSpacing}`}>
      <div className={`l-subsection color_primary with_parallax ${styles.box1}`} 
        style={{
          backgroundImage: 'url("/images/new-bg/banner-1.jpg")', 
          display: 'table'
        }}>
        <div className="l-subsection-h">
          <section className="l-subsection-hh g-html">
            <h2>
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum 
              has been the industry's standard dummy text ever 
              since the 1500s
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomeBannerOne;
