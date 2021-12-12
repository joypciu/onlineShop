
import { Product } from '../../../models/product';
import ProductList from './ProductList';

export default function Catalog({ products }: { products: Product[] }) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
