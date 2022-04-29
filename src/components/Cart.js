
import {Link} from 'react-router-dom'
import * as React from 'react';
import { styled,  } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';


import Fab from '@mui/material/Fab';




import {  Container , Button, Typography,List} from '@mui/material';
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const Cart = () => {
    const mystyle =({
        Icon:{
         float:'right',
         color:'red'
        },
        Button:{
          color:'#900',
          height:'50px',
          background:'white',
width:'300px'
        },
        input:{
    
          border:'none',
          marginTop:'10px',
          background:'transparent',
          
         
          width:'100%'
        
        },
        img:{
            width:"80px",
            height:'80px',
            borderRadius:'90px'
        },
       header:{
            background:'#900'
        },

        cardcontent:{


        }
,        card:{
bottom:'0',
position:'absolute',
height:'380px',
background:'#900',
width:'100%',
borderRadius:'10px'

        },
        list:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between'
        },
        Text:{
            marginLeft:'20px'
        },
        
      Link:{
color:'white'
      },
        icon:{
            float:'right',
            marginRight:'20px',
            color:'red'
        },
        Search:{
            background:'#f90'
                   },
    })
  return (
    <div> 
     
           <Container  style={mystyle.card}>
           <List  style={mystyle.list} >
               <Typography  style={{color:'white',marginTop:'10px'}} >
                  Subtotal :
                  
               </Typography>
               <Typography  style={{color:'white',marginTop:'10px',marginRight:'10px'}} >
                  -----
                  
               </Typography>
           </List>
           <List  style={mystyle.list} >
               <Typography  style={{color:'white', }} >
                  Delivery Fee :
               </Typography>
               <Typography  style={{color:'white',marginRight:'10px'}} >
                  -----
                  
               </Typography>
           </List>
  
           <TextField style={mystyle.input}  type="text" placeholder='Apply your coupons ' >
          
           </TextField>
        
           <Divider style={{marginTop:'10px',background:'white',}} />
           <List  style={mystyle.list} >
             <Typography  style={{color:'white', }}  >
Total :
             </Typography>
             <Typography  style={{color:'white',marginRight:'10px'}} >
                  -----
                  
               </Typography>
           </List>
           <List  style={{textAlign:'center'}} >
<Button style={mystyle.Button} >Checkout</Button>
           </List>
           </Container>
        
          <AppBar position="fixed" color="primary" style={mystyle.header} sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
      <IconButton color="inherit" aria-label="open drawer">
      <Link to="/Home" style={mystyle.Link} ><HomeIcon/></Link>
      </IconButton>
      <IconButton  style={{marginLeft:'35px'}} color="inherit">
      <Link to="/Search" style={mystyle.Link} ><SearchIcon/></Link> 
      </IconButton>
      <StyledFab color="secondary" aria-label="add"style={mystyle.Search} >
        <LocalMallIcon />
      </StyledFab>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit" style={{marginRight:'30px'}} >
      <Link to="/Bonus"  style={mystyle.Link}> <StarsIcon/></Link>
      </IconButton>
      <IconButton color="inherit">
        <Link to="/Profile" style={mystyle.Link} ><PersonIcon/></Link>
      </IconButton>
    </Toolbar>
  </AppBar></div>
  )
}

export default Cart