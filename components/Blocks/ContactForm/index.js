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
                <h3>Test Co., Ltd</h3>
              </section>
              <div className={`rowlabel label-50 label-line ${styles.rowlabel}`}>
                <a className="item" 
                  href="#" 
                  target="_blank">
                  <span className={styles.title+' title'}>
                    <i className="icon-t9"/></span>
                  <span>Test</span>
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
                        Contact
                      </section>
                    </div>
                  </div>
                  {layout==="pageContact" && (
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices.</p>
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
                              <option value="seo">Lorem 1</option>
                              <option value="ads-google">
                                Lorem 2</option>
                              <option value="other">other</option>
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
                              placeholder="message"/>
                          </div>
                        </div>
                      </div>

                      <div className="nf-field">
                        <div className={form['nf-field-element']}>
                          <input type="button" 
                            defaultValue="Send"/>
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
