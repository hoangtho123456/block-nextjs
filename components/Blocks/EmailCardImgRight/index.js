import React from 'react';
// import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const EmailCardImgRight = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/mga-3.jpg"
                alt="Picture"
                width={536}
                height={402}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h3>Chiến lược</h3>
                    <div>
                      <p>MangoAds vận dụng mô hình “4W1H” (What-Who-When-Why-How) để tiến hành lên chiến lược Email Marketing. Chúng tôi sẽ tự hỏi nội dung nên gửi là gì, gửi cho từng tập khách hàng nào, khi nào nên gửi email, lý do gửi email này là gì, có cần thiết hay không và gửi như thế nào để khiến khách hàng tự chuyển đổi. Bằng cách trả lời từng câu hỏi, chúng tôi xác định được các yếu tố làm nên một chiến lược hoàn hảo.</p>
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

export default EmailCardImgRight;
