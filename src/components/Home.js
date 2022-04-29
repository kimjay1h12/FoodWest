import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import B1 from '../src/images/1.png';
import B2 from '../src/images/2.png';
import B3 from '../src/images/3.png';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import pizza from '../src/images/img2.jpg'
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, } from '@mui/material';
import Mushroomrice from '../src/images/mushroomrice.jpg';
import Seafoodrice from '../src/images/seafoodrice.jpg';

import Chicken from '../src/images/chicken.jpg';
import Spagetti from '../src/images/spagetti.jpg';
import Pasta from '../src/images/pasta.jpg';
import {Link} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';



import Fab from '@mui/material/Fab';


import { Container } from '@mui/material';


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Home() {
  const [Count, setCount] = useState(0)
    const mystyle =({
      Typography:{
float:'RIGHT',
marginRight:'50px',
marginTop:'10px',
fontWeight:'700'
      },
        card:{
            marginTop:'50px',           
        },
        container3:{
width:'100%'
        },
        card2:{
          marginTop:'30px',
          height:'100px',
         
        },
      container:{
         
          marginBottom:'100px'
         
        
      },
      img:{
        width:'90px'
        ,height:'90px',
        borderRadius:'50px',
        marginTop:'1px',
        marginLeft:'10px'
      
   
      },
      Link:{
color:'white'
      },
        Search:{
 background:'#f90'
        },
        header:{
            background:'#900'
        }
    })
  return (
      <div>
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" style={mystyle.header} >
        <Toolbar>
          <IconButton
     
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          Foodwest
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          
          </Typography>
          <Search style={mystyle.Search} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    
    
    <CssBaseline />
    <Card  style={{display:'flex', flexDirection:'row',overflow:'auto',}}  >
   
   <img src={B1} alt='b1' style={{width:'100%' ,marginLeft:'20px', marginTop:'20px'}}/>
            <img src={B2} alt='b1' style={{width:'100%', height:'auto' ,marginLeft:'20px', marginTop:'20px'}}/>
           
            <img src={B3} alt='b1' style={{width:'100%',height:'auto' ,marginLeft:'20px', marginTop:'20px'}}/>
           
           
   </Card>
      <Container maxWidth="sm" style={mystyle.container}  >
      <Card sx={{ maxWidth: "100%"}} style={mystyle.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height='200px'
          image={pizza}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pizza
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: $30.70 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to cart
        </Button>
      </CardActions>
    </Card>
    <CssBaseline />
     
      <Card sx={{ maxWidth: "100%" }} style={mystyle.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={Mushroomrice}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mushroom Rice
          </Typography>
         
          <Typography variant="body2" color="text.secondary" >
            
          Price: $30.70 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={()=> setCount(Count + 1)} >
         Add to cart
        </Button>
      </CardActions>
    </Card>
   
    <CssBaseline />
     
     <Card sx={{ maxWidth: "100%" }} style={mystyle.card} >
     <CardActionArea>
       <CardMedia
         component="img"
         height="300"
         image={Chicken}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Chicken
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Price: $30.70 
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
        Add to cart
       </Button>
     </CardActions>
   </Card>
   
   <CssBaseline />
     
      <Card sx={{ maxWidth: "100%" }} style={mystyle.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={Spagetti}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spaggtti
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: $30.70 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to cart
        </Button>
      </CardActions>
    </Card>
    
    <CssBaseline />
     
      <Card sx={{ maxWidth: "100%" }} style={mystyle.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={Pasta}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pasta
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: $30.70 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to cart
        </Button>
      </CardActions>
    </Card>
    <CssBaseline />
     
      <Card sx={{ maxWidth: "100%" }} style={mystyle.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={Seafoodrice}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Seafood Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: $30.70 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to cart
        </Button>
      </CardActions>
    </Card>
    
      
      </Container >
      
   
    
     <AppBar position="fixed" color="primary" style={mystyle.header} sx={{ top: 'auto', bottom: 0 }}>
       <Toolbar>
         <IconButton color="inherit" aria-label="open drawer"  >
           <HomeIcon/>
         </IconButton>
         <IconButton  style={{marginLeft:'35px'}} color="inherit">
         <Link to="/Search" style={mystyle.Link} ><SearchIcon/></Link> 
         </IconButton>
         <StyledFab color="secondary" aria-label="add"style={mystyle.Search} >{Count}
           <Link to="/Cart " style={mystyle.Link}><LocalMallIcon  /> </Link>
         </StyledFab>
         <Box sx={{ flexGrow: 1 }} />
         <IconButton color="inherit" style={{marginRight:'30px'}} >
          <Link to="/Bonus"  style={mystyle.Link}> <StarsIcon/></Link>
         </IconButton>
         <IconButton color="inherit" >
           <Link to="/Profile" style={mystyle.Link} ><PersonIcon/></Link>
         </IconButton>
       </Toolbar>
     </AppBar>
    
     </div>
  );
}