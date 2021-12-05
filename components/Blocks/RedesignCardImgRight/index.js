import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/RecruitCard.module.css';
const RedesignCardImgRight = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg50} ${classSpacing}`}>
      <div className={`${styles["item"]} ${styles["item-right"]}`}>
        <div className="container">
          <div className={`${styles.topinfo} clearfix`}>
            <div className={styles.img}>
              <Image 
                src="/images/items/ux-design.jpg"
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
                    <h2>UI-UX design</h2>
                    <div>
                      <p>Ngoài các bước thực hiện như việc thiết kế 
                        một website mới thì với web redesign 
                        chúng ta cần thêm một bước đánh giá lại 
                        giao diện website cũ và những điểm 
                        mong muốn cải thiện hay những điểm 
                        muốn duy trì trên website mới. 
                        Sau khi cùng đội marketing của công ty bạn 
                        đánh giá lại các số liệu truy cập 
                        và thiết kế của website cũ, 
                        những designer giàu kinh nghiệm của MangoAds 
                        sẽ dựa vào brand guideline của doanh nghiệp bạn 
                        để đưa ra những phương án thiết kế sáng tạo 
                        hợp xu thế nhất đồng thời giúp cải thiện mục tiêu 
                        tăng trải nghiệm mua sắm trên trang của bạn.</p>
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

export default RedesignCardImgRight;
