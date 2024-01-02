import "./styles.scss";

interface Props {
  children: React.ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  onClick?: any;
}

export default function PriamryBtn({
  children,
  type,
  onClick = () => {},
}: Props) {
  return (
    <button className="primary-btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
