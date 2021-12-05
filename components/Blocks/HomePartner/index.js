import React from 'react';
import Carousel from "react-multi-carousel";

import styles from './style.module.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  }
};

const Partner = ({
  classSpacing='section',
  deviceType,
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className={"text-center "+styles['mb1']}>
        <section className="container">
          <h2>Đối tác</h2>
          <div>Những đối tác đã tin tưởng và lựa chọn sử dụng dịch vụ 
            của MangoAds.</div>
        </section>
      </div>

      <div className={styles["p-home"]}>
        <div className="container">
          <Carousel 
            responsive={responsive}
            autoPlay={deviceType=="mobile" && true}
            infinite={true}
            containerClass="c-carousel1 c-carousel1--arrows1"
            removeArrowOnDeviceType='mobile'>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-3.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-2.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-1.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-17.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-16.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-15.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-14.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-13.png" />
              </div>
            </div>
            <div className="owl-item1 ">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-12.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-11.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-7.png" />
              </div>
            </div>
            <div className="owl-item1">
            <div className="tRes_65">
              <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-6.png" />
            </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-9.png" />
              </div>
            </div>
            <div className="owl-item1">
              <div className="tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-10.png" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Partner;
