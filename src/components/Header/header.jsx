import React from 'react';
// import SimpleCart from '../Cart/simpleCart';
import { AppBar, Toolbar, Typography, } from '@mui/material';
import { useSelector } from 'react-redux';


const Header = () => {

  let cartQuantity = useSelector(state => state.cart.cartQuantity)

  return (
    <>
      <AppBar color='transparent'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>
            My Storefront
          </Typography>
          {/* <IconButton aria-label='cart'> */}
          {/* </IconButton> */}
        </Toolbar>
        <a href="#">Cart({cartQuantity.length})</a>
      {/* <SimpleCart /> */}
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
