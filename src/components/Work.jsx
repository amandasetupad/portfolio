import { workIntro } from "../content/site";
import { Exhibit } from "./Exhibit";
import { Madara } from "./Madara";
import { YourMove } from "./YourMove";

export function Work() {
  return (
    <section className="work section" id="examples">
      <div className="wrap">
        <header className="section-head" id="work">
          <p className="section-label">
            <span>{workIntro.index}</span>
            {workIntro.label}
          </p>
          <h2>{workIntro.title}</h2>
        </header>
        <Exhibit />
        <Madara />
        <YourMove />
      </div>
    </section>
  );
}
