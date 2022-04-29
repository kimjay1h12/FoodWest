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
      background:'#900',
      marginBottom:'40px',
      width:'250px',
      height:'45px',
     marginTop:'200px',
     fontWeight:'500',
     position:'static'
     

    },
    h1:{
      marginTop:"-1%",
      fontSize:'24px',
      fontWeight:'700',
      color:'#900'
    },
    logo:{
      width:'142px',marginTop:'120px', height:'142px'
     
    },
    container :{
      textAlign:'center',
      
      textDecoration: "none",
      
  }})
 

  return (
    <div className="Body" >
    <Container 
     style={mystyle.container} >
       
<img src={Logo} id='img' alt='Logo' style={mystyle.logo}/>
<h3 style={mystyle.h1} >Foodwest</h3>
    </Container>
    <Container style={mystyle.container2} >
    <Link to="/Getstarted" style={mystyle.Link} ><Button style={mystyle.button} >Get Started  <ArrowForwardIcon/> </Button></Link>
    </Container>
  



 
    </div>
  );
}