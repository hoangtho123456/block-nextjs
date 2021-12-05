import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/WebDesignCard.module.css';
const WebCardImgLeft = ({
  classSpacing='',
  children
}) => {
  return (
    <div className={classSpacing}>
      <div className={styles["mg61"]}>
        <div className={`text-justify ${styles["item"]} ${styles["item-left"]}`}>
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.item_img}>
              <Image 
                src="/images/items/aconcept.jpeg"
                alt="Picture of the author"
                width={758}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <h2>Trải nghiệm mua sắm và tối ưu CRO</h2>
                  <p>
                    Mục tiêu cuối cùng của mọi chiến dịch 
                    là bán được sản phẩm và dịch vụ, 
                    do đó việc xây dựng website tối ưu hành trình 
                    người dùng và các điểm chạm 
                    sao cho họ thuận tiện nhất để mua hàng 
                    là mục tiêu của CRO. Trải nghiệm mua sắm online 
                    sẽ được cải thiện từng ngày, 
                    mỗi một sự tương tác giữa người dùng và website, 
                    thương hiệu đều có khả năng khiến họ mua hàng 
                    hay sử dụng dịch vụ.
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

export default WebCardImgLeft;
