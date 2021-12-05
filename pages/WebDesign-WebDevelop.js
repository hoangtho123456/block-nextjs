import React from 'react';
import Contact from '../components/Home/Contact'
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function WebDesignWebDevelop({ deviceType }) {
  
  return (
    <>
      <section className="c-banner1 c-banner1--type1 page-desc ss-radius-bottom2-2">
        <div className="container">
          <div className="desc34">Dịch vụ</div>
          <h1 className="page-title" /><h1>Web design &amp; Web development</h1>
        </div>
        <div className="imgbg">
          <img src="https://mangoads.vn/vn/wp-content/themes/wp-th/assets/images/bg-svg/04-01.svg" alt="img" />
        </div>
      </section>
      <div className="section maincontent p-about1  ">
        <div className="container">
          <div className="mg08">
            <h2 /><h2>Tầm quan trọng của website</h2>
            <div className="item"><div className="inner"><p>Website là kênh đóng vai trò quan trọng nhất trong các điểm chạm của người dùng trong hành trình mua sắm sản phẩm dịch vụ của doanh nghiệp bạn trên internet. Đồng thời đây cũng là kênh cho phép doanh nghiệp được tự do chủ động thực hiện mọi chiến lược đo đạc tracking, cũng như triển khai ý tưởng nội dung mà không gặp bất cứ rào cản nào. Do đó, nếu bạn bỏ ra cả triệu đô la tiền quảng cáo online thì nguồn lực chi cho việc xây dựng và duy trì sự trơn tru của website cũng phải tương xứng với ngân sách quảng cáo đó.</p>
              </div></div>
          </div>
        </div>
      </div>
      <div className="mg61  section-t">
        <div className="item item-right">
          <div className="topinfo clearfix followHeight">
            <div className="img equal2">
              <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/MangoAds-MB-Bank.jpg" alt="mangoads-mb-bank" />
            </div>
            <div className="divtext">
              <div className="dl-table">
                <div>
                  <div><h2>Thiết kế giao diện</h2></div>
                  <p><span style={{fontWeight: 400}}>Chúng tôi tối ưu từng điểm chạm sao cho thiết kế được ấn tượng nhất nhưng vẫn đảm bảo được mục tiêu truyền tải nội dung của thương hiệu cũng như trải nghiệm mua sắm sản phẩm và dịch vụ của người dùng. Đồng thời, các mẫu thiết kế cũng sẽ đáp ứng được những tiêu chuẩn nhất định để đảm bảo khi triển khai xuống code được dễ dàng, và có tính kế thừa theo design system để có thể phát triển tiếp sau này.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className="mg61 ">
        <div className="item item-left">
          <div className="topinfo clearfix followHeight">
            <div className="img equal2">
              <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/MangoAds-Aconcept.jpg" alt="mangoads-aconcept" />
            </div>
            <div className="divtext">
              <div className="dl-table">
                <div>
                  <div><h2>Trải nghiệm mua sắm và tối ưu CRO</h2></div>
                  <p><span style={{fontWeight: 400}}>Mục tiêu cuối cùng của mọi chiến dịch là bán được sản phẩm và dịch vụ, do đó việc xây dựng website tối ưu hành trình người dùng và các điểm chạm sao cho họ thuận tiện nhất để mua hàng là mục tiêu của CRO. Trải nghiệm mua sắm online sẽ được cải thiện từng ngày, mỗi một sự tương tác giữa người dùng và website, thương hiệu đều có khả năng khiến họ mua hàng hay sử dụng dịch vụ.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mg61 ">
        <div className="item item-right">
          <div className="topinfo clearfix followHeight">
            <div className="img equal2">
              <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/MangoAds-TH-Milk-1.jpg" alt="mangoads-th-milk-2"/>
            </div>
            <div className="divtext">
              <div className="dl-table">
                <div>
                  <div><h2>Mobile first</h2></div>
                  <p><span style={{fontWeight: 400}}>Với sự phát triển không ngừng của thiết bị di động, tư tưởng thiết kế mobile first luôn được lưu tâm, ngoài mobile first design chúng ta còn cần phải tính toán đến mobile first loading speed, mobile first index với SEO… Do đó, MangoAds với tư tưởng mobile nhanh, thuận tiện trong tư duy thiết kế và lập trình, chúng tôi đảm bảo hệ thống web mới của bạn sẽ vận hành trơn tru trên mọi thiết bị.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" section-t">
        <div className="text-center default-ptb0 page-desc-width">
          <section className="container">
            <h1 className="page-title" /><h2>Ưu điểm của dịch vụ phát triển website tại MangoAds</h2>
            <div>Thân thiện với SEO, dễ dàng quản trị, đo đạc và thu thập dữ liệu là những ưu điểm của website được phát triển bởi MangoAds.</div>
          </section>
        </div>
      </div>
      <div className="section">
        <div className="mg22 mg22-nobg">
          <div className="container">
            <div className="row equalHeight">
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t2" /></div>
                      <div className="text"><h2>SEO tốt</h2></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Khi xây dựng cấu trúc web, MangoAds team sẽ tư vấn những thành phần trên web để giúp hỗ trợ xây dựng nội dung và các phương án thu thập nội dung đóng góp từ phía người dùng. Từ đó chúng tôi triển khai các ý tưởng marketing đồng hành với việc đẩy mạnh SEO cho website sau này. V</span><span style={{fontWeight: 400}}>iệc code theo đúng chuẩn của Google, tối ưu tốc độ tải trang tốt, cũng là một trong những tiêu chí hỗ trợ cho website của bạn có được thứ hạng tốt trên công cụ tìm kiếm này.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t4" /></div>
                      <div className="text"><h2>Dễ quản trị content</h2></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Khi chạy các campaign quảng cáo, làm sao để team marketing có thể chủ động xây dựng landing page hay các bài viết thật đơn giản và nhanh chóng. Với kinh nghiệm triển khai digital marketing campaign trên nhiều hệ thống website, chúng tôi biết phải thêm gì, bớt gì, tối ưu gì trong hệ thống admin của website. Đảm bảo người quản trị web và team marketing có thể dễ dàng điều chỉnh và tạo nội dung một cách hiệu quả để triển khai campaign thành công.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t3" /></div>
                      <div className="text"><h2>Đo đạc và thu thập dữ liệu</h2></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Cũng như việc xây dựng UI-UX của website, chúng tôi xây dựng các phương án tracking dựa trên những điểm chạm của người dùng, từ đó thống kê dữ liệu là vô cùng quan trọng. Đội ngũ marketing của bạn có thể dựa vào đó để nhanh chóng đưa ra những điều chỉnh cho chiến dịch quảng cáo hiện tại. Ngoài ra, những Data Analysis của chúng tôi sẽ chủ động đề xuất các phương án tracking và gắn tracking cho website của bạn.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t49" /></div>
                      <div className="text"><h2>Tích hợp với các hệ thống hiện hữu</h2></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Hiểu được vấn đề đó, những website của MangoAds phát triển luôn sẵn sàng các phương án tích hợp API với những hệ thống hiện hữu như CRM, ERP, livechat, support,… của khách hàng.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t39" /></div>
                      <div className="text"><h2>Đảm bảo hoạt động trơn tru SLA</h2></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Chúng tôi sẽ đưa ra các phương án Sizing hạ tầng web trên Cloud như Amazon, Google, Azure,… để đảm bảo hệ thống web đáp ứng được tiêu chuẩn SLA tốt nhất, vận hành trơn tru với tốc độ tải ổn định ở mọi nơi.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t43" /></div>
                      <div className="text"><h2>Backup source và lưu trữ trên git</h2></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Toàn bộ source code của bạn sẽ được lưu trữ trên Git. Nếu cần thiết, toàn bộ hoạt động update code đều sẽ được thiết lập CI-CD để triển khai lên production và hạn chế lỗi nhiều nhất.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mg10 ">
        <div className="container">
          <div className="row grid-space-80">
            <div className="col-sm-5 col-1">
              <div className="item">
                <div className="img">
                  <img src="https://mangoads.vn/vn/wp-content/uploads/2021/03/speed-a.jpg" alt="speed-a" />
                </div>
                <div><p><span style={{fontWeight: 400}}>Làm sao để website của bạn có thể có sức chịu đựng tốt với lượng truy cập cao từ mọi nơi trên thế giới, tối ưu tốc độ tải, làm website nhẹ hơn, call it request hay tối ưu hạ tầng,… là những phương pháp được Google đề cập nhiều trong tài liệu hướng dẫn lập trình web.</span></p>
                </div>
              </div>
            </div>
            <article className="col-sm-7 col-2">
              <div className="title1"><h2>Tối ưu tốc độ tải</h2></div>
              <div className="item">
                <div className="item_info1">
                  <i className="icon-t23" />
                  <div className="title1"><h3>AMP web development</h3></div>
                </div>
                <div><p><span style={{fontWeight: 400}}>Là chuẩn code web riêng cho bản mobile được Google support để index, với first load từ Google Search nhanh và nhẹ nhàng hơn.</span></p>
                </div>
              </div>
              <div className="item">
                <div className="item_info1">
                  <i className="icon-t14" />
                  <div className="title1"><h3>PWA</h3></div>
                </div>
                <div><p>PWA là giúp cung cấp những tính năng bổ sung dựa trên các thiết bị hỗ trợ, cung cấp khả năng ngoại tuyến, đẩy thông báo và cải thiện tốc độ.</p>
                </div>
              </div>
              <div className="item">
                <div className="item_info1">
                  <i className="icon-t20" />
                  <div className="title1"><h3>Marketing team hỗ trợ</h3></div>
                </div>
                <div><p><span style={{fontWeight: 400}}>Marketing team tại MangoAds giúp nghiên cứu, phân tích các số liệu, dựa trên kinh nghiệm thực tiễn để đúc rút ra UI-UX phù hợp cho website.</span></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className=" section">
        <div className="mg06 ">
          <div className="container ">
            <section className="black-text section-header">
              <div><h2>Các loại website MangoAds phát triển</h2></div>
              <div className="desc">MangoAds phát triển đa dạng các loại website cho hầu hết mọi lĩnh vực kinh doanh trên thị trường</div>
            </section>
            {deviceType == "desktop" ? (
            <div className="teamSlider">
            <Carousel responsive={responsive} autoPlay={false}>
              <div className="item equal">
                <div className="inner">
                  <div className="meta" />
                  <a className="title" href><h3>Web giới thiệu dịch vụ</h3></a>
                  <div className="desc">Chúng tôi đã từng xây dựng hàng trăm website cho nhiều doanh nghiệp trên nhiều CMS hay framework phổ biến như WordPress, Laravel, Drupal, Spring boot,… Bạn hãy đưa ra yêu cầu, chúng tôi sẽ đảm bảo đáp ứng những tiêu chuẩn cao nhất.
                  </div>
                </div>
              </div>
              <div className="item equal">
                <div className="inner">
                  <div className="meta" />
                  <a className="title" href><h3>Web bán sản phẩm</h3></a>
                  <div className="desc">Hệ thống web bán hàng với những business rule phức tạp, kết hợp các chương trình khuyến mãi, hay điều chỉnh giá thường xuyên, chúng tôi có kinh nghiệm thực hiện website EC trên các nền tảng như Magento, Woocommerce, Laravel, Shopware,…
                  </div>
                </div>
              </div>
              <div className="item equal">
                <div className="inner">
                  <div className="meta" />
                  <a className="title" href><h3>Các web đặc thù khác</h3></a>
                  <div className="desc">Tuỳ vào yêu cầu của doanh nghiệp, chúng tôi có thể phát triển website – web app – mobile app theo đặc thù ngành của bạn ở nhiều ngôn ngữ lập trình khác nhau. Với những yêu cầu riêng biệt, chúng tôi vẫn đảm bảo mang đến sản phẩm chất lượng nhất.
                  </div>
                </div>
              </div>
            </Carousel>
            </div>
            ) : (
              <div className="teamSlider">
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href><h3>Web giới thiệu dịch vụ</h3></a>
                    <div className="desc">Chúng tôi đã từng xây dựng hàng trăm website cho nhiều doanh nghiệp trên nhiều CMS hay framework phổ biến như WordPress, Laravel, Drupal, Spring boot,… Bạn hãy đưa ra yêu cầu, chúng tôi sẽ đảm bảo đáp ứng những tiêu chuẩn cao nhất.
                    </div>
                  </div>
                </div>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href><h3>Web bán sản phẩm</h3></a>
                    <div className="desc">Hệ thống web bán hàng với những business rule phức tạp, kết hợp các chương trình khuyến mãi, hay điều chỉnh giá thường xuyên, chúng tôi có kinh nghiệm thực hiện website EC trên các nền tảng như Magento, Woocommerce, Laravel, Shopware,…
                    </div>
                  </div>
                </div>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href><h3>Các web đặc thù khác</h3></a>
                    <div className="desc">Tuỳ vào yêu cầu của doanh nghiệp, chúng tôi có thể phát triển website – web app – mobile app theo đặc thù ngành của bạn ở nhiều ngôn ngữ lập trình khác nhau. Với những yêu cầu riêng biệt, chúng tôi vẫn đảm bảo mang đến sản phẩm chất lượng nhất.
                    </div>
                  </div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
      <div className="section-b">
        <Contact/>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}