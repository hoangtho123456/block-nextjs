import React from "react";
import Carousel from "react-multi-carousel";

import styles from './style.module.css';
const MediaService = ({
  classSpacing='section',
  children,
  deviceType
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  };

  const arr = [
    {
      icon: "icon-t55",
      title: "Research & Social Listening",
      text: "Chúng tôi research để hiểu về nhân khẩu học, sở thích, lối sống, suy nghĩ của khách hàng tiềm năng. Ngoài ra, các công cụ social listening sẽ xem được mọi người đang nói gì về thương hiệu của bạn, tổng hợp lại để đưa ra các kế hoạch hành động.",
    },
    {
      icon: "icon-t14",
      title: "Planning + Optimization",
      text: "Tính đến nay, với 8 năm kinh nghiệm, chúng tôi giúp bạn từ khâu bắt đầu thành lập Fanpage đến phát triển kênh social hiện có. Kế hoạch được lên một cách chi tiết và phù hợp cho từng giai đoạn cũng như tối ưu liên tục trong quá trình thực hiện về sau.",
    },
    {
      icon: "icon-t4",
      title: "Content Creation",
      text: "Chúng tôi chăm chút cho bạn từng con chữ, từng hình ảnh đăng tải trên Fanpage. Từ những content câu chuyện đầy cảm hứng đến các quảng cáo đơn thuần đều cố gắng truyền tải đến cho người đọc một cảm xúc tích cực, gắn kết với thương hiệu.",
    },
    {
      icon: "icon-t44",
      title: "Organic Social",
      text: "Thông điệp và content trên kênh phải mang lại ý nghĩa thì mới có thể có được những khách hàng trung thành. Chúng tôi xem mỗi Fanpage của khách hàng như một ngôi nhà, từ đó sử dụng từng content để xây đắp nên một ngôi nhà vững chắc.",
    },
    {
      icon: "icon-t59",
      title: "Paid Social",
      text: "Đến lúc đẩy nhanh tiến độ bằng cách đưa “con thuyền” của bạn “ra khơi”. Thông qua các mẩu ads được viết và chuẩn bị nội dung kỹ lưỡng, nhắm đúng đối tượng khách hàng. Chúng tôi liên tục theo dõi để chiến dịch Paid Social được ROI tối đa.",
    },
    {
      icon: "icon-t10",
      title: "Đo lường và báo cáo",
      text: "Không chỉ cho bạn thấy được bức tranh toàn cảnh, chúng tôi còn “đào sâu” vào chi tiết để trình bày cho khách hàng về những nỗ lực đã thực hiện. Khách hàng sẽ biết được KPI, mục đích, mục tiêu ban đầu đạt được như thế nào.",
    },
  ];
  return (
    <div className={classSpacing}>
      <div className={styles.mg19}>
        <div className="container">
          <div className={`row grid-space-120 ${styles["row-1"]}`}>
            <div className="col-sm-7">
              <h2>Social Media Marketing</h2>
              <div>
                <p>Aliquam id ante varius, tempor ipsum consectetur, ultricies ligula. Vestibulum vehicula diam sit amet est egestas, in ultricies turpis lobortis. Maecenas ac ante ipsum. In convallis tristique est a efficitur.</p>
              </div>
            </div>
            <div className="col-sm-5">
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="icon-t22" /></div>
                <div className={styles["text-sp"]}>Phasellus blandit mi ut massa pulvinar</div>
              </div>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="icon-t3" /></div>
                <div className={styles["text-sp"]}>Phasellus massa pulvinar</div>
              </div>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="icon-t59" /></div>
                <div className={styles["text-sp"]}>Phasellus blandit mi ut</div>
              </div>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="icon-t6" /></div>
                <div className={styles["text-sp"]}>Class aptent taciti sociosq</div>
              </div>
              <div className={`dl-table ${styles["dl-tb"]}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="icon-t14" /></div>
                <div className={styles["text-sp"]}>Torquent per conubia nostra, per inceptos himenaeos.</div>
              </div>
            </div>
          </div>
          {deviceType == "desktop" ? (
            <Carousel
              responsive={responsive}
              autoPlay={false}
              containerClass={`functionSlide ${styles.functionSlide}`}
              arrows={false}
            >
              {arr.map((item, index) => (
                <div className={`item ${styles.item}`} key={index}>
                  <div className={`img ${styles.img}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className={`title ${styles.title}`}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={`desc ${styles.desc}`}>
                    {item.text}
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
              <div className={`functionSlide ${styles.functionSlide}`}>
              {arr.map((item, index) => (
                <div className={`item ${styles.item}`} key={index}>
                  <div className={`img ${styles.img}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className={`title ${styles.title}`}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={`desc ${styles.desc}`}>{item.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaService;
