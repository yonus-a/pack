"use server";

import { writeFile } from "fs/promises";
import path from "path";

export default async function uploadFileAction(formData: FormData) {
  const pathToUpload: any = formData.get("pathToUpload");
  const filename: any = formData.get("filename");
  const file: any = formData.get("file");
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    return await writeFile(
      path.join(process.cwd(), pathToUpload, filename),
      buffer
    );
  } catch (e) {
    console.log(e);
    return false;
  }
}
