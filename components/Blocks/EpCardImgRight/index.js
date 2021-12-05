import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const EpCardImgRight = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/sv-1.jpeg"
                alt="Picture"
                width={536}
                height={326}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h3>Xử lý các lỗi trên web dựa vào phân tích server log</h3>
                    <div>
                      <p>Google crawler truy cập từng trang trên website bằng cách crawl nội dung. Dữ liệu của webmaster tool chỉ phản ánh được lỗi của những trang  mà google đã crawl tương tự với những search engine khác.</p>
                      <p>Đối với những website lớn với lượng page khổng lồ, thì chỉ có log file mới có được thông số chính xác nhất để phân tích tất cả dữ liệu truy cập của website qua đó chuẩn đoán đúng tình trạng bệnh tình của toàn bộ website.</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpCardImgRight;
