import { Link } from "react-router-dom";
import "./style.scss";

export const Link1 = ({ text }) => (
  <Link className="link link1" to={`/${text}`}>
    {text}
  </Link>
);
