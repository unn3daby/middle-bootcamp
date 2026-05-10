import { isEqualsTrue } from "../../utils/isStrictTrue";
import { createTreeButton } from "../tree-button/treeButton";
import folderIcon from '@/assets/folder.svg';
import chevronIcon from '@/assets/chevron-down.svg';
import folderOpenedIcon from '@/assets/folder-open.svg';
import { createIconNode } from "@/utils/createIconNode";

function setupFolderButton(buttonNode: HTMLElement, isOpened: boolean = false) {
  buttonNode.setAttribute('data-opened', isOpened ? 'true' : 'false')

  buttonNode.addEventListener('click', () => {
    const isFolderOpened = isEqualsTrue(buttonNode.getAttribute('data-opened'));
    buttonNode.setAttribute('data-opened', String(!isFolderOpened));
  });
}

function createButtonIcon() {
  const iconsWrapper = document.createElement('div');
  iconsWrapper.classList.add('folder-button__icons-wrapper');

  const chevronNode = createIconNode(chevronIcon, 'tree-button__icon');
  chevronNode.classList.add('chevron-icon');
  const openedFolderNode = createIconNode(folderOpenedIcon, 'tree-button__icon');
  openedFolderNode.classList.add('folder-opened-icon');
  const folderNode = createIconNode(folderIcon, 'tree-button__icon');
  folderNode.classList.add('folder-icon');

  iconsWrapper.appendChild(chevronNode);
  iconsWrapper.appendChild(folderNode);
  iconsWrapper.appendChild(openedFolderNode);

  return iconsWrapper;
}

export function createFolderButton(name: string, isActive?: boolean, isOpened?: boolean) {
  const icon = createButtonIcon();
  const buttonNode = createTreeButton(name, icon, 'folder-button', isActive);

  setupFolderButton(buttonNode, isOpened);
  return buttonNode;
}
