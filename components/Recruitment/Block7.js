import React from 'react';
import Link from 'next/link'

const Banner2 = ({}) => {
  const title = 'Ops Ads Team';
  const decs = 'ROI là từ khoá luôn hiện diện trong suy nghĩ của chúng tôi. Mỗi ngày chúng tôi luôn tìm cách tối ưu, tối ưu hơn nữa ngân sách quảng cáo của khách hàng để mang lại hiệu quả tốt nhất. Bên cạnh đó, các báo cáo mà Optimizers xây dựng sẽ giúp đối tác đánh giá được hiệu suất chiến dịch và định hình được xu hướng phát triển của thị trường.';
  const btn = 'CÙNG TỐI ƯU ROI';
  return (
    <div className="section-b section">
      <div className="mg50">
        <div className="item item-left">
          <div className="container">
            <div className="topinfo clearfix">
              <div className="img">
                <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Ops-Ads-Team.jpg" alt="ops-ads-team-2" loading="lazy" />
              </div>
              <div className="divtext">
                <div className="dl-table">
                  <div>
                    <section className="divtext_box1">
                      <div><h2>{title}</h2></div>
                      <div><p><span>{decs}</span></p>
                      </div>
                      <div className="btn1">
                      <Link href="#"><a className="btn" target>{btn}</a></Link>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
