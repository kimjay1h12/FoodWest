import * as React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../src/images/logo2.jpg'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './App.css';
import { Card, Container ,Button,} from '@mui/material';


export default function App() {
  const mystyle = ({
    container2:{
      textAlign:'center',
     
     
    },
    Link:{
      textDecoration:'none'
    },
  
   
    button:{
      color:'white',
      background:'#f90',
      marginBottom:'40px',
      width:'250px',
      height:'45px',
     marginTop:'200px',
     fontWeight:'500',
     

    },
    h1:{
      marginTop:"-1%",
      fontSize:'27px',
      fontWeight:'700',
      color:'red'
    },
    container :{
      textAlign:'center',
      
      textDecoration: "none",
      
  }})
 

  return (
    <div className="Body" >
    <Container   style={mystyle.container} >
<img src={Logo} alt='Logo' style={{width:'150px',marginTop:'120px', height:'150px'}}/>
<h3 style={mystyle.h1} >Foodwest</h3>
    </Container>
    <Container style={mystyle.container2} >
    <Link to="/Getstarted" style={mystyle.Link} ><Button style={mystyle.button} >Get Started  <ArrowForwardIcon/> </Button></Link>
    </Container>
  



 
    </div>
  );
}