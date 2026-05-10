export function setupHashPusher(element: HTMLElement, path: string) {
  element.addEventListener('click', () => {
    window.location.replace(`#${path}`);
  })
}
