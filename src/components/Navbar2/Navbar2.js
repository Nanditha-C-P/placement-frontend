import React, {useState} from 'react';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import '../Navbar2/Navbar2.css';
import { styled, Typography, Drawer} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InfoRounded, Login, VerifiedUser } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import DrawerComponent from '../Navbar2/Drawer2';





const  Navbar2 =()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  console.log(theme.breakpoints.down('sm'));
  const openMenu = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
   
    <Appbar>
      <Toolbar>
        <img className='logo' src='LOGO.png' alt='logo'></img>
        <Typography>PLACEMENT CELL</Typography>
        {matches  ? <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>  : <Box style={{marginLeft:'auto'}}>
        <Button color='inherit'  className='button' onClick={event => window.location.href='http://localhost:3000'} >Log Out</Button>
   
        </Box>}
        {matches ? <IconButton style={{color:'white', marginLeft:'auto'}} onClick={()=>setOpenDrawer(true)}><MenuIcon/></IconButton> : ''}
        
      </Toolbar>
    </Appbar>
    
    </>
  )
}
export default Navbar2