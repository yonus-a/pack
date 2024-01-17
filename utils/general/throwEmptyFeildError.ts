export default function throwEmptyFeildError(fildname: string) {
  throw new Error(`${fildname} نمیتواند خالی باشد`);
}
