import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxProduct.module.css';
const UxProduct = ({
  classSpacing='section-t',
  children}) => {
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
          <h2>Product Local</h2>
        </div>
        <p className={styles.subtitle1}>
          Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. 
        </p>
      </div>
    </div>
  );
}

export default UxProduct;
