import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = ({ id, title, ...rest }) => {
  return (
    <div className="overflow-hidden rounded">
      <LiteYouTubeEmbed id={id} title={title} {...rest} />
    </div>
  );
};

export default Youtube;
