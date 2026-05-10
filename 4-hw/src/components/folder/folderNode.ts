import { setupHashPusher } from "@/utils/setupHashPusher";
import { createFolderButton } from "./folderButton";
import './folderNode.css';

function createFolderElement(name?: string, tagName: keyof HTMLElementTagNameMap = 'div') {
  const el = document.createElement(tagName);
  el.classList.add(name ? `folder__${name}` : 'folder');
  return el;
}

export function createFolderNode(name: string, path: string, isOpened?: boolean, isActive?: boolean) {
  const folderRootNode = createFolderElement();
  const buttonNode = createFolderButton(name, isActive, isOpened);
  const childListWrapper = createFolderElement('children');


  folderRootNode.appendChild(buttonNode);
  folderRootNode.appendChild(childListWrapper);

  setupHashPusher(buttonNode, path);

  return { folderRootNode, childListWrapper };
}
