import React from 'react';
// import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const UxCardImgRight = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/ux-1.jpg"
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
                    <h2>Ecommerce UX design</h2>
                    <div>
                      <p>Thiết kế giao diện cho thói quen sử dụng sản phẩm 
                        số của người Việt Nam, một thị trường tuy 
                        phát triển nhanh nhưng vẫn còn khá mới 
                        thì UX sẽ có nhiều điểm khác biệt 
                        so với những mẫu design của thế giới. 
                        Chúng tôi với sự am hiểu địa phương đảm bảo rằng 
                        sản phẩm của bạn sẽ được điều chỉnh tốt nhất 
                        theo thị trường mục tiêu.</p>
                    </div>
                    {/* <div className={styles.item_btn}>
                      <Link href="#">
                        <a className={'btn'} target="true">CÙNG QUẢN DỰ ÁN</a>
                      </Link>
                    </div> */}
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

export default UxCardImgRight;
