import Contact from "../components/Home/Contact";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
export default function PayPerClick({ deviceType }) {
  return (
    <div>
      <div className="p-gl1 page-desc ss-radius-bottom2-2">
        <div className="container">
          <p className="text-center">
            <img
              src="https://mangoads.vn/vn/wp-content/uploads/2021/03/google.png"
              alt="google"
            />
          </p>
          <h1 className="page-title" />
          <h1>Pay per Click</h1>
          <div className="desc-sm">Dịch vụ quảng cáo trả phí tại MangoAds.</div>
        </div>
        <div className="imgbg middle">
          <img
            src="https://mangoads.vn/vn/wp-content/themes/wp-th/assets/images/new-bg/4.jpg"
            alt="alt"
          />
        </div>
      </div>
      <div className="section maincontent p-about1  ">
        <div className="container">
          <div className="mg08">
            <h2 />
            <h2>Tạo chiến dịch PPC hiệu suất cao</h2>
            <div className="item">
              <div className="inner">
                <p>
                  Những năm qua, đội ngũ của MangoAds với những thành viên giàu
                  kinh nghiệm đã thực thi và quản lý rất nhiều chiến dịch với
                  hàng triệu đô ngân sách Google Ads. Chúng tôi đặt lợi ích của
                  đối tác như của chính doanh nghiệp của mình, luôn suy nghĩ về
                  ROI và ROAS không ngừng tối ưu và điều chỉnh chiến dịch để đảm
                  bảo mang lại hiệu suất cao nhất cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mg62 section ">
        <div className="container">
          <section className="section-header">
            <h3 />
            <h2>Dịch vụ PPC trên nền tảng Google Ads</h2>
            <h2 />
            <div className="desc">
              Chúng tôi cung cấp đa dạng các loại dịch vụ PPC trên nền tảng
              Google Ads và Ad Network.
            </div>
          </section>
          <div className="slide1-sp th-slider1-js">
            <div className="row-1 inner1-js">
              <div className="width item1-js">
                <a href="javascript:void(0)" className="item tRes">
                  <div className="text">
                    <div className="img icm50">
                      <i className="icon-t7" />
                    </div>
                    <div className="title">
                      <h3>
                        Google Ads <br />
                        (Search)
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="width item1-js">
                <a href="javascript:void(0)" className="item tRes">
                  <div className="text">
                    <div className="img icm50">
                      <i className="icon-t42" />
                    </div>
                    <div className="title">
                      <h3>
                        Google Display <br />
                        (GDN)
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="width item1-js">
                <a href="javascript:void(0)" className="item tRes">
                  <div className="text">
                    <div className="img icm50">
                      <i className="icon-t56" />
                    </div>
                    <div className="title">
                      <h3>Google Shopping</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="width item1-js">
                <a href="javascript:void(0)" className="item tRes">
                  <div className="text">
                    <div className="img icm50">
                      <i className="icon-t41" />
                    </div>
                    <div className="title">
                      <h3>YouTube Ads</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="width item1-js">
                <a href="javascript:void(0)" className="item tRes">
                  <div className="text">
                    <div className="img icm50">
                      <i className="icon-t55" />
                    </div>
                    <div className="title">
                      <h3>Remarketing</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" section">
        <div className="mg13 ">
          <div className="container">
            <section className=" section-header">
              <div>
                <h2>Chiến dịch PPC cần gì?</h2>
                <h2 />
              </div>
              <div className="desc2">
                Đối với một chiến dịch PPC, chúng ta không cần nhiều impression
                – Chúng ta cần nhiều click mang lại conversion.
              </div>
            </section>
            {deviceType == "desktop" ? (
              <div className="OwlSlider functionSlide owl-carousel owl-loaded owl-drag">
                <Carousel responsive={responsive2} autoPlay={false}>
                  <div className="item">
                    <div className="img">
                      <i className="icon-t26" />
                    </div>
                    <div className="title">
                      <h3>Tập khách hàng</h3>
                      <h3 />
                    </div>
                    <div className="desc">
                      Chúng tôi luôn suy nghĩ về việc xây dựng tập khách hàng
                      core qua đó có thể target đúng đối tượng chạy ads nhất,
                      “một khi khách đi tìm kiếm là lúc đó họ đang cần” – với
                      suy nghĩ đó chúng tôi xây dựng tập khách hàng qua keyword
                      planning.
                    </div>
                  </div>
                  <div className="item">
                    <div className="img">
                      <i className="icon-t38" />
                    </div>
                    <div className="title">
                      <h3>Nuôi dưỡng lead</h3>
                      <h3 />
                    </div>
                    <div className="desc">
                      Quá trình nuôi dưỡng lead (nurturing lead) sẽ thông qua
                      các chiến dịch chăm sóc khách hàng trung thành. Từ những
                      tập khách hàng core, kết hợp với các chiến dịch từ khoá,
                      ta sẽ có cơ sở để tăng độ lớn tập khách hàng mà vẫn chất
                      lượng.
                    </div>
                  </div>
                  <div className="item">
                    <div className="img">
                      <i className="icon-t49" />
                    </div>
                    <div className="title">
                      <h3>Công cụ remarketing</h3>
                      <h3 />
                    </div>
                    <div className="desc">
                      Remarketing cũng là một công cụ đắc lực cho quá trình xây
                      dựng lòng tin với khách hàng thông qua việc dẫn dắt họ đến
                      những nội dung phù hợp dựa trên dữ liệu thu thập từ phễu
                      hành vi và điểm chạm trên hành trình của họ.
                    </div>
                  </div>
                  <div className="item">
                    <div className="img">
                      <i className="icon-t28" />
                    </div>
                    <div className="title">
                      <h3>Tối ưu remarketing</h3>
                      <h3 />
                    </div>
                    <div className="desc">
                      Tối ưu những campaign Remarketing để user không chỉ nhìn
                      thấy lặp đi lặp lại những banner đã-thấy-ở-đâu-đó-rồi, mà
                      từng banner quảng cáo sẽ được điều chỉnh cá nhân hoá phù
                      hợp với nhu cầu hiện hữu của khách hàng thông qua dữ liệu
                      của họ.
                    </div>
                  </div>
                  <div className="item">
                    <div className="img">
                      <i className="icon-t32" />
                    </div>
                    <div className="title">
                      <h3>Tracking và phân tích</h3>
                      <h3 />
                    </div>
                    <div className="desc">
                      Để thực hiện một chiến dịch remarketing tốt, thì việc
                      thiết lập tracking và phân tích dữ liệu trên website khách
                      hàng là vô cùng quan trọng, ở MangoAds, Data Strategy luôn
                      được đặt lên đầu tiên trước khi thực hiện một chiến dịch.
                    </div>
                  </div>
                </Carousel>
              </div>
            ) : (
                <div className="functionSlide">
                    <div className="item">
                      <div className="img">
                        <i className="icon-t26" />
                      </div>
                      <div className="title">
                        <h3>Tập khách hàng</h3>
                        <h3 />
                      </div>
                      <div className="desc">
                        Chúng tôi luôn suy nghĩ về việc xây dựng tập khách hàng
                        core qua đó có thể target đúng đối tượng chạy ads nhất,
                        “một khi khách đi tìm kiếm là lúc đó họ đang cần” – với
                        suy nghĩ đó chúng tôi xây dựng tập khách hàng qua keyword
                        planning.
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <i className="icon-t38" />
                      </div>
                      <div className="title">
                        <h3>Nuôi dưỡng lead</h3>
                        <h3 />
                      </div>
                      <div className="desc">
                        Quá trình nuôi dưỡng lead (nurturing lead) sẽ thông qua
                        các chiến dịch chăm sóc khách hàng trung thành. Từ những
                        tập khách hàng core, kết hợp với các chiến dịch từ khoá,
                        ta sẽ có cơ sở để tăng độ lớn tập khách hàng mà vẫn chất
                        lượng.
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <i className="icon-t49" />
                      </div>
                      <div className="title">
                        <h3>Công cụ remarketing</h3>
                        <h3 />
                      </div>
                      <div className="desc">
                        Remarketing cũng là một công cụ đắc lực cho quá trình xây
                        dựng lòng tin với khách hàng thông qua việc dẫn dắt họ đến
                        những nội dung phù hợp dựa trên dữ liệu thu thập từ phễu
                        hành vi và điểm chạm trên hành trình của họ.
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <i className="icon-t28" />
                      </div>
                      <div className="title">
                        <h3>Tối ưu remarketing</h3>
                        <h3 />
                      </div>
                      <div className="desc">
                        Tối ưu những campaign Remarketing để user không chỉ nhìn
                        thấy lặp đi lặp lại những banner đã-thấy-ở-đâu-đó-rồi, mà
                        từng banner quảng cáo sẽ được điều chỉnh cá nhân hoá phù
                        hợp với nhu cầu hiện hữu của khách hàng thông qua dữ liệu
                        của họ.
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <i className="icon-t32" />
                      </div>
                      <div className="title">
                        <h3>Tracking và phân tích</h3>
                        <h3 />
                      </div>
                      <div className="desc">
                        Để thực hiện một chiến dịch remarketing tốt, thì việc
                        thiết lập tracking và phân tích dữ liệu trên website khách
                        hàng là vô cùng quan trọng, ở MangoAds, Data Strategy luôn
                        được đặt lên đầu tiên trước khi thực hiện một chiến dịch.
                      </div>
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
      <div className="section-b  section-t">
        <div className="mg50">
          <div className="item item-right">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Research.jpg"
                    alt="research"
                    loading="lazy"
                  />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div>
                          <h2>Research</h2>
                          <h2 />
                        </div>
                        <div>
                          <p>
                            Trước khi bắt tay vào chiến dịch, chúng tôi sẽ phân
                            tích thị trường, nghiên cứu đối thủ cạnh tranh, lên
                            keyword planning cho các chiến dịch từ khoá. Từ
                            những thông tin đó ta sẽ ra được ngân sách dự toán,
                            kết hợp với mục tiêu và ngân sách mong muốn của
                            khách hàng, hai bên sẽ thiết lập được chỉ số KPI
                            (Click, PPC, Leads, ROI, ROAS,…) phù hợp. Đó chính
                            là baseline để hai team phối hợp với nhau thực thi
                            và tối ưu hoá xuyên suốt chiến dịch.
                          </p>
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
      <div className="section-b  section-t">
        <div className="mg50">
          <div className="item item-left">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Planning.jpg"
                    alt="planning"
                    loading="lazy"
                  />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div>
                          <h2>Planning</h2>
                          <h2 />
                        </div>
                        <div>
                          <p>
                            Dựa trên các baseline định sẵn từ việc nghiên cứu
                            trước đó, chúng tôi thiết lập chiến dịch phân bổ
                            công việc xây dựng Ads content (Mẫu nội dung quảng
                            cáo) thật hấp dẫn phù hợp với user pasona của từng
                            ngách thị trường trong tổng thể nhóm đối tượng mục
                            tiêu. Ngoài ra, MangoAds team cũng sẽ cân đối ngân
                            sách cho từng giai đoạn phù hợp với yêu cầu của
                            khách hàng.
                          </p>
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
      <div className="section-b  section-t">
        <div className="mg50">
          <div className="item item-right">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Tracking-va-data-strategy.jpg"
                    alt="tracking-va-data-strategy"
                    loading="lazy"
                  />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div>
                          <h2>Tracking và data strategy</h2>
                          <h2 />
                        </div>
                        <div>
                          <p>
                            Như đã đề cập, để đảm bảo sự thành công của chiến
                            dịch thì việc thấu hiểu người dùng dựa trên dữ liệu
                            của họ là điều tối quan trọng, việc setup các
                            tracking code trên trang nhằm giúp cho các nền tảng
                            quảng cáo như Google và Facebook xác định được đúng
                            nhu cầu của khách hàng. Chúng tôi sử dụng nhuần
                            nhuyễn các phương án tracking như Google Tag
                            Manager, hoặc CRM tracking, User Data Feed,… để thu
                            thập và tổng hợp user data đầy đủ nhất, xây dựng
                            chân dung khách hàng nhằm giúp cá nhân hóa quảng
                            cáo.
                          </p>
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
      <div className="section-b  section-t">
        <div className="mg50">
          <div className="item item-left">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Campaign-construction.jpg"
                    alt="campaign-construction"
                    loading="lazy"
                  />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div>
                          <h2>Campaign construction</h2>
                          <h2 />
                        </div>
                        <div>
                          <p>
                            Tại bước này, chúng ta gom các thành phần đã được
                            xây dựng trong giai đoạn planning trước vào chung
                            một chỗ để chúng kết hợp với nhau tạo ra một chiến
                            dịch thành công. Ví dụ như keyword planning tương
                            ứng với ads content cho từng user pasona, ngân sách
                            quảng cáo, dữ liệu tracking cho remarketing, banner,
                            ads content cho từng nhóm đối tượng,…
                          </p>
                          <p>
                            Ngoài ra, việc thiết lập cấu trúc chiến dịch trên
                            Google hoặc Facebook cũng được team MangoAds lưu tâm
                            để làm sao có thể dễ dàng thay đổi và điều chỉnh số
                            lượng lớn một cách nhanh chóng và tiện lợi nhất.
                          </p>
                          <p>
                            Trong giai đoạn này, chúng tôi cũng sẽ thiết lập
                            những rule thông báo hoặc rule bật tắt chiến dịch
                            một cách tự động để đảm bảo campaign không chạy
                            under KPI expectation.
                          </p>
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
      <div className="section-b  section-t">
        <div className="mg50">
          <div className="item item-right">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Optimization-on-the-go.jpg"
                    alt="optimization-on-the-go"
                    loading="lazy"
                  />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div>
                          <h2>Optimization on the go</h2>
                          <h2 />
                        </div>
                        <div>
                          <p>
                            Câu chuyện vẫn là chúng ta không cần nhiều
                            Impression, chúng ta cần nhiều click mà tạo ra được
                            conversion. Tại đây khi thực chiến, chúng ta gặp lại
                            hai anh bạn ROAS và ROI, trên cơ sở lượng conversion
                            mục tiêu. Đội ngũ Ads operation tại MangoAds luôn
                            không ngừng phân tích dữ liệu thực chạy để đưa ra
                            phương án điều chỉnh kịp thời nhằm đáp ứng được đúng
                            baseline KPI của chiến dịch đã đề ra.
                          </p>
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
      <div className="section-b  section-t">
        <div className="mg50">
          <div className="item item-left">
            <div className="container">
              <div className="topinfo clearfix">
                <div className="img">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Analysis-va-report.jpg"
                    alt="analysis-va-report"
                    loading="lazy"
                  />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div>
                          <h2>Analysis và report</h2>
                          <h2 />
                        </div>
                        <div>
                          <p>
                            Report và đánh giá report là cơ sở để chúng ta tiếp
                            tục những vòng sprint mới trong hành trình Agile
                            (đây là ngôn ngữ của dân lập trình – Tại bước này
                            chúng tôi nhìn chiến dịch thông qua con mắt của dân
                            kỹ thuật kết hợp với những marketer cầu toàn). Từ
                            những dữ liệu thu thập chúng tôi sẽ không ngừng đưa
                            ra những phương án tối ưu mới cho chiến dịch của
                            doanh nghiệp bạn.
                          </p>
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
      <div
        style={{ height: "80px" }}
        aria-hidden="true"
        className="wp-block-spacer"
      />
      <h2 style={{ textAlign: "center" }}>
        Vì sao nên lựa chọn dịch vụ PPC của MangoAds?
      </h2>
      <div className="mg28 section-b  section-t">
        <div className="container">
          <div className="row entry-content">
            <div className="col-md-5 col-lg-4">
              <div className="item">
                <div className="inner tRes_70">
                  <img
                    src="https://mangoads.vn/vn/wp-content/uploads/2021/04/02.payper-click-design.jpg"
                    alt="02-payper-click-design-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="b">
                Các đặc điểm nổi bật tạo ra giá trị của chúng tôi
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <div className="dl-table mb-20">
                    <div className="icon">
                      <i className="icon-t2" />
                    </div>
                    <div className="text">
                      Tối ưu hiệu quả cho tới conversion
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <div className="dl-table mb-20">
                    <div className="icon">
                      <i className="icon-t21" />
                    </div>
                    <div className="text">Dùng số để ra phương án</div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <div className="dl-table mb-20">
                    <div className="icon">
                      <i className="icon-t32" />
                    </div>
                    <div className="text">Tư duy của dự án tổng thể</div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <div className="dl-table mb-20">
                    <div className="icon">
                      <i className="icon-t49" />
                    </div>
                    <div className="text">
                      Kiểm soát và không lạm dụng tự động hoá
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <div className="dl-table mb-20">
                    <div className="icon">
                      <i className="icon-t26" />
                    </div>
                    <div className="text">Con người chuẩn mực</div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <div className="dl-table mb-20">
                    <div className="icon">
                      <i className="icon-t38" />
                    </div>
                    <div className="text">Không ngừng đặt mục tiêu mới</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" section">
        <div className="mg06 ">
          <div className="container ">
            <section className="black-text section-header">
              <div>
                <h2>Thiết lập tài khoản quảng cáo</h2>
                <h2 />
              </div>
              <div className="desc">Các bước cần để chạy chiến dịch PPC</div>
            </section>
            {deviceType == "desktop" ? (
              <div className="teamSlider">
              <Carousel responsive={responsive} autoPlay={false}>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href>
                      <h3>Đánh giá hiện trạng</h3>
                    </a>
                    <div className="desc">
                      Trước hết chúng tôi sẽ đánh giá các tài khoản quảng cáo
                      của bạn với đầy đủ lịch sử các quảng cáo trước. Sau đó,
                      chúng tôi đưa ra những tư vấn về cách quản lý tài khoản
                      phù hợp. Bên cạnh đó, MangoAds còn tiến hành đánh giá
                      những rủi ro có thể xảy ra và các cơ hội mà chúng ta có
                      thể tận dụng từ tài khoản quảng cáo của bạn.
                    </div>
                  </div>
                </div>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href>
                      <h3>Keywords research</h3>
                    </a>
                    <div className="desc">
                      Khi người ta có nhu cầu và ở giai đoạn chuyển đổi cao,
                      chúng tôi tiến hành nghiên cứu từ khóa và đưa ra bộ
                      keyword giúp đánh mạnh vào sản phẩm/ dịch vụ của bạn. Bên
                      cạnh KPI về cam kết số click, impression trong chiến dịch
                      PPC, chúng tôi cũng sẽ hỗ trợ hết mình để từ các chuyển
                      đổi nhỏ thành những conversion chất lượng.
                    </div>
                  </div>
                </div>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href>
                      <h3>Ads Content writing</h3>
                    </a>
                    <div className="desc">
                      Từ heading, mô tả đến các extension, MangoAds team đều tối
                      ưu content nhằm phản ánh dịch vụ và USP mạnh nhất của bạn.
                      Trong khi ads text của Google Ads được viết theo tiêu
                      chuẩn cũng như tận dụng tối đa không gian quảng cáo thì
                      content chạy quảng cáo Facebook sẽ được viết sao cho hấp
                      dẫn nhất và đầy đủ thông tin nhất.
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
                      <a className="title" href>
                        <h3>Đánh giá hiện trạng</h3>
                      </a>
                      <div className="desc">
                        Trước hết chúng tôi sẽ đánh giá các tài khoản quảng cáo
                        của bạn với đầy đủ lịch sử các quảng cáo trước. Sau đó,
                        chúng tôi đưa ra những tư vấn về cách quản lý tài khoản
                        phù hợp. Bên cạnh đó, MangoAds còn tiến hành đánh giá
                        những rủi ro có thể xảy ra và các cơ hội mà chúng ta có
                        thể tận dụng từ tài khoản quảng cáo của bạn.
                      </div>
                    </div>
                  </div>
                  <div className="item equal">
                    <div className="inner">
                      <div className="meta" />
                      <a className="title" href>
                        <h3>Keywords research</h3>
                      </a>
                      <div className="desc">
                        Khi người ta có nhu cầu và ở giai đoạn chuyển đổi cao,
                        chúng tôi tiến hành nghiên cứu từ khóa và đưa ra bộ
                        keyword giúp đánh mạnh vào sản phẩm/ dịch vụ của bạn. Bên
                        cạnh KPI về cam kết số click, impression trong chiến dịch
                        PPC, chúng tôi cũng sẽ hỗ trợ hết mình để từ các chuyển
                        đổi nhỏ thành những conversion chất lượng.
                      </div>
                    </div>
                  </div>
                  <div className="item equal">
                    <div className="inner">
                      <div className="meta" />
                      <a className="title" href>
                        <h3>Ads Content writing</h3>
                      </a>
                      <div className="desc">
                        Từ heading, mô tả đến các extension, MangoAds team đều tối
                        ưu content nhằm phản ánh dịch vụ và USP mạnh nhất của bạn.
                        Trong khi ads text của Google Ads được viết theo tiêu
                        chuẩn cũng như tận dụng tối đa không gian quảng cáo thì
                        content chạy quảng cáo Facebook sẽ được viết sao cho hấp
                        dẫn nhất và đầy đủ thông tin nhất.
                      </div>
                    </div>
                  </div>
                </div>
                )}
            
          </div>
        </div>
      </div>
      <div className="section-b">
        <Contact />
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
