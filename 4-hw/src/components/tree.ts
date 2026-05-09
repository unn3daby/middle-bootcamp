import type { FileSystemRecordModel } from "@/types/TreeModel"
import { createFileNode } from "./file/fileNode";
import { createFolderNode } from "./folder/folderNode";

import { renderNode } from "@utils/render";

export function createTree(root: HTMLElement, tree: FileSystemRecordModel) {
  Object.entries(tree).forEach(([key, value]) => {
    switch (value.type) {
      case 'folder': {
        const { folderRootNode, childListWrapper } = createFolderNode(key);
        renderNode(root, folderRootNode);
        createTree(childListWrapper, value.children);
        break;
      }
      default: renderNode(root, createFileNode(key));
    }
  });
}
