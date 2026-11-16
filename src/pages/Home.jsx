import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Seo } from "../components/Seo";
import { Work } from "../components/Work";
import { seo } from "../content/site";
import { useReveal } from "../hooks/useReveal";

export function Home() {
  useReveal("home");

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <Hero />
      <Work />
      <Contact />
    </>
  );
}
