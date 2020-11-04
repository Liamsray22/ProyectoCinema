import React from 'react'
import Redes from '../components/redes'
import Banner from '../components/banner'
import Menu from '../components/menu'
import Recibo from '../components/recibo'
import FormFactura from '../components/formFactura'
import ModalAsientos from '../components/modalAsientos'
import Footer from '../components/footer'
//1



const FacturaPage = () =>(
    <>
        <Redes/>
        <Banner/>
        <Menu/>
        {/* <Cards
        titulo = "Hola"
        esto="Hol"

        /> */}
        <FormFactura/>
        <Recibo/>
        <ModalAsientos/>

        {/* <Footer/> */}

    </>

)


export default FacturaPage
