import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/PayClickService.module.css';
const MarketingProcess = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles["mg62"]} ${classSpacing}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles["row-2"]}`}>
          <div className="text-center">
            <h2>Lorem Ipsum</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 mg62-tab-imgs-js">
              <div className={`text-center ${styles.img} img1-js`} 
                style={{display: 'block'}}>
                <Image 
                  src="/images/items/content-research.jpeg"
                  alt="Picture of the author"
                  width={555}
                  height={358}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`acordion box-acordion ${styles["acordion"]}`}>
                <div className="tab show">
                  <span className={`${styles["tab_icon1"]} icon-t3`} />
                  <div className="tab-title">
                    <div className={styles.title2}>
                      <h3>Content Research</h3>
                    </div>
                    <span className="triangle">
                      <i className="icon-t41" />
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'block'}}>
                    <p>Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.</p>
                  </div>
                </div>
                <div className="tab">
                  <span className={`${styles["tab_icon1"]} icon-t14`}/>
                  <div className="tab-title">
                    <div className={styles.title2}><h3>Content Strategy</h3></div>
                    <span className="triangle">
                      <i className="icon-t41" />
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.</p>
                  </div>
                </div>
                <div className="tab">
                  <span className={`${styles["tab_icon1"]} icon-t4`}/>
                  <div className="tab-title">
                    <div className={styles.title2}><h3>Sáng tạo nội dung</h3></div>
                    <span className="triangle"><i className="icon-t41" /></span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>
                      Aliquam id ante varius, tempor ipsum consectetur, ultricies ligula. Vestibulum vehicula diam sit amet est egestas, in ultricies turpis lobortis. Maecenas ac ante ipsum. In convallis tristique est a efficitur. Cras ac nunc sem. In aliquam mauris vel risus pharetra, vel ullamcorper dui finibus. Suspendisse justo lorem, ultrices eget gravida non, hendrerit at orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
                <div className="tab ">
                  <span className={`${styles["tab_icon1"]} icon-t16`} />
                  <div className="tab-title">
                    <div className={styles.title2}>
                      <h3>Publish và Promotion</h3>
                    </div>
                    <span className="triangle">
                      <i className="icon-t41" />
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>Aliquam id ante varius, tempor ipsum consectetur, ultricies ligula. Vestibulum vehicula diam sit amet est egestas, in ultricies turpis lobortis. Maecenas ac ante ipsum. In convallis tristique est a efficitur. Cras ac nunc sem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingProcess;
