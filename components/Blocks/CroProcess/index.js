import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/EcomProcess.module.css';
const CroProcess = ({children}) => {
  return (
    <>
      <div className="section">
        <div className="page-desc section-0">
          <section className="container">
            <h2>Quy trình</h2>
            <div>Các bước tối ưu tỷ lệ chuyển đổi</div>
          </section>
        </div>
      </div>
      <div className={`${styles["mg18"]} section-b`}>
        <div className="container">
          <div className={`row grid-space-80 ${styles.row}`}>
            <div className={`col-md-6 ${styles["col-1"]}`}>
              <div className={`img ${styles["clearfix"]}`}>
                <Image 
                  src="/images/items/cro-1.jpg"
                  alt="Picture"
                  width={530}
                  height={800}
                  // layout="responsive"
                />
              </div>
            </div>
            <div className={`col-md-6 ${styles["col-2"]}`}>
              <div className={`rowlabel label-110 ${styles["rowlabel"]}`}>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    01.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <div><h3>Hiểu khách hàng</h3></div>
                    <p>Bước đầu tiên trong việc hợp tác giữa MangoAds và doanh nghiệp bạn cho gói tối ưu chuyển đổi CRO là hiểu được định hướng và mục tiêu doanh nghiệp mong muốn đạt được. Những chuyên gia của chúng tôi sẽ nhận những “nguyên liệu” đó và chế biến ra những ngôn ngữ bình dân dễ hiểu nhất cho đội ngũ thực thi sau này.</p>
                  </div>
                </div>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    02.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <div><h3>Nghiên cứu và phân tích</h3></div>
                    <p>Sau khi hiểu doanh nghiệp bạn, chúng tôi sẽ tiếp tục đưa ra các báo cáo về nghiên cứu đối thủ cạnh tranh, đào bới các số liệu hiện có của hành vi và các điểm chạm của người dùng trên web. Từ Google Analytics, Keyword Research tool, hay những công cụ hữu dụng khác,… chúng tôi giúp bạn có cái nhìn bao quát nhất về thực trạng và cùng suy nghĩ về giải pháp.</p>
                  </div>
                </div>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    03.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <div><h3>Đưa ra phương án và thực thi</h3></div>
                    <p>Khi nắm vững số liệu chúng tôi sẽ đề xuất đo đạc bổ sung và các phương thức phân tích mới nếu cần, đồng thời cũng đưa ra ngay những cải tiến mang lại hiệu quả tốt với chi phí phù hợp nhất để thực thi từng bước.</p>
                  </div>
                </div>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    04.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <div><h3>Báo cáo và cải tiến</h3></div>
                    <p>Như đã đề cập hành trình tối ưu CVR – CRO là hành trình dài và không ngừng cải tiến, những cải tiến này dựa trên cơ sở cốt lõi là báo cáo và số liệu thống kê, do đó đội ngũ Data Analysis của chúng tôi sẽ giúp bạn thực hiện những mẫu report hiệu quả và bao quát. Sau đó đưa ra cách làm việc giữa hai doanh nghiệp để phối hợp thực hiện các cải tiến liên tục về sau.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CroProcess;
