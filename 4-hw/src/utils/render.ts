export function renderNode(root: HTMLElement, node: HTMLElement) {
  root.appendChild(node);
  return {root, node};
}
