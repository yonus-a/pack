"use client";

import { links } from "./links";
import Link from "next/link";
import "./styles.scss";

interface Props {
  className?: string;
}

export default function PanelMenu({ className = "" }: Props) {
  return (
    <nav className={`main-nav ${className}`} aria-label="Main Navigation">
      <ul className="menubar" role="menubar">
        {links.map(({ name, href, id }: any) => (
          <li role="none" key={id}>
            <Link role="menuitem" href={href}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
