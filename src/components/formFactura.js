import React from 'react'
import {faUser, faFilm, faPrint, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const FormFactura =()=>(

    <html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>Hello, world!</title>
  </head>
  <body>
      <div class="container">
   <form>
   <div class="widget-header widget-header-large">
					<h3 class="widget-title grey lighter">
					<FontAwesomeIcon icon={faFilm} style={{marginRight:"20px"}}/>
						J&E Cinema
					</h3>

					<div class="widget-toolbar no-border invoice-info">
						<span class="invoice-info-label">ID:</span>
						<span class="red">#121212</span>

						<br/>
						<span class="invoice-info-label">Fecha:</span>
						<span class="blue">04/04/2014</span>
					</div>

					<div class="widget-toolbar hidden-480">
						<a href="#">
						<FontAwesomeIcon icon={faPrint} style={{marginRight:"20px"}}/>
						</a>
					</div>
				</div>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer013">Nombre</label>
      <input type="text" class="form-control" id="validationServer013" placeholder="Nombre"
         required/>
      
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer023">Pelicula</label>
      <input type="text" class="form-control " id="validationServer023" placeholder="Pelicula"
         required/>
      
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername33">Asientos</label>
      <div class="input-group">
        
      <button class="btn btn-primary" type="submit">Seleccionar Asientos</button>

        
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer033">Tanda</label>
      <input type="text" class="form-control " id="validationServer033" placeholder="Tanda"
        required/>
      
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer043">Total</label>
      <input type = "number" class="form-control" id="validationServer043" placeholder="Total"
        required/>
      
    </div>
    {/* <div class="col-md-3 mb-3">
      <label for="validationServer053">Zip</label>
      <input type="text" class="form-control" id="validationServer053" placeholder="Zip"
        required/>
      
    </div> */}
  </div>
  
  <button class="btn btn-primary" type="submit">Generar Factura</button>
</form></div>
</body>
</html>
)

export default FormFactura