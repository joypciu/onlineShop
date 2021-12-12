import axios from 'axios';
import { GetStaticProps } from 'next';
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import { Product } from '../models/product';

export default function Home({ products }: { products: Product[] | null }) {
  return (
    <>
      <Layout>
        <Main products={products} />
      </Layout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const products: Product[] | null = await axios
    .get('http://localhost:7134/api/Products')
    .then((response) => response.data);

  return {
    props: {
      products,
    },
  };
};
