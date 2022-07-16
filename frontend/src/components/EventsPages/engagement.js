import React from "react";
 import './engag.css'
export default function Engagement() {
  return (
    <div class="row">
      <div class="col-3">
        {/* <!-- Tab navs --> */}
        <div
          class="nav flex-column nav-tabs text-center"
          id="v-tabs-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link active"
            id="v-tabs-home-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-home"
            role="tab"
            aria-controls="v-tabs-home"
            aria-selected="true"
          >
            Home
          </a>
          <a
            class="nav-link"
            id="v-tabs-profile-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-profile"
            role="tab"
            aria-controls="v-tabs-profile"
            aria-selected="false"
          >
            Profile
          </a>
          <a
            class="nav-link"
            id="v-tabs-messages-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-messages"
            role="tab"
            aria-controls="v-tabs-messages"
            aria-selected="false"
          >
            Messages
          </a>
        </div>
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
                <div class="card">
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
                        <p class="text-secondary mb-1">Full Stack Developer</p>
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
            class="tab-pane fade"
            id="v-tabs-profile"
            role="tabpanel"
            aria-labelledby="v-tabs-profile-tab"
          >
            Profile content
          </div>
          <div
            class="tab-pane fade"
            id="v-tabs-messages"
            role="tabpanel"
            aria-labelledby="v-tabs-messages-tab"
          >
            Messages content
          </div>
        </div>
        {/* <!-- Tab content --> */}
      </div>
    </div>
  );
}
