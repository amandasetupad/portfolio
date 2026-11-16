import { useEffect } from "react";

export function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (!description) return undefined;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", description);
    return undefined;
  }, [title, description]);

  return null;
}
