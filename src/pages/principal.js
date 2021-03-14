import React from 'react'
import Info from '../components/info'



const Principal = () =>(
    <>
        <html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Inicio | L&R FRUIT-LIFE</title>
    <link rel="stylesheet" href="style.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>
</head>
<body background="https://www.publicdomainpictures.net/pictures/130000/velka/yellow-side-gradient-background.jpg">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="https://i.pinimg.com/originals/82/f0/e0/82f0e00c5a7bd8bcddb97887462bf42f.png" width="64" height="43" class="d-inline-block align-top" alt=""/>

        <a class="navbar-brand" href="#">L&R Fruit-Life</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Productos <span class="sr-only"></span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Contacto <span class="sr-only"></span></a>
              </li>
          </ul>
        </div>
      </nav>
      <div class="inibody">
            <Info/>
      </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</html>

    </>

)


export default Principal
