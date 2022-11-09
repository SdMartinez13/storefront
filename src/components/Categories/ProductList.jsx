import * as React from 'react';
import { addItemToCart, removeItemFromCart } from '../../store/cartReducer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import './ProductList.css';


const List = (props) => {
  console.log('PRODUCTLIST', props);
  const products = props.products.filter(product => product.category === props.activeCategory);
  
  return (
    <>
      {
        products.map((product, index) => (
          <div key={`products-${index}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt=""
                height="140"
                image=""
              />
              <CardContent className='card'>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.inventory}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => props.addItemToCart(product)}
                  variant="outlined"
                  size="small">Add To Cart
                </Button>
                <Button
                  onClick={() => props.removeItemFromCart(product)} variant="outlined"
                  color="error" size="small">Remove from Cart
                </Button>
              </CardActions>
            </Card>
          </div>

        ))
      }
    </>
  )
}

const mapStateToProps = ({ category, cartReducer }) => {
  return {
    activeCategory: category.activeCategory,
    // cart: cartReducer,
    products: category.products,
  }
}

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);