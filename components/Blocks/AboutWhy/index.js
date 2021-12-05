import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const AboutVision = ({
  classSpacing='section-t',
  children
}) => {
  return (
    <div className={`ss-radius-bottom ${styles["p-about"]} ${classSpacing}`}>
        <div className="container">
          <div className={`dl-table cols-2 ${styles["cols-2"]}`}>
            <article className={styles.divtext}>
              <h1 className={styles.title}>
                Vì sao bạn nên lựa chọn MangoAds?
              </h1>

              <p>Được thành lập từ năm 2013, đến nay MangoAds đã trở thành đối tác cung cấp giải pháp công nghệ tiên tiến cho nhiều đối tác.<br /><br/>
                Các sản phẩm nổi bật mà chúng tôi phát triển bao gồm: Website, Mobile App, SEO, Google Ads và Facebook Advertising. Với phương châm nỗ lực hết mình để hoàn thiện sản phẩm, chúng tôi luôn cố gắng mang đến cho khách hàng những sản phẩm với trải nghiệm tốt nhất.<br /><br />
                Trong suốt hơn 8 năm hoạt động, MangoAds đã nhận được sự tin tưởng và cộng tác của nhiều khách hàng: Vinamilk, Vietnam Airlines, TOA, Yamaha, MB Bank,… Hơn 83 khách hàng đang trải nghiệm và sử dụng sản phẩm của doanh nghiệp chúng tôi. Và chúng tôi tin rằng con số đó sẽ còn tiếp tục tăng trưởng trong những năm tiếp theo.</p>
            </article>
            <div>
              <Image 
                src="/images/items/img-1.png"
                alt="Picture of the author"
                width={540}
                height={567}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutVision;
