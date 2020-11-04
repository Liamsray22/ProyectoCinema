import React from 'react'
import "../css/tickets.css"
import {faUser, faFilm, faCalendar,faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Tickets() {
    return (
        <div>
            <section class="container">
                <h1>Tickets de cine</h1>
                
                <div class="row">
                    <article class="card fl-left">
                    <section class="date">
                    <time datetime="23th feb">
                    <span>28</span><span>OCT</span>
                    </time>
                    </section>
                    <section class="card-cont">
                                <small>Sala 3</small>
                                <br/>
                                <small>Asiento 4</small>
                                <h3>Terminator 3</h3>
                                <div class="even-date">
                                <FontAwesomeIcon icon={faCalendar} style={{marginRight:"20px"}}/>
                                <time>
                                <span>Jueves 28 de octubre del 2020</span>
                                <span>08:00pm hasta 10:30 pm</span>
                                </time>
                                </div>
                                <div class="even-info">
                                <FontAwesomeIcon icon={faMapMarker} style={{marginRight:"20px"}}/>
                                <p>
                                E&J Cinema 
                                </p>
                                </div>
                            </section>
                    </article>    
                </div>
                    <article class="card fl-left">
                    <section class="date">
                        <time datetime="23th feb">
                        <span>29</span><span>OCT</span>
                        </time>
                    </section>
                    <section class="card-cont">
                        <small>Sala 2</small>
                        <br/>
                        <small>Asiento 10</small>
                        <h3>Superman 2</h3>
                        <div class="even-date">
                        <FontAwesomeIcon icon={faCalendar} style={{marginRight:"20px"}}/>
                        <time>
                        <span>Jueves 29 de octubre del 2020</span>
                        <span>08:00pm hasta 10:00 pm</span>
                        </time>
                        </div>
                        <div class="even-info">
                        <FontAwesomeIcon icon={faMapMarker} style={{marginRight:"20px"}}/>
                        <p>
                        E&J Cinema 
                        </p>
                        </div>
                    </section>
                </article>


                <div class="row">
                <article class="card fl-left">
      <section class="date">
        <time datetime="23th feb">
          <span>28</span><span>OCT</span>
        </time>
      </section>
      <section class="card-cont">
        <small>Sala 3</small>
        <br/>
        <small>Asiento 4</small>
        <h3>Terminator 3</h3>
        <div class="even-date">
        <FontAwesomeIcon icon={faCalendar} style={{marginRight:"20px"}}/>
         <time>
           <span>Jueves 28 de octubre del 2020</span>
           <span>08:00pm hasta 10:30 pm</span>
         </time>
        </div>
        <div class="even-info">
        <FontAwesomeIcon icon={faMapMarker} style={{marginRight:"20px"}}/>
          <p>
           E&J Cinema 
          </p>
        </div>
      </section>
    </article>

    <article class="card fl-left">
      <section class="date">
        <time datetime="23th feb">
          <span>08</span><span>NOV</span>
        </time>
      </section>
      <section class="card-cont">
        <small>Sala 3</small>
        <br/>
        <small>Asiento 15</small>
        <h3>Avengers</h3>
        <div class="even-date">
        <FontAwesomeIcon icon={faCalendar} style={{marginRight:"20px"}}/>
         <time>
           <span>Jueves 08 de NOV del 2020</span>
           <span>08:00pm hasta 10:00 pm</span>
         </time>
        </div>
        <div class="even-info">
        <FontAwesomeIcon icon={faMapMarker} style={{marginRight:"20px"}}/>
          <p>
           E&J Cinema 
          </p>
        </div>
      </section>
    </article>
                </div>

            </section>
        </div>
    )
}

export default Tickets
