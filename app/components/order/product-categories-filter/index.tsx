import Link from "next/link";
import "./styles.scss";

interface Props {
  categories: any;
}

export default function ProductCategoriesFilter({ categories }: Props) {
  return (
    <div className="product-categories-filter">
      <ul>
        {categories.map((item: any) => (
          <li key={item.id}>
            <Link className="btn" href={`?category=${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
