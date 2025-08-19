import React, { useMemo, useState, useEffect } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Header from './layout/Header.tsx';
import MainContent from './layout/MainContent.tsx';
import Footer from './layout/Footer.tsx';

const App: React.FC = () => {
  // Lee el modo desde localStorage o usa 'light' por defecto
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('cv-theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('cv-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  const handleToggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: '100vh',
          width: '100vw',
          px: 4,
          py: 4,
          m: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid2 container spacing={0} sx={{ flex: 1, height: '100%' }}>
          <Grid2 xs={12} md={4} sx={{bgcolor: '#2E802E', color: '#fff'}}>
            <Header onToggleTheme={handleToggleTheme} darkMode={darkMode} />
          </Grid2>
          <Grid2 xs={12} md={8}>
            <MainContent />
          </Grid2>
        </Grid2>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
