const STAR_PATH =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function Star({ partial = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {partial && (
        <defs>
          <linearGradient id="mada-star-part" x1="0" y1="0" x2="1" y2="0">
            <stop offset="60%" stopColor="currentColor" />
            <stop offset="60%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        d={STAR_PATH}
        fill={partial ? "url(#mada-star-part)" : "currentColor"}
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Socials() {
  return (
    <ul className="mada-socials">
      <li>
        <a href="https://www.instagram.com/madaracosmetics/" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.3 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/madaracosmetics" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.2 20v-6.2h2.1l.3-2.4h-2.4V9.9c0-.7.2-1.2 1.2-1.2H16.7V6.6A16 16 0 0 0 14.9 6c-1.8 0-3 1.1-3 3.1v1.3H9.6v2.4h2.3V20z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/madaracosmetics" aria-label="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.2 8.2a2.7 2.7 0 0 0-1.9-1.9C17.6 6 12 6 12 6s-5.6 0-7.3.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2.5 12a28 28 0 0 0 .3 3.8 2.7 2.7 0 0 0 1.9 1.9C6.4 18 12 18 12 18s5.6 0 7.3-.3a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .3-3.8 28 28 0 0 0-.3-3.8zM10.4 14.8V9.2L15.2 12z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export function Madara() {
  return (
    <div className="exhibit madara-exhibit">
      <p className="exhibit-kicker">Exhibit B</p>
      <div className="exhibit-pair">
      <figure className="mada-figure">
        <figcaption>
          <strong>Bad example</strong>
        </figcaption>
        <article className="mada-mail" aria-label="Bad example Madara newsletter">
          <img className="mada-logo" src="/images/madara/logo.png" alt="Mádara organic skincare" />
          <p className="mada-wait">I was waiting for you...</p>
          <img className="mada-hero" src="/images/madara/hero.jpg" alt="A woman lying in a green meadow" />
          <p className="mada-line">I’ll be happy to share my discoveries and Northern beauty secrets.</p>
          <p className="mada-line">Enjoy 15% off your first order with code*</p>
          <p className="mada-code">MADA15</p>
          <span className="mada-btn">Shop now</span>
          <p className="mada-fine">
            *Use the code within <span>15 days</span> for one online order at{" "}
            <mark>madaracosmetics.com</mark>. Cannot be combined with other offers.
          </p>
          <Socials />
          <p className="mada-unsub">
            You are receiving this email because you joined the Mádara list. Unsubscribe
          </p>
        </article>
      </figure>
      <figure className="mada-figure">
        <figcaption>
          <strong>Good example</strong>
        </figcaption>
        <article className="mada-mail is-good" aria-label="Good example Madara newsletter">
          <img className="mada-logo" src="/images/madara/logo.png" alt="Mádara organic skincare" />
          <div className="mada-open">
            <h3 className="mada-good-title">15% off everything.</h3>
            <p className="mada-code-line">Use code MADA15 at checkout.</p>
            <span className="mada-btn">Shop now</span>
            <p className="mada-quiet">I’ll be happy to share my discoveries and Northern beauty secrets.</p>
            <p className="mada-fine">
              *Use the code within <span>15 days</span> for one online order at{" "}
              <mark>madaracosmetics.com</mark>. Cannot be combined with other offers.
            </p>
            <p className="mada-suggest">If hair is what you came for, here are a few suggestions.</p>
            <img className="mada-hero" src="/images/madara/hero.jpg" alt="A woman lying in a green meadow" />
          </div>
          <p className="mada-proof">
            <span className="mada-proof-score">
              <span className="mada-stars" aria-hidden="true">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star partial />
              </span>
              <span>4.6/5</span>
            </span>
            <span className="mada-proof-count">7,415 reviews</span>
          </p>
          <div className="mada-benefit">
            <img src="/images/madara/mist-pack.png" alt="Mádara Micro-Keratin Healthy Hair Mist" />
            <div>
              <h4>Micro-Keratin Healthy Hair Mist</h4>
              <ul>
                <li>Reduces breakage and split ends</li>
                <li>Provides protection from external stress factors</li>
                <li>Helps repair fiber damage</li>
              </ul>
            </div>
          </div>
          <p className="mada-offer">15% off, again if you are still here.</p>
          <p className="mada-line">Use code MADA15 at checkout.</p>
          <span className="mada-btn">Shop 15% off</span>
          <h4 className="mada-steps-title">How the routine works</h4>
          <section className="mada-step">
            <p className="mada-step-kicker">Step 1</p>
            <h4>Nourish and Repair Shampoo</h4>
            <p>Cleanses while helping restore moisture to dry, brittle strands.</p>
            <img src="/images/madara/shampoo.png" alt="Mádara Nourish and Repair Shampoo" />
            <span className="mada-btn">Shop now</span>
          </section>
          <section className="mada-step">
            <p className="mada-step-kicker">Step 2</p>
            <h4>Nourish and Repair Conditioner</h4>
            <p>Nourishes and smooths, making hair easier to detangle and manage.</p>
            <img src="/images/madara/conditioner.png" alt="Mádara Nourish and Repair Conditioner" />
            <span className="mada-btn">Shop now</span>
          </section>
          <section className="mada-step">
            <p className="mada-step-kicker">Step 3</p>
            <h4>Micro-Keratin Healthy Hair Mist</h4>
            <p>Adds a lightweight layer of strength to help improve texture and resilience.</p>
            <img src="/images/madara/mist-pack.png" alt="Mádara Micro-Keratin Healthy Hair Mist" />
            <span className="mada-btn">Shop now</span>
          </section>
          <img className="mada-hero is-later" src="/images/madara/routine-set.png" alt="Mádara conditioner, shampoo, and Silk mist together" />
          <span className="mada-btn mada-btn-wide">Shop the routine</span>
          <Socials />
          <p className="mada-unsub">
            You are receiving this email because you joined the Mádara list. Unsubscribe
          </p>
        </article>
      </figure>
      </div>
      <p className="exhibit-why">
        The bad email opens with the meadow photo, then the story, the code, and one Shop now button. The good email puts 15% off everything and Shop now first, before the photo, and the code note — 15 days, one order, madaracosmetics.com — sits with the offer. Then it suggests the hair routine: the review score, the mist benefits, and each step (shampoo, conditioner, mist) with its own product and Shop now.
      </p>
    </div>
  );
}
