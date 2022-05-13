import React from 'react';
import styles from './style.module.css';

const AboutNumber = ({
  classSpacing='section-t',
  title='',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={`${styles["mg07"]}`}>
          {title && (<h2 style={{textAlign: 'center'}}>{title}</h2>)}
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <div className={`${styles.item}`}>
                <div className={`${styles.timer}`} data-form={9} 
                  data-to={569} data-speed={1000}>569</div>
                <p className={styles.title1}>Website</p>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <div className={`${styles.item}`}>
                <div className={`${styles.timer}`} data-form={9} 
                  data-to={65} data-speed={1000}>65</div>
                <p className={styles.title1}>Test-1</p>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <div className={`${styles.item}`}>
                <div className={`${styles.timer}`} data-form={9} 
                  data-to={222} data-speed={1000}>222</div>
                <p className={styles.title1}>Test-2</p>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <div className={`${styles.item}`}>
                <div className={`${styles.timer}`} data-form={9} 
                  data-to={211} data-speed={1000}>211</div>
                <p className={styles.title1}>Test-3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNumber;
