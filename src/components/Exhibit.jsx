const img = {
  logo: "/images/dzintars/logo.png",
  cleanser: "/images/dzintars/cleanser.png",
  gel: "/images/dzintars/gel.png",
  toner: "/images/dzintars/toner.png",
  set: "/images/dzintars/set.png",
  pines: "/images/dzintars/pines.png",
  beach: "/images/dzintars/beach.png",
};

function Logo() {
  return <img className="dz-logo" src={img.logo} alt="Dzintars" />;
}

function BadEmail() {
  return (
    <article className="ex-mail is-bad" aria-label="Bad example newsletter">
      <div className="bad-hero">
        <div className="dz-logo-bar">
          <Logo />
        </div>
        <img className="dz-hero" src={img.pines} alt="Close pine needles" />
        <p className="bad-flag">The full line</p>
        <h3>Melnsils, all of it, in one go.</h3>
        <p className="bad-copy">
          Cleanser, toner and gel-cream. Plus the pines, the beach, the ingredients, and another way in.
        </p>
        <span className="bad-btn">Shop everything</span>
      </div>

      <div className="bad-diagram">
        <div className="bad-stage">
          <span className="bad-call c1">Camomile</span>
          <span className="bad-call c2">Tea tree</span>
          <span className="bad-call c3">Exfoliates</span>
          <span className="bad-call c4">Mattifies</span>
          <span className="bad-call c5">Breakouts</span>
          <img src={img.set} alt="Cleanser and gel-cream together" />
        </div>
      </div>

      <div className="bad-band">
        <h3>The cleanser and the cream.</h3>
        <p>One button for every step on the page.</p>
        <span className="bad-btn">Shop now</span>
      </div>

      <div className="bad-grid">
        <p className="bad-grid-title">Also in the line</p>
        <div>
          <img src={img.cleanser} alt="" />
          <p>3-in-1 cleanser</p>
          <p className="dz-price">
            <s>7,99 €</s> <strong>4,39 €</strong>
          </p>
          <span className="ghost-btn">Shop</span>
        </div>
        <div>
          <img src={img.toner} alt="" />
          <p>Balancing toner</p>
          <p className="dz-price">
            <s>7,28 €</s> <strong>2,92 €</strong>
          </p>
          <span className="ghost-btn">Shop</span>
        </div>
        <div>
          <img src={img.gel} alt="" />
          <p>Gel-cream</p>
          <p className="dz-price">
            <s>7,99 €</s> <strong>3,19 €</strong>
          </p>
          <span className="ghost-btn">Shop</span>
        </div>
      </div>

      <footer className="bad-foot">
        <span>Shop</span>
        <span>Acne</span>
        <span>Oily skin</span>
        <span>Sets</span>
        <span>Ingredients</span>
        <span>Stores</span>
        <span>Pause</span>
      </footer>
    </article>
  );
}

function GoodEmail() {
  return (
    <article className="ex-mail is-good" aria-label="Good example newsletter">
      <div className="good-hero">
        <Logo />
        <p className="good-pill">Melnsils</p>
        <h3>
          Three steps.
          <br />
          Less noise on the skin.
        </h3>
        <p className="good-sub">Cleanser, toner, gel-cream.</p>
        <p className="good-copy">Camomile and tea tree, for acne-prone skin. Start with the cleanser.</p>
        <span className="good-btn">Shop the routine</span>
        <img className="dz-hero is-good" src={img.beach} alt="Pines on a sandy coast" />
      </div>

      <div className="good-product">
        <img src={img.cleanser} alt="Dzintars 3-in-1 cleanser" />
        <div>
          <h3>3-in-1 cleanser</h3>
          <p className="dz-rating">
            <span aria-hidden="true">★★★★★</span> 5.0 · 7 reviews
          </p>
          <p className="dz-price">
            <s>7,99 €</s> <strong>4,39 €</strong>
          </p>
          <p className="dz-ingredient">
            <strong>Tea tree oil.</strong> Helps fight blemishes.
          </p>
          <ul>
            <li>Cleanser, exfoliator and mask</li>
            <li>For acne-prone skin</li>
          </ul>
          <span className="good-btn">Shop this</span>
        </div>
      </div>

      <div className="good-product">
        <img src={img.toner} alt="Dzintars balancing toner" />
        <div>
          <h3>Balancing toner</h3>
          <p className="dz-rating">
            <span aria-hidden="true">★★★★☆</span> 4/5 · 9 reviews
          </p>
          <p className="dz-price">
            <s>7,28 €</s> <strong>2,92 €</strong>
          </p>
          <p className="dz-ingredient">
            <strong>Tea tree oil.</strong> Helps target breakouts.
          </p>
          <ul>
            <li>Removes excess oil</li>
            <li>For acne-prone skin</li>
          </ul>
          <span className="good-btn">Shop this</span>
        </div>
      </div>

      <div className="good-spec">
        <img src={img.gel} alt="Dzintars balancing gel-cream" />
        <h3>Balancing gel-cream</h3>
        <p className="dz-rating">
          <span aria-hidden="true">★★★★★</span> 4.75 · 14 reviews
        </p>
        <p className="dz-price">
          <s>7,99 €</s> <strong>3,19 €</strong>
        </p>
        <p className="dz-ingredient">
          <strong>Niacinamide.</strong> Helps balance oil and shine.
        </p>
        <ul className="good-inline">
          <li>Hydrates</li>
          <li>Balances</li>
          <li>Mattifies</li>
        </ul>
        <span className="good-btn">Shop this</span>
      </div>

      <footer className="good-foot">
        <span>The routine</span>
        <span>Ingredients</span>
        <span>Pause the mail</span>
      </footer>
    </article>
  );
}

export function Exhibit() {
  return (
    <div className="exhibit">
      <p className="exhibit-kicker">Exhibit A</p>
      <p className="sr-only">
        Two constructed Dzintars newsletters for the Melnsils line. The bad example hides the action under a picture. The good example puts the action with the headline, then gives each product its own way in.
      </p>
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
        On the good email, Shop the routine sits under the headline, before the photo. Each product shows its stars, the old price and the sale price, one ingredient, and its own Shop this button. The bad email opens with the pine photo, then one small Shop everything button for the whole line, and the prices only show up in a tiny row at the bottom.
      </p>
    </div>
  );
}
