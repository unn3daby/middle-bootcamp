import './treeButton.css';

function createIcon(icon?: string | HTMLElement) {
  if (icon instanceof HTMLElement) return icon;

  const iconNode = document.createElement('img');
  iconNode.setAttribute('src', icon);
  iconNode.classList.add('tree-button__icon');
  return iconNode;
}

function setupTreeButton(button: HTMLElement) {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tree-button').forEach((item) => item.classList.remove('tree-button--active'));
    button.classList.toggle('tree-button--active')
  });
}

export function createTreeButton(text: string, icon?: string | HTMLElement, customClass?: string) {
  const buttonNode = document.createElement('button');
  const buttonContent = document.createElement('div');

  buttonNode.appendChild(buttonContent)

  buttonNode.classList.add('tree-button');
  buttonContent.classList.add('tree-button__content')
  customClass && buttonNode.classList.add(customClass);

  if (!icon) {
    buttonContent.textContent = text;
    return buttonNode;
  }

  buttonContent.appendChild(createIcon(icon));

  const textNode = document.createElement('div');
  textNode.classList.add('tree-button__text');
  textNode.textContent = text;
  buttonContent.appendChild(textNode);

  setupTreeButton(buttonNode);

  return buttonNode;
}
