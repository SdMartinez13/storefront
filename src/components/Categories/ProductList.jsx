import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import './ProductList.css';


const List = (props) => {
  
  const products = props.list.products.filter(product => product.category === props.list.activeCategory);

  return (
    <>
    {
      products.map((products, index) => (
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
            {products.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${products.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {products.inventory}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button size="small">Remove from Cart</Button>
        </CardActions>
      </Card>
      </div>

      ))
    }
    </>
  )
}

const mapStateToProps = ({ categoryReducer }) => {
  return {
    list: categoryReducer
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(List);