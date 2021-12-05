import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxProduct.module.css';
const UxProduct = ({
  classSpacing='section-t',
  children}) => {
  const responsive = {
    exceptMobie: {
      breakpoint: { max: 4000, min: 768 },
      items: 1,
    },
    mobie: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    }
  };
  return (
    <div className={styles["box1"]+" "+classSpacing}>
      <div className="container">
        <div className={`${styles.darkblue1}`}>
          <h2>Sản phẩm website của MangoAds</h2>
        </div>
        <p className={styles.subtitle1}>
          Website của Ngân hàng Thương mại Cổ phần Quân đội 
          được xây dựng với mục đích tối ưu hoá công cụ tìm kiếm 
          và trải nghiệm người dùng. 
          Dự án được phát triển nhằm tạo ra một cổng 
          thông tin liên lạc giữa người dùng 
          và ngân hàng MB Bank.
          Website được tối ưu với các công nghệ tiên tiến 
          như AMP và PWA. Thời gian tải trang dưới 1 giây.</p>
        <Carousel 
          responsive={responsive} 
          autoPlay={false}
          containerClass={"c-carousel1 "+styles.list1}>
          <div className={styles.card1}>
            <div className={styles.card1_video1}>
              <iframe src="https://www.youtube.com/embed/e4pBLBZvMOI" 
                frameBorder={0} 
                allow="clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture" 
                allowFullScreen />
            </div>
            <p className={styles.card1_text1}></p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default UxProduct;
