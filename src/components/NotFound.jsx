import { Link } from "react-router-dom";
import { Seo } from "./Seo";

export function NotFound() {
  return (
    <section className="not-found">
      <Seo
        title="Page not found — The Inbox Edit"
        description="That page is not part of The Inbox Edit."
      />
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page left the inbox.</h1>
        <p>The link does not lead anywhere. The work still does.</p>
        <Link className="btn btn-teal" to="/">
          Back to the edit
        </Link>
      </div>
    </section>
  );
}
