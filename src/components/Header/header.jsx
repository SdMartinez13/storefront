import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SimpleCart from '../Cart/simpleCart';
import './header.scss';


const Header = () => {

  let cartQuantity = useSelector(state => state.cart.cartQuantity)

  return (
    <>
      <AppBar className='appBar' position='static' color='transparent'>

        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'>

          <Typography
            variant='h4'
            color='inherit'
            component='div'>

            My Storefront

          </Typography>

        </Stack>

        <div id='cartDisplay'>

          <SimpleCart />

        </div>

      </AppBar>

      <Toolbar></Toolbar>
    </>
  );
}

export default Header;
