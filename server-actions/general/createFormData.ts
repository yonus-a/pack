export default function createFormData(file: any, pathToUpload: string) {
  const formData = new FormData();
  formData.append("file", file?.file);
  formData.append("filename", file?.name);
  formData.append("pathToUpload", pathToUpload);
  return formData;
}
