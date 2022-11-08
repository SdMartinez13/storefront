import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categoryReducer';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const Categories = (props) => {

  const { changeCategory } = props;

  return (
    <>
    <h1>Categories</h1>

      <ButtonGroup >

        <Button onClick={() => changeCategory('food')}>Food</Button>
        <Button onClick={() => changeCategory('clothing')}>Clothing</Button>
        <Button onClick={() => changeCategory('electronics')}>Electronics</Button>

      </ButtonGroup>
   
    </>
  );
};

const mapsStateToProps = ({ categoryReducer }) => {

  return {
    categories: categoryReducer,
  };
};

const mapDispatchToProps = {
  changeCategory,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Categories);

