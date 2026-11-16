import { Link, useParams } from "react-router-dom";
import { EmailStage } from "../components/EmailStage";
import { NotFound } from "../components/NotFound";
import { Rich } from "../components/Rich";
import { Seo } from "../components/Seo";
import { demonstrationNote, getProject, projectNeighbors } from "../content/site";
import { useReveal } from "../hooks/useReveal";

export function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  useReveal(slug);

  if (!project) return <NotFound />;

  const { prev, next } = projectNeighbors(slug);

  return (
    <article className="case">
      <Seo
        title={`${project.title} — The Inbox Edit`}
        description={`${project.concept} A portfolio demonstration, not a published campaign.`}
      />
      <header className="case-hero">
        <div className="wrap">
          <Link className="back-link" to="/#examples">
            Examples / {project.number}
          </Link>
          <h1>{project.title}</h1>
          <p className="case-cat">{project.category}</p>
          <p className="concept">{project.concept}</p>
        </div>
      </header>

      <div className="case-body">
        <div className="wrap">
          <p className="demo-note">{demonstrationNote}</p>

          {project.story.map((block) => (
            <section className="story-block reveal" key={block.heading}>
              <h2>{block.heading}</h2>
              {block.items?.length ? (
                <div className="item-list">
                  {block.items.map((item) => (
                    <div className="item" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                block.paragraphs?.slice(0, 1).map((paragraph) => (
                  <p key={paragraph}>
                    <Rich text={paragraph} />
                  </p>
                ))
              )}
            </section>
          ))}

          <section className="story-block reveal" aria-labelledby="emails-heading">
            <h2 id="emails-heading">The emails</h2>
            <EmailStage emails={project.emails} />
          </section>

          <nav className="neighbors" aria-label="More work">
            {prev ? (
              <Link to={`/work/${prev.slug}`}>
                <span>Previous</span>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="next" to={`/work/${next.slug}`}>
                <span>Next</span>
                <strong>{next.title}</strong>
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </article>
  );
}
