import React from 'react';
import Image from "next/image";

import styles from '../../GeneralStyles/EcomProcess.module.css';
const CroProcess = ({children}) => {
  return (
    <>
      <div className="section">
        <div className="page-desc section-0">
          <section className="container">
            <h2>Quy trình</h2>
            <div>Các bước tối ưu tỷ lệ chuyển đổi</div>
          </section>
        </div>
      </div>
      <div className={`${styles["mg18"]} section-b`}>
        <div className="container">
          <div className={`row grid-space-80 ${styles.row}`}>
            <div className={`col-md-6 ${styles["col-1"]}`}>
              <div className={`img ${styles["clearfix"]}`}>
                <Image 
                  src="/images/items/cro-1.jpg"
                  alt="Picture"
                  width={530}
                  height={800}
                  // layout="responsive"
                />
              </div>
            </div>
            <div className={`col-md-6 ${styles["col-2"]}`}>
              <div className={`rowlabel label-110 ${styles["rowlabel"]}`}>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    01.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <h3>Hiểu khách hàng</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo</p>
                  </div>
                </div>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    02.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <h3>Lorem Ipsum Lorem Ipsum</h3>
                    <p>Nullam non ante eu lacus aliquet elementum ut ac odio. Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. Sed neque ex, condimentum in ipsum in, venenatis efficitur lectus. Aliquam aliquet rutrum nisi, eu venenatis eros tempus et. Donec a porta nisi. Proin sed odio quis lorem tristique bibendum. Praesent leo risus, pretium a sollicitudin condimentum, mattis ac dui. Fusce dolor nisi, auctor ut consequat eget, porta sed mi.</p>
                  </div>
                </div>
                <div className={`item ${styles.item}`}>
                  <div className={`title ${styles.title}`}>
                    03.
                  </div>
                  <div className={`text ${styles.text}`}>
                    <h3>Lorem Ipsum 3</h3>
                    <p>Proin id mauris euismod, pulvinar neque ut, convallis mi. Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CroProcess;
