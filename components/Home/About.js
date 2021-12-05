import React from 'react';
import Link from 'next/link'

const About = ({}) => {
  const title = 'Về MangoAds';
  const title2 = 'Sứ mệnh của chúng tôi';
  const title3 = 'Chất lượng dịch vụ';
  const text1 = 'Chúng tôi đề xuất các giải pháp công nghệ tốt nhất để mang lại giá trị cho khách hàng.';
  const text2 = 'Với sứ mệnh đóng góp vào sự phát triển của thị trường số Việt Nam, MangoAds là cầu nối giúp các thương hiệu nội địa vươn ra thế giới và hỗ trợ các thương hiệu quốc tế thâm nhập vào thị trường Việt Nam.';
  const text3 = 'MangoAds thực hiện dự án theo hệ thống chuẩn mực của thế giới trong lĩnh vực digital marketing để đảm bảo cung cấp cho khách hàng các sản phẩm, dịch vụ chất lượng.';
  return (
    <div className="mg46 section bg-white ">
      <div className="container">
        <div className=" section-header">
          <div><h2>{title}</h2></div>
          <div className="desc2">{text1}</div>
        </div>
        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t11" /></p>
              <div className="center1-sp">
                <h3>{title2}</h3></div>
              <p>{text2}</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="item">
              <p className="item_icon1"><i className="icm50 icon-t42" /></p>
              <div className="center1-sp">
                <h3>{title3}</h3></div>
              <p>{text3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
