import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const AboutIntro = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>Lời mở đầu</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>MangoAds ra đời với sứ mệnh cung cấp cho thị trường các sản phẩm số chuẩn mực giúp cho con người và doanh nghiệp Việt Nam vươn tầm thế giới, đồng thời cũng là cầu nối để các doanh nghiệp trên thế giới tiếp cận thị trường Việt Nam một cách hiệu suất nhất.</p>
              <p>Chúng tôi xuất phát điểm là những người lập trình viên biết marketing kết hợp cùng với những makerter cầu toàn rất am tường công nghệ, sự phối hợp ăn ý đó sẽ luôn giúp chúng tôi có cái nhìn thông suốt từ khi thai nghén sản phẩm cho tới lúc tung ra thị trường, đồng thời cũng giúp cho khách hàng có cái nhìn bao quát hơn về con đường chuyển đổi số của doanh nghiệp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
