import * as React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../src/images/logo2.jpg'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './App.css';
import {  Container ,Button,} from '@mui/material';


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
      background:'red',
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