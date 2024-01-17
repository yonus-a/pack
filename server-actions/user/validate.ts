import throwEmptyFeildError from "@/utils/general/throwEmptyFeildError";
import { compare } from "bcryptjs";

const ADMIN_PERMISSION = process.env.ADMIN_PERMISSION as string;

export default async function validate(data: any) {
  const { permission, firstname, lastname, phone, idcard, branch } = data;

  // validate form inputs
  switch (true) {
    case !permission:
      throwEmptyFeildError("سطح دسترسی");
    case !firstname:
      throwEmptyFeildError("نام");
    case !lastname:
      throwEmptyFeildError("نام خانوادگی");
    case !phone:
      throwEmptyFeildError("شماره تماس");
    case !idcard:
      throwEmptyFeildError("کد ملی");
  }

  const isSelectedAdmin = await compare(ADMIN_PERMISSION, permission);

  if (isSelectedAdmin) {
    // if permission is admin branch always must be empty in db
    data.branch = null;
  } else {
    // if permission is user validate branch
    if (!branch) throwEmptyFeildError("شعبه");
  }

  // check number is valid
  if (phone.toString().length !== 11) {
    throw new Error("شماره تماس نامعبر است");
  }

  // check number is valid
  if (idcard.toString().length !== 10) {
    throw new Error("کد ملی نامعتبر است");
  }
}
