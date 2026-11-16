import { Rich } from "./Rich";

function Brand({ email }) {
  return (
    <header className="letter-brand">
      <span>{email.from}</span>
      <span>{email.kicker}</span>
    </header>
  );
}

function Close({ email, compact }) {
  return (
    <>
      {email.cta ? (
        <p className="letter-cta-row">
          <span className="email-cta">{email.cta}</span>
        </p>
      ) : null}
      {email.secondary && !compact ? <p className="letter-secondary">{email.secondary}</p> : null}
      {email.signoff ? <p className="letter-sign">{email.signoff}</p> : null}
      {email.footnote && !compact ? <p className="letter-fine">{email.footnote}</p> : null}
    </>
  );
}

function Newsletter({ email, layout, compact }) {
  const stories = compact ? email.stories?.slice(0, 1) : email.stories;
  return (
    <article className={`letter letter-news is-${layout}`}>
      <header className="news-mast">
        <p className="brand-name">{email.kicker}</p>
        <p className="news-meta">
          <span>{email.issue}</span>
          <span>{email.dateLabel}</span>
        </p>
      </header>
      <h3 className="letter-title">{email.headline}</h3>
      {!compact && email.quote ? <blockquote className="news-quote">{email.quote}</blockquote> : null}
      {(compact ? email.intro?.slice(0, 1) : email.intro)?.map((paragraph) => (
        <p key={paragraph}>
          <Rich text={paragraph} />
        </p>
      ))}
      <div className={`news-grid is-${layout}`}>
        {stories?.map((story) => (
          <section className="news-story" key={story.title}>
            <p className="k">{story.kicker}</p>
            <h4>{story.title}</h4>
            {!compact ? <p>{story.text}</p> : null}
            {!compact && story.cta ? <p className="story-link">{story.cta}</p> : null}
          </section>
        ))}
      </div>
      <Close email={email} compact={compact} />
    </article>
  );
}

export function Letter({ email, layout = "desktop", compact = false }) {
  if (email.visual === "newsletter") {
    return <Newsletter email={email} layout={layout} compact={compact} />;
  }

  const intro = compact ? email.intro?.slice(0, 1) : email.intro;

  return (
    <article className={`letter letter-${email.visual} tone-${email.tone}`}>
      <Brand email={email} />
      {email.product ? (
        <div className="product-plate">
          <span>{email.product.detail}</span>
          <strong>{email.product.name}</strong>
          {!compact && email.product.note ? <em>{email.product.note}</em> : null}
        </div>
      ) : null}
      <h3 className="letter-title">{email.headline}</h3>
      {intro?.map((paragraph) => (
        <p key={paragraph}>
          <Rich text={paragraph} />
        </p>
      ))}
      {email.panel && !compact ? (
        <div className="letter-panel">
          <span>{email.panel.kicker}</span>
          <strong>{email.panel.title}</strong>
          <p>{email.panel.text}</p>
        </div>
      ) : null}
      {email.points && (!compact || email.tone === "orientation") ? (
        <ul className="letter-points">
          {email.points.map((point) => (
            <li key={point.title}>
              <span>{point.n}</span>
              <div>
                <strong>{point.title}</strong>
                {!compact ? <p>{point.text}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
      {email.choices && !compact ? (
        <ul className="letter-choices">
          {email.choices.map((choice) => (
            <li key={choice}>{choice}</li>
          ))}
        </ul>
      ) : null}
      <Close email={email} compact={compact} />
    </article>
  );
}
