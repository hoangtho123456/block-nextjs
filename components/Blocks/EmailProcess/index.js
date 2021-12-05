import React from 'react';

import styles from '../../GeneralStyles/UxGuideLine.module.css';
const EmailProcess = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg22"]} section`}>
        <div className="container">
          <div className={`row ${styles.row}`}>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t29"/>
                    </div>
                    <div className={styles["box-title"]}>
                      <h3>Xây dựng Opt-in email list</h3>
                    </div>
                  </div>
                  <div>
                    <p>MangoAds cùng với khách hàng sẽ thêm opt-in đăng ký email vào contact form trên website. Điều này giúp bạn thu được nhiều email của khách hàng tiềm năng. Ngoài ra, chúng tôi cũng sẽ tiến hành phát triển danh sách này thông qua các kênh mạng xã hội thích hợp và các chiến dịch quảng cáo trả phí.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t45" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Thiết kế mẫu email</h3>
                    </div>
                  </div>
                  <div>
                    <p>Chúng tôi sẽ cùng đội Marketing nội bộ của công ty bạn đánh giá lại xem những điểm hay, điểm dở của CMS (trang Admin) cũ để đưa ra phương án chỉnh sửa cải thiện sao cho web mới dễ quản trị nội dung hơn.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-15" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Hoàn thiện nội dung</h3>
                    </div>
                  </div>
                  <div>
                    <p>Đội ngũ của chúng tôi luôn đặt khách hàng làm trọng tâm để đưa ra những content chất lượng và giá trị nhất. Từ phần văn bản đến hình ảnh, video đính kèm trong email đều được chăm chút cẩn thận. Lý tưởng nhất là sau chiến dịch email marketing, MangoAds phát triển cơ sở dữ liệu khách hàng chất lượng cho bạn.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t24" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Theo dõi hiệu suất chiến dịch</h3>
                    </div>
                  </div>
                  <div>
                    <p>Theo dõi việc gửi, nhận thư, tỷ lệ mở email, CTR, lượt ghé thăm web, số lead và doanh thu có được từ chiến dịch email marketing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t53"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Thử nghiệm email marketing</h3>
                    </div>
                  </div>
                  <div>
                    <p>Split-test dòng tiêu đề, tần suất gửi, ngày gửi trong tuần, thời gian gửi, nội dung hoặc offer để biết option nào hiệu quả nhất.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-18"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Lên chiến lược Email Marketing nâng cao</h3>
                    </div>
                  </div>
                  <div>
                    <p>MangoAds hỗ trợ bạn nâng tầm chiến lược Email Marketing với marketing automation và win-back email.</p>
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

export default EmailProcess;
