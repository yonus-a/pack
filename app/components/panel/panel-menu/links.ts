import { ADMIN_KEY, USER_KEY } from "@/utils/clientPermission";

export const links = [
  {
    id: 1,
    name: "مدریت کاربران",
    href: "/panel/users-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 2,
    name: "مدریت شعب",
    href: "/panel/branches-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 3,
    name: "مدریت محصولات",
    href: "/panel/products-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 4,
    name: "کاربر",
    href: "/panel/users-managment",
    permissions: [USER_KEY],
  },
];
