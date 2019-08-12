import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import icon from '../icons/global-warming.svg'


const NavBar = () => (

  <div>
    <AppBar position="static">
      <ToolBar>
      <img src={icon} width="50px" alt="logo"/>
        <Typography variant="title" color="inherit">
          MyWeather
            </Typography>
      </ToolBar>
    </AppBar>
  </div>
)
export default NavBar;