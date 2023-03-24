import '@/styles/globals.css'
import Nav from '../../Components/Nav'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  const [theme, colorMode] = useMode();
  // const router = useRouter();
  // const { Path } = router;
  const noNav = ['/login', '/logout'];
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav>
          <Component {...pageProps} />
        </Nav>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}
