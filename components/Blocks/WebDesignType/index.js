import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxImportant.module.css';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1199, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
  },
  largeMobile: {
    breakpoint: { max: 767, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const WebDesignType = ({
  classSpacing='section-t',
  deviceType,
  children
}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg06"]}`}>
        <div className="container">
          <section className={`section-header ${styles["header"]}`}>
            <h2>Các loại website MangoAds phát triển</h2>
            <div className={`desc ${styles.desc}`}>
              MangoAds phát triển đa dạng các loại website 
              cho hầu hết mọi lĩnh vực kinh doanh trên thị trường
            </div>
          </section>
          {deviceType == "desktop" ? (
          <Carousel 
            responsive={responsive} 
            autoPlay={false}
            containerClass={`c-carousel1 ${styles["teamSlider"]}`}>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Web giới thiệu dịch vụ</h3>
                </a>
                <div className="text-justify">
                  Chúng tôi đã từng xây dựng hàng trăm website 
                  cho nhiều doanh nghiệp trên nhiều CMS 
                  hay framework phổ biến như WordPress, 
                  Laravel, Drupal, Spring boot,… 
                  Bạn hãy đưa ra yêu cầu, chúng tôi sẽ đảm bảo 
                  đáp ứng những tiêu chuẩn cao nhất.
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Web bán sản phẩm</h3>
                </a>
                <div className="text-justify">
                  Hệ thống web bán hàng với những business rule phức tạp, 
                  kết hợp các chương trình khuyến mãi, hay điều chỉnh 
                  giá thường xuyên, chúng tôi có kinh nghiệm 
                  thực hiện website EC trên các nền tảng như Magento, 
                  Woocommerce, Laravel, Shopware,…
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Các web đặc thù khác</h3></a>
                <div className="text-justify">
                  Tuỳ vào yêu cầu của doanh nghiệp, chúng tôi có thể 
                  phát triển website – web app – mobile app theo 
                  đặc thù ngành của bạn ở nhiều 
                  ngôn ngữ lập trình khác nhau. 
                  Với những yêu cầu riêng biệt, chúng tôi vẫn đảm bảo 
                  mang đến sản phẩm chất lượng nhất.
                </div>
              </div>
            </div>
          </Carousel>
          ) : (
            <div className={styles["teamSlider"]}>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Web giới thiệu dịch vụ</h3></a>
                  <div className="text-justify">
                    Chúng tôi đã từng xây dựng hàng trăm website 
                    cho nhiều doanh nghiệp trên nhiều CMS 
                    hay framework phổ biến như WordPress, 
                    Laravel, Drupal, Spring boot,… 
                    Bạn hãy đưa ra yêu cầu, chúng tôi sẽ đảm bảo 
                    đáp ứng những tiêu chuẩn cao nhất.
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Web bán sản phẩm</h3>
                  </a>
                  <div className="text-justify">
                    Chúng tôi đã từng xây dựng hàng trăm website 
                    cho nhiều doanh nghiệp trên nhiều CMS 
                    hay framework phổ biến như WordPress, 
                    Laravel, Drupal, Spring boot,… 
                    Bạn hãy đưa ra yêu cầu, chúng tôi sẽ đảm bảo 
                    đáp ứng những tiêu chuẩn cao nhất.
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Các web đặc thù khác</h3>
                  </a>
                  <div className="text-justify">
                    Chúng tôi đã từng xây dựng hàng trăm website 
                    cho nhiều doanh nghiệp trên nhiều CMS 
                    hay framework phổ biến như WordPress, 
                    Laravel, Drupal, Spring boot,… 
                    Bạn hãy đưa ra yêu cầu, chúng tôi sẽ đảm bảo 
                    đáp ứng những tiêu chuẩn cao nhất.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <div className={`${styles["imgbg"]} ${styles["bg-1"]}`} /> */}
      </div>
    </div>
  );
}

export default WebDesignType;
