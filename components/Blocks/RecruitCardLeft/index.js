import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const RecruitCardLeft = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-left"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/img-3.jpeg"
                alt="Picture of the author"
                width={536}
                height={485}
                layout="responsive"
              />
            </div>
            <div className={`${styles.divtext}`}>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div>
                  <section className={`text-justify ${styles["sec1"]}`}>
                    <h2>Project Management Team</h2>
                    <div>
                      <p>Để xây dựng những sản phẩm tốt nhất thì phải có 
                        hệ thống phương pháp quản lý hiệu quả, chúng tôi 
                        là đội ngũ quản lý dự án lập trình và 
                        dự án quảng cáo cho khách hàng. 
                        Chúng tôi luôn là cầu nối thông dịch từ yêu cầu 
                        của khách hàng đến team media, team product 
                        một cách hiệu quả nhất.</p>
                    </div>
                    <div className={styles.item_btn}>
                      <Link href="#">
                        <a className={'btn'} target="true">CÙNG QUẢN DỰ ÁN</a>
                      </Link>
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

export default RecruitCardLeft;
