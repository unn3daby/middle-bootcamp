export function createIconNode(src: string, className?: string, alt?: string) {
  const icon = document.createElement('img');
  icon.setAttribute('src', src);

  alt && icon.setAttribute('alt', alt);
  className && icon.classList.add(className);

  return icon;
}
