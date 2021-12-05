import React from 'react';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const UxGuild = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <h2>Hướng tiếp cận UX/UI</h2>
          <div className={`desc2 ${styles["text1"]}`}>Chúng tôi có nhiều hướng tiếp cận 
          một mẫu design tại MangoAds</div>
        </div>
        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}>
                <i className="icm50 icon-t5"/>
              </p>
              <div className={styles["sec1"]}>
                <h3>Coder</h3>
              </div>
              <p className="text-justify">Các câu hỏi mà một coder 
              cần đi tìm khi đọc thiết kế UI-UX: Nó có phù hợp 
              với việc phát triển phần mềm hay không? 
              Luồng xử lý dữ liệu có cần phải tối ưu 
              hay hiệu chỉnh gì để đáp ứng UX này? 
              Phối hợp các thành phần SSR hay CSR như thế nào 
              để có được tốc độ trải nghiệm tốt nhất 
              nhưng lại giảm tải được cho server?</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className="icm50 icon-20"/>
              </p>
              <div className={styles["sec1"]}>
                <h3>Marketer</h3>
              </div>
              <p className="text-justify">Nếu tôi thuộc từng nhóm người dùng nhất định thì tôi sẽ cảm thấy như thế nào, dưới con mắt khó tính của những marketer cầu toàn, chúng tôi điều chỉnh trải nghiệm để đạt được hiệu suất conversion tốt nhất. Tại mỗi điểm chạm của người dùng, việc bố trí các goal và nội dung CTA sẽ được thể hiện như thế nào.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className="icm50 icon-t32"/></p>
              <div className={styles["sec1"]}>
                <h3>Analyser</h3>
              </div>
              <p className="text-justify">Kết hợp với yêu cầu của data strategy thì chúng ta sẽ tracking user theo những điểm chạm nào, làm sao chúng ta vẽ chân dung và xây dựng hành trình của người dùng. Nói cách khác, thông qua các phương án tracking trên giao diện mới, chúng ta sẽ có được phương án cải thiện sau khi release bản mới.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className="icm50 icon-t4" />
              </p>
              <div className={styles["sec1"]}>
                <h3>Copywriter</h3>
              </div>
              <p className="text-justify">Nội dung hay, hình ảnh đẹp, hấp dẫn là chưa đủ, mà chúng ta cần phải biết để chúng ở đâu để đảm bảo người dùng nắm được đại ý của toàn page nhanh và hiệu quả nhất. Ngoài ra, chúng ta cũng cần quan tâm độ dài tối ưu cho mỗi đoạn text và style thiết kế hình ảnh để mang lại UI-UX tốt nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxGuild;
