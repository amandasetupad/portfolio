export function plain(text = "") {
  return String(text).replace(/\[\[|\]\]/g, "");
}

export function Rich({ text }) {
  const parts = String(text ?? "").split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, index) => {
    if (part.startsWith("[[") && part.endsWith("]]")) {
      return (
        <span className="token" key={index}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
