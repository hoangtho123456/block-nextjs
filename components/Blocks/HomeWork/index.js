import React from 'react';
import styles from './style.module.css';

const Work = ({
  classSpacing='section',
  children
}) => {
  const arr = [{
    icon: 'icon-t32',
    title: 'DỊCH VỤ HIGH END',
    text: 'Được định vị là dịch vụ High-end, chúng tôi cung cấp cho doanh nghiệp đối tác các sản phẩm số, giải pháp chuẩn mực giúp doanh nghiệp Việt Nam vươn tầm thế giới và là cầu nối để các doanh nghiệp thế giới tiếp cận thị trường Việt Nam một cách hiệu suất.'
  },{
    icon: 'icon-t3',
    title: 'CHUYÊN GIA',
    text: 'Với đội ngũ designer và developer chuyên nghiệp, nhiều năm kinh nghiệm, MangoAds sẽ mang đến cho khách hàng những sản phẩm hoàn thiện, chuyên nghiệp nhất. Chúng tôi luôn trong tư thế sẵn sàng hỗ trợ giải quyết các vấn đề của khách hàng.'
  },{
    icon: 'icon-t26',
    title: 'SỰ HÀI LÒNG',
    text: 'Đội ngũ MangoAds luôn nỗ lực hết mình để hoàn thiện sản phẩm, mang đến sự chỉn chu trong từng chi tiết dù khó khăn hay lợi ích bị ảnh hưởng. Cam kết về chất lượng dịch vụ và mức độ hài lòng luôn là tôn chỉ hàng đầu của doanh nghiệp.'
  }];
  return (
    <div className={`${styles.mg27} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles.box1}`}>
          <h2>Chúng tôi làm gì?</h2>
          <div className={`desc2 ${styles.text1}`}>
            Các giá trị cốt lõi của MangoAds
          </div>
        </div>

        <div className="row">
          {arr.map((item,index)=>(
            <div className="col-sm-4 col-md-4" key={index}>
              <div className="text-center">
                <div className={`c-info1 ${styles['info1']}`}>
                  <i className={`icm50 ${item.icon}`}/>
                  <div className="c-info1__item1 b">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className="text-justify">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
