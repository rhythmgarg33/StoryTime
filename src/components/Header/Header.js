import { Button } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <>
    <span onClick={() => window.scroll(0, 0)} className="header">
      STORY TIME
    </span>
    <div>
      <Button className="button" color="secondary" variant="contained" href="https://movie-recommender-rhythm.herokuapp.com/" target="_blank">
        GET RECOMMENDATIONS
      </Button>
    </div>
    </>
  );
};

export default Header;
