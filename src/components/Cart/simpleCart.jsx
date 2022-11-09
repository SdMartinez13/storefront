// import React from 'react';
// import { connect } from 'react-redux';
// import cartReducer from '../../store/cartReducer';
// import List from '@mui/material/List';
// import ListSubheader from '@mui/material/ListSubheader';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ListItemText from '@mui/material/ListItemText';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import Collapse from '@mui/material/Collapse';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// const SimpleCart = (props) => {

//   const { cartReducer, cartQuantity } = props;
//   const [open, setOpen] = React.useState(true);
//   const handleClick = () => {
//     setOpen(!open);
//   };


//   return (

//     <>
//       <List
//         sx={{
//           width: '100%',
//           maxWidth: 360,
//         }}
//         component='nav'
//         aria-labelledby='nested-list-subheader'
//         subheader={
//           <ListSubheader component='div' id='nested-list-subheader'> </ListSubheader>
//         }
//       >
//         <ListItemButton onClick={handleClick}>
//           <ListItemIcon>
//             <ShoppingCartIcon />
//           </ListItemIcon>

//           <ListItemText
//             primary={cartQuantity} />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>

//         <Collapse in={open} timeout="auto" unmountOnExit>
//           {
//             props.cart.itemsToPurchase.map((item, index) => (

//               <List key={`item-${index}`} component="div" disablePadding>
//                 <ListItemButton onClick={() => cartReducer.removeItemFromCart(item)} aria-label="delete" sx={{ pl: 4 }}>
//                   <ListItemText primary={item.name} />
//                   <ListItemIcon >
//                     <DeleteOutlineIcon />
//                   </ListItemIcon>
//                 </ListItemButton>

//               </List>

//             ))

//           }
//         </Collapse>

//       </List>


//     </>

//   )

// }

// const mapStateToProps = ({ cartReducer }) => {
//   return {
//     cart: cartReducer,
//     quantity: cartReducer.cartQuantity,
//   }
// }

// const mapDispatchToProps = {
//   cartReducer,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Button, Box } from '@mui/material';


const SimpleCart = (props) => {
  const [show, setShow] = useState(false);
  const removeItemsFromCart = (product) => {
    props.dispatch({ type: 'remove_product', payload: { product } });
  }

  return (
    <>
      <Container>
        <Button variant="contained" color="inherit" onClick={() => setShow(prev => !prev)} >Cart({props.cart.numberOfItems})</Button>
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