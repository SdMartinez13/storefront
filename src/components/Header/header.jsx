import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, } from '@mui/material';
// import SimpleCart from '../Cart/simpleCart';


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
        <a href="#">Cart({cartQuantity.length})</a>
        </Toolbar>
      {/* <SimpleCart /> */}
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
