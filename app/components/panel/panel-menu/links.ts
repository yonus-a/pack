import { ADMIN_KEY, USER_KEY } from "@/utils/clientPermission";

export const links = [
  {
    id: 1,
    name: "مدیریت شعب",
    href: "/panel/branches-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 2,
    name: "مدیریت کاربران",
    href: "/panel/users-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 3,
    name: "مدیریت محصولات",
    href: "/panel/products-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 4,
    name: "مدیریت بودجه",
    href: "/panel/budget-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 5,
    name: "مدیریت موجودی انبار",
    href: "/panel/add-stock",
    permissions: [ADMIN_KEY],
  },
  {
    id: 6,
    name: "مدیریت سفارشات",
    href: "/panel/order-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 7,
    name: "سفارشات",
    href: "/panel/show-orders",
    permissions: [ADMIN_KEY],
  },
  {
    id: 8,
    name: "مدیریت اعلانات",
    href: "/panel/notification-managment",
    permissions: [ADMIN_KEY],
  },
  {
    id: 9,
    name: "کاربر",
    href: "/panel/users-managment",
    permissions: [USER_KEY],
  },
  {
    id: 10,
    name: "مدریت کامیون ها",
    href: "/panel/trucks-managment",
    permissions: [ADMIN_KEY],
  },
];
