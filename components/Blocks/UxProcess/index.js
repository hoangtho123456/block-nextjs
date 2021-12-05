import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/AboutCommit.module.css';
const UxProcess = ({
  classSpacing='section-t',
  deviceType,
  children}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
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
  }
  return (
    <div className={styles.mg13+" "+classSpacing}>
      <div className="container">  
        <section className={`section-header ${styles["header"]}`}>
          <h2>Quy trình thiết kế UX/UI</h2>
          <div className={'desc2 '+styles["desc2"]}>
            Các bước cần thực hiện để thiết kế một mẫu UX/UI mới
          </div>
        </section>
        {deviceType == "desktop" ? (
        <Carousel 
          responsive={responsive}
          autoPlay={false}
          containerClass={`functionSlide ${styles.functionSlide}`}
          arrows={false}>
          <div className={`item ${styles.item}`}>
            <div className={`img ${styles.img}`}>
              <i className="icon-20"/>
            </div>
            <div className={`title ${styles.title}`}>
              <h3>Phân tích target audience</h3>
              </div>
            <div className={`desc ${styles.desc}`}>
              Xác định chân dung khách hàng, thói quen của họ 
              là bước đầu tiên để vẽ giao diện. 
              Chúng ta cũng sẽ phân tích các đối thủ 
              ở nhiều quốc gia khác nhau xem họ thể hiện UI như thế nào 
              để ra được giao diện ban đầu.</div>
          </div>
          <div className={`item ${styles.item}`}>
            <div className={`img ${styles.img}`}>
              <i className="icon-t20" /></div>
            <div className={`title ${styles.title}`}>
              <h3>Vẽ hành trình người dùng</h3>
            </div>
            <div className={`desc ${styles.desc}`}>
              Xác định các điểm chạm và hành trình của người dùng 
              theo các luồng nội dung trên trang, tại bước này chúng ta 
              sẽ tối ưu hoá hành trình người dùng sao cho ngắn gọn nhất 
              để thực thi được mục tiêu của thương hiệu.</div>
          </div>
          <div className={`item ${styles.item}`}>
            <div className={`img ${styles.img}`}>
              <i className="icon-t15"/>
            </div>
            <div className={`title ${styles.title}`}>
              <h3>Mood board</h3>
            </div>
            <div className={`desc ${styles.desc}`}>
              Dựa vào nhóm khách hàng mục tiêu, định hướng thương hiệu 
              và phân tích đối thủ cạnh tranh mà chúng ta sẽ 
              xây dựng được bản mood board đơn giản, hiệu quả 
              cũng như cải thiện quy trình làm việc.
            </div>
          </div>
          <div className={`item ${styles.item}`}>
            <div className={`img ${styles.img}`}>
              <i className="icon-t3" />
            </div>
            <div className={`title ${styles.title}`}>
              <h3>Wireframe</h3>
            </div>
            <div className={`desc ${styles.desc}`}>
              Xây dựng giao diện khung cơ bản để khách hàng 
              mường tượng được bố cục và chức năng 
              của từng thành phần trên trang. 
              Đây được xem là “ngôn ngữ chung” để dev hiểu 
              và làm việc cùng designer.</div>
          </div>
          <div className={`item ${styles.item}`}>
            <div className={`img ${styles.img}`}>
              <i className="icon-24" /></div>
            <div className={`title ${styles.title}`}>
              <h3>Prototype</h3></div>
            <div className={`desc ${styles.desc}`}>
              Bản vẽ hoàn chỉnh kết hợp các luồng lại 
              để khách hàng trải nghiệm thử bản thiết kế. 
              Đây được xem là bản mock-up có thêm phần UX giúp 
              thể hiện một cách sống động các 
              thao tác thực tế của người dùng.</div>
          </div>
        </Carousel>
        ) : (
          <div className={`functionSlide ${styles.functionSlide}`}>
            <div className={`item ${styles.item}`}>
              <div className={`img ${styles.img}`}>
                <i className="icon-20" /></div>
              <div className={`title ${styles.title}`}>
                <h3>Phân tích target audience</h3></div>
              <div className={`desc ${styles.desc}`}>
                Xác định chân dung khách hàng, thói quen của họ 
                là bước đầu tiên để vẽ giao diện. 
                Chúng ta cũng sẽ phân tích các đối thủ 
                ở nhiều quốc gia khác nhau xem họ thể hiện UI 
                như thế nào để ra được giao diện ban đầu.
              </div>
            </div>
            <div className={`item ${styles.item}`}>
              <div className={`img ${styles.img}`}>
                <i className="icon-t20" /></div>
              <div className={`title ${styles.title}`}>
                <h3>Vẽ hành trình người dùng</h3></div>
              <div className={`desc ${styles.desc}`}>
                Xác định chân dung khách hàng, thói quen của họ 
                là bước đầu tiên để vẽ giao diện. 
                Chúng ta cũng sẽ phân tích các đối thủ 
                ở nhiều quốc gia khác nhau xem họ thể hiện UI như thế nào 
                để ra được giao diện ban đầu.
              </div>
            </div>
            <div className={`item ${styles.item}`}>
              <div className={`img ${styles.img}`}>
                <i className="icon-t15" /></div>
              <div className={`title ${styles.title}`}>
                <h3>Mood board</h3>
              </div>
              <div className={`desc ${styles.desc}`}>
                Dựa vào nhóm khách hàng mục tiêu, định hướng thương hiệu 
                và phân tích đối thủ cạnh tranh mà chúng ta sẽ xây dựng 
                được bản mood board đơn giản, hiệu quả cũng như 
                cải thiện quy trình làm việc.
              </div>
            </div>
            <div className={`item ${styles.item}`}>
              <div className={`img ${styles.img}`}>
                <i className="icon-t3" />
              </div>
              <div className={`title ${styles.title}`}>
                <h3>Wireframe</h3>
              </div>
              <div className={`desc ${styles.desc}`}>
                Xây dựng giao diện khung cơ bản để khách hàng mường tượng 
                được bố cục và chức năng của từng thành phần trên trang. 
                Đây được xem là “ngôn ngữ chung” để dev hiểu và làm việc 
                cùng designer.
              </div>
            </div>
            <div className={`item ${styles.item}`}>
              <div className={`img ${styles.img}`}>
                <i className="icon-24"/>
              </div>
              <div className={`title ${styles.title}`}>
                <h3>Prototype</h3>
              </div>
              <div className={`desc ${styles.desc}`}>
                Bản vẽ hoàn chỉnh kết hợp các luồng lại để 
                khách hàng trải nghiệm thử bản thiết kế. 
                Đây được xem là bản mock-up có thêm phần UX 
                giúp thể hiện một cách sống động các 
                thao tác thực tế của người dùng.
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  );
}

export default UxProcess;
