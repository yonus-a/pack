import ProductCategoriesFilter from "../product-categories-filter";
import SearchFilter from "../../general/search-filter";
import Link from "next/link";
import "./styles.scss";

interface Props {
  categories: any;
  url: string;
}

export default function ProductFilter({ categories, url }: Props) {
  return (
    <div className="fitler-product">
      <SearchFilter />
      <ProductCategoriesFilter categories={categories} />
      <Link href={url} className="btn">
        همه
      </Link>
    </div>
  );
}
