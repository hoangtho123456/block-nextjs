import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/AboutVision.module.css';
const AboutVision = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className="row grid-space-80">
          <div className={`col-sm-5 ${styles["col-1"]}`}>
            <div className={styles["item"]}>
              <div className={styles["img"]}>
                <Image 
                  src="/images/items/logo-mango.png"
                  alt="Picture of the author"
                  width={219}
                  height={149}
                />
              </div>
              <div className="text-justify">
                <p>MangoAds là digital agency với các sản phẩm nổi bật như phát triển website, SEO, Social media, Google Ads, Facebook Ads. Chúng tôi luôn tự hào về các giải pháp kỹ thuật số cung cấp cho doanh nghiệp trong và ngoài nước.</p>
                <p><strong>Sự chính xác và minh bạch</strong> được xem là tôn chỉ chung cho toàn bộ hoạt động của doanh nghiệp. Với mọi đối tượng từ nội bộ đến khách hàng thì ý nghĩa của từ <strong>“Trust”</strong> luôn được đặt vào trung tâm.</p>
                <p><strong>Sự tận tâm</strong> trong chăm sóc khách hàng và quan điểm tối ưu trải nghiệm người dùng luôn là mục tiêu hàng đầu trong tất cả các dịch vụ của MangoAds.</p>
              </div>
            </div>
          </div>
          <article className={`col-sm-7 ${styles["col-2"]}`}>
            <div className={styles.title}>
              <h2>Tầm nhìn và sứ mệnh</h2>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t10"></i>
                <div className={styles.title}>
                  <h3>Tầm nhìn</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>Chúng tôi là nơi những con người chuẩn mực hàng ngày nỗ lực đóng góp cho thị trường dịch vụ số những sản phẩm chuẩn mực:</p>
                <p>Mục tiêu “con người chuẩn mực” luôn được đặt trên hết:</p>
                <ul>
                  <li>Song hành với mỗi chặng đường sự nghiệp (career path) là quá trình học hỏi không ngừng (training path).</li>
                  <li>Sự học tạo nên những con người chuẩn mực nhằm đóng góp cho thị trường dịch vụ số những sản phẩm chuẩn mực.</li>
                </ul>
              </div>
            </div>
            <div className={styles["item"]}>
              <div className={styles["info"]}>
                <i className="icon-t11"></i>
                <div className={styles.title}>
                  <h3>Sứ mệnh</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>MangoAds sẽ đóng góp gì cho sự phát triển của đất nước?</p>
                <ul>
                  <li>Chúng tôi cam kết đóng góp toàn bộ tri thức, tài liệu học thuật mà trong đó có thể coi là bí mật kinh doanh cho cộng đồng, để những người ham học hỏi hằng ngày mài giũa năng lực bản thân, từ đó đóng góp cho nền công nghiệp dịch vụ số của tổ quốc Việt Nam.</li>
                  <li>Góp phần nhỏ bé tạo ra những sản phẩm số giúp cho những doanh nghiệp Việt Nam vươn tầm thế giới, giúp đỡ những doanh nghiệp trên thế giới tiếp cận thị trường Việt Nam một cách hiệu suất nhất.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default AboutVision;
