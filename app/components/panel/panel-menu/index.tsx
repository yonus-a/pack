"use client";

import { links } from "./links";
import Link from "next/link";
import "./styles.scss";

interface Props {
  className?: string;
  clientPermission: any;
}

export default function PanelMenu({ className, clientPermission }: Props) {
  return (
    <nav className={`main-nav ${className || ""}`} aria-label="Main Navigation">
      <ul className="menubar" role="menubar">
        {links.map(({ name, href, id, permissions }: any) => {
          // check permission
          if (!permissions.includes(clientPermission)) return null;

          return (
            <li role="none" key={id}>
              <Link role="menuitem" href={href}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
