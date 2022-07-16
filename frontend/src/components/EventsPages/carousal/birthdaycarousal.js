import React from 'react'

function Birthdaycarousal() {
  return (
    <div>
    
<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">

  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  
  <div class="carousel-inner">
  
    <div class="carousel-item ">
      <img src="https://cdn.pixabay.com/photo/2013/07/12/18/52/presents-153926_960_720.png" 
      class="d-block w-100" alt="Sunset Over the City"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>


    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="Canyon at Nigh"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="Cliff Above a Stormy Sea"/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>


  
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Birthdaycarousal