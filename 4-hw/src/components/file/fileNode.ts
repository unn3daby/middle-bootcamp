import { createTreeButton } from '../tree-button/treeButton';
import fileIcon from '@/assets/file.svg'

export function createFileNode(name: string) {
  const buttonNode = createTreeButton(name, fileIcon);
  buttonNode.classList.add('file__button');
  return buttonNode;
}
