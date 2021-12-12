import {
  AppBar,
  Toolbar,
  Link,
  Container,
  IconButton,
  Typography,
  Box,
  Badge,
} from '@mui/material';
import NextLink from 'next/link';
import { Brightness7, Brightness4, ShoppingCart } from '@mui/icons-material';
import { useContext, useEffect } from 'react';
import { DarkContext } from '../../pages/_app';
const midLinks = [
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];
const rightLinks = [
  { title: 'login', href: '/login' },
  { title: 'register', href: '/register' },
];

function Navbar() {
  const darkModeContext = useContext(DarkContext);
  const { darkMode, setDarkMode } = darkModeContext;
  useEffect(() => {}, [darkMode]);
  return (
    <Container>
      <AppBar
        position='static'
        sx={{
          mb: 4,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NextLink href='/' passHref>
            <Link sx={{ color: '#fff' }}>Amazon</Link>
          </NextLink>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {midLinks.map((link) => {
              return (
                <NextLink href={link.href} key={link.title}>
                  <Typography
                    sx={{
                      color: '#fff',
                      ':hover': {
                        cursor: 'pointer',
                        color: 'secondary.main',
                      },
                      ml: 2,
                    }}
                  >
                    {link.title}
                  </Typography>
                </NextLink>
              );
            })}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
            {rightLinks.map((link) => {
              return (
                <NextLink href={link.href} key={link.title}>
                  <Typography
                    sx={{
                      color: '#fff',
                      ':hover': {
                        cursor: 'pointer',
                        color: 'secondary.main',
                      },
                      ml: 2,
                    }}
                  >
                    {link.title}
                  </Typography>
                </NextLink>
              );
            })}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setDarkMode((prev) => !prev);
              }}
              color='inherit'
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;
