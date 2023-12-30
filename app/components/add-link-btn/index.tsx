import Link from "next/link";
import "./styles.scss";

interface Props {
    children: React.ReactNode;
  href: any;
}

export default function AddLink({ href, children }: Props) {
  return (
    <Link className="add-link" href={href}>
      {children}
    </Link>
  );
}
