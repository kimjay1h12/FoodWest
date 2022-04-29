import axios from  'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import  {Component} from 'react'
import { render } from 'react-dom';
import { height } from '@mui/system';
class Api extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
   componentDidMount(){
       axios.get('https://fakestoreapi.com/products')
       .then(response=>{
          this.setState({
             posts:response.data 
            })
          console.log(response.data)
       })
   }
 render(){
     const Mystyle =({
         cards:{
            marginTop:'10px'
           
        },
         img:{
             width:"250px",
             height:'300px',
             textAlign:'center'
            


         },
         body:{
             textAlign:'center'

         },
         button:{
             width:'250px',
             marginTop:'10px',
             marginBottom:'10px'
         }
       
     })
  
 const {posts} = this.state
       return(
        <div style={Mystyle.body} >
         <Divider/>
         K~STORE
         <Divider/>
        {posts.map( products=><Card sx={{ maxWidth: '100%',maxHeight:'contain' }}>
      <CardActionArea style={Mystyle.cards} >
        <CardMedia
        >
            <img src={products.image}  style={Mystyle.img}/>
            </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Price: {products.price}$
          </Typography>
          <Typography>
              <Divider/>
              
item no :{products.id}
              
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Details: {products.title}
          <Divider/>
          <Button variant="contained" style={Mystyle.button}     >
 Bid~Now
</Button> <Divider/>
          </Typography>
        </CardContent>
      </CardActionArea>
      
     
      
    </Card>)

        }
        </div>)
    
}}
export default Api