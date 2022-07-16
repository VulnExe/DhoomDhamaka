import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    // <Carousel />
    // <!-- carousel contents starts  -->
    <div
      id="carouselExampleInterval"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner bg-image hover-overlay rounded-5 shadow-4-strong">
        {/* <!-- first item  --> */}
        <div class="carousel-item active">
          {/* <img
            alt="First slide"
            class="d-block w-100"
            src="https://i.postimg.cc/Jn0X0pDS/1.jpg"
          /> */}
          <a href="#!" className=" w-100">
          <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
          </a>
          <div class="carousel-caption  d-md-block">
            <h5
              class="animated bounceInRight d-none d-md-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
             Keeper
            </h5>
            <h6
              class="animated bounceInRight d-sm-block d-md-none"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
             Keeper
            </h6>
            {/* <!-- lge dve  --> */}
            <p
              class="animated bounceInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              Explore the World with us
            </p>
            <p
              class="animated bounceInRight d-none d-md-block "
              style={{ animationDelay: "3s" }}
            >
              <Link to="/login" class=" btn btn-outline-dark desb">
                More Info
              </Link>
            </p>
            {/* <!-- sm dve  --> */}
            <p
              class="animated bounceInLeft  d-md-none d-block desp"
              style={{ animationDelay: "2s" }}
            >
              Explore the World with us
            </p>
            <p
              class="animated bounceInRight d-md-none d-block "
              style={{ animationDelay: "3s" }}
            >
              <Link to="/login" class=" btn btn-outline-dark desb">
                More Info
              </Link>
            </p>
          </div>
        </div>
        {/* <!-- second item  --> */}
        <div class="carousel-item">
          {/* <img
            alt="Second slide"
            class="d-block w-100"
            src="https://i.postimg.cc/SQXZtrTZ/2.jpg"
          /> */}
          <div class="carousel-caption  d-md-block">
            <h5
              class="animated slideInDown d-none d-md-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Keeper
            </h5>
            <h6
              class="animated slideInDown d-md-none d-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Keeper
            </h6>
            {/* <!-- large device  --> */}
            <p
              class="animated fadeInUp d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              Note EveryThing You Want
            </p>
            <p
              class="animated zoomIn d-none d-md-block"
              style={{ animationDelay: "3s" }}
            >
              <Link to="/login" class=" btn btn-outline-dark desb">
                More Info
              </Link>
            </p>
            {/* <!-- sm dce  --> */}
            <p
              class="animated fadeInUp d-md-none d-block desp"
              style={{ animationDelay: "2s" }}
            >
              Your gateway to improve your Knowledge
            </p>
            <p
              class="animated zoomIn d-md-none d-block"
              style={{ animationDelay: "3s" }}
            >
              <Link to="/login" class=" btn btn-outline-dark desb">
                More Info
              </Link>
            </p>
          </div>
        </div>
        {/* <!-- third item  --> */}
        <div class="carousel-item">
          {/* <img
            alt="Third slide"
            class="d-block w-100"
            src="https://i.postimg.cc/Jh4x3cH5/3.jpg"
          /> */}
          <div class="carousel-caption  d-md-block">
            <h5
              class="animated zoomIn d-none d-md-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Keeper
            </h5>
            <h6
              class="animated zoomIn d-md-none d-block"
              style={{ animationDelay: "1s", overflowY: "hidden" }}
            >
              Keeper
            </h6>
            {/* <!-- lg dve  --> */}
            <p
              class="animated fadeInLeft d-none d-md-block"
              style={{ animationDelay: "2s" }}
            >
              Notes App
            </p>
            <p
              class="animated zoomIn d-none d-md-block "
              style={{ animationDelay: "3s" }}
            >
             <Link to="/login" class="btn btn-outline-dark desb p-2">
                More Info
              </Link>
            </p>
            {/* <!-- sm dve  --> */}
            <p
              class="animated fadeInLeft d-md-none d-block desp"
              style={{ animationDelay: "2s" }}
            >
              Notes App
            </p>
            <p
              class="animated zoomIn d-md-none d-block "
              style={{ animationDelay: "3s" }}
            >
              <Link to="/login" class=" btn btn-outline-dark desb">
                More Info
              </Link>
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon d-none"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon d-none"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;