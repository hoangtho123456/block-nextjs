import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const Banner = ({
  classSpacing='section-b',
  children}) => {
  return (
    <div className={`${styles.mg48} ${classSpacing}`}>
      <div className={styles["mg48_box1"]+" "+styles["mg48_box1-pt1"]}>
        <div className="container">
          <div className={styles["row-1"]}>
            <div className={"xstitle "+styles.xstitle}>
              <h1>TUYỂN DỤNG</h1>
            </div>
            <div className={"xldesc "+styles["xldesc"]}>
              Phát triển sự nghiệp tại MangoAds
            </div>
          </div>
          <div className={`row section-b grid-space-60 ${styles["row-2"]} ${styles["box1"]}`}>
            <div className="col-sm-8 col-md-8">
              <p>Được thành lập từ năm 2013, MangoAds là đối tác 
                đáng tin cậy của nhiều doanh nghiệp trong lĩnh vực 
                digital marketing tại Việt Nam. Các sản phẩm chính 
                của chúng tôi là phát triển Website – App, 
                Google Search Ads, Facebook Advertising,…</p>
              <p>Sứ mệnh của chúng tôi là tạo ra những sản phẩm số 
                giúp cho con người và doanh nghiệp Việt Nam vươn tầm 
                thế giới, là cầu nối để các doanh nghiệp trên thế giới 
                tiếp cận thị trường Việt Nam một cách hiệu quả nhất. 
                Song song với việc mang đến những giải pháp tiên tiến, MangoAds cũng chú trọng phát triển “con người cá nhân” 
                với hoạt động đào tạo và đóng góp tri thức cho 
                cộng đồng.</p>
              <p>Tại MangoAds, khái niệm “career path – con đường 
                sự nghiệp” không chỉ đơn thuần là “đi làm” mà còn bao hàm 
                cả sự thăng tiến, sự phát triển của năng lực bản thân 
                qua quá trình chuôi rèn trui rèn với công việc. 
                Chúng tôi kiến tạo môi trường làm việc thuận lợi 
                nơi mà những thành viên có thể cùng nhau phối hợp và 
                không ngừng phấn đấu để tất cả cùng vươn lên những 
                tầm cao mới trong sự nghiệp, để những sản phẩm 
                của chúng ta có thể tự hào cùng con cháu.</p>
              <p>&nbsp;</p>
            </div>
            <div className="col-sm-4 col-md-4">
              <Image 
                src="/images/items/join-our-team.png"
                alt="join-our-team"
                width={340}
                height={376}
                // layout="responsive"
              />
            </div>
          </div>   
        </div>
        <div className={styles.bgimg}>
          <img src="/images/07-04-1.png" alt="img" loading="lazy"/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
