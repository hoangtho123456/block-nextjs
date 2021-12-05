import React from 'react';
import Link from 'next/link'

const Work = ({}) => {
  const title = 'Chúng tôi làm gì?';
  const title2 = 'DỊCH VỤ HIGH END';
  const title3 = 'CHUYÊN GIA';
  const title4 = 'SỰ HÀI LÒNG';
  const text1 = 'Các giá trị cốt lõi của MangoAds';
  const text2 = 'Được định vị là dịch vụ High-end, chúng tôi cung cấp cho doanh nghiệp đối tác các sản phẩm số, giải pháp chuẩn mực giúp doanh nghiệp Việt Nam vươn tầm thế giới và là cầu nối để các doanh nghiệp thế giới tiếp cận thị trường Việt Nam một cách hiệu suất.';
  const text3 = 'Với đội ngũ designer và developer chuyên nghiệp, nhiều năm kinh nghiệm, MangoAds sẽ mang đến cho khách hàng những sản phẩm hoàn thiện, chuyên nghiệp nhất. Chúng tôi luôn trong tư thế sẵn sàng hỗ trợ giải quyết các vấn đề của khách hàng.';
  const text4 = 'Đội ngũ MangoAds luôn nỗ lực hết mình để hoàn thiện sản phẩm, mang đến sự chỉn chu trong từng chi tiết dù khó khăn hay lợi ích bị ảnh hưởng. Cam kết về chất lượng dịch vụ và mức độ hài lòng luôn là tôn chỉ hàng đầu của doanh nghiệp.';
  return (
    <div className="mg27 section-b bg-white">
      <div className="container">
        <div className=" section-header">
          <h2>{title}</h2>
          <div className="desc2">{text1}</div>
        </div>
        <div className="row equalHeight text-center">
          <div className="col-sm-4 col-md-4">
            <div className="item">
              <div className="text-center">
                <div className="c-info1">
                  <i className="icm50 icon-t32" />
                  <div className="c-info1__item1 b equal" style={{height: '23px'}}><h3>{title2}</h3></div>
                </div>
                <div className="text-justify">{text2}</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="item">
              <div className="text-center">
                <div className="c-info1">
                  <i className="icm50 icon-t3" />
                  <div className="c-info1__item1 b equal" style={{height: '23px'}}><h3>{title3}</h3></div>
                </div>
                <div className="text-justify">{text3}</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="item">
              <div className="text-center">
                <div className="c-info1">
                  <i className="icm50 icon-t26" />
                  <div className="c-info1__item1 b equal" style={{height: '23px'}}><h3>{title4}</h3></div>
                </div>
                <div className="text-justify">{text4}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
