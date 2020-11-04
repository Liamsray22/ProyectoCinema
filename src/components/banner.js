import React from 'react'
import logo from '../images/losgo.jpeg'
import { Row } from 'react-bootstrap';
import '../css/banner.css'

//1

const Banner =()=>(
<div className="ban">
    <Row>
    <img className="logo" src={logo} width="300px" height="300px"/>
    </Row>
</div>


)


export default Banner