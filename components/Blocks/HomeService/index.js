import React from 'react';
import Link from 'next/link';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const HomeService = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles["box1"]}`}>
          <div><h2>Dịch vụ của chúng tôi</h2></div>
          <div className={`desc2 ${styles["text1"]}`}>MangoAds cung cấp các dịch vụ đa dạng</div>
        </div>
        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t16"/></p>
              <div className={`${styles.sec1}`}>
                <Link href="/">
                  <a className={styles.url1}>
                    <h3>Phát triển website</h3>
                  </a>
                </Link>
              </div>
              <p className="text-justify">Dựa trên yêu cầu của khách hàng, chuyên viên phát triển 
                website tại MangoAds sẽ tạo ra các sản phẩm được thiết kế 
                chuyên nghiệp, ấn tượng với sự kết hợp chặt chẽ giữa 
                cấu trúc nội dung và các chức năng của trang.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t18"/></p>
              <div className={`${styles.sec1}`}>
                <h3>Quản trị website</h3>
              </div>
              <p className="text-justify">Dịch vụ quản trị website của chúng tôi cung cấp cho đối tác 
                doanh nghiệp các giải pháp thiết thực để cải thiện chất lượng 
                trang bằng cách tích hợp đội ngũ SEO giàu kinh nghiệm và các 
                công cụ hiện đại để tối ưu hóa.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t21"/></p>
              <div className={`${styles.sec1}`}>
                <Link href="/"><a className={styles.url1}>
                  <h3>Dịch vụ SEO</h3></a></Link>
              </div>
              <p className="text-justify">Đội ngũ SEO tại MangoAds sẽ 
              thực hiện các bước tư vấn onsite và tối ưu kỹ thuật giúp 
              website của bạn dễ dàng được xếp hạng cao trên trang kết quả 
              tìm kiếm với các từ khóa tiếng Việt, tiếng Anh và tiếng Nhật.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t4" /></p>
              <div className={styles.sec1}>
                <Link href="/"><a className={styles.url1}>
                  <h3>Content marketing</h3></a></Link>
              </div>
              <p className="text-justify">Nội dung đóng vai trò quan trọng 
              trong hành trình khách hàng, cho phép doanh nghiệp khuyến khích, 
              kêu gọi người dùng thực hiện những hành động cụ thể. 
              Dựa vào mục tiêu và đặc điểm của từng khách hàng, MangoAds 
              sẽ đề xuất chiến lược content phù hợp và tối ưu.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t7" /></p>
              <div className={`${styles.sec1}`}>
                <Link href="/"><a className={styles.url1}>
                  <h3>Dịch vụ PPC</h3></a></Link>
              </div>
              <p className="text-justify">Là đối tác Google và Facebook, 
              chúng tôi mang đến cho doanh nghiệp những chiến dịch quảng cáo 
              tối ưu khi có sự kết hợp của hệ thống tracking và đo lường hiệu. 
              Các báo cáo chi tiết sẽ giúp đối tác có được nhưng cái nhìn 
              khách quan về hiệu suất chiến dịch.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className={styles.item}>
              <p className={styles.icon1}><i className="icm50 icon-t9" /></p>
              <div className={`${styles.sec1}`}>
                <Link href="/"><a className={styles.url1}>
                  <h3>Social media marketing</h3></a></Link>
              </div>
              <p className="text-justify">Social media là cầu nối giúp các 
              thương hiệu gắn kết với khách hàng và mang lại kết quả kinh doanh 
              hiện hữu cho doanh nghiệp. MangoAds sẽ hỗ trợ đối tác từ giai đoạn 
              xác định mục tiêu, lên chiếc lược đến thử nghiệm và tối ưu hiệu quả.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
