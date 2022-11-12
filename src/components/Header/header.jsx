import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Cart from '../Cart/simpleCart'


const Header = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#000',
      },
    },
  });

  return (
    <>
     <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            My Storefront
          </Typography>
          <Button color="inherit"><Cart/></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    </>
  );
}

export default Header;
