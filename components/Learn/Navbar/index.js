import Link from 'next/link'
export default function Navbar({cates,children}) {
  var cates = cates || [
    {
      active: true,
      url:'/#',
      title:'ALL',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Lorem-1',
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
      title:'Digital advertising',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Digital analytics',
    },{
      active: false,
      url:'/#',
      title:'Ecommerce 8',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Market ipsump',
    },{
      active: false,
      url:'/#',
      title:'SEO tips',
    },{
      active: false,
      url:'/#',
      title:'Soft skill',
    },{
      active: false,
      url:'/#',
      title:'Website test 55',
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
    </>
  );
}
