import React from 'react';
import styles from './style.module.css';

const SeoContent = ({
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
          <h2>Content SEO</h2>
          <div className={`desc2 ${styles.text1}`}>
            Lên content strategy dựa vào mục tiêu của thương hiệu nhưng vẫn phải filter và kết hợp với các tư duy về từ khoá và cấu trúc nội dung.
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="text-center">
              <div className={`c-info1 ${styles['info1']}`}>
                <i className={`icm50 icon-t37`}/>
                <div className="c-info1__item1 b">
                  <h3>Kế hoạch dài hạn</h3>
                </div>
              </div>
              <div className="text-justify">
                Từ user pasona và mục tiêu thương hiệu kết hợp với các dịch vụ nổi bật cần tập trung, chúng tôi sẽ xây dựng những kế hoạch nội dung dài hạn. Từ đó thương hiệu của bạn có được cách tiếp cận tốt không chỉ các kênh SEO từ khoá mà còn các kênh quảng cáo khác như social bằng campaign tạo tiếng vang để tăng lượng link giới thiệu.
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <div className="text-center">
              <div className={`c-info1 ${styles['info1']}`}>
                <i className={`icm50 icon-t50`}/>
                <div className="c-info1__item1 b">
                  <h3>Chiến lược quảng bá nội dung</h3>
                </div>
              </div>
              <div className="text-justify">
                SEO theo quan điểm của MangoAds vẫn là một phương thức quảng cáo, tức là làm sao để nội dung chất lượng của chúng ta được càng nhiều nơi phù hợp chia sẻ càng tốt. Đi đôi với tư tưởng đó, chúng tôi lên các chiến dịch quảng bá nội dung để giúp các website có nội dung tương quan với bạn hoặc người dùng của bạn chia sẻ nhiều hơn về website của bạn.
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <div className="text-center">
              <div className={`c-info1 ${styles['info1']}`}>
                <i className={`icm50 icon-t27`}/>
                <div className="c-info1__item1 b">
                  <h3>Backlink profile</h3>
                </div>
              </div>
              <div className="text-justify">
                Việc xây dựng backlink sẽ được chúng tôi tích hợp vào như một trong những phương thức quảng cáo bán hàng, tạo ra những backlink that bring revenue là mục đích sau cùng của chúng tôi. Đây là một quá trình lâu dài và xuyên suốt trong chiến dịch SEO. Nếu backlink profile đủ mạnh, thứ hạng của các từ khóa chắc chắn sẽ được cải thiện trong thời gian không xa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoContent;
