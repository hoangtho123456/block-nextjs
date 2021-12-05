import React from 'react';
import Link from 'next/link'

const Banner2 = ({}) => {
  const title = 'MangoAds đóng góp vào nền dịch vụ số những sản phẩm chất lượng, giúp các doanh nghiệp tiếp cận thị trường hiệu suất nhất';
  return (
    <div className="p-contact1 section-t bg-white">
      <div className="l-subsection color_primary with_parallax" style={{backgroundImage: 'url("https://mangoads.vn/vn/wp-content/uploads/2021/04/tea-farm-landscape-ERD3DPW.jpg")', display: 'table'}}>
        <div className="l-subsection-h">
          <section className="l-subsection-hh g-html i-cf">
            <h2><strong>{title}</strong></h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
