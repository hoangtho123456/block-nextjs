import React from 'react';
import Link from 'next/link'

const Banner2 = ({}) => {
  const title = 'Product Team';
  const decs = 'Nhiệm vụ của chúng tôi là tạo ra những sản phẩm số tiêu biểu như những website, mobile app, web app,… cho khách hàng. Chúng tôi hằng ngày nỗ lực để tao ra những sản phẩm chất lượng, có hiệu năng sử dụng cao, an toàn, có khả năng mở rộng cao.';
  const btn = 'Tạo sản phẩm để đời';
  return (
    <div className="section-b  section">
      <div className="mg50">
        <div className="item item-left">
          <div className="container">
            <div className="topinfo clearfix">
              <div className="img">
                <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Product-Team.jpg" alt="product-team" loading="lazy" />
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
