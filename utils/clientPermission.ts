export const ADMIN_KEY = "8Kx2JcQ69Gyy";
export const USER_KEY = "Gz1JNwFhq20W";

export const ALL_KEYS = [ADMIN_KEY, USER_KEY];

export function everoneExpect(val: any) {
  return ALL_KEYS.filter((items) => items != val);
}
