import { useState } from "react";
import { journeys, journeysIntro } from "../content/site";

export function Automation() {
  const [activeId, setActiveId] = useState(journeys[0].id);
  const journey = journeys.find((item) => item.id === activeId) ?? journeys[0];

  const onKeyDown = (event) => {
    const index = journeys.findIndex((item) => item.id === journey.id);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = event.key === "ArrowRight" ? index + 1 : index - 1;
    setActiveId(journeys[(next + journeys.length) % journeys.length].id);
  };

  return (
    <section className="automation section" id="automation">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-label">
            <span>{journeysIntro.index}</span>
            {journeysIntro.label}
          </p>
          <h2>{journeysIntro.title}</h2>
          <p className="support">{journeysIntro.support}</p>
        </header>

        <div className="journey-tabs" role="tablist" aria-label="Example journeys" onKeyDown={onKeyDown}>
          {journeys.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === journey.id}
              tabIndex={item.id === journey.id ? 0 : -1}
              className="journey-tab"
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.number}</span>
              {item.title}
            </button>
          ))}
        </div>

        <div className="flow-wrap" role="tabpanel" key={journey.id}>
          <p className="flow-summary">{journey.summary}</p>
          <ol className="flow">
            {journey.steps.map((step, index) => (
              <li className={`node node-${step.key}`} key={step.key}>
                {index < journey.steps.length - 1 ? <span className="join" aria-hidden="true" /> : null}
                <p className="node-label">{step.label}</p>
                <h3>{step.title}</h3>
              </li>
            ))}
          </ol>
          <p className="flow-note">{journey.note}</p>
        </div>
      </div>
    </section>
  );
}
