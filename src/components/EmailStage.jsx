import { useEffect, useState } from "react";
import { Letter } from "./Letter";
import { Rich, plain } from "./Rich";

function useNarrow(query = "(max-width: 980px)") {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setNarrow(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return narrow;
}

function subjectList(email) {
  return [email.subject, ...(email.alternates ?? [])];
}

export function CardProof({ email }) {
  return (
    <div className="card-proof">
      <div className="inbox-line">
        <span className="unread" aria-hidden="true" />
        <div>
          <strong>{email.from}</strong>
          <p>{plain(email.subject)}</p>
        </div>
      </div>
      <Letter email={email} layout="phone" compact />
    </div>
  );
}

export function EmailStage({ emails }) {
  const [activeId, setActiveId] = useState(emails[0].id);
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [showDesktop, setShowDesktop] = useState(false);
  const narrow = useNarrow();
  const email = emails.find((item) => item.id === activeId) ?? emails[0];
  const subjects = subjectList(email);
  const activeSubject = subjects[subjectIndex] ?? email.subject;

  useEffect(() => {
    setSubjectIndex(0);
    setShowDesktop(false);
  }, [activeId]);

  const onTabs = (event) => {
    const index = emails.findIndex((item) => item.id === email.id);
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const next = event.key === "ArrowRight" ? index + 1 : index - 1;
      const wrapped = (next + emails.length) % emails.length;
      setActiveId(emails[wrapped].id);
    }
  };

  const desktopHidden = narrow && !showDesktop;
  const phoneHidden = !narrow || showDesktop;

  return (
    <div className={`theatre ${showDesktop ? "is-desktop-open" : ""}`}>
      <div className="switcher" role="tablist" aria-label="Emails in this series" onKeyDown={onTabs}>
        {emails.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={item.id === email.id}
            aria-controls="email-panel"
            tabIndex={item.id === email.id ? 0 : -1}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="email-meta" role="tabpanel" id="email-panel" aria-labelledby={`tab-${email.id}`}>
        <p>
          <span>When it sends</span>
          {email.timing}
        </p>
        <p>
          <span>The job</span>
          {email.purpose}
        </p>
      </div>

      <div className="inbox-preview">
        <p className="inbox-label">Inbox — subject line previews</p>
        <ul>
          {subjects.map((subject, index) => (
            <li key={subject}>
              <button
                type="button"
                className={index === subjectIndex ? "is-active" : undefined}
                onClick={() => setSubjectIndex(index)}
              >
                <span className="who">{email.from}</span>
                <span className="subj">
                  <Rich text={subject} />
                </span>
                <span className="pre">{email.preheader}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage">
        <div className={`stage-desktop ${showDesktop ? "is-open" : ""}`} aria-hidden={desktopHidden}>
          <div className="desktop">
            <div className="desktop-bar">
              <span>Inbox</span>
              <span>Desktop preview</span>
            </div>
            <div className="desktop-split">
              <ul className="desktop-list">
                {subjects.map((subject, index) => (
                  <li key={subject}>
                    <button
                      type="button"
                      className={index === subjectIndex ? "is-active" : undefined}
                      onClick={() => setSubjectIndex(index)}
                    >
                      <span className="who">{email.from}</span>
                      <span className="subj">{plain(subject)}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="desktop-read">
                <div className="client-head">
                  <p>
                    {email.from} <span>&lt;{email.fromEmail}&gt;</span>
                  </p>
                  <h3>{plain(activeSubject)}</h3>
                  <p className="pre">{email.preheader}</p>
                </div>
                <Letter email={email} layout="desktop" />
              </div>
            </div>
          </div>
        </div>

        <div className="stage-phone" aria-hidden={phoneHidden}>
          <div className="phone">
            <div className="phone-screen">
              <div className="phone-bar">
                <span>Inbox</span>
                <span>9:41</span>
              </div>
              <div className="phone-mailhead">
                <p>{email.from}</p>
                <h3>{plain(activeSubject)}</h3>
                <p>{email.preheader}</p>
              </div>
              <Letter email={email} layout="phone" />
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-line-dark see-desktop" type="button" onClick={() => setShowDesktop((value) => !value)}>
        {showDesktop ? "View mobile layout" : "View desktop layout"}
      </button>
      <p className="sample-note">
        Highlighted words are sample personalisation. Same body, different subject — the inbox list is the test, not a set of results.
      </p>
    </div>
  );
}
