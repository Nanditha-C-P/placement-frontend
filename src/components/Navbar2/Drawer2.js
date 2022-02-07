import React from 'react';
import { Drawer, List, Typography, Button, ListItem } from '@material-ui/core';
import '../Navbar2/Drawer2.css'

const DrawerComponent2 = ({openDrawer, setOpenDrawer}) => {
    return (
        <Drawer anchor='right' open={openDrawer} className='drawer' >
            <List>
                <ListItem >
                     <Button color='inherit'  className='button' >Create Drives</Button>
               </ListItem>
           </List>
            <List>
                <ListItem>
                    <Button  color='inherit' className='button' >View Student List</Button>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Button  color='inherit' className='button' >Drive Results</Button>
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

export default DrawerComponent2
