import Link from 'next/link'
// import Image from "next/image";
import Navbar from '../components/Learn/Navbar/';

import styles from '../styles/MangoLearn.module.css';
export default function MangoAdsLearn({children}) {
  var posts = [{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/02/Sang-tao-Content-Marketing-de-xay-dung-chien-luoc-nhan-thuc-thuong-hieu-680x510.jpg',
    title:'Sáng tạo Content Marketing để xây dựng chiến lược nhận thức thương hiệu',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Hạnh Trần',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/02/Sang-tao-Content-Marketing-de-xay-dung-chien-luoc-nhan-thuc-thuong-hieu-680x510.jpg',
    title:'Sáng tạo Content Marketing để xây dựng chiến lược nhận thức thương hiệu',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Hạnh Trần',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/02/Sang-tao-Content-Marketing-de-xay-dung-chien-luoc-nhan-thuc-thuong-hieu-680x510.jpg',
    title:'Sáng tạo Content Marketing để xây dựng chiến lược nhận thức thương hiệu',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Hạnh Trần',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/02/Sang-tao-Content-Marketing-de-xay-dung-chien-luoc-nhan-thuc-thuong-hieu-680x510.jpg',
    title:'Sáng tạo Content Marketing để xây dựng chiến lược nhận thức thương hiệu',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Hạnh Trần',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/02/Sang-tao-Content-Marketing-de-xay-dung-chien-luoc-nhan-thuc-thuong-hieu-680x510.jpg',
    title:'Sáng tạo Content Marketing để xây dựng chiến lược nhận thức thương hiệu',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Đoàn Tịnh',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/10/Artboard-1-copy-680x510.png',
    title:'Bí quyết khai phá kho dữ liệu thương mại điện tử năm 2021',
    cate: 'Digital analytics',
    date:'October 25, 2021',
    author:'Hạnh Trần',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/10/165-680x510-1.png',
    title:'Sáng tạo Content Marketing để xây dựng chiến lược nhận thức thương hiệu',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Đoàn Tịnh',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/02/Sang-tao-Content-Marketing-de-xay-dung-chien-luoc-nhan-thuc-thuong-hieu-680x510.jpg',
    title:'Cách sử dụng Trình quản lý doanh nghiệp Facebook',
    cate: 'Automation và công cụ',
    date:'October 25, 2021',
    author:'Hạnh Trần',
  },{
    url:'/post/post-id',
    img:'https://mangoads.vn/learn/wp-content/uploads/2021/10/163-680x510-1.png',
    title:'Chứng nhận của Google Ads là gì và tầm quan trọng của nó',
    cate: 'Categories',
    date:'October 25, 2021',
    author:'Đoàn Tịnh',
  }];

  const cates = [
    {
      active: true,
      url:'/mango-learn',
      title:'Tất cả',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Automation và công cụ',
    },{
      active: false,
      url:'/mango-learn',
      title:'Brand',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Content marketing',
    },{
      active: false,
      url:'/mango-learn',
      title:'Digital advertising',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Digital analytics',
    },{
      active: false,
      url:'/mango-learn',
      title:'Ecommerce',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Market research',
    },{
      active: false,
      url:'/mango-learn',
      title:'SEO',
    },{
      active: false,
      url:'/mango-learn',
      title:'Soft skill',
    },{
      active: false,
      url:'/mango-learn',
      title:'Website development',
    }];
  return (
    <>
      <div className={styles.blog}>
        <section className={`section ${styles['background-lowlight']}
          section--tight ${styles['blog__home-header']} 
          ${styles['blog__header--blog']}`} 
          style={{backgroundImage: "url('https://mangoads.vn/learn/wp-content/themes/wp-mango-news/assets/images/home-banner.jpg')"}}>
          <div className={styles['container-fluid']}>
            <div className={styles.divtext}>
              <h1 className={`${styles['section-heading__title1']}`}>
                Khám phá kho tàng kiến thức</h1>
              <p className={`${styles['section-heading__subhead']} 
                heading--3 blog__subhead--blog`}>
                Trung tâm kiến thức MangoAds sẽ mang đến cho bạn những kiến thức hữu ích, có thể ứng dụng vào thực tế công việc.
              </p>
            </div>

            <div id="mc_embed_signup">
              <form action="https://mangoads.us4.list-manage.com/subscribe/post?u=a8ae5b7db973fd1eee9f267b3&amp;id=c69c95d6a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="novalidate">
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
            <div className="col-md-12">
              <div className="row mb-30">
                {posts.map((item,index)=>(
                  <div className="col-xs-12 col-md-4" key={index}>
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
                            <time className="entry-date published link" dateTime="">
                              {item.date}</time>
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
                  <span className="screen-reader-text" 
                    style={{display: 'none'}}>Page </span>1
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
          </div>
        </div>
      </div>
    </>
  );
}
