// import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="c-footer">
        <div id="footer-pc" className="">
          <div className="container">
            <div className="row grid-space-10">
              <div className="col-sm-5 col-lg-4 col-md-5 efch-1 ef-img-t">
                <div className="widget widget-info">
                  <h3 className="title1">MangoAds Co., Ltd</h3>
                  <p>
                    8th Floor, Charmington Building,
                    <br />
                    181 Cao Thang, Ward 12, District 10, HCMC
                  </p>
                  <p>Email: info@mangoads.vn</p>
                  <p>
                    Phone: <a href="tel: +84 28 6680 5450">+84 28 6680 5450</a>
                  </p>
                  <ul className="blog-item-social ">
                    <li>
                      <Link href="https://www.facebook.com/MangoAds.vn/">
                        <a className="item" title="" target="_blank">
                          <i className="icon-facebook" aria-hidden="true"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://vn.linkedin.com/company/mangoads">
                        <a className="item" title="" target="_blank">
                          <i className="icont-linkedin" aria-hidden="true"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-7 col-lg-8 col-md-7">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 col-md-6  efch-1 ef-img-t">
                    <div className="widget">
                      <h4 className="widget-title">GIỚI THIỆU</h4>
                      <ul className="menu">
                        <li>
                          <Link href="/About">
                            <a>Về MangoAds</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Project-Management">
                            <a>Project management team</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Media-Team">
                            <a>Media team</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Product-team">
                            <a>Product team</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/OpsAds-Team">
                            <a>Ops ads team</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3 col-md-6  efch-1 ef-img-t">
                    <div className="widget">
                      <h4 className="widget-title">DỊCH VỤ</h4>
                      <ul className="menu">
                        <li><Link href="/"><a>Website development</a></Link></li>
                        <li><Link href="/Seo-Website"><a>SEO for website</a></Link></li>
                        <li><Link href="/Seo-Website-Big"><a>SEO for enterprise</a></Link></li>
                        <li><Link href="/Pay-Per-Click"><a>Pay per click</a></Link></li>
                        <li><Link href="/Conversion-Rate-Optimization"><a>Conversion rate optimization</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-md-6  efch-1 ef-img-t">
                    <div className="widget">
                      <h4 className="widget-title">THÔNG TIN</h4>
                      <ul className="menu">
                        <li>
                          <Link href="/Recruitment">
                            <a>Tuyển dụng</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Cộng tác viên</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mango-learn">
                            <a>Trung tâm kiến thức</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-md-6  efch-1 ef-img-t">
                    <div className="widget">
                      <h4 className="widget-title">CONTACT</h4>
                      <ul className="menu">
                        <li>
                          <Link href="/Contact">
                            <a>Hỗ trợ</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Contact">
                            <a>Tư vấn dịch vụ</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="back-top" className="back-top-1 show" onClick={scrollToTop}>
            <i className="icon-1 it"></i> <span>TOP</span>
          </div>
        </div>

        <div id="footer-mb" className="">
          <div className="container">
            <div className="widget widget-info">
              <div>
                <Link href="/">
                  <a href="/" className="logo">
                    <img
                      src="https://mangoads.vn/vn/wp-content/themes/wp-th/assets/images/logo-f.svg"
                      alt="Logo-MangoAds.png"
                    />
                  </a>
                </Link>
              </div>
              <h3 className="title1">MangoAds Co., Ltd</h3>
              <p>
                8th Floor, Charmington Building,
                <br />
                181 Cao Thang, Ward 12, District 10, HCMC
              </p>
              <p>Email: info@mangoads.vn</p>
              <p>
                Phone: <a href="tel: +84 28 6680 5450">+84 28 6680 5450</a>
              </p>
              <ul className="blog-item-social">
                <li>
                  <Link href="https://www.facebook.com/MangoAds.vn/">
                    <a className="item" title="" target="_blank">
                      <i className="icon-facebook" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://vn.linkedin.com/company/mangoads">
                    <a className="item" title="" target="_blank">
                      <i className="icont-linkedin" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="accodion accodion-0">
              <div className="accodion-tab ">
                <input type="checkbox" id="chck_mf" defaultChecked />
                <label className="accodion-title" htmlFor="chck_mf">
                  <span>Mở rộng</span>
                  <span className="triangle">
                    <i className="icon-plus" aria-hidden="true"></i>
                  </span>
                </label>
                <div className="accodion-content">
                  <div className="inner">
                    <div className="row grid-space-10">
                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">GIỚI THIỆU</h4>
                          <ul className="menu">
                            <li>
                              <Link href="/About">
                                <a>Về MangoAds</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Project-Management">
                                <a>Project management team</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Media-Team">
                                <a>Media team</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Product-team">
                                <a>Product team</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/OpsAds-Team">
                                <a>Ops ads team</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">DỊCH VỤ</h4>
                          <ul className="menu">
                            <li><Link href="/"><a>Website development</a></Link></li>
                            <li><Link href="/Seo-Website"><a>SEO for website</a></Link></li>
                            <li><Link href="/Seo-Website-Big"><a>SEO for enterprise</a></Link></li>
                            <li><Link href="/Pay-Per-Click"><a>Pay per click</a></Link></li>
                            <li><Link href="/Conversion-Rate-Optimization"><a>Conversion rate optimization</a></Link></li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">THÔNG TIN</h4>
                          <ul className="menu">
                            <li>
                              <Link href="/Recruitment">
                                <a>Tuyển dụng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a>Cộng tác viên</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/mango-learn">
                                <a>Trung tâm kiến thức</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">CONTACT</h4>
                          <ul className="menu">
                            <li>
                              <Link href="/Contact">
                                <a>Hỗ trợ</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Contact">
                                <a>Tư vấn dịch vụ</a>
                              </Link>
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
        </div>
      </div>

      {/* <script type='text/javascript' src='/js/jquery.lazyload.min.js?ver=4.5.12'></script> */}
      {/* <script
        type="text/javascript"
        src="/js/jquery.carousello.js?ver=4.5.12"
      ></script> */}
      {/* <script type='text/javascript' src='/js/jquery.jgrowl.min.js?ver=4.5.12'></script> */}
      {/* <script type='text/javascript' src='/js/waypoints.min.js?ver=4.5.12'></script> */}
      <script
        type="text/javascript"
        src="/js/responsive.js?ver=4.5.12"
      ></script>
      
      {/* <script type="text/javascript" 
        src="/js/plugins.js?ver=4.5.12"></script> */}
      {/* <script
        type="text/javascript"
        src="/js/imagesloaded.pkgd.min.js"
      ></script> */}
      {/* <script type="text/javascript" src="/js/owl.carousel.min.js"></script>
      <script type="text/javascript" src="/js/script_owl.js"></script> */}
      {/* <script type="text/javascript" src="/js/common.js"></script> */}
    </>
  );
}
