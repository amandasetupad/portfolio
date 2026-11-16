import { Link } from "react-router-dom";
import { hero } from "../content/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-copy">
        <h1 className="hero-title">
          <span className="line">{hero.lines[0]}</span>
          <span className="line">{hero.lines[1]}</span>
          <span className="better">{hero.accent}</span>
        </h1>
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <Link className="btn btn-teal" to={hero.primary.href}>
            {hero.primary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
