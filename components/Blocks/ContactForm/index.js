import React from 'react';
import Image from "next/image";

import form from '../../GeneralStyles/Form.module.css';
import styles from '../../GeneralStyles/Contact.module.css';

const Contact = ({
  classSpacing='section',
  layout="",
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className={`${styles.mg65}`}>
        <div className="container">
          <div className={`${styles.row} row grid-space-80`}>
            <div className="col-md-6">
              {layout==="pageContact" && (
                <div className={styles['info1']}>
                  <Image 
                    src="/images/items/hinh-cong-ty.jpeg"
                    alt="Picture of the author"
                    width={530}
                    height={353}
                    layout="responsive"
                  />
                </div>
              )}
              <section>
                <h3>MangoAds Co., Ltd</h3>
              </section>
              <p>Tầng 8, Block A tòa nhà Charmington, 181 Cao Thắng, Phường 12, Quận 10, HCMC.</p>
              <div className={`rowlabel label-50 label-line ${styles.rowlabel}`}>
                <a className="item" href="tel:+842866805450">
                  <span className={styles.title+' title'}>
                    <i className="icon-t52"/></span>
                  <span>02866805450</span>
                </a>

                <a className="item" href="mailto:info@mangoads.vn">
                  <span className={styles.title+' title'}>
                    <i className={styles.icon1+" icon-t53"}/>
                  </span>
                  <span>info@mangoads.vn</span>
                </a>

                <a className="item" 
                  href="https://www.facebook.com/MangoAds" 
                  target="_blank">
                  <span className={styles.title+' title'}>
                    <i className="icon-t9"/></span>
                  <span>MangoAds</span>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className={form.formcontact+' '+styles.formcontact}>
                <div className={form.inner}>
                  <div className={`dl-table ${form['box1']}`}>
                    <div className={`icon ${form.icon}`}>
                      <i className="icon-t18"/></div>
                    <div>
                      <section className={form.title1}>
                        Liên hệ chúng tôi 
                      </section>
                    </div>
                  </div>
                  {layout==="pageContact" && (
                    <p>Liên hệ MangoAds để được tư vấn giải pháp 
                      phù hợp nhất cho doanh nghiệp của bạn.</p>
                  )}

                  <form>
                    <div className={form['nf-form-content']}>
                      <div className={`${form['nf-field-container']}`}>
                        <div className="nf-field">
                          <div className={form['nf-field-element']}>
                            <input type="text" 
                              className={`${form["ninja-forms-field"]}`} 
                              placeholder="Họ và tên"/>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`${form['nf-field-container']}`}>
                        <div className="nf-field">
                          <div className={form['nf-field-element']}>
                            <input type="email" 
                              className={`${form["ninja-forms-field"]}`} 
                              name="email" 
                              autoComplete="email" 
                              placeholder="Email"/>
                          </div>
                        </div>
                      </div>

                      <div className={`${form['nf-field-container']}`}>
                        <div className="nf-field">
                          <div className={form['nf-field-element']}>
                            <input type="tel" 
                              className={`${form["ninja-forms-field"]}`} 
                              name="phone" 
                              placeholder="Số điện thoại" />
                          </div>
                        </div>
                      </div>

                      <div className={`${form['nf-field-container']}`}>
                        <div className="nf-field">
                          <div className={form['nf-field-element']}>
                            <select id="nf-field-29"
                              name="nf-field-29" 
                              className={`${form["ninja-forms-field"]}`}>
                              <option value="seo">SEO</option>
                              <option value="phat-trien-website">
                                Phát triển website</option>
                              <option value="ads-fb">
                                Quảng cáo Facebook</option>
                              <option value="ads-google">
                                Quảng cáo Google</option>
                              <option value="other">Dịch vụ khác</option>
                            </select>
                            <div htmlFor="nf-field-29"></div>
                          </div>
                        </div>
                      </div>

                      <div className={`${form['nf-field-container']}`}>
                        <div className="nf-field">
                          <div className={form['nf-field-element']}>
                            <textarea 
                              className={`${form["ninja-forms-field"]}`} 
                              placeholder="Để lại lời nhắn"/>
                          </div>
                        </div>
                      </div>

                      <div className="nf-field">
                        <div className={form['nf-field-element']}>
                          <input type="button" 
                            defaultValue="Gửi liên hệ"/>
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
  );
}

export default Contact;
