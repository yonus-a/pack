interface Props {
  name: string;
  title?: string;
  className?: string;
}

export default function Icon({ name, title, className }: Props) {
  return (
    <svg className={className} {...(!title ? { "aria-hidden": "true" } : {})}>
      {title && <title>{title}</title>}
      <use href={`#${name}`} />
    </svg>
  );
}
