import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {  Container ,Button,} from '@mui/material';
import {signup,signin} from '../firebase';
import TextField from '@mui/material/TextField';
import { useRef,useState } from 'react';
import {Link} from 'react-router-dom'


const Getstarted = () => {
 const [Signin , setSignin ] = useState()
const emailRef = useRef();
const nameRef = useRef();
const userIdRef = useRef();
async function handleSignup(){
    await signin(emailRef.current.value, nameRef.current.value,userIdRef.current.value)
  setSignin =signin
}

  const mystyle = ({
        Link:{
textDecoration:'none'
        },
        Button:{
            width:'250px',
            height:'50px',
            background:'#900',
            marginTop:'80px',
            color:'white'
        },
        form:{
            marginTop:'70px'
        },
        container:{
            marginTop:'10px',
            
        },
        icon:{
            color:'#900'
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
 
       <Link to="/App"><Button ><ArrowBackIosNewIcon style={mystyle.icon} /></Button></Link>
       <Container style={mystyle.container2} >
          <h2>Let's register you in.</h2>
          <p>Welcome to our Food delivery app. search your favorite food</p>
          
          <TextField   label="  Username"   style={mystyle.input}  />
          <input  placeholder="Email" ref={userIdRef} style={mystyle.input} />
          <input  placeholder="Email" ref={emailRef} style={mystyle.input} />
          <input placeholder="Password" ref={nameRef} style={mystyle.input}  />
         <h1>{Signin}</h1>
       <Link to="/Home"><Button style={mystyle.Button} onClick={handleSignup} >Register Now</Button></Link>
       </Container>

</Container>
    </div>
  )
}

export default Getstarted