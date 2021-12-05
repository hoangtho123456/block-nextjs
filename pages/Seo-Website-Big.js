
import Contact from '../components/Home/Contact'
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function SeoWebsiteBig({ deviceType }) {
  return (
    <div>
      <div className="page-desc mg63 ss-radius-bottom2-2">
        <div className="container">
          <div className="page-title black-text">
            <h1>SEO for enterprise</h1>    </div>
          <div className="desc black-text">SEO cho các doanh nghiệp lớn đòi hỏi những bước tối ưu phức tạp hơn</div>
        </div>
        <div className="imgbg bg-3" />
      </div>
      <div className="p-digital1  section">
        <div className="p-digital1__box2 ">
          <div className="container">
            <div className="darkblue1"><h2>Vấn đề index của website</h2></div>
            <p className="subtitle1">Con số khá bất ngờ đó là một nửa lượng truy cập hàng ngày vào website bạn là từ robots (chủ yếu là Google robot) việc kiểm soát lượng truy cập và đảm bảo robots di chuyển thông suốt trên toàn bộ website, giúp cho chúng lấy content trên web để gửi về server của Google một cách hiệu quả nhất.</p>
            <div className="list1 owl-carousel">
            <Carousel responsive={responsive2} autoPlay={false}>
                <div className="card1">
                  <div className="card1_img1">
                    <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Index-problem.jpg" alt="http://index-problem"/>
                  </div>
                  <p className="card1_text1">Tất nhiên dữ liệu truy cập này sẽ không theo dõi được bằng Google Analytics nên tại MangoAds chúng tôi đã dùng hệ thống phân tích log server bằng Elasticsearch để phân tích lượng dữ liệu truy cập lớn từ Google bot. Qua đó nó giúp phát hiện ra những URL lỗi, URL tải bị chậm,… những link được crawl nhưng không được Google index. Sau cùng chúng tôi tìm ra nguyên nhân để đưa ra giải pháp cải thiện khả năng crawl và index của Google bot đối với những website có lượng nội dung lớn.</p>
                </div>
            </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className=" section">
        <div className="text-center default-ptb0">
          <section className="container">
            <h1 className="page-title">Theo dõi và phân tích crawling budget</h1>
            <div>Khác với SEO cho các website có số lượng trang ít, SEO cho các website lớn (sở hữu trên 1.000.000 trang) yêu cầu những kỹ thuật phân tích chuyên sâu dựa vào log analysis để phát hiện vấn đề và chỉnh sửa kịp thời, đảm bảo các trang được index dầy đủ.</div>
          </section>
        </div>
      </div>
      <div className="section-b section-t">
        <div className="mg50">
          <div className="item item-right">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Server-log-analysis.jpg" alt="server-log-analysis" />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div><h3>Xử lý các lỗi trên web dựa vào phân tích server log</h3></div>
                        <div><p>Google crawler truy cập từng trang trên website bằng cách crawl nội dung. Dữ liệu của webmaster tool chỉ phản ánh được lỗi của những trang&nbsp; mà google đã crawl tương tự với những search engine khác.</p>
                          <p>Đối với những website lớn với lượng page khổng lồ, thì chỉ có log file mới có được thông số chính xác nhất để phân tích tất cả dữ liệu truy cập của website qua đó chuẩn đoán đúng tình trạng bệnh tình của toàn bộ website.</p>
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
      <div className="section-b section-t">
        <div className="mg50">
          <div className="item item-left">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/02.Crawling-budget-MGA.jpg" alt="02-crawling-budget-mga-2" />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div><h3>Điều tiết crawling budget và xử lý những page không tốt cho việc crawl</h3></div>
                        <div><p>Bạn sẽ rất lãng phí lượng truy cập từ Google bot, nếu bạn cho robots crawl những trang trống hoặc thin content, việc kiểm soát và đưa ưu tiên những page có giá trị index cho Google bots lấy dữ liệu trước sẽ giúp website của bạn có đánh giá chất lượng tốt hơn từ Google thay vì để robots tự do crawl những trang không có nội dung.</p>
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
      <div className="section-b section-t">
        <div className="mg50">
          <div className="item item-right">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/02.SSR-CSR-MGA.jpg" alt="02-ssr-csr-mga-3"/>
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div><h3>Điều tiết SSR và CSR</h3></div>
                        <div><p>Dù Google đã dùng crawler với phiên bản Chrominium mới nhất để crawl website của bạn nhưng những nội dung dạng CSR vẫn chưa thực sự tốt cho Google crawl và index. Chúng tôi với sự thấu hiểu cách vận hành của Googlebot, cân đối với các ưu điểm về tốc độ trải nghiệm mà CSR mang lại so với ưu điểm về SEO của SSR sẽ đưa cho bạn những phương án kết hợp CSR và SSR một cách hiệu quả nhất. Nhờ vậy, đảm bảo Googlebot vẫn lấy nội dung hiệu quả nhưng trải nghiệm của người dùng trên trang vẫn nhanh và mượt mà. Ưu tiên cân đối tốt thì sẽ tối ưu được tốc độ load web nhưng vẫn đạt hiệu suất SEO tốt.</p>
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
      <div className=" section">
        <div className="mg13 ">
          <div className="container">  
            <section className=" section-header">
              <div><h2>Control on-page crawling</h2></div>
              <div className="desc2">Ngoài những kỹ thuật onpage optimization cơ bản thì đối với những website lớn chúng ta cần có những rule và phương án quản lý và kiểm soát lỗi onsite hiệu quả. </div>
            </section>
            {deviceType == "desktop" ? (
            <div className="functionSlide owl-carousel">
            <Carousel responsive={responsive} autoPlay={false}>
              <div className="item">
                <div className="img"><i className="icon-t44" /></div>
                <div className="title"><h3>Onsite optimization</h3></div>
                <div className="desc">Các nguyên tắc để cho người quản trị hoặc người dùng phát triển nội dung để đảm bảo không bị vi phạm các thuật toán kiểm soát nội dung của Google.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t45" /></div>
                <div className="title"><h3>Rich content</h3></div>
                <div className="desc">Tư vấn các giải pháp và các chương trình quảng cáo giúp người dùng chủ động tạo nội dung chất lượng trên website của bạn.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t27" /></div>
                <div className="title"><h3>Link strategy</h3></div>
                <div className="desc">Internal link tối ưu trải nghiệm người dùng và chốt CV. External link tận dụng thông tin chia sẻ, kết hợp với các chiến dịch PR để tạo hiệu ứng viral.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t25" /></div>
                <div className="title"><h3>AMP</h3></div>
                <div className="desc">AMP là chuẩn code mới của Google, giúp website tải nhanh hơn trên mobile, từ đó giúp nâng trải nghiệm của người dùng.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t41" /></div>
                <div className="title"><h3>PWA</h3></div>
                <div className="desc">PWA tích hợp những tính năng nâng cao cho platform web. Khi kết hợp với AMP, PWA giúp tăng tốc độ tải trang một cách đáng kể.</div>
              </div>
            </Carousel>
            </div>
            ) : (
              <div className="functionSlide">
                <div className="item">
                  <div className="img"><i className="icon-t44" /></div>
                  <div className="title"><h3>Onsite optimization</h3></div>
                  <div className="desc">Các nguyên tắc để cho người quản trị hoặc người dùng phát triển nội dung để đảm bảo không bị vi phạm các thuật toán kiểm soát nội dung của Google.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t45" /></div>
                  <div className="title"><h3>Rich content</h3></div>
                  <div className="desc">Tư vấn các giải pháp và các chương trình quảng cáo giúp người dùng chủ động tạo nội dung chất lượng trên website của bạn.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t27" /></div>
                  <div className="title"><h3>Link strategy</h3></div>
                  <div className="desc">Internal link tối ưu trải nghiệm người dùng và chốt CV. External link tận dụng thông tin chia sẻ, kết hợp với các chiến dịch PR để tạo hiệu ứng viral.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t25" /></div>
                  <div className="title"><h3>AMP</h3></div>
                  <div className="desc">AMP là chuẩn code mới của Google, giúp website tải nhanh hơn trên mobile, từ đó giúp nâng trải nghiệm của người dùng.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t41" /></div>
                  <div className="title"><h3>PWA</h3></div>
                  <div className="desc">PWA tích hợp những tính năng nâng cao cho platform web. Khi kết hợp với AMP, PWA giúp tăng tốc độ tải trang một cách đáng kể.</div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
      <div className="section-b">
        <Contact/>
      </div>
    </div>
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