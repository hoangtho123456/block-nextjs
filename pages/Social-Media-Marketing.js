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

export default function SocialMediaMarketing({ deviceType }) {
  return (
    <>
      <div id="about-banner-block_6051a35782c85" className="section-b">
        <div className="page-desc mg63 ss-radius-bottom2-2">
          <div className="container">
            <div className="page-title ">
              <h1>Social Media Marketing</h1>    
            </div>
            <div className="desc ">Dịch vụ marketing trên nền tảng Social Media tại MangoAds.</div>
          </div>
          <div className="imgbg " />
        </div>
      </div>
      <div className="mg19 section bg-white  section-b">
        <div className="container">
          <div className="row grid-space-120 row-1">
            <div className="col-sm-7">
              <div><h2>Các dịch vụ Social Media Marketing của MangoAds</h2><h2 /></div>
              <div><p><span style={{fontWeight: 400}}>Kể từ năm 2013, MangoAds đã cung cấp dịch vụ marketing trên Facebook một cách chuyên nghiệp. Chúng tôi thực hiện tư vấn 1-1 để hiểu rõ nhu cầu và mong muốn của khách hàng. Chúng tôi giúp cho các thương hiệu gắn kết với khách hàng và mang lại kết quả quả kinh doanh hiện hữu cho doanh nghiệp.&nbsp;</span></p>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="dl-table">
                <div className="icon"><i className="icon-t22" /></div>
                <div className="text">Thân thiện với người dùng</div>
              </div>
              <div className="dl-table">
                <div className="icon"><i className="icon-t3" /></div>
                <div className="text">Nội dung phong phú</div>
              </div>
              <div className="dl-table">
                <div className="icon"><i className="icon-t59" /></div>
                <div className="text">Tiết kiệm chi phí</div>
              </div>
              <div className="dl-table">
                <div className="icon"><i className="icon-t6" /></div>
                <div className="text">Hiệu quả tối ưu</div>
              </div>
              <div className="dl-table">
                <div className="icon"><i className="icon-t14" /></div>
                <div className="text">Báo cáo hiệu quả thường xuyên</div>
              </div>
            </div>
          </div>
          {deviceType == "desktop" ? (
            <div className="functionSlide owl-carousel equalHeight">
            <Carousel responsive={responsive} autoPlay={false}>
              <div className="item">
                <div className="equal">
                  <div className="img"><i className="icon-t55" /></div>
                  <div className="title"><h3>Research &amp; Social Listening</h3></div>
                  <div className="desc">Chúng tôi research để hiểu về nhân khẩu học, sở thích, lối sống, suy nghĩ của khách hàng tiềm năng. Ngoài ra, các công cụ social listening sẽ xem được mọi người đang nói gì về thương hiệu của bạn, tổng hợp lại để đưa ra các kế hoạch hành động.</div>
                </div>
              </div>
              <div className="item">
                <div className="equal">
                  <div className="img"><i className="icon-t14" /></div>
                  <div className="title"><h3>Planning + Optimization</h3></div>
                  <div className="desc">Tính đến nay, với 8 năm kinh nghiệm, chúng tôi giúp bạn từ khâu bắt đầu thành lập Fanpage đến phát triển kênh social hiện có. Kế hoạch được lên một cách chi tiết và phù hợp cho từng giai đoạn cũng như tối ưu liên tục trong quá trình thực hiện về sau.</div>
                </div>
              </div>
              <div className="item">
                <div className="equal">
                  <div className="img"><i className="icon-t4" /></div>
                  <div className="title"><h3>Content Creation</h3></div>
                  <div className="desc">Chúng tôi chăm chút cho bạn từng con chữ, từng hình ảnh đăng tải trên Fanpage. Từ những content câu chuyện đầy cảm hứng đến các quảng cáo đơn thuần đều cố gắng truyền tải đến cho người đọc một cảm xúc tích cực, gắn kết với thương hiệu.</div>
                </div>
              </div>
              <div className="item">
                <div className="equal">
                  <div className="img"><i className="icon-t44" /></div>
                  <div className="title"><h3>Organic Social</h3></div>
                  <div className="desc">Thông điệp và content trên kênh phải mang lại ý nghĩa thì mới có thể có được những khách hàng trung thành. Chúng tôi xem mỗi Fanpage của khách hàng như một ngôi nhà, từ đó sử dụng từng content để xây đắp nên một ngôi nhà vững chắc.</div>
                </div>
              </div>
              <div className="item">
                <div className="equal">
                  <div className="img"><i className="icon-t59" /></div>
                  <div className="title"><h3>Paid Social</h3></div>
                  <div className="desc">Đến lúc đẩy nhanh tiến độ bằng cách đưa “con thuyền” của bạn “ra khơi”. Thông qua các mẩu ads được viết và chuẩn bị nội dung kỹ lưỡng, nhắm đúng đối tượng khách hàng. Chúng tôi liên tục theo dõi để chiến dịch Paid Social được ROI tối đa.</div>
                </div>
              </div>
              <div className="item">
                <div className="equal">
                  <div className="img"><i className="icon-t10" /></div>
                  <div className="title"><h3>Đo lường và báo cáo</h3></div>
                  <div className="desc">Không chỉ cho bạn thấy được bức tranh toàn cảnh, chúng tôi còn “đào sâu” vào chi tiết để trình bày cho khách hàng về những nỗ lực đã thực hiện. Khách hàng sẽ biết được KPI, mục đích, mục tiêu ban đầu đạt được như thế nào.</div>
                </div>
              </div>
            </Carousel>
            </div>
            ) : (
              <div className="functionSlide">
                <div className="item">
                  <div className="equal">
                    <div className="img"><i className="icon-t55" /></div>
                    <div className="title"><h3>Research &amp; Social Listening</h3></div>
                    <div className="desc">Chúng tôi research để hiểu về nhân khẩu học, sở thích, lối sống, suy nghĩ của khách hàng tiềm năng. Ngoài ra, các công cụ social listening sẽ xem được mọi người đang nói gì về thương hiệu của bạn, tổng hợp lại để đưa ra các kế hoạch hành động.</div>
                  </div>
                </div>
                <div className="item">
                  <div className="equal">
                    <div className="img"><i className="icon-t14" /></div>
                    <div className="title"><h3>Planning + Optimization</h3></div>
                    <div className="desc">Tính đến nay, với 8 năm kinh nghiệm, chúng tôi giúp bạn từ khâu bắt đầu thành lập Fanpage đến phát triển kênh social hiện có. Kế hoạch được lên một cách chi tiết và phù hợp cho từng giai đoạn cũng như tối ưu liên tục trong quá trình thực hiện về sau.</div>
                  </div>
                </div>
                <div className="item">
                  <div className="equal">
                    <div className="img"><i className="icon-t4" /></div>
                    <div className="title"><h3>Content Creation</h3></div>
                    <div className="desc">Chúng tôi chăm chút cho bạn từng con chữ, từng hình ảnh đăng tải trên Fanpage. Từ những content câu chuyện đầy cảm hứng đến các quảng cáo đơn thuần đều cố gắng truyền tải đến cho người đọc một cảm xúc tích cực, gắn kết với thương hiệu.</div>
                  </div>
                </div>
                <div className="item">
                  <div className="equal">
                    <div className="img"><i className="icon-t44" /></div>
                    <div className="title"><h3>Organic Social</h3></div>
                    <div className="desc">Thông điệp và content trên kênh phải mang lại ý nghĩa thì mới có thể có được những khách hàng trung thành. Chúng tôi xem mỗi Fanpage của khách hàng như một ngôi nhà, từ đó sử dụng từng content để xây đắp nên một ngôi nhà vững chắc.</div>
                  </div>
                </div>
                <div className="item">
                  <div className="equal">
                    <div className="img"><i className="icon-t59" /></div>
                    <div className="title"><h3>Paid Social</h3></div>
                    <div className="desc">Đến lúc đẩy nhanh tiến độ bằng cách đưa “con thuyền” của bạn “ra khơi”. Thông qua các mẩu ads được viết và chuẩn bị nội dung kỹ lưỡng, nhắm đúng đối tượng khách hàng. Chúng tôi liên tục theo dõi để chiến dịch Paid Social được ROI tối đa.</div>
                  </div>
                </div>
                <div className="item">
                  <div className="equal">
                    <div className="img"><i className="icon-t10" /></div>
                    <div className="title"><h3>Đo lường và báo cáo</h3></div>
                    <div className="desc">Không chỉ cho bạn thấy được bức tranh toàn cảnh, chúng tôi còn “đào sâu” vào chi tiết để trình bày cho khách hàng về những nỗ lực đã thực hiện. Khách hàng sẽ biết được KPI, mục đích, mục tiêu ban đầu đạt được như thế nào.</div>
                  </div>
                </div>
              </div>
              )}
        </div>
      </div>
      <div className="l-section  section-t">
        <div className="c-img1">
          <img src="https://mangoads.vn/vn/wp-content/uploads/2021/04/Content-Media.jpg" alt="content-media" />
        </div>
      </div>
      <div className=" section-t">
        <div className="text-center default-ptb0">
          <section className="container">
            <h1 className="page-title" /><h2>Quy trình chiến dịch Social Media</h2>
            <div>Tại MangoAds, một chiến dịch Social Media được triển khai gồm 6 hạng mục.</div>
          </section>
        </div>
      </div>
      <div className=" section">
        <div className="mg22 mg22-nobg">
          <div className="container">
            <div className="row equalHeight">
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t38" /></div>
                      <div className="text"><h3>Hiểu mục tiêu của chiến dịch</h3></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Chúng tôi xác định và hiểu rõ mục tiêu chiến dịch. Dù mục tiêu chiến dịch là gì, việc này là tối quan trọng để chúng tôi “lái con tàu” đi đúng hướng và trơn tru hơn.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t57" /></div>
                      <div className="text"><h3>Chọn phương thức quảng cáo phù hợp</h3></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Quảng cáo trên social là một phương thức để xem mọi người đã thấy và tương tác với bài đăng như thế nào. Từ cách quảng cáo đúng, hợp lý mới cho ra kết quả tối ưu.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t37" /></div>
                      <div className="text"><h3>Tạo lịch đăng bài đều đặn theo tuần/ tháng</h3></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Xác định rõ bài sẽ được đăng vào giờ nào, ngày nào, tháng nào và bao nhiêu bài/ ngày. Đồng thời chúng tôi sẽ xác định thông điệp, topic, dàn bài và ý tưởng theo lịch trình.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t6" /></div>
                      <div className="text"><h3>Lên lịch</h3></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Sau khi đã viết bài theo kế hoạch đề ra, chúng tôi sẽ lên lịch trước để mọi việc sẵn sàng trước khi “lên sóng” chính thức. Việc chuẩn bị trước giúp thương hiệu bạn không bị bỏ lỡ các sự kiện quan trọng.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t20" /></div>
                      <div className="text"><h3>Quản lý comment khách</h3></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Chúng tôi sẵn sàng hỗ trợ chăm sóc khách hàng bằng cách trả lời các comment của họ dưới mỗi bài post. Bạn không nên bỏ quên những người này bởi đây mới chính là khách hàng tiềm năng nhất.</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item boxshadow">
                  <div className="inner">
                    <div className="dl-table title">
                      <div className="icon"><i className="icon-t40" /></div>
                      <div className="text"><h3>Phân tích và điều chỉnh</h3></div>
                    </div>
                    <div><p><span style={{fontWeight: 400}}>Phân tích để biết cái nào mang lại kết quả tốt hơn. Chúng tôi sẽ không phung phí thời gian và ngân sách của bạn cho những thứ không còn hiệu quả đồng thời cũng điều chỉnh cho các campaign tiếp theo.</span></p>
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