import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const EpCardImgLeft = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-left"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/craw-1.jpg"
                alt="Picture"
                width={536}
                height={406}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h3>Điều tiết crawling budget và xử lý những page không tốt cho việc crawl</h3>
                    <div>
                      <p>Bạn sẽ rất lãng phí lượng truy cập từ Google bot, nếu bạn cho robots crawl những trang trống hoặc thin content, việc kiểm soát và đưa ưu tiên những page có giá trị index cho Google bots lấy dữ liệu trước sẽ giúp website của bạn có đánh giá chất lượng tốt hơn từ Google thay vì để robots tự do crawl những trang không có nội dung.</p>
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

export default EpCardImgLeft;
