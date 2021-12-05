import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const RecruitCardRight = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/img-5.jpeg"
                alt="Picture"
                width={536}
                height={485}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h2>Gia nhập team chúng tôi</h2>
                    <div>
                      <p>Đội ngũ của chúng tôi đang cần những bạn vui vẻ 
                        hoạt bát, ham mê học hỏi thích hình vuông và số pi 
                        để cùng nhau quản lý và xây dựng dự án. 
                        Kiến thức là bao la, các bạn có thể không có đủ 
                        kiến thức ở những mảng quan trọng, 
                        nhưng tại MangoAds, bạn được học và thực hành ngay 
                        với dự án hiện hữu, chỉ sau một thời gian khả năng 
                        của bạn sẽ đạt đến một tầm cao mới, có thể “chiến” 
                        với nhiều dự án đa dạng. Sự năng động và 
                        nhiệt huyết theo văn hoá Nice, Professional, 
                        Warrior của MangoAds là tính cách 
                        và phương pháp vận hành của team chúng tôi.</p>
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

export default RecruitCardRight;
