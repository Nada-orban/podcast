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
          <style jsx global>{`
                    ${theme.palette.mode === 'dark' ? "body{background:hsl(238,27%,12%)} " : "body{background: rgb(248, 249, 250)} "}`
          }</style>
        </Nav>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}
