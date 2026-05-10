import type { FileSystemRecordModel } from "@/types/TreeModel"
import { createFileNode } from "./file/fileNode";
import { createFolderNode } from "./folder/folderNode";

import { renderNode } from "@utils/render";

export function createTree(root: HTMLElement, tree: FileSystemRecordModel, currentPath: string[], activePath: null | string = null) {
  Object.entries(tree).forEach(([key, value]) => {
    const currentPathCopy = structuredClone(currentPath);
    currentPathCopy.push(key);
    const currentPathString = currentPathCopy.join('/');
    const isFolderOpened = activePath?.startsWith(currentPathString);
    const isButtonActive = currentPathString === activePath;

    switch (value.type) {
      case 'folder': {
        const { folderRootNode, childListWrapper } = createFolderNode(key, currentPathString, isFolderOpened, isButtonActive);
        renderNode(root, folderRootNode);
        createTree(childListWrapper, value.children, currentPathCopy, activePath);
        break;
      }
      default: renderNode(root, createFileNode(key, currentPathString, isButtonActive));
    }
  });
}
