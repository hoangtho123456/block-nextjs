import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const WebDesignIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>Tầm quan trọng của website</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>Website là kênh đóng vai trò quan trọng nhất 
                trong các điểm chạm của người dùng 
                trong hành trình mua sắm sản phẩm dịch vụ 
                của doanh nghiệp bạn trên internet. 
                Đồng thời đây cũng là kênh cho phép doanh nghiệp 
                được tự do chủ động thực hiện mọi chiến lược 
                đo đạc tracking, cũng như triển khai ý tưởng nội dung 
                mà không gặp bất cứ rào cản nào. Do đó, nếu bạn bỏ ra 
                cả triệu đô la tiền quảng cáo online thì nguồn lực 
                chi cho việc xây dựng và duy trì sự trơn tru của website 
                cũng phải tương xứng với ngân sách quảng cáo đó.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDesignIntro;
