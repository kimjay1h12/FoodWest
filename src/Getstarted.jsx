import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Card, Container ,Button,} from '@mui/material';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {Link} from 'react-router-dom'
const Getstarted = () => {
    const mystyle = ({
        Link:{
textDecoration:'none'
        },
        Button:{
            width:'250px',
            height:'50px',
            background:'#f90',
            marginTop:'80px',
            color:'white'
        },
        form:{
            marginTop:'70px'
        },
        container:{
            marginTop:'10px',
            
        },
        input:{
            width:'100%'
            ,marginTop:'10px'
        },
        container2:{
            textAlign:'center'
        }
    })
  return (
    <div>

<Container style={mystyle.container} >
 
       <Link to="/App"><Button><ArrowBackIosNewIcon/></Button></Link>
       <Container style={mystyle.container2} >
          <h2>Let's register you in.</h2>
          <p>Welcome to our Food delivery app. search your favorite food</p>
          <form  style={mystyle.form} >
          <TextField id="outlined-basic"  label="  Username"  style={mystyle.input} variant="outlined"  />
          <TextField id="outlined-basic" label="Email" style={mystyle.input} variant="outlined" />
          <TextField id="outlined-basic" label="Password" style={mystyle.input} variant="outlined" />
          </form>
          <Link to="/Home" style={mystyle.Link} ><Button style={mystyle.Button} >Register Now</Button></Link>
       </Container>

</Container>
    </div>
  )
}

export default Getstarted