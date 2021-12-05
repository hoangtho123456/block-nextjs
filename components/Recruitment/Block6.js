import React from 'react';
import Link from 'next/link'

const Banner2 = ({}) => {
  const title = 'Media Team';
  const decs = 'Nhiệm vụ chính của chúng tôi là tạo ra những nội dung hay, chất lượng, đầy ý nghĩa cho khách hàng, giúp truyền đạt thông điệp của thương hiệu đến tập khách hàng mục tiêu một cách sâu sắc và ý nghĩa nhất. Bên cạnh những giá trị sáng tạo, team media cũng dành sự chú trọng đến hiệu quả mà nội dung mang lại như đem đến nhiều tương tác, tiếp cận được nhiều người dùng tiềm năng,… tùy thuộc vào mục đích của chiến dịch.';
  const btn = 'VIẾT CÙNG CHÚNG TÔI';
  return (
    <div className="section-b  section">
      <div className="mg50">
        <div className="item item-right">
          <div className="container">
            <div className="topinfo clearfix">
              <div className="img">
                <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Media-Team.jpg" alt="media-team-2" loading="lazy" />
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
