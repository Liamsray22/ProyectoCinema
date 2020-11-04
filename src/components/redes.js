import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import '../css/redes.css'
import { Button,Form, FormControl,Container,Row,Col } from 'react-bootstrap';
//1

const Redes = () => (
    <div className="line" >
        <Row>
            <Col sm={8}>
                <FontAwesomeIcon icon={faTwitter} style={{marginRight:"20px"}}/>
                <FontAwesomeIcon icon={faFacebook} style={{marginRight:"20px"}}/>
                <FontAwesomeIcon icon={faInstagram} style={{marginRight:"20px"}}/>
            </Col>
            <Col sm={4}>
                <div className="box">
                    <input type="text" name="search" placeholder="Busqueda" className="src"
                    autoComplete="off"></input>
                    <FontAwesomeIcon icon={faUser} style={{marginLeft:"20px",marginTop:"20px"}}/>

                </div>

                {/* <Form inline style={{margin:"2px"}}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form> */}
            </Col>
        </Row>
    </div>

)



export default Redes