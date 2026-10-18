const paths = {
  refresh: "M20 11a8 8 0 1 1-2.4-5.7M20 4v5h-5",
  create: "M12 5v14M5 12h14",
  setup: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  copy: "M9 9h11v11H9zM15 9V4H4v11h5",
  archive: "M3 4h18v4H3zM5 8v12h14V8M10 12h4",
  delete: "M4 7h16M10 4h4m4 3-1 13H7L6 7m4 4v5m4-5v5",
  guide: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z M6 6h10 M6 10h10",
} as const;

export function addButtonIcon(root: HTMLElement, name: keyof typeof paths) {
  root.classList.add("loading-action");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", paths[name]);
  svg.append(path);
  root.querySelector("button")!.prepend(svg);
}
