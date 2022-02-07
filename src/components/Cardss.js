import React from 'react';
import { Card,CardContent, Button, Typography } from '@material-ui/core';

class Cardss extends React.Component {
  render() {
  return <div>
      <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Card style ={{width:600, height:300,alignContent:'center',backgroundColor:'#DCE3ED'}}>
              <Typography align='center'>
              {this.props.children}
              </Typography>
             
            </Card>
            
      </div> 
      <br></br>
  </div>;

}
}

export default Cardss;
