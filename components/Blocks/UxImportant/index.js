import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxImportant.module.css';
const UxImportant = ({
  classSpacing='',
  deviceType,
  children}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1199, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
    },
    largeMobile: {
      breakpoint: { max: 767, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg06"]} ${styles["mg06-pt1"]}`}>
        <div className="container">
          <section className={`section-header ${styles["header"]}`}>
            <h2>Curabitur sit amet neque rhoncus sem blandit accumsan.</h2>
            <div className={`desc ${styles.desc}`}>
              Curabitur sit amet neque rhoncus sem blandit accumsan.
            </div>
          </section>
          {deviceType == "desktop" ? (
          <Carousel 
            responsive={responsive} 
            autoPlay={false}
            containerClass={`c-carousel1 ${styles["teamSlider"]}`}>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Curabitur sit amet neque </h3>
                </a>
                <div className="text-justify">
                Curabitur sit amet neque rhoncus sem blandit accumsan.Curabitur sit amet neque rhoncus sem blandit accumsan.Curabitur sit amet neque rhoncus sem blandit accumsan.Curabitur sit amet neque rhoncus sem blandit accumsan.</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Cueque rhoncus sem blandit accumsan.</h3>
                </a>
                <div className="text-justify">Curabitur sit amet neque Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper.</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Tristique molestie, mauris orci</h3></a>
                <div className="text-justify">Curabitur sit amet neque Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper.Curabitur sit amet neque Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper..</div>
              </div>
            </div>
          </Carousel>
          ) : (
            <div className={styles["teamSlider"]}>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Conversion tăng đến 400%</h3></a>
                  <div className="text-justify">Nếu website trình bày rõ ràng UX tốt, bạn có thể 
                  cải thiện 400% các chuyển đổi của người dùng trên trang, 
                  thử tưởng tượng, chỉ thay đổi nhẹ nhàng trên app 
                  bạn đã có thể tăng doanh số lên 4 lần so với bình thường, 
                  con số khủng đúng không nào?</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Tỷ suất đầu tư ROI hiệu quả</h3></a>
                  <div className="text-justify">
                    ROI tốt nhất, bạn chỉ đầu tư một ít 
                    ngân sách cho tối ưu giao diện, nhưng hiệu quả 
                    về doanh số tăng rất cao, tối ưu trải nghiệm 
                    không phải là một kênh marketing nhưng 
                    lại là một phương pháp mang lại doanh số 
                    và tỷ suất đầu tư ROI rất hiệu quả.
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Tối ưu trải nghiệm khi dùng</h3>
                  </a>
                  <div className="text-justify">73% các công ty trên thế giới 
                  tuyên bố rằng trải nghiệm người dùng là tối quan trọng. 
                  Nó có thể nằm ở tất cả mọi điểm chạm online, offline, 
                  các channel khác nhau. UI-UX của web, app,… 
                  cũng là một trong những vị trí trọng yếu 
                  trong hành trình này.</div>
                </div>
              </div>
            </div>
            )}
        </div>
        <div className={`${styles["imgbg"]} ${styles["bg-1"]}`} />
      </div>
    </div>
  );
}

export default UxImportant;
