import React from 'react';

import styles from '../../GeneralStyles/UxGuideLine.module.css';
const UxGuideline = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg22"]} ${styles["mg22-nobg"]}`}>
        <div className="container">
          <div className={`row ${styles.row}`}>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t36"/>
                    </div>
                    <div className={styles["box-title"]}>
                      <h3>Atomic design</h3>
                    </div>
                  </div>
                  <div>
                    <p>Là thiết kế theo từng phần tử, chúng tôi xem xét 
                      từng thành phần nhỏ nhất trên website để tạo ra 
                      những thiết kế có tính thống nhất trên toàn bộ 
                      các sản phẩm của doanh nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t3" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Wireframe</h3></div>
                  </div>
                  <div>
                    <p>Quy trình vẽ tay lên vẽ máy, lên màu gửi duyệt 
                      và thay đổi trước khi code. Hãy tham khảo 
                      một số workflow của chúng tôi trên sketch 
                      cũng như quy trình và phương pháp cộng tác 
                      với khách hàng khi duyệt mẫu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t44" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Web layout</h3></div>
                  </div>
                  <div>
                    <p>Làm sao để có được giao diện phù hợp với thói quen 
                      và sở thích lướt web của các đối tượng mục tiêu? 
                      MangoAds sẽ đưa ra các thiết kế web layout phù hợp 
                      với từng ngành nghề, lĩnh vực của khách hàng.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxGuideline;
