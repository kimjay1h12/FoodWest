
import Profile1 from '../src/images/Profile.png';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import List from '@mui/material/List';
import {Link} from 'react-router-dom'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';


import Fab from '@mui/material/Fab';




import Typography from '@mui/material/Typography';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Card, Container ,Button,} from '@mui/material';
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });
const Profile = () => {
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
            background:'whitesmoke'
        }
        ,Text:{
            marginLeft:'20px'
        },
        
      Link:{
color:'#f90'
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
        <Container maxWidth="sm"style={mystyle.container} >
           <Container style={mystyle.container2} >
<img src={Profile1} style={mystyle.img} alt="profile"/>
<Typography style={mystyle.Text } >
   <h4>UserName: Kim Jay</h4>
   
   <h5 style={{ marginTop:'-9%'}} >Email: Olawaleadeit@gmail.com </h5>
</Typography>
               </Container>
               <Card style={{textAlign:'center',marginTop:'50PX',}} >
 <h4>
     Invite Friends & You Both Get
     up to $20
      <CardGiftcardIcon style={mystyle.icon} />
 </h4>
 

               </Card>
               <Container style={{marginTop:'60px',marginBottom:'100px'}} >
                  <h3>Account</h3>
                  <List>
              Favorite <ArrowRightIcon style={mystyle.Icon} />
          </List>
          <List>
             Order <ArrowRightIcon style={mystyle.Icon} />
          </List>
          <List>
              Voucher <ArrowRightIcon style={mystyle.Icon} />
          </List>
          <List>
              Favorite <ArrowRightIcon style={mystyle.Icon} />
          </List>
          <List>
              Addresses <ArrowRightIcon style={mystyle.Icon} />
          </List>
          <List>
             Rewards and Challenges <ArrowRightIcon style={mystyle.Icon} />
          </List>
          <List>
             <Link to="/App" style={{textDecoration:'none',color:'red'}} >Log-Out </Link>
          </List>
               </Container>
        </Container>
        <AppBar position="fixed" color="primary" style={mystyle.header} sx={{ top: 'auto', bottom: 0 }}>
       <Toolbar>
         <IconButton color="inherit" aria-label="open drawer">
         <Link to="/Home" style={mystyle.Link} ><HomeIcon/></Link>
         </IconButton>
         <IconButton  style={{marginLeft:'35px',color:'#f90'}} color="inherit">
           <SearchIcon/>
         </IconButton>
         <StyledFab color="secondary" aria-label="add"style={mystyle.Search} >
           <LocalMallIcon />
         </StyledFab>
         <Box sx={{ flexGrow: 1 }} />
         <IconButton color="inherit" style={{marginRight:'30px',color:'#f90'}} >
           <StarsIcon/>
         </IconButton>
         <IconButton color="inherit">
           <Link to="/Profile" style={mystyle.Link} ><PersonIcon/></Link>
         </IconButton>
       </Toolbar>
     </AppBar>
    </div>
  )
}

export default Profile