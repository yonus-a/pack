import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

export default function EqualizeItems({ children }: Props) {
  return <div className="equalize-items">{children}</div>;
}
