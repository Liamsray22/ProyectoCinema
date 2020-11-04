import React from 'react'
import { Card,Button,Container,Row,Col} from 'react-bootstrap';
import logo from '../images/logo.png'
import {Servicios} from '../Data/servicios'
import ipcas from '../images/ipcas.jpg'



const Info =()=>(

  <>
  <center>
            <h1>Servicios</h1>
        </center>
    <Container style={{display:"flex"}}>
        
        {Servicios.map((item,index)=>{
            return(
            <Card style={{ width: '20rem', margin:"20px" }}>
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            )
            })}
    </Container>
    </>


)

export default Info