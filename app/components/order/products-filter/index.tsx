import ProductCategoriesFilter from "../product-categories-filter";
import SearchFilter from "../../general/search-filter";
import "./styles.scss";

interface Props {
  categories: any;
}

export default function ProductFilter({ categories }: Props) {
  return (
    <div className="fitler-product">
      <SearchFilter />
      <ProductCategoriesFilter categories={categories} />
    </div>
  );
}
