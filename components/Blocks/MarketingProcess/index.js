import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/PayClickService.module.css';
const MarketingProcess = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles["mg62"]} ${classSpacing}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles["row-2"]}`}>
          <div className="text-center">
            <h2>Quy trình triển khai</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 mg62-tab-imgs-js">
              <div className={`text-center ${styles.img} img1-js`} 
                style={{display: 'block'}}>
                <Image 
                  src="/images/items/content-research.jpeg"
                  alt="Picture of the author"
                  width={555}
                  height={358}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`acordion box-acordion ${styles["acordion"]}`}>
                <div className="tab show">
                  <span className={`${styles["tab_icon1"]} icon-t3`} />
                  <div className="tab-title">
                    <div className={styles.title2}>
                      <h3>Content Research</h3>
                    </div>
                    <span className="triangle">
                      <i className="icon-t41" />
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'block'}}>
                    <p>“Biết người biết ta trăm trận trăm thắng”, với quan điểm này, trước khi bắt tay vào một chiến dịch content marketing chúng tôi phải tiến hành content audit toàn bộ website/ fanpage/ các nền tảng nội dung hiện tại của bạn. Tiếp đến, chúng tôi sẽ cho bạn biết đối thủ của bạn họ đang làm gì, hiệu suất của họ đang ở đâu mà đạt được thành công như ngày hôm nay. Quan trọng hơn cả, nghiên cứu từ khóa, bắt trend đóng vai trò là một kim chỉ nam để chúng tôi định hướng kế hoạch sắp tới cho khách hàng của mình.</p>
                  </div>
                </div>
                <div className="tab">
                  <span className={`${styles["tab_icon1"]} icon-t14`}/>
                  <div className="tab-title">
                    <div className={styles.title2}><h3>Content Strategy</h3></div>
                    <span className="triangle">
                      <i className="icon-t41" />
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>Sau quá trình quan sát cục diện, MangoAds team sẽ đề xuất cho bạn các kế hoạch cần thiết trong từng giai đoạn. Dựa vào việc phân tích buyer personas, chúng tôi đưa ra một chiến lược content toàn diện với các chủ đề đa dạng cùng với content calendar chi tiết và các kênh truyền thông sẽ cộng tác. Từ đó, bạn sẽ dễ dàng hình dung từ bức tranh tổng thể đến từng mảnh ghép nhỏ nhất. Ngoài ra, nhờ yếu tố cá nhân hóa trong chiến dịch, việc chuyển đổi thông qua phễu bán hàng sẽ thuận lợi hơn rất nhiều.</p>
                  </div>
                </div>
                <div className="tab">
                  <span className={`${styles["tab_icon1"]} icon-t4`}/>
                  <div className="tab-title">
                    <div className={styles.title2}><h3>Sáng tạo nội dung</h3></div>
                    <span className="triangle"><i className="icon-t41" /></span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>Sau khi content được duyệt, MangoAds sẽ tối ưu hóa, chia sẻ lên mạng xã hội, chạy quảng cáo PPC và GDN/ remarketing để thu nhiều lead nhất có thể. Mục tiêu quan trọng nhất mà chúng tôi muốn đạt được sau chiến dịch Content Marketing là khiến người dùng xem website, fanpage, blog của khách hàng là một nơi đáng tin cậy. Mỗi khi có khúc mắc trong lĩnh vực đó, họ đều tìm đến để tham khảo và tìm lời khuyên. Hơn hết, chúng tôi tâm niệm rằng những gì bạn nói không quan trọng bằng CÁCH bạn truyền đạt.</p>
                  </div>
                </div>
                <div className="tab ">
                  <span className={`${styles["tab_icon1"]} icon-t16`} />
                  <div className="tab-title">
                    <div className={styles.title2}>
                      <h3>Publish và Promotion</h3>
                    </div>
                    <span className="triangle">
                      <i className="icon-t41" />
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>Sau khi content được duyệt, MangoAds sẽ tối ưu hóa, chia sẻ lên mạng xã hội, chạy quảng cáo PPC và GDN/ remarketing để thu nhiều lead nhất có thể. Mục tiêu quan trọng nhất mà chúng tôi muốn đạt được sau chiến dịch Content Marketing là khiến người dùng xem website, fanpage, blog của khách hàng là một nơi đáng tin cậy. Mỗi khi có khúc mắc trong lĩnh vực đó, họ đều tìm đến để tham khảo và tìm lời khuyên. Hơn hết, chúng tôi tâm niệm rằng những gì bạn nói không quan trọng bằng CÁCH bạn truyền đạt.</p>
                  </div>
                </div>
                <div className="tab ">
                  <span className={`${styles["tab_icon1"]} icon-t6`}/>
                  <div className="tab-title">
                    <div className={styles.title2}>
                      <h3>Analytics</h3>
                    </div>
                    <span className="triangle">
                      <i className="icon-t41"/>
                    </span>
                  </div>
                  <div className="tab-content entry-content" 
                    style={{display: 'none'}}>
                    <p>Phân tích là một bước không thể thiếu để nhìn lại những gì chúng ta làm được, tốt ở đâu và chưa tốt ở đâu để những cải thiện sau này. Chúng tôi sẵn sàng cung cấp các mẫu report theo tần suất mà bạn yêu cầu. Trong đó không chỉ có dữ liệu thô mà còn có các phân tích, đánh giá chuyên sâu và phần “next step” giúp bạn biết được sắp tới chúng ta cần phải làm gì để đạt kết quả tốt hơn đồng thời rút kinh nghiệm cho các chiến dịch kế tiếp. Sau tất cả, “ông vua” của bạn sẽ ngày càng tăng độ uy tín và có sức ảnh hưởng mạnh mẽ.</p>
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

export default MarketingProcess;
