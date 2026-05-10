import { createTree } from './components/tree';
import tree from './fs.json';
import './style.css'
import type { FileSystemRecordModel } from './types/TreeModel';

createTree(document.querySelector<HTMLDivElement>('#app'), tree.root as FileSystemRecordModel, [], decodeURIComponent(window.location.hash.slice(1)));
