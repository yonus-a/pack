import Link from "next/link";
import Icon from "../icon";
import "./styles.scss";

interface Props {
  href: any;
}

export default function EditLinkBtn({ href }: Props) {
  return (
    <Link className="edit-link" href={href}>
      <Icon name="edit" />
    </Link>
  );
}
