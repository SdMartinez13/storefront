import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
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
        </Toolbar>
          <IconButton aria-label='cart'>Cart({cartQuantity.length})</IconButton> 
        {/* <a href="#"></a> */}
      {/* <SimpleCart /> */}
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
