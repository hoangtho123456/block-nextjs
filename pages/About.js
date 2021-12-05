import Banner from "../components/Blocks/AboutBanner/";
import AboutNumber from "../components/Blocks/AboutNumber";
import AboutIntro from "../components/Blocks/AboutIntro";
import AboutVision from "../components/Blocks/AboutVision";
import AboutWhy from "../components/Blocks/AboutWhy";
import AboutCommit from "../components/Blocks/AboutCommit";

export default function Blocks({ deviceType }) {
  return (
    <div className="l-layout1 l-layout1--bg1">
      <Banner></Banner>
      <AboutNumber></AboutNumber>
      <AboutIntro></AboutIntro>
      <AboutVision></AboutVision>
      <AboutWhy></AboutWhy>
      <AboutCommit deviceType={deviceType}></AboutCommit>
    </div>
  );
}

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}
