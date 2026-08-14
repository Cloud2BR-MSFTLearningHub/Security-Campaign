const renderMermaid = () => {
  if (!globalThis.mermaid) return;

  globalThis.mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict"
  });
  globalThis.mermaid.run({ querySelector: ".mermaid" });
};

if (typeof document$ !== "undefined") {
  document$.subscribe(renderMermaid);
} else {
  document.addEventListener("DOMContentLoaded", renderMermaid);
}

renderMermaid();