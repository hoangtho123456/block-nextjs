import React from "react";
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/AboutCommit.module.css';
const AboutCommit = ({
  classSpacing='section-t',
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
      icon: "icon-t20",
      title: "Con người chuẩn mực",
      text: "Chúng tôi luôn coi trọng và tập trung phát triển con người chuẩn mực, xem thường những mục đích lợi nhuận không chính danh.",
    },
    {
      icon: "icon-t42",
      title: "Hoàn thiện sản phẩm",
      text: "Đội ngũ những chiến binh MangoAds nỗ lực hết mình để hoàn thiện sản phẩm cho khách hàng dù khó khăn hay lợi ích có bị ảnh hưởng.",
    },
    {
      icon: "icon-t45",
      title: "Môi trường làm việc",
      text: "Kiến tạo môi trường làm việc thuận lợi nơi mà các kỹ sư có thể hăng say cưỡi lên những đoạn code làm chủ chúng để tạo ra những sản phẩm tuyệt vời cho thị trường",
    },
    {
      icon: "icon-t28",
      title: "Tối ưu hiệu suất",
      text: "Toàn thể nhân viên luôn cảm thấy niềm vui khi cập nhật kiến thức và nghiện tối ưu sản phẩm nhằm đạt hiệu suất tối đa.",
    },
    {
      icon: "icon-t21",
      title: "Chia sẻ tri thức",
      text: "Góp phần chia sẻ cho người dân Việt Nam những kiến thức ngành thông tin số và giúp xây dựng cộng đồng nhân lực tri thức cho thời đại dịch vụ số.",
    },
    {
      icon: "icon-t8",
      title: "Sản phẩm dịch vụ số",
      text: "Tất cả sản phẩm của MangoAds sẽ nằm trên thị trường dịch vụ số, chúng tôi cam đoan không phát triển bất cứ sản phẩm gì ngoài thị trường mục tiêu này.",
    },
  ];
  return (
    <div className={styles.mg13+" "+classSpacing}>
      <div className="container">
        <section className={`section-header ${styles["header"]}`}>
          <h2>Cam kết của chúng tôi</h2>
          <div className={'desc2 '+styles["desc2"]}>
            Tại MangoAds chúng tôi luôn có một niềm tin và hoài bão 
            được đóng góp cho sự phát triển của ngành dịch vụ số 
            của đất nước và thế giới
          </div>
        </section>

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
                  {item.title}
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
                <div className={`title ${styles.title}`}>{item.title}</div>
                <div className={`desc ${styles.desc}`}>{item.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCommit;
