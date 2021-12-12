import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from '@mui/material';
import NextLink from 'next/link';

function SingleProduct({ product }) {
  if (!product) {
    return (
      <>
        <Typography variant='h1' color='initial'>
          No Product Found
        </Typography>
      </>
    );
  }
  return (
    <div>
      <Card sx={{ maxHeight: 250 }} elevation={3}>
        <NextLink href={`/product/${product.slug}`} passHref>
          <CardActionArea>
            <CardMedia
              component='img'
              src={product.image}
              height={120}
              alt={product.name}
            />
            <CardContent sx={{ backgroundColor: '#2C272E', color: '#fff' }}>
              <Typography align='center' variant='h5' sx={{ color: '#fff' }}>
                {product.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </NextLink>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#DBD0C0',
          }}
        >
          <Typography color='purple'>${product.price}</Typography>
          <Button variant='outlined' color='primary' size='small'>
            <Typography color='initial'>Add to cart</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SingleProduct;
