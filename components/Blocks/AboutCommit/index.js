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
      title: "Lorem Ipsum 1",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "icon-t42",
      title: "Lorem Ipsum 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: "icon-t45",
      title: "Lorem Ipsum 3",
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      icon: "icon-t28",
      title: "Lorem Ipsum 4",
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      icon: "icon-t21",
      title: "Lorem Ipsum 5",
      text: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      icon: "icon-t8",
      title: "Lorem Ipsum 6",
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <div className={styles.mg13+" "+classSpacing}>
      <div className="container">
        <section className={`section-header ${styles["header"]}`}>
          <h2> Lorem Ipsum has been the industry's standard dummy</h2>
          <div className={'desc2 '+styles["desc2"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
