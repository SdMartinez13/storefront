import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categoryReducer';
// import { useState } from 'react';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Categories = (props) => {

  // const { changeCategory } = props;

  const [value, setValue] = React.useState(0, 1, 2);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  return (
    <>
      {/* <h1>Categories</h1>

      <ButtonGroup >

        <Button onClick={() => changeCategory('food')}>Food</Button>
        <Button onClick={() => changeCategory('clothing')}>Clothing</Button>
        <Button onClick={() => changeCategory('electronics')}>Electronics</Button>

      </ButtonGroup> */}

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs 
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          centered
        >
          {
            props.categories.map((category, index) => (

              <Tab key={`category-${index}`} onClick={() => props.changeCategory(category.name)} label={category.displayName} />
            ))

          }
          {/* <Tab onClick={() => props.changeCategory('electronics')} label="Electronics" />
          <Tab onClick={() => props.changeCategory('food')} label="Food" /> */}
        </Tabs>
      </Box>

    </>
  );
};

const mapsStateToProps = (state) => {

  return {
    categories: state.category.categories,
  };
};

const mapDispatchToProps = {
  changeCategory,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Categories);

