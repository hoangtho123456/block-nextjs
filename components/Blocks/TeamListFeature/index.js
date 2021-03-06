import React from 'react';
// import Image from "next/image";

import styles from '../../GeneralStyles/TeamList.module.css';
const TeamListFeature = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-sm-4 col-md-4">
            <div className={`${styles.item}`}>
              <div className={`c-info1 ${styles["info1"]}`}>
                <i className="icm50 icon-t20"/>
                <div className="c-info1__item1 b equal">Đặc điểm</div>
              </div>
              <div>
                <ul>
                  <li>
                    <span>Tốc độ code nhanh, biết cách tối ưu và 
                      cải thiện sản phẩm.</span>
                  </li>
                  <li>
                    <span>Đam mê lập trình, nghiện tối ưu 
                      tốc độ website, mobile app.</span>
                  </li>
                  <li>
                    <span>Nhiệt huyết, luôn sẵn sàng chiến 
                    với những dự án kỹ thuật cao.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className={`${styles.item}`}>
              <div className={`c-info1 ${styles["info1"]}`}>
                <i className="icm50 icon-t49" />
                <div className="c-info1__item1 b">Kinh nghiệm</div>
              </div>
              <div><ul>
                  <li><span>Kinh nghiệm thiết kế và tùy chỉnh giao diện UI/UX của website và app.</span></li>
                  <li><span>Có khả năng kết nối API với các nền tảng khác để tạo ra hệ thống Omnichannel.</span></li>
                  <li><span>Thành thạo hệ thống website crawler dành cho dự án SEO website monitoring.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className={`${styles.item}`}>
              <div className={`c-info1 ${styles["info1"]}`}>
                <i className="icm50 icon-t50" />
                <div className="c-info1__item1 b">Kỹ năng</div>
              </div>
              <div>
                <ul>
                  <li><span>Sử dụng CSS/ HTML/ JavaScript để tùy chỉnh giao diện website.</span></li>
                  <li><span>Kỹ năng tự học tự mày mò những kiến thức mới để tối ưu hiệu suất sản phẩm.</span></li>
                  <li><span>Biết thử nghiệm và sửa lỗi, có khả năng giải quyết vấn đề nhanh chóng.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamListFeature;
