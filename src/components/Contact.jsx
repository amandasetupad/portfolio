import { Link } from "react-router-dom";
import { contact, footer, navigation, profile } from "../content/site";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="section-label">
            <span>{contact.index}</span>
            {contact.label}
          </p>
          <h2>{contact.title}</h2>
        </div>
        <div className="contact-copy">
          <p>{contact.support}</p>
          <p className="contact-mail">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="contact-actions">
            <a className="btn btn-teal" href={`mailto:${profile.email}`}>
              {contact.cta}
            </a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div>
          <p className="footer-brand">{profile.brand}</p>
          <p className="footer-line">{footer.line}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/#top">Top</Link>
          {navigation.map((item) => (
            <Link key={item.id} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
