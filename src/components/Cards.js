import React from 'react';
import { Card,CardContent, Button, Typography } from '@material-ui/core';

class Cards extends React.Component {
  render() {
  return <div>
      <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Card style ={{width:550, height:220,alignContent:'center',paddingLeft:'40px',paddingTop:'10px'}}>
              <Typography>
              {this.props.children}
              </Typography>
              <br></br>
              <div style={{color:'white', display:'flex', alignItems:'flex-end', flexDirection:'row'}}>
                   <Button color='inherit' className='button' style={{height:38, width:500, background:'#1E4786'}}>Read More</Button>
              </div>
            </Card>
            
      </div> 
      <br></br>
  </div>;

}
}

export default Cards;
