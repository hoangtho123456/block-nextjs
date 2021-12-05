import React from 'react';

import styles from '../../GeneralStyles/UxGuideLine.module.css';
const RedesignList = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg22"]} ${styles["mg22-nobg"]}`}>
        <div className="container">
          <div className={`row ${styles.row}`}>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t6"/>
                    </div>
                    <div className={styles["box-title"]}>
                      <h3>Tốc độ website</h3>
                    </div>
                  </div>
                  <div>
                    <p>Khi code lại bộ frontend mới, MangoAds sẽ bám sát 
                      theo những hướng dẫn từ phía Google để đảm bảo 
                      tối ưu nhất tốc độ tải web, đồng thời 
                      giúp cho website thân thiện hơn 
                      với công cụ tìm kiếm.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t8" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Cải thiện quản trị web</h3>
                    </div>
                  </div>
                  <div>
                    <p>Chúng tôi sẽ cùng đội Marketing nội bộ 
                      của công ty bạn đánh giá lại xem những điểm hay, 
                      điểm dở của CMS (trang Admin) cũ để đưa ra 
                      phương án chỉnh sửa cải thiện sao cho web mới 
                      dễ quản trị nội dung hơn.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t3" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Chuyển sang web mới</h3>
                    </div>
                  </div>
                  <div>
                    <p>Toàn bộ nội dung của các trang dịch vụ, 
                      sản phẩm, hay trang tin tức,… đều phải đảm bảo 
                      chuyển đổi từ website cũ sang website mới. 
                      Chúng tôi sẽ dùng data migration từ cơ sở dữ liệu 
                      của website cũ sang website mới.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t18" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Duy trì tracking, analytic</h3>
                    </div>
                  </div>
                  <div>
                    <p>Dù là website mới nhưng các dữ liệu thống kê 
                      như Google Analytic, Search Console,… đều phải 
                      kế thừa từ website cũ. Do đó, MangoAds 
                      sẽ hỗ trợ cài đặt lại các tracking code mới 
                      dựa trên các thiết lập và các goal cũ, 
                      để đảm bảo dữ liệu thống kê được liền mạch 
                      và thông suốt.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t9"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Duy trì các campaign</h3>
                    </div>
                  </div>
                  <div>
                    <p>Tương tự như tracking code thì cách làm 
                      cũng sẽ phải tương tự với các campaign 
                      đang đổ traffic vào website. 
                      Chúng tôi đảm bảo quá trình chuyển đổi nhịp nhàng, 
                      redirect link đúng, để các thiết lập cho 
                      campaign quảng cáo đang chạy không bị gián đoạn.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t14"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Giữ thứ hạng SEO</h3>
                    </div>
                  </div>
                  <div>
                    <p>Để đảm bảo mọi traffic của từ khóa tìm kiếm 
                      trên Google vẫn duy trì được trên website mới, 
                      chúng tôi sẽ thực hiện một loạt các bước 
                      chuyển đổi nội dung, redirect link, 
                      submit lại sitemap,… cho Google 
                      để việc index website mới được thông suốt 
                      và không mất thứ hạng từ khóa trên Google.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedesignList;
