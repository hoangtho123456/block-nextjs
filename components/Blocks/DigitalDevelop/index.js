import React from 'react';
import Image from "next/image";
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxProduct.module.css';
const DigitalDevelop = ({
  classSpacing='section',
  children
}) => {
  const arrTest = [
    '/images/items/img-2.jpeg',
    '/images/items/phi-ten-1.jpeg',
    '/images/items/foot-map.jpeg',
  ];

  const responsive = {
    exceptMobie: {
      breakpoint: { max: 4000, min: 768 },
      items: 1,
    },
    mobie: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    }
  };

  return (
    <div className={styles["box1"]+" "+classSpacing}>
      <div className="container">
        <div className={`${styles.darkblue1}`}>
          <h2>Neque porro quisquam est qui dolorem ipsum</h2>
        </div>
        <p className={styles.subtitle1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi..
        </p>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          containerClass={"c-carousel1 "+styles.list1}
          showDots={true}
          focusOnSelect={true}
          infinite={true}
          removeArrowOnDeviceType='mobile'
        >
          {arrTest.map((item, index) => (
            <div className={styles.card1} key={index}>
              <div className={styles.card1_img1}>
                <Image 
                  src={item}
                  alt="Picture of the author"
                  width={1000}
                  height={607}
                  layout="responsive"
                  priority="true"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default DigitalDevelop;
