function createDirStructure(rootDir, entry) {
  const subDir = rootDir.createFolder(entry.name);
  if (entry.files) {
    entry.files.forEach(file => {
      const document = makeFile(file.id, subDir, file.name);
      if (file.data) {
        fillDocument(document, file.data);
      }
    })
  }

  return subDir;
}
