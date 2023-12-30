import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

export default function ErrorMsg({ children }: Props) {
  return <p className="error-msg">{children}</p>;
}
