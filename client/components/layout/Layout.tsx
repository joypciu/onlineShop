import { Container, Box } from '@mui/material';
import Head from 'next/head';
import StickyFooter from './Footer';

function Layout(props) {
  return (
    <>
      <Head>
        {props.title ? (
          <title>{props.title}</title>
        ) : (
          <title>{`Joy's online shop`}</title>
        )}
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '76vh',
        }}
      >
        <Container>{props.children}</Container>
      </Box>
      <StickyFooter />
    </>
  );
}

export default Layout;
