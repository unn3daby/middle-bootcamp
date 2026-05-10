import { setupHashPusher } from '@/utils/setupHashPusher';
import { createTreeButton } from '../tree-button/treeButton';
import fileIcon from '@/assets/file.svg'

export function createFileNode(name: string, path: string, isActive?: boolean) {
  // TODO: undefined - плохо, сделать параметры объектом
  const buttonNode = createTreeButton(name, fileIcon, undefined, isActive);
  buttonNode.classList.add('file__button');
  setupHashPusher(buttonNode, path);
  return buttonNode;
}
