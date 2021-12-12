import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

interface contextParam {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const defaultValue: contextParam = {
  darkMode: false,
  setDarkMode: () => {},
};

export const DarkContext = createContext(defaultValue);

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const value = {
    darkMode,
    setDarkMode,
  };
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkMode ? '#121212' : '#eaeaea',
      },
    },
  });
  return (
    <>
      <DarkContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </DarkContext.Provider>
    </>
  );
}

export default MyApp;
