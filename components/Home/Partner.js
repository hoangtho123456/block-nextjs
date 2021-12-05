import React from 'react';
import Link from 'next/link'
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Partner = ({}) => {
  const title = 'Đối tác';
  const decs = 'Những đối tác đã tin tưởng và lựa chọn sử dụng dịch vụ của MangoAds.';
  return (
    <div>
      <div className="text-center default-ptb0 mb-40">
        <section className="container">
          <h1 className="page-title" /><h2>{title}</h2>
          <div>{decs}</div>
        </section>
      </div>
      <div className="section-b">
        <div className="mg06">
          <div className="container">
            <Carousel responsive={responsive} autoPlay={false}>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-3.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-2.png" />
                </div>
              </div>
              <div className="owl-item1">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-1.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-17.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-16.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-1.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-2.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-3.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-4.png" />
                </div>
              </div>
              <div className="owl-item1">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-5.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-7.png" />
                </div>
              </div>
              <div className="owl-item1 ">
              <div className="item tRes_65">
                <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-8.png" />
              </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-9.png" />
                </div>
              </div>
              <div className="owl-item1 ">
                <div className="item tRes_65">
                  <img alt="img" src="https://mangoads.vn/vn/wp-content/uploads/2021/03/logo-10.png" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
