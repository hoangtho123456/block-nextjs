import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const RedesignIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>Xu hướng thiết kế lại website</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>Sau một thời gian sử dụng, mọi doanh nghiệp 
                đều mong muốn cập nhật thiết kế website mới 
                sao cho phù hợp với xu hướng và công nghệ mới. 
                Một khi chúng ta đã đầu tư thay đổi website mới 
                thì đây cũng là lúc xem xét đánh giá và 
                cải thiện lại UI-UX cũ để tạo ra được bản thiết kế mới 
                phù hợp với xu hướng hơn. Các vấn đề kỹ thuật 
                như tối ưu tốc độ tải web cũng cần lưu tâm, 
                phần cải thiện khi quản trị nội dung hay một việc 
                mà chúng ta hay bỏ qua đó là chuyển 
                toàn bộ nội dung từ website cũ sang website mới 
                và đồng thời vẫn giữ được thứ hạng trên Google.</p>
              <p>Đội ngũ của MangoAds sẽ tư vấn và đảm nhiệm thực thi 
                toàn bộ quy trình redesign web này để 
                đảm bảo doanh nghiệp của bạn sẽ nhận được 
                một showroom mới full nội thất chỉ cần 
                tiếp quản và vận hành.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedesignIntro;
