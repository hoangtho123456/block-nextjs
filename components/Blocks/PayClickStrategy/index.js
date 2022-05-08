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
      title: "Fusce eget diam sollicitudin",
      text: "Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique",
    },
    {
      icon: "icon-t38",
      title: "Vivamus vitae venenatis nulla",
      text: "Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper",
    },
    {
      icon: "icon-t49",
      title: "Tool remarketing",
      text: "Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper",
    },
    {
      icon: "icon-t28",
      title: "Optimize remarketing",
      text: "Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo.",
    },
    {
      icon: "icon-t32",
      title: "Tracking",
      text: "Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla.",
    },
  ];
  return (
    <div className={styles.mg13+" "+classSpacing}>
      <div className="container">
        <section className={`section-header ${styles["header"]}`}>
          <h2>Curabitur elementum lectus finibu?</h2>
          <div className={'desc2 '+styles["desc2"]}>
            Nunc nisi diam, luctus id blandit ac, ultrices consectetur enim. Praesent elementum sem eget nunc ullamcorper, in consequat nibh porta.
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
