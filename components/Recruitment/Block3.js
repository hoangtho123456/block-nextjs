import React from 'react';
import Link from 'next/link'

const Banner2 = ({}) => {
  const title = 'Vì sao bạn nên làm việc tại MangoAds?';
  const title2 = 'Môi trường làm việc';
  const title3 = 'Trau dồi kiến thức';
  const title4 = 'Cơ hội kết nối';
  const decs = 'Tại MangoAds, bạn sẽ được tham gia thử thách năng lực của bản thân với nhiều dự án lớn, đồng thời mang lại giá trị thực sự cho các đối tác của chúng tôi. Với môi trường làm việc năng động, chúng tôi luôn ủng hộ và khuyến khích các thành viên đóng góp ý kiến để cải thiện hiệu quả công việc.';
  const decs2 = 'Chúng tôi cam kết từng cá nhân có đủ không gian, được trao quyền để làm việc độc lập đồng thời tự học hỏi qua nhiều trải nghiệm để nâng cao kiến thức, hoàn thiện bản thân. Bên cạnh đó, mỗi nhân viên sẽ có cơ hội làm việc với nhiều đội nhóm khác nhau, tự quản lý và vận hành công việc để mang lại hiệu quả tối ưu.';
  const decs3 = 'Môi trường làm việc thân thiện, cởi mở với nhiều cơ hội thăng tiến là những yếu tố để bạn lựa chọn, đồng hành và gắn kết lâu dài với MangoAds. Không gian làm việc rộng rãi, thoáng đãng cùng những trò chơi giải trí tập thể sau giờ làm việc sẽ giúp bạn cảm thấy thoải mái, tràn đầy năng lượng.';
  const decs4 = 'Cùng trải nghiệm hệ thống tài liệu phong phú và các chương trình đào tạo nội bộ trực tiếp từ cấp quản lý. MangoAds cam kết đóng góp toàn bộ tri thức, tài liệu học thuật chuyên sâu cho cộng đồng, để những người ham học hỏi hằng ngày mài giũa năng lực bản thân, từ đó đóng góp cho nền công nghiệp dịch vụ số của Việt Nam.';
  const decs5 = 'Tại MangoAds, bạn sẽ có cơ hội làm việc và học hỏi từ những chuyên gia dày dặn kinh nghiệm để không ngừng nâng cao kỹ năng và kinh nghiệm thực chiến. Tiếp nhận những kiến thức được truyền đạt và ứng dụng ngay vào thực tiễn sẽ giúp các bạn ghi nhớ tốt hơn để áp dụng cho các dự án mới.';
  return (
    <div className="section-b  section-t">
      <section className="mg49 p-recruit2">
        <div className="container">
          <div className="p-recruit2__title1"><h2>{title}</h2></div>
          <div className="row row1">
            <div className="col-sm-6 col-md-6">
              <p /><p><span>{decs}</span></p>
              <p />
            </div>
            <div className="col-sm-6 col-md-6">
              <p /><p><span>{decs2}</span></p>
              <p />
            </div>
          </div>
        </div>
        <figure className="fig1">
          <div className="img thumb-1">
            <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/04/MangoAds-view.jpeg" />
          </div>
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="item">
                <div className="xstitle"><h3>{title2}</h3></div>
                <p>{decs3}</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="item">
                <div className="xstitle"><h3>{title3}</h3><h3 /></div>
                <p>{decs3}</p>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="item">
                <div className="xstitle"><h3>{title4}</h3><h3 /></div>
                <p>{decs4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner2;
