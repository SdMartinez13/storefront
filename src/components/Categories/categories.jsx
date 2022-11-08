import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categoryReducer';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Categories = (props) => {

  const { changeCategory } = props;

  return (
    <>
    {/* <h1>Categories</h1>

      <ButtonGroup >

        <Button onClick={() => changeCategory('food')}>Food</Button>
        <Button onClick={() => changeCategory('clothing')}>Clothing</Button>
        <Button onClick={() => changeCategory('electronics')}>Electronics</Button>

      </ButtonGroup> */}

<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={props} onChange={changeCategory} centered>
        <Tab onClick={() => changeCategory('clothing')} label="Clothing" />
        <Tab onClick={() => changeCategory('electronics')} label="Electronics" />
        <Tab onClick={() => changeCategory('food')} label="Food" />
      </Tabs>
    </Box>
   
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

