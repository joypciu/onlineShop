import Head from 'next/head';
import { Product } from '../../models/product';
import Catalog from '../features/catalog/Catalog';

function Main({ products }: { products: Product[] | null }) {
  if (products) {
    return (
      <>
        <Head>
          <title>Home Page</title>
        </Head>
        <Catalog products={products} />
      </>
    );
  } else {
    return <h1>{`Loading products/ can't fetch data from api`}</h1>;
  }
}

export default Main;
