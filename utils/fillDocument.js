function fillDocument(file, data) {
  const fileId = file.getId();

  const document = DocumentApp.openById(fileId);
  let documentBody = document.getBody();

  Object.keys(data).forEach((key) => {
    documentBody.replaceText(`{{${key}}}`, data[key]);
  });

  document.saveAndClose();
}
