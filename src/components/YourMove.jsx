const img = {
  logo: "/images/yourmove/logo-mark.png",
};

const vacancies = [
  {
    field: "IT",
    title: "Software developer",
    line: "Product work with a team in Latvia.",
    pay: "€2,800–€4,200 / month",
  },
  {
    field: "Logistics",
    title: "Logistics coordinator",
    line: "Routes and shipments across the Baltics.",
    pay: "€1,600–€2,400 / month",
  },
  {
    field: "Finance",
    title: "Financial analyst",
    line: "Reports for a company hiring in Latvia.",
    pay: "€2,000–€3,000 / month",
  },
];

function Logo() {
  return <img className="ym-logo" src={img.logo} alt="YourMove" />;
}

function Rook({ className = "" }) {
  return <span className={className ? `ym-rook ${className}` : "ym-rook"} />;
}

function HeroGraphic() {
  return (
    <div className="ym-hero" role="img" aria-label="Yellow chess piece above a simple skyline. Since 2018.">
      <span className="ym-hero-tag">Since 2018</span>
      <span className="ym-hero-mark" aria-hidden="true">
        <span className="ym-hero-disc" />
        <Rook />
      </span>
      <span className="ym-sky" aria-hidden="true">
        <i className="h1" />
        <i className="h2" />
        <i className="h3" />
        <i className="h5" />
        <i className="is-peak" />
        <i className="h4" />
        <i className="h2" />
        <i className="h3" />
        <i className="h6" />
      </span>
    </div>
  );
}

function StepsArt() {
  return (
    <div className="ym-steps-art" aria-hidden="true">
      <span className="ym-dots" />
      <Rook className="is-step" />
      <span className="ym-house">
        <span className="ym-roof" />
        <span className="ym-door" />
      </span>
    </div>
  );
}

function SplitBanner() {
  return (
    <div className="ym-split">
      <div className="ym-panel is-job">
        <h4>Looking for a job in Latvia?</h4>
        <p>Let your next job find you!</p>
        <div className="ym-pieces" aria-hidden="true">
          <Rook className="r1" />
          <Rook className="r2" />
          <Rook className="r3" />
          <span className="ym-launch">
            <span className="ym-trail" />
            <Rook className="is-rocket" />
            <span className="ym-cloud">
              <i />
              <i />
              <i />
              <i />
            </span>
          </span>
          <Rook className="r4" />
          <Rook className="r5" />
          <Rook className="r6" />
        </div>
        <span className="ym-btn">Create your profile</span>
      </div>
      <div className="ym-panel is-hire">
        <h4>Looking for international experience in your company?</h4>
        <p>Let them know you are hiring.</p>
        <div className="ym-hire-art" aria-hidden="true">
          <span className="ym-board" />
        </div>
        <span className="ym-btn is-ink">Post a job</span>
      </div>
    </div>
  );
}

function BadEmail() {
  return (
    <article className="ym-mail is-bad" aria-label="Bad example YourMove newsletter">
      <p className="ym-topbar">yourmove.lv</p>
      <p className="ym-cats">
        <span>Jobs</span>
        <span>Cities</span>
        <span>Families</span>
        <span>Stories</span>
      </p>
      <Logo />
      <HeroGraphic />
      <div className="ym-after">
        <h3>A job in Latvia, and a path home.</h3>
        <span className="ym-btn is-late">See open roles</span>
      </div>
      <div className="ym-dump">
        <ul>
          <li>Specialist roles</li>
          <li>Roles that can sponsor a move</li>
          <li>Roles for coming back with a family</li>
        </ul>
        <span className="ym-btn is-late">See all</span>
      </div>
      <footer className="ym-foot is-busy">
        <span>Jobs</span>
        <span>Cities</span>
        <span>Families</span>
        <span>Stories</span>
        <span>About</span>
        <span>Contact</span>
        <span>Privacy</span>
        <span>Unsubscribe</span>
      </footer>
    </article>
  );
}

function GoodEmail() {
  return (
    <article className="ym-mail is-good" aria-label="Good example YourMove newsletter">
      <div className="ym-open">
        <Logo />
        <p className="ym-strip">For Latvians living abroad</p>
        <h3>A job in Latvia, and a path home.</h3>
        <p className="ym-sub">Let the next role find you.</p>
        <p className="ym-copy">Start with the work. A plan for coming home can follow.</p>
        <span className="ym-btn is-primary">See open roles</span>
      </div>
      <HeroGraphic />
      <p className="ym-kicker">In short</p>
      <p className="ym-copy">Companies hiring in Latvia. One role at a time.</p>
      <section className="ym-jobs" aria-label="Sample listings">
        <p className="ym-sample">Sample listings for this layout. Not live offers.</p>
        {vacancies.map((job) => (
          <article className="ym-job" key={job.field}>
            <p className="ym-field">{job.field}</p>
            <h4>{job.title}</h4>
            <p>{job.line}</p>
            <p className="ym-pay">{job.pay}</p>
          </article>
        ))}
      </section>
      <div className="ym-mid">
        <span className="ym-btn">See sample roles</span>
      </div>
      <section className="ym-steps" aria-label="How to start">
        <StepsArt />
        <ol className="ym-step-list">
          <li>
            <span>1</span>
            <div>
              <strong>Create your profile</strong>
              <p>So the next role can find you.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>Choose a field</strong>
              <p>IT, logistics, or finance.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Plan the move</strong>
              <p>Ask what coming home could take.</p>
            </div>
          </li>
        </ol>
      </section>
      <SplitBanner />
      <div className="ym-close">
        <p>A job in Latvia can be the first step home.</p>
        <span className="ym-btn is-primary">Start with open roles</span>
      </div>
      <footer className="ym-foot">
        <p className="ym-links">
          <span>Open roles</span>
          <span>For families</span>
        </p>
        <p className="ym-unsub">You are receiving this because you asked about jobs in Latvia. Unsubscribe</p>
      </footer>
    </article>
  );
}

export function YourMove() {
  return (
    <div className="exhibit yourmove">
      <p className="exhibit-kicker">Exhibit C</p>
      <div className="exhibit-pair">
        <figure>
          <figcaption>
            <strong>Bad example</strong>
          </figcaption>
          <BadEmail />
        </figure>
        <figure>
          <figcaption>
            <strong>Good example</strong>
          </figcaption>
          <GoodEmail />
        </figure>
      </div>
      <p className="exhibit-why">
        The bad email leads with the picture, then a headline and one small button. Job types sit in a single list under one shared button, and a row of category links splits attention at the top. The good email puts the headline and See open roles first, then the picture, sample roles, the steps, and a split banner with a button on each side.
      </p>
      <p className="ym-note">Constructed example. YourMove no longer operates.</p>
    </div>
  );
}
