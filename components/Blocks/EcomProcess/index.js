import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/EcomProcess.module.css';
const EcomProcess = ({
  classSpacing='section-b',
  children
}) => {
  return (
    <div className={`${styles["mg18"]} ${classSpacing}`}>
      <div className="container">
        <div className="row grid-space-80">
          <div className={`col-md-6 ${styles["col-1"]}`}>
            <div className={`img ${styles["clearfix"]}`}>
              <Image 
                src="/images/items/qt-1.jpeg"
                alt="Picture"
                width={530}
                height={634}
                // layout="responsive"
              />
            </div>
          </div>
          <div className={`col-md-6 ${styles["col-2"]}`}>
            <div className={`rowlabel label-110 ${styles["rowlabel"]}`}>
              <div className={`item ${styles.item}`}>
                <div className={`title ${styles.title}`}>
                  01.
                </div>
                <div className={`text ${styles.text}`}>
                  <div><h3>Tìm hiểu sơ bộ</h3></div>
                  <p>Chúng tôi luôn đặt khách hàng ở trung tâm để tìm hiểu và phân tích chân dung của họ, từ đó sử dụng các phương hướng kỹ thuật để phát triển sản phẩm.</p>
                </div>
              </div>
              <div className={`item ${styles.item}`}>
                <div className={`title ${styles.title}`}>
                  02.
                </div>
                <div className={`text ${styles.text}`}>
                  <div><h3>Đánh giá các platform</h3></div>
                  <p>Nền tảng phát triển dự án là rất quan trọng, chúng tôi áp dụng các platform tiên tiến nhất để giúp theo chân bạn trong suốt chặng đường dài.</p>
                </div>
              </div>
              <div className={`item ${styles.item}`}>
                <div className={`title ${styles.title}`}>
                  03.
                </div>
                <div className={`text ${styles.text}`}>
                  <div><h3>Ưu tiên các trải nghiệm</h3></div>
                  <p>Chúng tôi đặt trải nghiệm của người dùng cuối lên hàng đầu. Hành trình khách hàng chính là nơi chúng tôi khai thác để tối ưu hóa từng điểm chạm của họ.</p>
                </div>
              </div>
              <div className={`item ${styles.item}`}>
                <div className={`title ${styles.title}`}>
                  04.
                </div>
                <div className={`text ${styles.text}`}>
                  <div><h3>QA &amp; Launch</h3></div>
                  <p>QA là một bước không thể thiếu giúp đảm bảo chất lượng sản phẩm. Theo đó, chúng tôi đảm bảo các tính năng được hoàn thiện và vận hành mượt mà, ổn định.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomProcess;
