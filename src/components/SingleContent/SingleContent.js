import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        //${} basically used to insert variables and js in your strings 
        // ${} takes up the expression and produce out the value
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <div className="first">
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle1">{date}</span>
      </span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
