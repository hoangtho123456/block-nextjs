// import Link from 'next/link'
// import Image from "next/image";

import styles from '../../styles/TestLearn.module.css';
export default function PostLearn({children}) {
  return (
    <>
      <div className={styles['blog-post2']}>
        <div className={styles['container-fluid']}>
          <div className="row">
            <div className={`col-md-8 ${styles['p-box1']}`}>
              <nav className='breadcrumbs'>
                <ol>
                  <span>Home</span>
                  <a className="item" href="#">
                    <span className={`separator icon-4`}></span>
                  </a>
                  <a href="#">Content marketing</a>
                  <span className={`separator icon-4`}></span>
                  <a href="#">Social Marketing</a>
                </ol>
              </nav>

              <article className={styles['blog-post']}>
                <h1 className={styles['entry-title']}>
                  Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue
                </h1>

                <div className={styles['meta']}>
                  <span className="posted-on">
                    <a href="" rel="bookmark">
                      <time className="entry-date published link" dateTime="">November 11, 2022</time>
                    </a>
                  </span>
                  <span className={styles['byline']}>
                    <span className="author vcard">
                      <a className="url fn n" href="#">THY_THY</a>
                    </span>
                  </span>
                </div>
      
                <div className={`entry-content ${styles['article__content']} 
                  ${styles['long-form-content']}`}>
                  

                  <p >Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.</p>
                  <p >Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.</p>
                  <p >Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.</p>
                </div>
                <div className={`${styles['author-bio']} ${styles['hide--mobile']}`}>
                  <div className="img">
                    <img alt="img" src="https://secure.gravatar.com/avatar/fda41df13aa57c8fb61ea5f8ea337fb7?s=120&amp;d=mm&amp;r=g"  className={styles['avatar']} height="120" width="120" loading="lazy"/>
                  </div>
                  <div className="txt">
                    <h3>THYTHY</h3>
                  </div>
                </div>
                <div className="c-box-form1">
                  <div className="inner1">
                    <div className="box1">
                      <div className="dl-table">
                        <div className="icon"><i className="icon-t18"></i></div>
                        <section className="title1">
                          <h3>Contact Us</h3>
                        </section>
                      </div>
                      <div role="form" className="wpcf7" id="wpcf7-f15390-p9667-o1" lang="en-US" dir="ltr">
                        <div className="screen-reader-response">
                          <p role="status" aria-live="polite" aria-atomic="true"></p>
                          <ul></ul>
                        </div>
                        <form action="" method="post" className="wpcf7-form init c-form1">
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap user-name"><input type="text" name="user-name" defaultValue="" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="your name"/></span>
                          </div>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap email"><input type="email" name="email" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email"/></span>
                          </div>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap tel-661"><input type="tel" name="tel-661" defaultValue="" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="Phone"/></span>
                          </div>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap textarea-812">
                              <textarea name="textarea-812" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Mess">
                              </textarea>
                            </span>
                          </div>
                          <div>
                            <input type="submit" value="Send form" className="c-form1__btn1"/>
                            <span className="wpcf7-spinner"></span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          
            <div className="col-md-4 blog__sidebar">
							<div id="secondary" className="secondary">		
					      <div id="widget-area" className="widget-area" role="complementary">
				          <form className={styles['searchform']} id="searchform" method="get">
                    <input type="text" 
                      className={`${styles['input']}`} name="s" placeholder="search" defaultValue=""/>
                    <button type="submit" className={styles['btn']}>
                      <i className="icon icon-28"></i>
                    </button>
                  </form>
                  
				          <div className="widget-area">
                    <div className="widget">
                      <h5 className="widget-title">
                        Relative news
                      </h5>
                      <ul className="recent-post">
                        <li>
                          <a href="/post/post-id">Fusce pellentesque quis purus ut dictum.</a>
                        </li>
                        <li>
                          <a href="/post/post-id">Fusce pellentesque quis purus ut dictum.</a>
                        </li>
                        <li>
                          <a href="/post/post-id">Fusce pellentesque quis purus ut dictum.</a>
                        </li>
										  </ul>
									  </div>
							    </div>
			          </div>
	            </div>
  					</div>
          </div>
        </div>
      </div>
    </>
  );
}
