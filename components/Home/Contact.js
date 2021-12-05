import React from 'react';
import Link from 'next/link'

const Contact = ({}) => {
  const title = 'MangoAds Co., Ltd';
  const decs = 'Tầng 8, Block A tòa nhà Charmington, 181 Cao Thắng, Phường 12, Quận 10, HCMC.';
  const tel = '02866805450';
  const mail = 'info@mangoads.vn';
  const face = '@MangoAds';
  return (
    <div className="section">
        <div className="p-contact2 mg65 mg65-type1">
          <div className="container">  
            <div className="row grid-space-80">
              <div className="col-md-6">
                <div className="th-info1">
                  <img src="https://mangoads.vn/vn/wp-content/uploads/2021/11/hinh-cong-ty.jpg" alt="hinh-cong-ty"/>
                </div>
                <section>
                  <h3>{title}</h3>
                </section>
                <p>{decs}</p>
                <div className="rowlabel label-50 label-line">
                  <a className="item" href="tel:+842866805450">
                    <span className="title"><i className="icon-t52" /></span>
                    <span className="text">{tel}</span>
                  </a>
                  <a className="item" href="mailto:info@mangoads.vn">
                    <span className="title"><i className="icon-t53" /></span>
                    <span className="text">{mail}</span>
                  </a>
                  <a className="item" href="https://www.facebook.com/MangoAds" target="_blank" rel="noopener">
                    <span className="title"><i className="icon-t9" /></span>
                    <span className="text">{face}</span>
                  </a>
                </div>
              </div>    
              <div className="col-md-6">
                <div className="formcontact">
                  <div className="formcontact_inner1">
                    <div className="dl-table">
                      <div className="icon"><i className="icon-t18" /></div>
                      <div>
                        <section className="title1">
                          Liên hệ chúng tôi 
                        </section>
                      </div>
                    </div>
                    <p className="text1">Liên hệ MangoAds để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.</p>
                    <noscript className="ninja-forms-noscript-message">
                      Lưu ý: Cần phải có JavaScript với nội dung này.</noscript><div id="nf-form-4-cont" className="nf-form-cont" aria-live="polite" aria-labelledby="nf-form-title-4" aria-describedby="nf-form-errors-4" role="form">
                      <span id="nf-form-title-4" className="nf-form-title"></span>
                      <div className="nf-form-wrap ninja-forms-form-wrap">
                        <div className="nf-response-msg" />
                        <div className="nf-debug-msg" />
                        <div className="nf-form-layout">
                          <form>
                            <div className="nf-before-form-content">
                              <div className="nf-form-fields-required">Các trường được đánh dấu <span className="ninja-forms-req-symbol">*</span> là bắt buộc</div>
                            </div>
                            <div className="nf-form-content ">
                              <div className="nf-field-container firstname-container  label-above ">
                                <div className="nf-field"><div className="field-wrap firstname-wrap">
                                    <div className="nf-field-label"><label>Họ và tên <span className="ninja-forms-req-symbol">*</span> </label></div>
                                    <div className="nf-field-element">
                                      <input type="text" className="ninja-forms-field nf-element" placeholder="Họ và tên"/>
                                    </div>
                                  </div>
                                  </div>
                              </div>
                              <div className="nf-field-container email-container label-above">
                                <div className="nf-field"><div className="field-wrap email-wrap">
                                    <div className="nf-field-label"><label>Email <span className="ninja-forms-req-symbol">*</span> </label></div>
                                    <div className="nf-field-element">
                                      <input type="email" className="ninja-forms-field nf-element" name="email" autoComplete="email" placeholder="Email"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nf-field-container phone-container  label-above  textbox-container">
                                <div className="nf-field">
                                  <div className="field-wrap phone-wrap textbox-wrap">
                                    <div className="nf-field-label"><label>Điện thoại</label></div>
                                    <div className="nf-field-element">
                                      <input type="tel" className="ninja-forms-field nf-element" name="phone" placeholder="Số điện thoại" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nf-field-container listselect-container label-above list-container">
                                <div className="nf-field">
                                  <div className="field-wrap listselect-wrap list-wrap list-select-wrap">
                                    <div className="nf-field-label"><label>Lựa chọn</label></div>
                                    <div className="nf-field-element">
                                      <select className="ninja-forms-field nf-element">
                                        <option value="seo">SEO</option>
                                        <option value="phat-trien-website">Phát triển website</option>
                                        <option value="ads-fb">Quảng cáo Facebook</option>
                                        <option value="ads-google">Quảng cáo Google</option>
                                        <option value="other">Dịch vụ khác</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nf-field-container textarea-container  label-above ">
                                <div className="nf-field"><div id="nf-field-24-wrap" className="field-wrap textarea-wrap">
                                    <div className="nf-field-label"><label>Message</label></div>
                                    <div className="nf-field-element">
                                      <textarea className="ninja-forms-field nf-element" placeholder="Để lại lời nhắn"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nf-field-container submit-container  label-above  textbox-container">
                                <div className="nf-field">
                                  <div className="field-wrap submit-wrap textbox-wrap">
                                    <div className="nf-field-label" />
                                    <div className="nf-field-element">
                                      <input className="ninja-forms-field nf-element " type="button" defaultValue="Gửi liên hệ" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
