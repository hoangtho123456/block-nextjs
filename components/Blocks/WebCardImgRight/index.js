import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/WebDesignCard.module.css';
const WebCardImgRight = ({
  classSpacing='',
  children
}) => {
  return (
    <div className={classSpacing}>
      <div className={styles["mg61"]}>
        <div className={`text-justify ${styles["item"]} ${styles["item-right"]}`}>
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.item_img}>
              <Image 
                src="/images/items/mbb-2.jpeg"
                alt="Picture of the author"
                width={758}
                height={500}
                layout="responsive"
                // layout="fill"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <h2>Thiết kế giao diện</h2>
                  <p>
                    <span style={{fontWeight: 400}}>
                      Chúng tôi tối ưu từng điểm chạm 
                      sao cho thiết kế được ấn tượng nhất 
                      nhưng vẫn đảm bảo được mục tiêu 
                      truyền tải nội dung của thương hiệu 
                      cũng như trải nghiệm mua sắm sản phẩm 
                      và dịch vụ của người dùng. 
                      Đồng thời, các mẫu thiết kế 
                      cũng sẽ đáp ứng được những tiêu chuẩn nhất định 
                      để đảm bảo khi triển khai xuống 
                      code được dễ dàng, và có tính kế thừa 
                      theo design system để có thể 
                      phát triển tiếp sau này.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebCardImgRight;
