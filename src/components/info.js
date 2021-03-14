import React from 'react'
import { Card,Button,Container,Row,Col} from 'react-bootstrap';
import {Servicios} from '../Data/servicios'

//1

const Info =()=>(

  <>
  <center>
            <h1>Productos</h1>
        </center>
    <Container style={{display:"flex" , flexWrap:"wrap"}}>
        
        {Servicios.map((item,index)=>{
            return(
            <Card style={{ width: '20rem', margin:"20px", height:'300px' }}>
            <Card.Img variant="top" src={item.img} style={{height:'80%'}}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <button>Comprar</button>
            </Card.Body>
          </Card>
            )
            })}
    </Container>
    </>


)

export default Info