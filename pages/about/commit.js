import Commit from '../../components/Blocks/AboutCommit';
export default function({ deviceType }) {
  return (
    <Commit deviceType={deviceType}/>
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
