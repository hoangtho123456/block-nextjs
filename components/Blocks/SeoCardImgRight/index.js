import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const SeoCardImgRight = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/mga-1.jpg"
                alt="Picture of the author"
                width={536}
                height={522}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h2>Onsite SEO</h2>
                    <div>
                      <p>Đội ngũ của chúng tôi với sự thấu hiểu 
                        các nguyên tắc của Google sẽ giúp cho website của bạn 
                        tối ưu toàn diện, qua đó giúp cho Googlebot 
                        có con đường thông thoáng hơn trơn tru hơn để chạy 
                        và lấy nội dung trên website bạn. 
                        Chúng tôi sẽ follow chặt chẽ các hướng dẫn 
                        của Google để tư vấn cho team dev của bạn 
                        chỉnh sửa và tối ưu lại website. 
                        Nếu các bạn không có sẵn dev trong nhà, 
                        thì cũng đừng lo lắng, chúng tôi sẽ có team lập trình 
                        có thể hỗ trợ bạn.</p>
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

export default SeoCardImgRight;
