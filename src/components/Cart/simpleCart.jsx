import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Button, Box } from '@mui/material';


const SimpleCart = (props) => {
  const [show, setShow] = useState(false);
  const removeItemsFromCart = (product) => {
    props.dispatch({ type: 'REMOVE_FROM_CART', payload: { product } });
  }

  return (
    <>
      <Container>
        <Button variant="contained" color="inherit" onClick={() => setShow(prev => !prev)} >Cart({props.cart.cartQuantity})</Button>
      </Container>
      <div id='cartItems'>
      {show && <Container id='cartItemContainer'>
        {
          props.cart.productList.map(product => (
            <Box key={product.id}>
              <Typography variant="h5" component="div">{product.display}</Typography>
              <Typography variant="body2" color="text.secondary">Quantity: {product.amountInCart}</Typography>
              <Button variant="contained" size="small" onClick={() => removeItemsFromCart(product)}>Remove</Button>
            </Box>
          ))
        }
      </Container>}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(SimpleCart);