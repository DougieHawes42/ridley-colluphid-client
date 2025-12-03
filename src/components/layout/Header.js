import { Link } from "react-router-dom";

import darkLogo from "../../display/media/artistlogo-dark.png";
import lightLogo from "../../display/media/artistlogo-light.png";

import "./style.scss";
import { Link1 } from "../utils/links";

const Header = ({ darkmode }) => {
  return (
    <div className="header">
      <Link to="/">
        {darkmode ? (
          <img className="header-logo" src={lightLogo} />
        ) : (
          <img className="header-logo" src={darkLogo} />
        )}
      </Link>
      <div className="header-links">
        <Link1 text="work" />
        <Link1 text="events" />
        <Link1 text="blog" />
        <Link1 text="contact" />
      </div>
    </div>
  );
};

export default Header;
