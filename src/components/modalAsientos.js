import React from 'react'
import {AsientosData} from '../Data/asientosData'
import { Modal, Button} from 'react-bootstrap';



const ModalAsientos= ()=>(
    <div>
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body  style={{display:"flex", flexWrap:"wrap"}}>
  {AsientosData.map((item,index)=>{
        return(
            <div>
                <img src={item.img} style={{height:"50px", width:"50px"}}/>
                <center><caption align="bottom">{item.numeroAsiento}</caption></center>
                
            </div>
        )
})
    }
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Cerrar</Button>
    <Button variant="primary">Guardar Cambios</Button>
  </Modal.Footer>
</Modal.Dialog>
    
</div>

)

export default ModalAsientos