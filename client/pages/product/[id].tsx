import NextLink from 'next/link';
import {
  Link,
  Typography,
  Grid,
  ListItem,
  List,
  Card,
  Button,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Product } from '../../models/product';

function ProductDetail({ product }: { product: Product | null }) {
  const router = useRouter();
  const { id } = router.query;
  if (!product) {
    return <Layout> {`No Product/data with ${id} found`}</Layout>;
  }
  return (
    <Layout title={product.name}>
      <NextLink href='/' passHref>
        <Link sx={{ textDecoration: 'none' }}>
          <Typography variant='h5'>Back to products</Typography>
        </Link>
      </NextLink>
      <Grid mt={1} container spacing={1}>
        <Grid item md={5} sm={6} xs={12}>
          <Image
            alt={product.name}
            src={product.pictureUrl}
            height={200}
            width={200}
            layout='responsive'
            objectFit='contain'
            priority
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Typography variant='h3'>{product.name}</Typography>
          <Divider sx={{ mb: 2 }} />
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity in stock</TableCell>
                  <TableCell>{product.qunatityInStock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant='h5'>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='h5'>
                      ${(product.price / 1000).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant='h5'>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='h5'>
                      {product.qunatityInStock > 0
                        ? 'In Stock'
                        : 'Out of Stock'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant='contained'>
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const product: Product | null = await axios
    .get(`http://localhost:7134/api/Products/${id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return { props: { product } };
};
export default ProductDetail;
