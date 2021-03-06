import React from 'react';
import Carousel from "react-multi-carousel";

import styles from '../../GeneralStyles/UxImportant.module.css';
const UxImportant = ({
  classSpacing='',
  deviceType,
  children}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
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
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg06"]} ${styles["mg06-pt1"]}`}>
        <div className="container">
          <section className={`section-header ${styles["header"]}`}>
            <h2>Curabitur sit amet neque rhoncus sem blandit accumsan.</h2>
            <div className={`desc ${styles.desc}`}>
              Curabitur sit amet neque rhoncus sem blandit accumsan.
            </div>
          </section>
          {deviceType == "desktop" ? (
          <Carousel 
            responsive={responsive} 
            autoPlay={false}
            containerClass={`c-carousel1 ${styles["teamSlider"]}`}>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Curabitur sit amet neque </h3>
                </a>
                <div className="text-justify">
                Curabitur sit amet neque rhoncus sem blandit accumsan.Curabitur sit amet neque rhoncus sem blandit accumsan.Curabitur sit amet neque rhoncus sem blandit accumsan.Curabitur sit amet neque rhoncus sem blandit accumsan.</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Cueque rhoncus sem blandit accumsan.</h3>
                </a>
                <div className="text-justify">Curabitur sit amet neque Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper.</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_inner}>
                <div className={styles.item_meta} />
                <a className={styles.item_title} href="#">
                  <h3>Tristique molestie, mauris orci</h3></a>
                <div className="text-justify">Curabitur sit amet neque Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper.Curabitur sit amet neque Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper..</div>
              </div>
            </div>
          </Carousel>
          ) : (
            <div className={styles["teamSlider"]}>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>Conversion t??ng ?????n 400%</h3></a>
                  <div className="text-justify">N???u website tr??nh b??y r?? r??ng UX t???t, b???n c?? th??? 
                  c???i thi???n 400% c??c chuy???n ?????i c???a ng?????i d??ng tr??n trang, 
                  th??? t?????ng t?????ng, ch??? thay ?????i nh??? nh??ng tr??n app 
                  b???n ???? c?? th??? t??ng doanh s??? l??n 4 l???n so v???i b??nh th?????ng, 
                  con s??? kh???ng ????ng kh??ng n??o?</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>T??? su???t ?????u t?? ROI hi???u qu???</h3></a>
                  <div className="text-justify">
                    ROI t???t nh???t, b???n ch??? ?????u t?? m???t ??t 
                    ng??n s??ch cho t???i ??u giao di???n, nh??ng hi???u qu??? 
                    v??? doanh s??? t??ng r???t cao, t???i ??u tr???i nghi???m 
                    kh??ng ph???i l?? m???t k??nh marketing nh??ng 
                    l???i l?? m???t ph????ng ph??p mang l???i doanh s??? 
                    v?? t??? su???t ?????u t?? ROI r???t hi???u qu???.
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_inner}>
                  <div className={styles.item_meta} />
                  <a className={styles.item_title} href="#">
                    <h3>T???i ??u tr???i nghi???m khi d??ng</h3>
                  </a>
                  <div className="text-justify">73% c??c c??ng ty tr??n th??? gi???i 
                  tuy??n b??? r???ng tr???i nghi???m ng?????i d??ng l?? t???i quan tr???ng. 
                  N?? c?? th??? n???m ??? t???t c??? m???i ??i???m ch???m online, offline, 
                  c??c channel kh??c nhau. UI-UX c???a web, app,??? 
                  c??ng l?? m???t trong nh???ng v??? tr?? tr???ng y???u 
                  trong h??nh tr??nh n??y.</div>
                </div>
              </div>
            </div>
            )}
        </div>
        <div className={`${styles["imgbg"]} ${styles["bg-1"]}`} />
      </div>
    </div>
  );
}

export default UxImportant;
