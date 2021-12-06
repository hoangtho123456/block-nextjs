import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const MENU = [{
  href: '/',
  name: 'Home',
  subMenu: [{
    href: "/home/banner",
    name:"Block Banner",
  },{
    href: "/home/about",
    name:"Block About",
  },{
    href: "/home/work",
    name:"Block Work",
  },{
    href: "/home/banner-1",
    name:"Banner One",
  },{
    href: "/home/number",
    name:"Number",
  },{
    href: "/home/service",
    name:"Service",
  },{
    href: "/home/partner",
    name:"Partner",
  },{
    href: "/home/contact",
    name:"Contact",
  }]
},{
  name: 'About',
  subMenu: [{
    href: "/about/banner",
    name:"Banner",
  },{
    href: "/about/number",
    name:"Number",
  },{
    href: "/about/intro",
    name:"Intro",
  },{
    href: "/about/vision",
    name:"Vision",
  },{
    href: "/about/why",
    name:"Why",
  },{
    href: "/about/commit",
    name:"Commit",
  }]
},{
  name: 'Client',
  subMenu: [{
    href: "/client/banner",
    name:"Banner",
  },{
    href: "/client/partner",
    name:"Partner",
  }]
},{
  name: 'Service',
  subMenu: [{
    name:"UI-UX design",
    subMenu:[{
      href: "/ux-design/banner",
      name:"Banner",
    },{
      href: "/ux-design/intro",
      name:"Intro",
    },{
      href: "/ux-design/guild",
      name:"Guild",
    },{
      href: "/ux-design/card-right",
      name:"Card Img Right",
    },{
      href: "/ux-design/process",
      name:"Process",
    },{
      href: "/ux-design/product",
      name:"Product",
    },{
      href: "/ux-design/important",
      name:"UX/UI Important",
    },{
      href: "/ux-design/guideline",
      name:"Guideline",
    }],
  },{
    name:"Web redesign",
    subMenu:[{
      href: "/web-redesign/banner",
      name:"Banner",
    },{
      href: "/web-redesign/intro",
      name:"Intro",
    },{
      href: "/web-redesign/card-img-right",
      name:"Card Img Right",
    },{
      href: "/web-redesign/big-img",
      name:"Big Img",
    },{
      href: "/web-redesign/optimize",
      name:"Optimize Tech",
    }],
  },{
    name:"Web development",
    subMenu:[{
      href: "/web-design/banner",
      name:"Banner",
    },{
      href: "/web-design/intro",
      name:"Intro",
    },{
      href: "/web-design/advantage",
      name:"Advantage",
    },{
      href: "/web-design/type",
      name:"Type Website",
    },{
      href: "/web-design/card-right",
      name:"Card Img Right",
    },{
      href: "/web-design/card-left",
      name:"Card Img Left",
    },{
      href: "/web-design/optimize",
      name:"Optimize",
    }],
  },{
    name:"Ecommerce",
    subMenu:[{
      href: "/ecommerce/intro",
      name:"Intro",
    },{
      href: "/ecommerce/service",
      name:"Service",
    },{
      href: "/ecommerce/project",
      name:"Project",
    },{
      href: "/ecommerce/process",
      name:"Process",
    }],
  },{
    name:"CRO",
    subMenu:[{
      href: "/cro/banner",
      name:"Banner",
    },{
      href: "/cro/process",
      name:"Process",
    }],
  },{
    name:"Pay per Click",
    subMenu:[{
      href: "/pay-per-click/banner",
      name:"Banner",
    },{
      href: "/pay-per-click/service",
      name:"Service",
    },{
      href: "/pay-per-click/strategy",
      name:"Strategy",
    },{
      href: "/pay-per-click/why",
      name:"Why",
    }],
  },{
    name:"SEO Website",
    subMenu:[{
      href: "/seo/banner",
      name:"Banner",
    },{
      href: "/seo/card-img-right",
      name:"Card Img Right",
    },{
      href: "/seo/content",
      name:"Content",
    }],
  },{
    name:"SEO Enterprise",
    subMenu:[{
      href: "/enterprise/banner",
      name:"Banner",
    },{
      href: "/enterprise/proplem-index",
      name:"Index",
    },{
      href: "/enterprise/string",
      name:"String",
    },{
      href: "/enterprise/card-img-right",
      name:"Card Img Right",
    },{
      href: "/enterprise/card-img-left",
      name:"Card Img Left",
    }],
  },{
    name:"Marketing",
    subMenu:[{
      href: "/content-marketing/banner",
      name:"Banner",
    },{
      href: "/content-marketing/big-img",
      name:"Big Img",
    },{
      href: "/content-marketing/list",
      name:"List Feature",
    },{
      href: "/content-marketing/process",
      name:"Process Deployment",
    }],
  }],
},{
  name: 'Web(2)',
  subMenu: [{
    name: 'Social Media Marketing',
    subMenu: [{
      href: "/social-media/service",
      name:"Service",
    },{
      href: "/social-media/big-img",
      name:"Big Img",
    }]
  },{
    name: 'Email-Marketing',
    subMenu: [{
      href: "/email-marketing/banner",
      name:"Banner",
    },{
      href: "/email-marketing/card-img-right",
      name:"Card Img Right",
    },{
      href: "/email-marketing/card-img-left",
      name:"Card Img Left",
    },{
      href: "/email-marketing/process",
      name:"Service",
    },{
      href: "/email-marketing/string",
      name:"String",
    }]
  }]
},{
  name: 'Team',
  subMenu: [{
    href: "/our-team/banner",
    name:"Banner",
  },{
    href: "/our-team/intro",
    name:"Intro",
  },{
    href: "/our-team/mission",
    name:"Mission",
  },{
    href: "/our-team/big-img",
    name:"Big Image",
  },{
    href: "/our-team/list",
    name:"List Feature",
  },{
    href: "/our-team/card-right",
    name:"Card Img Right",
  }]
},{
  name: 'Recruit',
  subMenu: [{
    href: "/recruit/banner",
    name:"Banner",
  },{
    href: "/recruit/intro",
    name:"Intro",
  },{
    href: "/recruit/why",
    name:"Why",
  },{
    href: "/recruit/card-left",
    name:"Card Img Left",
  },{
    href: "/recruit/card-right",
    name:"Card Img Right",
  },{
    href: "/recruit/table",
    name:"Table",
  }]
},{
  name: 'Contact',
  subMenu: [{
    href: "/contact/banner",
    name:"Banner",
  },{
    href: "/contact/contact",
    name:"Contact",
  }]
}];

export default function Layout() {
  const [isChangeRouter, setIsChangeRouter] = useState(false);
  const router = useRouter();
  useEffect(async () => {
    if (typeof window != undefined) {
      const menu = document.getElementById("menu-custom");
      if (menu.style.display == "block") {
        menu.style.display = menu.style.display == "block" ? "none" : "block";
      }
    }
  }, [router]);

  const onClick = () => {
    const menu = document.getElementById("menu-custom");
    menu.style.display = menu.style.display == "block" ? "none" : "block";
  };

  const renderMenu = () => {
    const menu = [...MENU];
    return (
      menu.map((item,index)=>(
        <React.Fragment key={index}>
          {item && item.subMenu?
            (<li
              className={`children menu-item ${
                item.subMenu.filter(e => e.href==router.asPath).length>0 ||
                item.subMenu.filter((child)=>{
                  if(child.subMenu) {
                    return child.subMenu.filter(grandchildren=>grandchildren.href==router.asPath).length>0
                  } else return false
                }).length>0?
                "current_page_item":""
              }`} key={index}>
              <span className="w-nav-hint"></span>
              <a>{item.name}</a>
              <ul className="sub-menu">
                {item.subMenu.map((child,index)=>(
                  <React.Fragment key={index}>
                    {child.subMenu?(
                      <li
                        className={`children menu-item ${
                          child.subMenu.filter(e => e.href==router.asPath).length>0?
                          "current_page_item":""
                        }`} key={index}>
                        <span className="w-nav-hint"></span>
                        <a>{child.name}</a>
                        <ul className="sub-menu">
                          {child.subMenu.map((grandchildren,index)=>(
                            <li className={`menu-item ${
                              router.asPath === grandchildren.href ? 
                              "current_page_item" : ""
                            }`} key={index}>
                              <Link href={grandchildren.href}>
                                <a>{grandchildren.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ):(
                      <li className={`menu-item ${
                        router.asPath === child.href ? 
                        "current_page_item" : ""
                      }`} key={index}>
                        <Link href={child.href}>
                          <a>{child.name}</a>
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </li>):(<li
              className={`menu-item ${
                router.asPath === item?.href ? 
                "current_page_item" : ""
              }`} key={index}>
              <Link href={item?.href}>
                <a>{item?.name}</a>
              </Link>
            </li>)
          }
        </React.Fragment>
      ))
    );
  };

  return (
    <>
      <Head>
        <title>Theme Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          id="font-awesome-css"
          href="/css/font-awesome.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/main.css?ver=1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/recruit.css?ver=1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/carousel-nextjs.css?ver=1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/th-style.css?ver=1"
          type="text/css"
          media="all"
        />

        <script
          type="text/javascript"
          src="/js/jquery.min.js?ver=3.6.0"
          id="jquery-core-js"
        ></script>
      </Head>

      <div className="l-header sticky1">
        <div className="l-header-h">
          <div className="l-subheader">
            <div className="l-subheader-h i-cf">
              <div className="w-logo">
                <div className="w-logo-h">
                  <Link href="/">
                    <a className="w-logo-link">
                      <img
                        className="w-logo-img"
                        src="/images/logo-test.png"
                        alt="test"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <Link href="/">
                <a className="logo1" alt="Eng">
                  <img
                    src="/images/icons/flag-en.png"
                    alt="Eng"
                  />
                </a>
              </Link>

              <nav className="w-nav">
                <div className="w-nav-h">
                  <div className="w-nav-control">
                    <i className="fa fa-reorder" onClick={() => onClick()}></i>
                  </div>
                  <div
                    id="menu-custom"
                    className="w-nav-list layout_hor width_auto level_1"
                  >
                    <div className="menu-main-menu-container">
                      <ul id="menu-main-menu" className="w-nav-list-h">
                        {renderMenu()}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
