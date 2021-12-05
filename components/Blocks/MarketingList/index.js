import React from 'react';
// import Image from "next/image";

import styles from '../../GeneralStyles/TeamList.module.css';
const MarketingList = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-sm-4 col-md-4">
            <div className={`${styles.item}`}>
              <div className={`c-info1 ${styles["info1"]}`}>
                <i className="icm50 icon-t21"/>
                <div className="c-info1__item1 b equal">
                  <h3>Content strategy</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>Dựa vào đặc điểm của từng khách hàng, chúng tôi sẽ đưa ra chiến lược phù hợp cho họ. Trước khi bước vào “chiến trận”, chúng tôi luôn hiểu rõ mục tiêu, target audience, sản phẩm/ dịch vụ và các đối thủ cạnh tranh hiện tại của khách hàng. Một khi có được chiến lược phù hợp, chắc chắn chúng tôi sẽ mang được nội dung tâm huyết của mình đến đúng đối tượng khách hàng mong muốn cũng như cải thiện thứ hạng từ khóa trên SERP đối với chiến dịch SEO.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className={`${styles.item}`}>
              <div className={`c-info1 ${styles["info1"]}`}>
                <i className="icm50 icon-t35" />
                <div className="c-info1__item1 b">
                  <h3>Content writing</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>Chúng tôi luôn cố gắng để làm cho content hấp dẫn nhất, giá trị nhất, mang đến những thông tin hữu ích nhất cũng như những hướng dẫn kỹ càng nhất đến cho người dùng. Ở một tầm cao hơn, content còn giúp educate thị trường, hướng mọi người đến với “vùng đất hứa” mà chúng ta đã “vun đắp” bấy lâu. Khi viết, chúng tôi luôn đặt mình vào vị trí của người dùng, tự hỏi xem liệu bài viết đã giải quyết được vấn đề gì ở họ.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className={`${styles.item}`}>
              <div className={`c-info1 ${styles["info1"]}`}>
                <i className="icm50 icon-t20" />
                <div className="c-info1__item1 b">
                  <h3>Lead Generation</h3>
                </div>
              </div>
              <div className="text-justify">
                <p>Content đóng vai trò như những “ngọn đuốc” để chúng tôi chuyền tay đến các target audience. Nhờ “ngọn đuốc” này họ có thể soi sáng con đường để trở thành các lead chính hiệu cho doanh nghiệp của bạn. Càng nhiều người “cầm ngọn đuốc” đó thì càng nhiều lead để bạn thực hiện các bước chuyển đổi về sau. Chúng tôi sử dụng nhiều dạng lead magnet khác nhau như trial subscriptions, samples, white papers, e-newsletters hoặc nhận tư vấn miễn phí.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingList;
