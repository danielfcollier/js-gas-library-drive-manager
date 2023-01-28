function makeFile(id, dir, name) {
  const template = DriveApp.getFileById(id);
  const file = template.makeCopy(name, dir);

  return file;
}
