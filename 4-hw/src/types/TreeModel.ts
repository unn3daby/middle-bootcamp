export interface FileSystemNodeModel {
    type: 'file' | 'folder';
    children?: FileSystemRecordModel;
}

export type FileSystemRecordModel = Record<string, FileSystemNodeModel>

export interface FileSystemModel {
    root: FileSystemRecordModel;
}
