import { AppBar, IconButton, Toolbar, Typography, } from '@mui/material';


export default function Header() {

  return (
    <>
      <AppBar color='transparent'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>
            My Storefront
          </Typography>
          {/* <IconButton aria-label='cart'>

          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}