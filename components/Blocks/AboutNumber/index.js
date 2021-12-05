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
                  data-to={83} data-speed={1000}>83</div>
                <p className={styles.title1}>Đối tác</p>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <div className={`${styles.item}`}>
                <div className={`${styles.timer}`} data-form={9} 
                  data-to={163} data-speed={1000}>163</div>
                <p className={styles.title1}>Dự án</p>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <div className={`${styles.item}`}>
                <div className={`${styles.timer}`} data-form={9} 
                  data-to={245} data-speed={1000}>245</div>
                <p className={styles.title1}>Chiến dịch quảng cáo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNumber;
