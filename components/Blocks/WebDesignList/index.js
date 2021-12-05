import React from 'react';

import styles from '../../GeneralStyles/UxGuideLine.module.css';
const WebDesignList = ({
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
                      <i className="icon-t2"/>
                    </div>
                    <div className={styles["box-title"]}>
                      <h3>SEO tốt</h3>
                    </div>
                  </div>
                  <div>
                    <p>Khi xây dựng cấu trúc web, MangoAds team sẽ tư vấn 
                      những thành phần trên web để giúp hỗ trợ xây dựng nội dung 
                      và các phương án thu thập nội dung đóng góp 
                      từ phía người dùng. Từ đó chúng tôi triển khai 
                      các ý tưởng marketing đồng hành với việc 
                      đẩy mạnh SEO cho website sau này. Việc code 
                      theo đúng chuẩn của Google, tối ưu tốc độ tải trang tốt, 
                      cũng là một trong những tiêu chí hỗ trợ 
                      cho website của bạn có được thứ hạng tốt 
                      trên công cụ tìm kiếm này.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t4" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Dễ quản trị content</h3>
                    </div>
                  </div>
                  <div>
                    <p>Khi chạy các campaign quảng cáo, 
                      làm sao để team marketing có thể 
                      chủ động xây dựng landing page 
                      hay các bài viết thật đơn giản và nhanh chóng. 
                      Với kinh nghiệm triển khai 
                      digital marketing campaign 
                      trên nhiều hệ thống website, 
                      chúng tôi biết phải thêm gì, bớt gì, 
                      tối ưu gì trong hệ thống admin của website. 
                      Đảm bảo người quản trị web và team marketing 
                      có thể dễ dàng điều chỉnh và tạo nội dung 
                      một cách hiệu quả để 
                      triển khai campaign thành công.</p>
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
                      <h3>Đo đạc và thu thập dữ liệu</h3>
                    </div>
                  </div>
                  <div>
                    <p>Cũng như việc xây dựng UI-UX của website, 
                      chúng tôi xây dựng các phương án tracking 
                      dựa trên những điểm chạm của người dùng, 
                      từ đó thống kê dữ liệu là vô cùng quan trọng. 
                      Đội ngũ marketing của bạn có thể dựa vào đó 
                      để nhanh chóng đưa ra những điều chỉnh 
                      cho chiến dịch quảng cáo hiện tại. 
                      Ngoài ra, những Data Analysis của chúng tôi 
                      sẽ chủ động đề xuất các phương án tracking 
                      và gắn tracking cho website của bạn.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t49" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Tích hợp với các hệ thống hiện hữu</h3>
                    </div>
                  </div>
                  <div>
                    <p>Hiểu được vấn đề đó, những website của MangoAds 
                      phát triển luôn sẵn sàng các phương án tích hợp API 
                      với những hệ thống hiện hữu như CRM, ERP, 
                      livechat, support,… của khách hàng.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t39"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Đảm bảo hoạt động trơn tru SLA</h3>
                    </div>
                  </div>
                  <div>
                    <p>Chúng tôi sẽ đưa ra các phương án 
                      Sizing hạ tầng web trên Cloud như 
                      Amazon, Google, Azure,… để đảm bảo hệ thống web 
                      đáp ứng được tiêu chuẩn SLA tốt nhất, 
                      vận hành trơn tru với 
                      tốc độ tải ổn định ở mọi nơi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t43"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Backup source và lưu trữ trên git</h3>
                    </div>
                  </div>
                  <div>
                    <p>Toàn bộ source code của bạn 
                      sẽ được lưu trữ trên Git. Nếu cần thiết, 
                      toàn bộ hoạt động update code 
                      đều sẽ được thiết lập CI-CD 
                      để triển khai lên production 
                      và hạn chế lỗi nhiều nhất.</p>
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

export default WebDesignList;
