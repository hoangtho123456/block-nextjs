import React from 'react';

const WebDesignStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Ưu điểm của dịch vụ phát triển website tại MangoAds</h2>
          <div>
            Thân thiện với SEO, dễ dàng quản trị, đo đạc 
            và thu thập dữ liệu là những ưu điểm của website 
            được phát triển bởi MangoAds.
          </div>
        </section>
      </div>
    </div>
  );
}

export default WebDesignStr;
