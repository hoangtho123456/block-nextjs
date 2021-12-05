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
const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const responsive3 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function UIUXDesign({ deviceType }) {
  return (
    <>
      <div className="mg31 mg311 lazy mg311-bg3">
        <div className="container">
          <div className="page-desc">
            <h1 className="page-title" /><h1>UX/UI DESIGN</h1>
            <div className="desc">
              Dich vụ thiết kế UX / UI cho website/app tại MangoAds      </div>
          </div>
          <div className="largeimg">
            <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Hinh-UX-UI.png" alt="hinh-ux-ui" loading="lazy" />
          </div>
        </div>
        <div className="imgbg">
          <img className="imgsb" src="https://mangoads.vn/vn/wp-content/themes/wp-th/assets/images/bg-svg/10-01.png" alt="img" loading="lazy" />
        </div>
      </div>
      <div className="section maincontent p-about1 section-t">
        <div className="container">
          <div className="mg08">
            <h2>UI/UX tại MangoAds</h2>
            <div className="item"><div className="inner"><p>Nếu internet là con đường, content là những chiếc xe thì UI sẽ là thiết kế của chiếc xe, bạn đi ngang qua có thu hút được ánh nhìn hay không phụ thuộc vào chiếc xe đẹp hay xấu, nội dung chuyển đến người dùng có hiệu quả hay không thì phụ thuộc vào UX tức là công năng của chiếc xe có dễ lái, dễ vận hành hay không.</p>
                <p>UI/UX design giống như là thiết kế showroom của doanh nghiệp bạn vậy, bạn tốn rất nhiều ngân sách để kéo người dùng đến showroom. Nhưng nếu dịch vụ, sản phẩm không được trình bày gọn gàng dễ nắm bắt, thì những khách hàng đã tốn công đến showroom sẽ không trở thành người mua. Họ hoàn toàn có thể qua bên showroom đối thủ, nơi hàng hoá dịch vụ được trưng bày nơi dễ thấy như ngay từ ngoài bàn tiếp tân chẳng hạn. Vậy nếu đã tốn rất nhiều ngân sách cho marketing thì bạn cần cũng nên chi một ngân sách phù hợp cho website, app,… để đo đạc và tối ưu trải nghiệm của người dùng.</p>
                <p>Tại MangoAds, chúng tôi nhìn thiết kế dưới con mắt của những marketer cầu toàn, đặt mình vào vị trí của người dùng để đánh giá trải nghiệm của từng mẫu thiết kế.</p>
              </div></div>
          </div>
        </div>
      </div>
      <div className="mg46 section bg-white">
        <div className="container">
          <div className=" section-header">
            <div><h2>Hướng tiếp cận UX/UI</h2><h2 /></div>
            <div className="desc2">Chúng tôi có nhiều hướng tiếp cận một mẫu design tại MangoAds</div>
          </div>
          <div className="row grid-space-80">
            <div className="col-sm-6 col-md-6">
              <div className="item">
                <p className="item_icon1"><i className="icm50 icon-t5" /></p>
                <div className="center1-sp">
                  <h3>Coder</h3>					</div>
                <p>Các câu hỏi mà một coder cần đi tìm khi đọc thiết kế UI-UX: Nó có phù hợp với việc phát triển phần mềm hay không? Luồng xử lý dữ liệu có cần phải tối ưu hay hiệu chỉnh gì để đáp ứng UX này? Phối hợp các thành phần SSR hay CSR như thế nào để có được tốc độ trải nghiệm tốt nhất nhưng lại giảm tải được cho server?</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="item">
                <p className="item_icon1"><i className="icm50 icon-20" /></p>
                <div className="center1-sp">
                  <h3>Marketer</h3>					</div>
                <p>Nếu tôi thuộc từng nhóm người dùng nhất định thì tôi sẽ cảm thấy như thế nào, dưới con mắt khó tính của những marketer cầu toàn, chúng tôi điều chỉnh trải nghiệm để đạt được hiệu suất conversion tốt nhất. Tại mỗi điểm chạm của người dùng, việc bố trí các goal và nội dung CTA sẽ được thể hiện như thế nào.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="item">
                <p className="item_icon1"><i className="icm50 icon-t32" /></p>
                <div className="center1-sp">
                  <h3>Analyser</h3>					</div>
                <p>Kết hợp với yêu cầu của data strategy thì chúng ta sẽ tracking user theo những điểm chạm nào, làm sao chúng ta vẽ chân dung và xây dựng hành trình của người dùng. Nói cách khác, thông qua các phương án tracking trên giao diện mới, chúng ta sẽ có được phương án cải thiện sau khi release bản mới.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="item">
                <p className="item_icon1"><i className="icm50 icon-t4" /></p>
                <div className="center1-sp">
                  <h3>Copywriter</h3>					</div>
                <p>Nội dung hay, hình ảnh đẹp, hấp dẫn là chưa đủ, mà chúng ta cần phải biết để chúng ở đâu để đảm bảo người dùng nắm được đại ý của toàn page nhanh và hiệu quả nhất. Ngoài ra, chúng ta cũng cần quan tâm độ dài tối ưu cho mỗi đoạn text và style thiết kế hình ảnh để mang lại UI-UX tốt nhất.
                </p>
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
                  <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/01.E-UX-DESIGN-MGA.jpg" alt="01-e-ux-design-mga-2" loading="lazy" />
                </div>
                <div className="divtext">
                  <div className="dl-table">
                    <div>
                      <section className="divtext_box1">
                        <div><h2>Ecommerce UX design</h2><h2 /></div>
                        <div><p>Thiết kế giao diện cho thói quen sử dụng sản phẩm số của người Việt Nam, một thị trường tuy phát triển nhanh nhưng vẫn còn khá mới thì UX sẽ có nhiều điểm khác biệt so với những mẫu design của thế giới. Chúng tôi với sự am hiểu địa phương đảm bảo rằng sản phẩm của bạn sẽ được điều chỉnh tốt nhất theo thị trường mục tiêu.</p>
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
      <div className="section">
        <div className="mg13 ">
          <div className="container">  
            <section className=" section-header">
              <div><h2>Quy trình thiết kế UX/UI</h2></div>
              <div className="desc2">Các bước cần thực hiện để thiết kế một mẫu UX/UI mới</div>
            </section>
            {deviceType == "desktop" ? (
            <div className="OwlSlider functionSlide owl-carousel owl-loaded owl-drag">
            <Carousel responsive={responsive2} autoPlay={false}>
              <div className="item">
                <div className="img"><i className="icon-20" /></div>
                <div className="title"><h3>Phân tích target audience</h3></div>
                <div className="desc">Xác định chân dung khách hàng, thói quen của họ là bước đầu tiên để vẽ giao diện. Chúng ta cũng sẽ phân tích các đối thủ ở nhiều quốc gia khác nhau xem họ thể hiện UI như thế nào để ra được giao diện ban đầu.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t20" /></div>
                <div className="title"><h3>Vẽ hành trình người dùng</h3></div>
                <div className="desc">Xác định các điểm chạm và hành trình của người dùng theo các luồng nội dung trên trang, tại bước này chúng ta sẽ tối ưu hoá hành trình người dùng sao cho ngắn gọn nhất để thực thi được mục tiêu của thương hiệu.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t15" /></div>
                <div className="title"><h3>Mood board</h3></div>
                <div className="desc">Dựa vào nhóm khách hàng mục tiêu, định hướng thương hiệu và phân tích đối thủ cạnh tranh mà chúng ta sẽ xây dựng được bản mood board đơn giản, hiệu quả cũng như cải thiện quy trình làm việc.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-t3" /></div>
                <div className="title"><h3>Wireframe</h3></div>
                <div className="desc">Xây dựng giao diện khung cơ bản để khách hàng mường tượng được bố cục và chức năng của từng thành phần trên trang. Đây được xem là “ngôn ngữ chung” để dev hiểu và làm việc cùng designer.</div>
              </div>
              <div className="item">
                <div className="img"><i className="icon-24" /></div>
                <div className="title"><h3>Prototype</h3></div>
                <div className="desc">Bản vẽ hoàn chỉnh kết hợp các luồng lại để khách hàng trải nghiệm thử bản thiết kế. Đây được xem là bản mock-up có thêm phần UX giúp thể hiện một cách sống động các thao tác thực tế của người dùng.</div>
              </div>
            </Carousel>
            </div>
            ) : (
              <div className="functionSlide">
                <div className="item">
                  <div className="img"><i className="icon-20" /></div>
                  <div className="title"><h3>Phân tích target audience</h3></div>
                  <div className="desc">Xác định chân dung khách hàng, thói quen của họ là bước đầu tiên để vẽ giao diện. Chúng ta cũng sẽ phân tích các đối thủ ở nhiều quốc gia khác nhau xem họ thể hiện UI như thế nào để ra được giao diện ban đầu.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t20" /></div>
                  <div className="title"><h3>Vẽ hành trình người dùng</h3></div>
                  <div className="desc">Xác định các điểm chạm và hành trình của người dùng theo các luồng nội dung trên trang, tại bước này chúng ta sẽ tối ưu hoá hành trình người dùng sao cho ngắn gọn nhất để thực thi được mục tiêu của thương hiệu.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t15" /></div>
                  <div className="title"><h3>Mood board</h3></div>
                  <div className="desc">Dựa vào nhóm khách hàng mục tiêu, định hướng thương hiệu và phân tích đối thủ cạnh tranh mà chúng ta sẽ xây dựng được bản mood board đơn giản, hiệu quả cũng như cải thiện quy trình làm việc.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-t3" /></div>
                  <div className="title"><h3>Wireframe</h3></div>
                  <div className="desc">Xây dựng giao diện khung cơ bản để khách hàng mường tượng được bố cục và chức năng của từng thành phần trên trang. Đây được xem là “ngôn ngữ chung” để dev hiểu và làm việc cùng designer.</div>
                </div>
                <div className="item">
                  <div className="img"><i className="icon-24" /></div>
                  <div className="title"><h3>Prototype</h3></div>
                  <div className="desc">Bản vẽ hoàn chỉnh kết hợp các luồng lại để khách hàng trải nghiệm thử bản thiết kế. Đây được xem là bản mock-up có thêm phần UX giúp thể hiện một cách sống động các thao tác thực tế của người dùng.</div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
      <div className="p-digital1 ">
        <div className="p-digital1__box2 ">
          <div className="container">
            <div className="darkblue1"><h2>Sản phẩm website của MangoAds</h2><h2 /></div>
            <p className="subtitle1">Website của Ngân hàng Thương mại Cổ phần Quân đội được xây dựng với mục đích tối ưu hoá công cụ tìm kiếm và trải nghiệm người dùng. 
              Dự án được phát triển nhằm tạo ra một cổng thông tin liên lạc giữa người dùng và ngân hàng MB Bank.
              Website được tối ưu với các công nghệ tiên tiến như AMP và PWA. Thời gian tải trang dưới 1 giây.</p>
              <div className="list1 owl-carousel">
              <Carousel responsive={responsive3} autoPlay={false}>
                <div className="card1">
                  <div className="card1_video1">
                    <iframe src="https://www.youtube.com/embed/e4pBLBZvMOI" frameBorder={0} allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <p className="card1_text1" />
                </div>
              </Carousel>
              </div>
          </div>
        </div>
      </div>
      <div className=" section-t">
        <div className="mg06 mg06-pt1">
          <div className="container ">
            <section className="black-text section-header">
              <div><h2>UI/UX quan trọng như thế nào?</h2></div>
              <div className="desc">Chúng ta có thể mất tới 80% khách hàng vào tay đối thủ nếu họ trải nghiệm không tốt trên website của bạn.</div>
            </section>
            {deviceType == "desktop" ? (
            <div className="teamSlider">
            <Carousel responsive={responsive} autoPlay={false}>
              <div className="item equal">
                <div className="inner">
                  <div className="meta" />
                  <a className="title"><h3>Conversion tăng đến 400%</h3></a>
                  <div className="desc">Nếu website trình bày rõ ràng UX tốt, bạn có thể cải thiện 400% các chuyển đổi của người dùng trên trang, thử tưởng tượng, chỉ thay đổi nhẹ nhàng trên app bạn đã có thể tăng doanh số lên 4 lần so với bình thường, con số khủng đúng không nào?</div>
                </div>
              </div>
              <div className="item equal">
                <div className="inner">
                  <div className="meta" />
                  <a className="title"><h3>Tỷ suất đầu tư ROI hiệu quả</h3></a>
                  <div className="desc">ROI tốt nhất, bạn chỉ đầu tư một ít ngân sách cho tối ưu giao diện, nhưng hiệu quả về doanh số tăng rất cao, tối ưu trải nghiệm không phải là một kênh marketing nhưng lại là một phương pháp mang lại doanh số và tỷ suất đầu tư ROI rất hiệu quả.</div>
                </div>
              </div>
              <div className="item equal">
                <div className="inner">
                  <div className="meta" />
                  <a className="title" href><h3>Tối ưu trải nghiệm khi dùng</h3></a>
                  <div className="desc">73% các công ty trên thế giới tuyên bố rằng trải nghiệm người dùng là tối quan trọng. Nó có thể nằm ở tất cả mọi điểm chạm online, offline, các channel khác nhau. UI-UX của web, app,… cũng là một trong những vị trí trọng yếu trong hành trình này.</div>
                </div>
              </div>
            </Carousel>
            </div>
            ) : (
              <div className="teamSlider">
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title"><h3>Conversion tăng đến 400%</h3></a>
                    <div className="desc">Nếu website trình bày rõ ràng UX tốt, bạn có thể cải thiện 400% các chuyển đổi của người dùng trên trang, thử tưởng tượng, chỉ thay đổi nhẹ nhàng trên app bạn đã có thể tăng doanh số lên 4 lần so với bình thường, con số khủng đúng không nào?</div>
                  </div>
                </div>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title"><h3>Tỷ suất đầu tư ROI hiệu quả</h3></a>
                    <div className="desc">ROI tốt nhất, bạn chỉ đầu tư một ít ngân sách cho tối ưu giao diện, nhưng hiệu quả về doanh số tăng rất cao, tối ưu trải nghiệm không phải là một kênh marketing nhưng lại là một phương pháp mang lại doanh số và tỷ suất đầu tư ROI rất hiệu quả.</div>
                  </div>
                </div>
                <div className="item equal">
                  <div className="inner">
                    <div className="meta" />
                    <a className="title" href><h3>Tối ưu trải nghiệm khi dùng</h3></a>
                    <div className="desc">73% các công ty trên thế giới tuyên bố rằng trải nghiệm người dùng là tối quan trọng. Nó có thể nằm ở tất cả mọi điểm chạm online, offline, các channel khác nhau. UI-UX của web, app,… cũng là một trong những vị trí trọng yếu trong hành trình này.</div>
                  </div>
                </div>
              </div>
              )}
          </div>
          <div className="imgbg bg-1" />
        </div>
      </div>
      <div className=" section">
        <div className="text-center default-ptb0">
          <section className="container">
            <h1 className="page-title" /><h2>Digital brand guideline</h2>
            <div>Bạn có thể thấy toàn bộ bảng màu và các bố cục website được liệt kê sẵn trong brand guideline</div>
          </section>
        </div>
      </div>
      <div id="gl-list-block_603f76fe4ff30" className>
        <div className="mg22 mg22-nobg">
          <div className="container">
            <div className="row equalHeight">
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t36" /></div>
                      <div className="text"><h3>Atomic design</h3></div>
                    </div>
                    <div><p>Là thiết kế theo từng phần tử, chúng tôi xem xét từng thành phần nhỏ nhất trên website để tạo ra những thiết kế có tính thống nhất trên toàn bộ các sản phẩm của doanh nghiệp.
                      </p></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t3" /></div>
                      <div className="text"><h3>Wireframe</h3></div>
                    </div>
                    <div><p>Quy trình vẽ tay lên vẽ máy, lên màu gửi duyệt và thay đổi trước khi code. Hãy tham khảo một số workflow của chúng tôi trên sketch cũng như quy trình và phương pháp cộng tác với khách hàng khi duyệt mẫu.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t44" /></div>
                      <div className="text"><h3>Web layout</h3></div>
                    </div>
                    <div><p>Làm sao để có được giao diện phù hợp với thói quen và sở thích lướt web của các đối tượng mục tiêu? MangoAds sẽ đưa ra các thiết kế web layout phù hợp với từng ngành nghề, lĩnh vực của khách hàng.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
