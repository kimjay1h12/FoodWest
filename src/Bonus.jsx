
import {Link} from 'react-router-dom'
import * as React from 'react';
import { styled,  } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import B1 from '../src/images/1.png';
import B2 from '../src/images/2.png';
import B3 from '../src/images/3.png';
import B4 from '../src/images/4.png';


import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';


import Fab from '@mui/material/Fab';




import {  Container ,} from '@mui/material';
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const Bonus = () => {
    const mystyle =({
        Icon:{
         float:'right',
         color:'red'
        },
        img:{
            width:"80px",
            height:'80px',
            borderRadius:'90px'
        },
        container:{
            marginTop:'30px'
        },
        container2:{
            display:"flex",
            flexDirection:'row',
          
        },  header:{
            background:'red'
        }
        ,Text:{
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
        <Container style={mystyle.container} >
      
            <img src={B1} alt='b1' style={{width:'100%'}}/>
            <img src={B2} alt='b1' style={{width:'100%', marginTop:'20px'}}/>
           
            <img src={B3} alt='b1' style={{width:'100%', marginTop:'20px'}}/>
           
            <img src={B4} alt='b1' style={{width:'100%', marginTop:'20px',marginBottom:'70px'}}/>
           
           
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

export default Bonus