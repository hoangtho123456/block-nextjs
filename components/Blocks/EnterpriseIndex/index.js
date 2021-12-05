import React from 'react';
import Carousel from "react-multi-carousel";
import Image from "next/image";

import styles from '../../GeneralStyles/UxProduct.module.css';
const EnterpriseIndex = ({
  classSpacing='section',
  children}) => {
  const responsive = {
    exceptMobie: {
      breakpoint: { max: 4000, min: 768 },
      items: 1,
    },
    mobie: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    }
  };
  return (
    <div className={styles["box1"]+" "+classSpacing}>
      <div className="container">
        <div className={`${styles.darkblue1}`}>
          <h2>Vấn đề index của website</h2>
        </div>
        <p className={styles.subtitle1}>
        Con số khá bất ngờ đó là một nửa lượng truy cập hàng ngày vào website bạn là từ robots (chủ yếu là Google robot) việc kiểm soát lượng truy cập và đảm bảo robots di chuyển thông suốt trên toàn bộ website, giúp cho chúng lấy content trên web để gửi về server của Google một cách hiệu quả nhất.</p>
        <Carousel 
          responsive={responsive} 
          autoPlay={false}
          containerClass={"c-carousel1 "+styles.list1}>
          <div className={styles.card1}>
            <div className={styles.card1_img1}>
              <Image 
                src="/images/items/seo-1.jpeg"
                alt="Picture of the author"
                width={1000}
                height={424}
                layout="responsive"
              />
            </div>
            <p className={styles.card1_text1}>
              Tất nhiên dữ liệu truy cập này sẽ không theo dõi được bằng Google Analytics nên tại MangoAds chúng tôi đã dùng hệ thống phân tích log server bằng Elasticsearch để phân tích lượng dữ liệu truy cập lớn từ Google bot. Qua đó nó giúp phát hiện ra những URL lỗi, URL tải bị chậm,… những link được crawl nhưng không được Google index. Sau cùng chúng tôi tìm ra nguyên nhân để đưa ra giải pháp cải thiện khả năng crawl và index của Google bot đối với những website có lượng nội dung lớn.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default EnterpriseIndex;
