import Banner from '../components/Blocks/HomeBanner/'
import About from '../components/Blocks/HomeAbout/'
import Work from '../components/Blocks/HomeWork/'
import Number from '../components/Blocks/AboutNumber/'
import BannerOne from '../components/Blocks/HomeBannerOne/'
import Service from '../components/Blocks/HomeService/'
import Partner from '../components/Blocks/HomePartner/'
import Contact from '../components/Blocks/HomeContact/'
export default function Home() {
  return (
    <>
      <Banner/>
      <About/>
      <Work/>
      <Number classSpacing="section-t-0"
        title="Best count"/>
      <BannerOne classSpacing="section-t"/>
      <Service/>
      <Partner/>
      <Contact/>
    </>
  );
}
