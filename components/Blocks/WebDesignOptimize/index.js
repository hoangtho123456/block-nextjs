import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/AboutVision.module.css';
const WebDesignOptimize = ({
  classSpacing='section-t',
  children
}) => {
  return (
    <div className={`${styles["mg10"]} ${classSpacing}`}>
      <div className="container">
        <div className="row grid-space-80">
          <div className={`col-sm-5 ${styles["col-1"]}`}>
            <div className={styles["item"]}>
              <div className={styles["img"]}>
                <Image 
                  src="/images/items/speed-a.jpeg"
                  alt="Picture of the author"
                  width={328}
                  height={246}
                  layout="responsive"
                />
              </div>
              <div>
                <p>Làm sao để website của bạn có thể có sức chịu đựng tốt 
                  với lượng truy cập cao từ mọi nơi trên thế giới, 
                  tối ưu tốc độ tải, làm website nhẹ hơn, 
                  call it request hay tối ưu hạ tầng,… 
                  là những phương pháp được Google  đề cập nhiều 
                  trong tài liệu hướng dẫn lập trình web.</p>
              </div>
            </div>
          </div>
          <article className={`col-sm-7 ${styles["col-2"]}`}>
            <div className={styles.title}>
              <h2>Tối ưu tốc độ tải</h2>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t23" />
                <div className={styles.title}>
                  <h3>AMP web development</h3>
                </div>
              </div>
              <div>
                <p>Là chuẩn code web riêng cho bản mobile 
                  được Google support để index, 
                  với first load từ Google Search 
                  nhanh và nhẹ nhàng hơn.</p>
              </div>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t14" />
                <div className={styles.title}><h3>PWA</h3></div>
              </div>
              <div>
                <p>PWA là giúp cung cấp những tính năng bổ sung 
                  dựa trên các thiết bị hỗ trợ, 
                  cung cấp khả năng ngoại tuyến, 
                  đẩy thông báo và cải thiện tốc độ.</p>
              </div>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t20" />
                <div className={styles.title}>
                  <h3>Marketing team hỗ trợ</h3>
                </div>
              </div>
              <div>
                <p>Marketing team tại MangoAds giúp nghiên cứu, 
                  phân tích các số liệu, dựa trên kinh nghiệm thực tiễn 
                  để đúc rút ra UI-UX phù hợp cho website.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default WebDesignOptimize;
