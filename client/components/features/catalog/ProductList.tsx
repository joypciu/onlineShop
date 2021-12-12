import { Container, Grid } from '@mui/material';
import { Product } from '../../../models/product';

import ProductCard from './ProductCard';

function ProductList({ products }: { products: Product[] }) {
  return (
    <Container>
      <Grid container spacing={3} mb={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
