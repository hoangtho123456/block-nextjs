import React from 'react';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const EcomService = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <h2>Các dịch vụ Ecommerce development tại MangoAds</h2>
          <div className={`desc2 ${styles["text1"]}`}>
            Tùy chỉnh từng ngành nghề, mang lại cho bạn website/ app 
            với UI-UX tốt nhất
          </div>
        </div>

        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t5`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Web design & development</h3>
              </section>
              <p className="text-justify">
                Sử dụng kinh nghiệm lâu năm trong việc thiết kế 
                và phát triển website dành cho khách hàng, 
                MangoAds tung ra các sản phẩm là 
                hệ thống vận hành bán hàng toàn diện. 
                Gói dịch vụ E-commerce bao gồm website full nội thất, 
                hệ thống CRM, quản lý đơn hàng, cổng thanh toán…
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t17`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Website maintenance & support</h3>
              </section>
              <p className="text-justify">
                Dịch vụ của MangoAds không dừng lại 
                ở việc bán sản phẩm, chúng sẵn sàng hỗ trợ 
                bảo trì hệ thống xuyên suốt giúp các chủ doanh nghiệp 
                an tâm kinh doanh một cách ổn định. 
                Chúng tôi sẽ cố gắng support nhanh nhất 
                để mang lại sự hài lòng tuyệt đối cho quý khách hàng.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t3`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>eCommerce application development</h3>
              </section>
              <p className="text-justify">
                Làm thương mại điện tử chỉ có website là không đủ. 
                Xu hướng sử dụng mobile để giao dịch, 
                mua sắm của con người ngày càng tăng, 
                MangoAds sẵn sàng cung cấp các app E-commerce 
                giao diện đẹp, dễ sử dụng, 
                từ đó mang lại trải nghiệm tốt hơn cho người dùng.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t28`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Custom modules & plugins</h3>
              </section>
              <p className="text-justify">
                Chúng tôi hỗ trợ nâng cao các tính năng 
                của online store với việc phát triển bộ mô-đun 
                và plugin phù hợp theo thông số dự án của bạn. 
                Những tính năng này giúp website/ app 
                của bạn vận hành tốt hơn, mang đến 
                những trải nghiệm mượt mà 
                và thông minh cho người dùng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomService;
