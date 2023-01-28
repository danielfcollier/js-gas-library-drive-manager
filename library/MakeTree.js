function MakeTree(baseDirId, tree) {
  const baseDir = DriveApp.getFolderById(baseDirId);
  const rootDir = createDirStructure(baseDir, tree.folders.root);

  if (tree.folders.sub) {
    tree.folders.sub.forEach((entry) => createDirStructure(rootDir, entry));
  }

  return rootDir.getId();
}
