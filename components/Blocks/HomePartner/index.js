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
  const iconUrl = 'https://swiperjs.com';
  const listCoIcon = [
    iconUrl+'/images/clients/xiaomi.svg',
    iconUrl+'/images/clients/dji.svg',
    iconUrl+'/images/clients/mcdonalds.svg',
    iconUrl+'/images/clients/burger-king.svg',
    iconUrl+'/images/clients/dji.svg',
    iconUrl+'/images/clients/vodafone.svg',
    iconUrl+'/images/clients/toyota.svg',
    iconUrl+'/images/clients/adobe.jpg',
  ];
  return (
    <div className={`${classSpacing}`}>
      <div className={"text-center "+styles['mb1']}>
        <section className="container">
          <h2>Partner</h2>
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
            {listCoIcon.map(item=>(
              <div className="owl-item1">
                <img alt="img" src={item} width="120" height="100"/>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Partner;
