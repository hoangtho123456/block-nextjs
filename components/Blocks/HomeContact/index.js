import React from 'react';
import Image from "next/image";

import form from '../../GeneralStyles/Form.module.css';
import styles from '../../GeneralStyles/Contact.module.css';
const Contact = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className={`${styles.mg65}`}>
        <div className="container">
          <div className={`${styles.row} row grid-space-80`}>
            <div className="col-md-6">
              <section>
                <h3>Test Co., Ltd</h3>
              </section>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div className={`rowlabel label-50 label-line ${styles.rowlabel}`}>
                <a className="item" href="test@gmail.com">
                  <span className={styles.title+' title'}>
                    <i className={styles.icon1+" icon-t53"}/>
                  </span>
                  <span>test@gmail.com</span>
                </a>

                <a className="item" 
                  href="#" 
                  target="_blank">
                  <span className={styles.title+' title'}>
                    <i className="icon-t9"/></span>
                  <span>Test Co</span>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className={form.formcontact+' '+styles.formcontact}>
                <div className={form.inner}>
                  <div className={`dl-table ${form['box1']}`}>
                    <div className={`icon ${form.icon}`}>
                      <i className="icon-t18"/></div>
                      <section className={form.title1}>
                        Contact us
                      </section>
                  </div>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
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
                              placeholder="Phone" />
                          </div>
                        </div>
                      </div>

                      <div className={`${form['nf-field-container']}`}>
                        <div className="nf-field">
                          <div className={form['nf-field-element']}>
                            <select id="nf-field-29"
                              name="nf-field-29" 
                              className={`${form["ninja-forms-field"]}`}>
                              <option value="seo-op-1">SEO OP-1</option>
                              <option value="test-website">Test website</option>
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
                              placeholder="Mess"/>
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
