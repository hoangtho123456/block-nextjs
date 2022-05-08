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
                  <h3 className="title1">Test Logo</h3>
                  <p>
                    Lorem Ipsum
                    <br />
                    Lorem Ipsum Lorem Ipsum
                  </p>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  <p>
                    Phone: <a href="tel:#">+0909888888</a>
                  </p>
                  <ul className="blog-item-social ">
                    <li>
                      <Link href="#">
                        <a className="item" title="" target="_blank">
                          <i className="icon-facebook" aria-hidden="true"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
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
                      <h4 className="widget-title">Lorem Ipsum</h4>
                      <ul className="menu">
                        <li>
                          <Link href="/About">
                            <a>Lorem Ipsum Lorem</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Project-Management">
                            <a>Lorem Ipsum Lorem Ipsum</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Media-Team">
                            <a>Lorem Ipsum Lorem Ipsum</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Product-team">
                            <a>Lorem Ipsum</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/OpsAds-Team">
                            <a>Lorem Ipsum Lorem Ipsum</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3 col-md-6  efch-1 ef-img-t">
                    <div className="widget">
                      <h4 className="widget-title">Lorem Ipsum</h4>
                      <ul className="menu">
                        <li><Link href="/"><a>Website development</a></Link></li>
                        <li><Link href="/seo-Website"><a>Lorem Ipsum Lorem</a></Link></li>
                        <li><Link href="/Seo-Website-Big"><a>Lorem Ipsum test iloroil</a></Link></li>
                        <li><Link href="/Pay-Per-Click"><a>3p3p3p is lorem</a></Link></li>
                        <li><Link href="/Conversion-Rate-Optimization"><a>Lorem Ipsum Lorem Ipsum</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-md-6  efch-1 ef-img-t">
                    <div className="widget">
                      <h4 className="widget-title">Lorem Ipsum Lorem Ipsum</h4>
                      <ul className="menu">
                        <li>
                          <Link href="/Recruitment">
                            <a>Lorem Ipsum Ipsum</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>3TTT</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Lorem Ipsum Lorem Ipsum</a>
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
                            <a>Support</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/Contact">
                            <a>Lorem Ipsum Service</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="back-top" className="back-top-1 show" 
            onClick={scrollToTop}>
            <i className="icon-1 it"></i> <span>TOP</span>
          </div>
        </div>

        <div id="footer-mb" className="">
          <div className="container">
            <div className="widget widget-info">
              <h3 className="title1">Lorem Ipsum Lorem</h3>
              <p>
                Lorem Ipsum Lorem Ipsum
                <br />
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
              <p>Email: test@gmail.com</p>
              <p>
                Phone: <a href="tel:#">+84 9999 8888</a>
              </p>
              <ul className="blog-item-social">
                <li>
                  <Link href="#">
                    <a className="item" title="" target="_blank">
                      <i className="icon-facebook" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
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
                  <span>Open</span>
                  <span className="triangle">
                    <i className="icon-plus" aria-hidden="true"></i>
                  </span>
                </label>
                <div className="accodion-content">
                  <div className="inner">
                    <div className="row grid-space-10">
                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">Intro</h4>
                          <ul className="menu">
                            <li>
                              <Link href="/About">
                                <a>Lorem Ipsum</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Project-Management">
                                <a>Project Lorem Ipsum</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Media-Team">
                                <a>Lorem Ipsum</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Product-team">
                                <a>Product Lorem</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/OpsAds-Team">
                                <a>3T group</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">Service</h4>
                          <ul className="menu">
                            <li><Link href="/"><a>web Lorem Ipsum</a></Link></li>
                            <li><Link href="/Seo-Website"><a>Lorem Ipsum Lorem Ipsum</a></Link></li>
                            <li><Link href="/Seo-Website-Big"><a>SEO Lorem Ipsum Lorem</a></Link></li>
                            <li><Link href="/Pay-Per-Click"><a>Lorem Ipsum</a></Link></li>
                            <li><Link href="/Conversion-Rate-Optimization"><a>Lorem Ipsum Lorem rate optimization</a></Link></li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-3 col-6  efch-2 ef-img-t">
                        <div className="widget">
                          <h4 className="widget-title">Infomation</h4>
                          <ul className="menu">
                            <li>
                              <Link href="/Recruitment">
                                <a>Recruit</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a>Partner</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <a>Lorem Ipsum Lorem Ipsum</a>
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
                                <a>Support</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/Contact">
                                <a>Advisory Service</a>
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
      <script
        type="text/javascript"
        src="/js/responsive.js?ver=4.5.12"
      ></script>
    </>
  );
}
