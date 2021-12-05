import React from 'react';
import Link from 'next/link'

const Banner2 = ({}) => {
  const title = 'Project Management Team';
  const decs = 'Để xây dựng những sản phẩm tốt nhất thì phải có hệ thống phương pháp quản lý hiệu quả, chúng tôi là đội ngũ quản lý dự án lập trình và dự án quảng cáo cho khách hàng. Chúng tôi luôn là cầu nối thông dịch từ yêu cầu của khách hàng đến team media, team product một cách hiệu quả nhất.';
  const btn = 'CÙNG QUẢN DỰ ÁN';
  return (
    <div className="section-b  section">
      <div className="mg50">
        <div className="item item-right">
          <div className="container">
            <div className="topinfo clearfix">
              <div className="img">
                <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Project-Management-Team.jpg" alt="project-management-team" loading="lazy" />
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
