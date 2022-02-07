import React from 'react';
import { Drawer, List, Typography, Button, ListItem } from '@material-ui/core';
import './Drawer.css';

const DrawerComponent = ({openDrawer, setOpenDrawer}) => {
    return (
        <Drawer anchor='right' open={openDrawer} className='drawer' >
            <List>
                <ListItem >
                     <Button color='inherit'  className='button' >Contact</Button>
               </ListItem>
           </List>
            <List>
                <ListItem>
                    <Button  color='inherit' className='button' >Login</Button>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Button  color='inherit' className='button' >Sign Up</Button>
                 </ListItem>   
            </List>
            <List>
                <ListItem onClick={()=>setOpenDrawer(false)}>
                <Button  color='inherit' className='button' >Exit</Button>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default DrawerComponent
