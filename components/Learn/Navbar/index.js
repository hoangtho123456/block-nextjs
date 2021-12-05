import Link from 'next/link'
// import Image from "next/image";
// import styles from '../styles/MangoLearn.module.css';
export default function Navbar({cates,children}) {
  var cates = cates || [
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
      <nav className="marketing-nav marketing-nav--secondary"
        aria-label="Section Navigation">
        <ul className="hidden-xs list-category marketing-nav__items">
          {cates.map((item,index)=>(
            <li className={`cat-item ${item.active && 'current-cat'}`} 
              key={index}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="dropdown visible-xs">
          <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Danh mục bài viết
            <span className="caret"></span>
          </button>

          <ul className="list-category dropdown-menu" aria-labelledby="dropdownMenu1">
            {cates.map((item,index)=>(
              <li className={`cat-item ${item.active && 'current-cat'}`} 
                key={index}>
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <script type="text/javascript" src="https://mangoads.vn/learn/wp-content/themes/wp-mango-news/assets/js/bootstrap.min.js?ver=5.5.1" id="bootstrap-js"></script>
    </>
  );
}
