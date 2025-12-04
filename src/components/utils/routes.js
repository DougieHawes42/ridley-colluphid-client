import "./style.scss";

export const Route1 = ({ title, content }) => (
  <div className="route route1">
    <div className="route-title-box route1-title-box">
      <h2 className="route-title route1-title">{title}</h2>
    </div>
    <div className="route-content">{content}</div>
  </div>
);

export const Route2 = ({ title, content }) => (
  <div className="route route2">
    <div className="route-title-box route2-title-box">
      <h2 className="route-title route2-title">{title}</h2>
    </div>
    <div className="route-content">{content}</div>
  </div>
);
