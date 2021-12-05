import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const PayClickWhy = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg28} ${classSpacing}`}>
      <div className="container">
        <h2 className={styles.mg28_title}>
          Vì sao nên lựa chọn dịch vụ PPC của MangoAds?
        </h2>
        <div className="row">
          <div className="col-md-5 col-lg-4">
            <div className={styles["item"]}>
              <div className={`${styles["inner"]}`}>
                <Image 
                  src="/images/items/click-design.jpg"
                  alt="Picture of the author"
                  width={360}
                  height={251}
                />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="b">
              Các đặc điểm nổi bật tạo ra giá trị của chúng tôi
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t2" />
                  </div>
                  <div className={styles.text}>
                    Tối ưu hiệu quả cho tới conversion
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t21" />
                  </div>
                  <div className={styles.text}>Dùng số để ra phương án</div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t32" />
                  </div>
                  <div className={styles.text}>Tư duy của dự án tổng thể</div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t49" />
                  </div>
                  <div className={styles.text}>
                    Kiểm soát và không lạm dụng tự động hoá
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t26" />
                  </div>
                  <div className={styles.text}>Con người chuẩn mực</div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className={`dl-table mb-20 ${styles["dl-tb"]}`}>
                  <div className={`icon ${styles["icon"]}`}>
                    <i className="icon-t38" />
                  </div>
                  <div className={styles.text}>Không ngừng đặt mục tiêu mới</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayClickWhy;
