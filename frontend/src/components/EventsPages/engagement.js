import React from "react";
import "./engag.css";
export default function Engagement() {
  return (
    <div>
      <div class="row">
        <div class="col-3">
          {/* <!-- Tab navs --> */}
          <nav
            id="sidebarMenu"
            class=" collapse d-lg-block sidebar collapse bg-white"
          >
            <div class="position-sticky">
              <div class="list-group list-group-flush mx-3 mt-4">
                <a
                  id="v-tabs-home-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-home"
                  role="tab"
                  aria-controls="v-tabs-home"
                  aria-selected="true"
                  class="list-group-item list-group-item-action py-2 ripple"
                  // aria-current="true"
                >
                  <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                  <span>Main dashboard</span>
                </a>
                <a
                  id="v-tabs-profile-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-profile"
                  role="tab"
                  aria-controls="v-tabs-profile"
                  aria-selected="false"
                  class="list-group-item list-group-item-action py-2 ripple active"
                >
                  <i class="fas fa-chart-area fa-fw me-3"></i>
                  <span>Profile</span>
                </a>
                <a
                  id="v-tabs-messages-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-messages"
                  role="tab"
                  aria-controls="v-tabs-messages"
                  aria-selected="false"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-lock fa-fw me-3"></i>
                  <span>Events</span>
                </a>
                <a
                  id="v-tabs-messages-tab"
                  data-mdb-toggle="tab"
                  href="#gv-tabs-messages"
                  role="tab"
                  aria-controls="v-tabs-messages"
                  aria-selected="false"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="fas fa-chart-line fa-fw me-3"></i>
                  <span>To-Do </span>
                </a>
                <>
                  {/* <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-globe fa-fw me-3"></i><span>International</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-building fa-fw me-3"></i><span>Partners</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
        > */}
                </>
              </div>
            </div>
          </nav>
          <nav
            id="main-navbar"
            class=" navbar-expand-lg navbar-light bg-white"
          >
            {/* <!-- Container wrapper --> */}
            <div class="container-fluid">
              {/* <!-- Toggle button --> */}
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>
            {/* <!-- Container wrapper --> */}
          </nav>
          {/* <!-- Tab navs --> */}
        </div>

        <div class="col-9">
          {/* <!-- Tab content --> */}
          <div class="tab-content" id="v-tabs-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-tabs-home"
              role="tabpanel"
              aria-labelledby="v-tabs-home-tab"
            >
              <div className="row mt-3">
                <div className="col-md-5 ms-5">
                  <div class="card mb-9">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          class="rounded-circle"
                          width="150"
                        />
                        <div class="mt-3">
                          <h4>John Doe</h4>
                          <p class="text-secondary mb-1">
                            Full Stack Developer
                          </p>
                          <p class="text-muted font-size-sm">
                            Bay Area, San Francisco, CA
                          </p>
                          <button class="btn btn-primary mt-1x">Follow</button>
                          {/* <button class="btn btn-outline-primary">Message</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade mb-14"
              id="v-tabs-profile"
              role="tabpanel"
              aria-labelledby="v-tabs-profile-tab"
            >
              event content
            </div>
            <div
              class="tab-pane fade mb-13"
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              todo content
            </div>
          </div>
          {/* <!-- Tab content --> */}
        </div>
      </div>
    </div>
  );
}
