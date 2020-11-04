import React from 'react'
import { faFilm, faPrint, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Recibo =()=>(
    <>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>payment receipt - Bootdey.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="./payment.css" rel="stylessheet"/>
</head>
<body>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container bootdey">
<div class="row">
		<div class="col-sm-10 col-sm-offset-1">
			<div class="widget-box">
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

				<div class="widget-body">
					<div class="widget-main padding-24">
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-xs-11 label label-lg label-info arrowed-in arrowed-right">
										<b>Informacion del establecimiento</b>
									</div>
								</div>

								<div>
									<ul class="list-unstyled spaced">
								

										<li>
										<FontAwesomeIcon icon={faCaretRight} style={{marginRight:"20px"}}/>
                                            Ubicación:
                                           <b> Republica Dominicana, Santo Domingo Este</b>
										</li>

										<li>
										<FontAwesomeIcon icon={faCaretRight} style={{marginRight:"20px"}}/>
                                                Phone:
											<b class="red">809-321-3213</b>
										</li>

										<li class="divider"></li>
									</ul>
								</div>
							</div>

                            
						</div>
						<div class="space"></div>

						<div>
							<table class="table table-striped table-bordered">
								<thead>
									<tr>
                                        <th scope="col">Nombre del Cliente</th>
                                        <th scope="col">ID de la Cartelera</th>
                                        <th scope="col">ID del Ticket</th>
                                        <th scope="col">ID del Asiento</th>
                                        <th scope="col">Fecha de Registro</th>
                                        <th scope="col">Forma de pago</th>
                                        <th scope="col">Monto</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											Jose
										</td>
										<td class="hidden-xs">
											3
										</td>
                                            <td class="hidden-480"> 2 </td>
                                            <td class="hidden-480"> #5 </td>
                                        	<td class="hidden-xs">
											28-10-2020
                                        </td>
                                        <td class="hidden-xs">
											Efectivo
                                        </td>
                                        <td>$250</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="hr hr8 hr-double hr-dotted"></div>

						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript">
	
</script>
</body>
</html>
    
    
    </>


)



export default Recibo