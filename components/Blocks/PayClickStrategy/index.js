import React from "react";
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/AboutCommit.module.css';
const PayClickStrategy = ({
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
      icon: "icon-t26",
      title: "Tập khách hàng",
      text: "Chúng tôi luôn suy nghĩ về việc xây dựng tập khách hàng core qua đó có thể target đúng đối tượng chạy ads nhất, “một khi khách đi tìm kiếm là lúc đó họ đang cần” – với suy nghĩ đó chúng tôi xây dựng tập khách hàng qua keyword planning.",
    },
    {
      icon: "icon-t38",
      title: "Hoàn thiện sản phẩm",
      text: "Quá trình nuôi dưỡng lead (nurturing lead) sẽ thông qua các chiến dịch chăm sóc khách hàng trung thành. Từ những tập khách hàng core, kết hợp với các chiến dịch từ khoá, ta sẽ có cơ sở để tăng độ lớn tập khách hàng mà vẫn chất lượng.",
    },
    {
      icon: "icon-t49",
      title: "Công cụ remarketing",
      text: "Remarketing cũng là một công cụ đắc lực cho quá trình xây dựng lòng tin với khách hàng thông qua việc dẫn dắt họ đến những nội dung phù hợp dựa trên dữ liệu thu thập từ phễu hành vi và điểm chạm trên hành trình của họ.",
    },
    {
      icon: "icon-t28",
      title: "Tối ưu remarketing",
      text: "Tối ưu những campaign Remarketing để user không chỉ nhìn thấy lặp đi lặp lại những banner đã-thấy-ở-đâu-đó-rồi, mà từng banner quảng cáo sẽ được điều chỉnh cá nhân hoá phù hợp với nhu cầu hiện hữu của khách hàng thông qua dữ liệu của họ.",
    },
    {
      icon: "icon-t32",
      title: "Tracking và phân tích",
      text: "Để thực hiện một chiến dịch remarketing tốt, thì việc thiết lập tracking và phân tích dữ liệu trên website khách hàng là vô cùng quan trọng, ở MangoAds, Data Strategy luôn được đặt lên đầu tiên trước khi thực hiện một chiến dịch.",
    },
  ];
  return (
    <div className={styles.mg13+" "+classSpacing}>
      <div className="container">
        <section className={`section-header ${styles["header"]}`}>
          <h2>Chiến dịch PPC cần gì?</h2>
          <div className={'desc2 '+styles["desc2"]}>
            Đối với một chiến dịch PPC, chúng ta không cần nhiều impression 
            – Chúng ta cần nhiều click mang lại conversion.
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

export default PayClickStrategy;
