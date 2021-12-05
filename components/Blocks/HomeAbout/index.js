import React from 'react';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const About = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <div><h2>Về MangoAds</h2></div>
          <div className={`desc2 ${styles["text1"]}`}>
            Chúng tôi đề xuất các giải pháp công nghệ tốt nhất 
            để mang lại giá trị cho khách hàng.
          </div>
        </div>

        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t11`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Sứ mệnh của chúng tôi</h3>
              </section>
              <p className="text-justify">
                Với sứ mệnh đóng góp vào sự phát triển của thị trường số 
                Việt Nam, MangoAds là cầu nối giúp các thương hiệu 
                nội địa vươn ra thế giới và hỗ trợ các thương hiệu 
                quốc tế thâm nhập vào thị trường Việt Nam.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t42`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Chất lượng dịch vụ</h3>
              </section>
              <p className="text-justify">
                MangoAds thực hiện dự án theo hệ thống chuẩn mực của 
                thế giới trong lĩnh vực digital marketing để đảm bảo 
                cung cấp cho khách hàng các sản phẩm, dịch vụ chất lượng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
