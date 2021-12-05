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
          backgroundImage: 'url("/images/new-bg/tea-farm-landscape.jpeg")', 
          display: 'table'
        }}>
        <div className="l-subsection-h">
          <section className="l-subsection-hh g-html">
            <h2>
              <strong>MangoAds đóng góp vào nền dịch vụ số những sản phẩm chất lượng, 
              giúp các doanh nghiệp tiếp cận thị trường hiệu suất nhất</strong>
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomeBannerOne;
