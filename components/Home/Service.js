import React from 'react';
import Link from 'next/link'

const Service = ({}) => {
  const title = 'Dịch vụ của chúng tôi';
  const title2 = 'Phát triển website';
  const title3 = 'Quản trị website';
  const title4 = 'Dịch vụ SEO';
  const title5 = 'Content marketing';
  const title6 = 'Dịch vụ PPC';
  const title7 = 'Social media marketing';
  const decs = 'MangoAds cung cấp các dịch vụ đa dạng';
  const text = 'Dựa trên yêu cầu của khách hàng, chuyên viên phát triển website tại MangoAds sẽ tạo ra các sản phẩm được thiết kế chuyên nghiệp, ấn tượng với sự kết hợp chặt chẽ giữa cấu trúc nội dung và các chức năng của trang.';
  const text2 = 'Dịch vụ quản trị website của chúng tôi cung cấp cho đối tác doanh nghiệp các giải pháp thiết thực để cải thiện chất lượng trang bằng cách tích hợp đội ngũ SEO giàu kinh nghiệm và các công cụ hiện đại để tối ưu hóa.';
  const text3 = 'Đội ngũ SEO tại MangoAds sẽ thực hiện các bước tư vấn onsite và tối ưu kỹ thuật giúp website của bạn dễ dàng được xếp hạng cao trên trang kết quả tìm kiếm với các từ khóa tiếng Việt, tiếng Anh và tiếng Nhật.';
  const text4 = 'Nội dung đóng vai trò quan trọng trong hành trình khách hàng, cho phép doanh nghiệp khuyến khích, kêu gọi người dùng thực hiện những hành động cụ thể. Dựa vào mục tiêu và đặc điểm của từng khách hàng, MangoAds sẽ đề xuất chiến lược content phù hợp và tối ưu.';
  const text5 = 'Là đối tác Google và Facebook, chúng tôi mang đến cho doanh nghiệp những chiến dịch quảng cáo tối ưu khi có sự kết hợp của hệ thống tracking và đo lường hiệu. Các báo cáo chi tiết sẽ giúp đối tác có được nhưng cái nhìn khách quan về hiệu suất chiến dịch.';
  const text6 = 'Social media là cầu nối giúp các thương hiệu gắn kết với khách hàng và mang lại kết quả quả kinh doanh hiện hữu cho doanh nghiệp. MangoAds sẽ hỗ trợ đối tác từ giai đoạn xác định mục tiêu, lên chiếc lược đến thử nghiệm và tối ưu hiệu quả.';
  return (
    <div className="mg46 section bg-white ">
      <div className="container">
        <div className=" section-header">
          <div><h2>{title}</h2></div>
          <div className="desc2">{decs}</div>
        </div>
        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t16" /></p>
              <div className="center1-sp">
                <Link href="/"><a className="mg46_url1">
                  <h3>{title2}</h3>
                </a></Link>
              </div>
              <p>{text}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t18" /></p>
              <div className="center1-sp">
                <h3>{title3}</h3></div>
              <p>{text2}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t21" /></p>
              <div className="center1-sp">
                <Link href="/"><a className="mg46_url1">
                  <h3>{title4}</h3></a></Link>
              </div>
              <p>{text3}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t4" /></p>
              <div className="center1-sp">
                <Link href="/"><a className="mg46_url1">
                  <h3>{title5}</h3></a></Link>
              </div>
              <p>{text4}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t7" /></p>
              <div className="center1-sp">
                <Link href="/"><a className="mg46_url1">
                  <h3>{title6}</h3></a></Link>
              </div>
              <p>{text5}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t9" /></p>
              <div className="center1-sp">
                <Link href="/"><a className="mg46_url1">
                  <h3>{title7}</h3></a></Link>
              </div>
              <p>{text6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
