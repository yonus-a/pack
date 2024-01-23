import "./styles.scss";

interface Props {
  children: React.ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  disabled: boolean;
  onClick?: any;
}

export default function PriamryBtn({
  onClick = () => {},
  disabled,
  children,
  type,
}: Props) {
  return (
    <button
      className="primary-btn"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
