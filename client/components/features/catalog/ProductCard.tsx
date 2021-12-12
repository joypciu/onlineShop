import { Product } from '../../../models/product';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import NextImage from 'next/image';
import NextLink from 'next/link';

function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {
            fontWeight: 'bold',
            color: 'primary.main',
          },
        }}
      />
      <CardMedia>
        <Box
          sx={{
            backgroundSize: 'contain',
            bgcolor: 'primary.light',
          }}
        >
          <NextImage
            src={product.pictureUrl}
            height={40}
            width={100}
            layout='responsive'
            objectFit='contain'
            priority
            loading='eager'
          />
        </Box>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom color='secondary' variant='h5'>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to Cart</Button>

        <Button size='small'>
          <NextLink href={`/product/${product.id.toString()}`} passHref>
            <Link sx={{}}>View</Link>
          </NextLink>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
