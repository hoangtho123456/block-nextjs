import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";

import styles from '../../styles/TestLearn.module.css';
import Navbar from "../../components/Learn/Navbar";
export default function TestLearn({children}) {
  var posts = [{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Business Tester',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Business Tester',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Business Tester',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Business Tester',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Loran',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump 211',
    cate: 'Digital analytics',
    date:'October 25, 2021',
    author:'Business Tester',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Đoàn Tịnh',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump 223',
    cate: 'Automation và công cụ',
    date:'October 25, 2021',
    author:'Business Tester',
  },{
    url:'/post/post-id',
    img:'/images/post-thumb.jpg',
    title:'Test title loremp ipsump 11',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'DoTin',
  }];
  
  let cates = [
    {
      active: false,
      url:'/#',
      title:'Tất cả',
    },{
      active: true,
      url:'/cate-learn/cate',
      title:'Test loremp ipsump',
    },{
      active: false,
      url:'/#',
      title:'Brand',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Content marketing',
    },{
      active: false,
      url:'/#',
      title:'Test-2',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Test-3',
    },{
      active: false,
      url:'/#',
      title:'Test-4',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Test-5',
    },{
      active: false,
      url:'/#',
      title:'SEO-2',
    },{
      active: false,
      url:'/#',
      title:'Soft-skill-11',
    },{
      active: false,
      url:'/#',
      title:'Website development 111',
    }];
  return (
    <>
      <div className={styles.blog}>
        <section className={`section ${styles['background-lowlight']}
          section--tight ${styles['blog__home-header']} 
          ${styles['blog__header--blog']}`} 
          style={{backgroundImage: "url('/images/test-banner.jpg')"}}>
          <div className={styles['container-fluid']}>
            <div className={styles.divtext}>
              <h1 className={`${styles['section-heading__title1']}`}>
                Knowledge</h1>
              <p className={`${styles['section-heading__subhead']} 
                heading--3 blog__subhead--blog`}>
                Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
              </p>
            </div>

            <div id="mc_embed_signup">
              <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="novalidate">
                <div className="row grid-space-10" id="mc_embed_signup_scroll">
                  <div className="col-xs-7 col-md-8 mc-field-group">
                    <input type="email" defaultValue="" name="EMAIL" className="required email input" id="mce-EMAIL" placeholder="Email Address" aria-required="true"/>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                      <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                    </div>   
                  </div>
                  <div className="col-xs-5 col-md-4">
                    <div 
                      style={{
                        position: 'absolute', left: '-5000px',
                      }} aria-hidden="true">
                      <input type="text" name="b_a8ae5b7db973fd1eee9f267b3_c69c95d6a4" tabIndex="-1" defaultValue=""/>
                    </div>
                    <div className="clear">
                      <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className={styles['container-fluid']}>
          <Navbar cates={cates}/>

          <div className="row grid-space-80">
            <div className="col-md-8">
              <div className="row mb-30">
                {posts.map((item,index)=>(
                  <div className="col-xs-12 col-md-6" key={index}>
                    <article className={`type-post ${styles['blog-post']}`}>	
                      <Link href={item.url}>
                        <a className={`${styles['post-thumbnail']} tRes tRes_75`}>
                          <img width="680" height="510" 
                            src={item.img} className="attachment-post-thumbnail" 
                            alt="image" 
                            loading="lazy"/>
                        </a>
                      </Link>

                      <div className={`${styles['article__meta--primary']} ${styles['cat-links']} ${styles['tags']}`}>
                        <span className="screen-reader-text">{item.cate}</span>
                      </div>

                      <h4 className={`${styles['entry-title']} ${styles['title-normal']}`}>
                        <Link href={item.url}>
                          <a rel="bookmark">{item.title}</a>
                        </Link>
                      </h4>

                      <div className={styles['meta']}>
                        <span className="posted-on">
                          <a href={item.url} rel="bookmark">
                            <time className="entry-date published link" dateTime="">{item.date}</time>
                          </a>
                        </span>
                        <span className={styles['byline']}>
                          <span className="author vcard">
                            {/* <i className={`${styles['icon-user']} fa fa-user`}></i> */}
                            <a className="url fn n" href="#">{item.author}</a>
                          </span>
                        </span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              
              <nav className="pagination-wrapper" aria-label="Pagination">
                <span aria-current="page" className="page-numbers current">
                  <span className="screen-reader-text" style={{display: 'none'}}>Page </span>1
                </span>
                <Link href="#">
                  <a className="page-numbers">
                    <span className="screen-reader-text" 
                      style={{display: 'none'}}>Page </span>2
                  </a>
                </Link>
                <Link href="#">
                  <a className="page-numbers">
                    <span className="screen-reader-text" 
                      style={{display: 'none'}}>Page </span>3
                  </a>
                </Link>
                <span className="page-numbers dots">…</span>
                <Link href="#">
                  <a className="page-numbers">
                    <span className="screen-reader-text" 
                      style={{display: 'none'}}>Page </span>9
                  </a>
                </Link>
                <Link href="#">
                  <a className="page-numbers">Next »</a>
                </Link>
              </nav>
            </div>

            <div className="col-md-4 blog__sidebar">
							<div id="secondary" className="secondary">		
					      <div id="widget-area" className="widget-area" role="complementary">
				          <form className={styles['searchform']} id="searchform" method="get" action="">
                    <input type="text" 
                      className={`${styles['input']}`} name="s" placeholder="Tìm bài viết" defaultValue=""/>
                    <button type="submit" className={styles['btn']}>
                      <i className="icon icon-28"></i>
                      {/* <span className="visuallyhidden">Search</span> */}
                    </button>
                  </form>
                  
				          <div className="widget-area">
                    <div className="widget">
                      <h5 className="widget-title">
                        <i className="icon icon-t38"></i>
                        Bài viết liên quan
                      </h5>
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
