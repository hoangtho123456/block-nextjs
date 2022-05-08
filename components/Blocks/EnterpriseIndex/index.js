import React from 'react';
import Carousel from "react-multi-carousel";
import Image from "next/image";

import styles from '../../GeneralStyles/UxProduct.module.css';
const EnterpriseIndex = ({
  classSpacing='section',
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
          <h2>Vấn đề index của website</h2>
        </div>
        <p className={styles.subtitle1}>
          Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo. Pellentesque nulla eros, ultrices eget lacus sit amet, ornare semper neque. Ut at dapibus ex, id iaculis nibh. 
        </p>
        <Carousel 
          responsive={responsive} 
          autoPlay={false}
          containerClass={"c-carousel1 "+styles.list1}>
          <div className={styles.card1}>
            <div className={styles.card1_img1}>
              <Image 
                src="/images/items/seo-1.jpeg"
                alt="Picture of the author"
                width={1000}
                height={424}
                layout="responsive"
              />
            </div>
            <p className={styles.card1_text1}>
              Nullam non ante eu lacus aliquet elementum ut ac odio. Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. Sed neque ex, condimentum in ipsum in, venenatis efficitur lectus. Aliquam aliquet rutrum nisi, eu venenatis eros tempus et. Donec a porta nisi. Proin sed odio quis lorem tristique bibendum. Praesent leo risus, pretium a sollicitudin condimentum, mattis ac dui. Fusce dolor nisi, auctor ut consequat eget, porta sed mi.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default EnterpriseIndex;
