// import React from "react";
// import Todo from "../todo";
// import "./engag.css";
// export default function Engagement() {
//   return (
//     <div>
//       {/* <!-- Tabs navs --> */}
//       <ul class="nav nav-pills nav-fill mb-3" id="ex1" role="tablist">
//         <li class="nav-item fw-bolder" role="presentation">
//           <a
//             class="nav-link active "
//             id="ex2-tab-1"
//             data-mdb-toggle="tab"
//             href="#ex2-tabs-1"
//             role="tab"
//             aria-controls="ex2-tabs-1"
//             aria-selected="true"
//           >
//             <div class="position-sticky">
//               <div class="list-group list-group-flush mx-3 mt-4">
//                 <a
//                   id="v-tabs-home-tab"
//                   data-mdb-toggle="tab"
//                   href="#v-tabs-home"
//                   role="tab"
//                   aria-controls="v-tabs-home"
//                   aria-selected="true"
//                   class="list-group-item list-group-item-action py-2 ripple"
//                   // aria-current="true"
//                 >
//                   <i class="fas fa-tachometer-alt fa-fw me-3"></i>
//                   <span>Main dashboard</span>
//                 </a>
//                 <a
//                   id="v-tabs-profile-tab"
//                   data-mdb-toggle="tab"
//                   href="#v-tabs-profile"
//                   role="tab"
//                   aria-controls="v-tabs-profile"
//                   aria-selected="false"
//                   class="list-group-item list-group-item-action py-2 ripple active"
//                 >
//                   <i class="fas fa-chart-area fa-fw me-3"></i>
//                   <span>Profile</span>
//                 </a>
//                 <a
//                   id="v-tabs-messages-tab"
//                   data-mdb-toggle="tab"
//                   href="#v-tabs-messages"
//                   role="tab"
//                   aria-controls="v-tabs-messages"
//                   aria-selected="false"
//                   class="list-group-item list-group-item-action py-2 ripple"
//                 >
//                   <i class="fas fa-lock fa-fw me-3"></i>
//                   <span>Events</span>
//                 </a>
//                 <a
//                   id="v-tabs-messages-tab"
//                   data-mdb-toggle="tab"
//                   href="#gv-tabs-messages"
//                   role="tab"
//                   aria-controls="v-tabs-messages"
//                   aria-selected="false"
//                   class="list-group-item list-group-item-action py-2 ripple"
//                 >
//                   <i class="fas fa-chart-line fa-fw me-3"></i>
//                   <span>To-Do </span>
//                 </a>
//                 <>
//                   {/* <a href="#" class="list-group-item list-group-item-action py-2 ripple">
//           <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
//         </a>
//         <a href="#" class="list-group-item list-group-item-action py-2 ripple"
//           ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a
//         >
//         <a href="#" class="list-group-item list-group-item-action py-2 ripple"
//           ><i class="fas fa-globe fa-fw me-3"></i><span>International</span></a
//         >
//         <a href="#" class="list-group-item list-group-item-action py-2 ripple"
//           ><i class="fas fa-building fa-fw me-3"></i><span>Partners</span></a
//         >
//         <a href="#" class="list-group-item list-group-item-action py-2 ripple"
//           ><i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
//         >
//         <a href="#" class="list-group-item list-group-item-action py-2 ripple"
//           ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a
//         >
//         <a href="#" class="list-group-item list-group-item-action py-2 ripple"
//           ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
//         > */}
//                 </>
//               </div>
//             </div>
//           </nav>
//           <nav
//             id="main-navbar"
//             class=" navbar-expand-lg navbar-light bg-white"
//             <span className="fw-bold">Profile</span>
//           </a>
//         </li>
//         <li class="nav-item" role="presentation">
//           <a
//             class="nav-link"
//             id="ex2-tab-2"
//             data-mdb-toggle="tab"
//             href="#ex2-tabs-2"
//             role="tab"
//             aria-controls="ex2-tabs-2"
//             aria-selected="false"
//           >
//             {/* <!-- Container wrapper --> */}
//             <div class="container-fluid">
//               {/* <!-- Toggle button --> */}
//               <button
//                 class="navbar-toggler"
//                 type="button"
//                 data-mdb-toggle="collapse"
//                 data-mdb-target="#sidebarMenu"
//                 aria-controls="sidebarMenu"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <i class="fas fa-bars"></i>
//               </button>
//             </div>
//             {/* <!-- Container wrapper --> */}
//           </nav>
//           {/* <!-- Tab navs --> */}
//         </div>
//             <span className=" fw-bolder">Events</span>
//           </a>
//         </li>
//         <li class="nav-item" role="presentation">
//           <a
//             class="nav-link"
//             id="ex2-tab-3"
//             data-mdb-toggle="tab"
//             href="#ex2-tabs-3"
//             role="tab"
//             aria-controls="ex2-tabs-3"
//             aria-selected="false"
//           >
//             <span className=" fw-bolder">ToDo's</span>
//           </a>
//         </li>
//       </ul>
//       {/* <!-- Tabs navs --> */}

//         <div class="col-9">
//           {/* <!-- Tab content --> */}
//           <div class="tab-content" id="v-tabs-tabContent">
//             <div
//               class="tab-pane fade show active"
//               id="v-tabs-home"
//               role="tabpanel"
//               aria-labelledby="v-tabs-home-tab"
//             >
//               <div className="row mt-3">
//                 <div className="col-md-5 ms-5">
//                   <div class="card mb-9">
//                     <div class="card-body">
//                       <div class="d-flex flex-column align-items-center text-center">
//                         <img
//                           src="https://bootdey.com/img/Content/avatar/avatar7.png"
//                           alt="Admin"
//                           class="rounded-circle"
//                           width="150"
//                         />
//                         <div class="mt-3">
//                           <h4>John Doe</h4>
//                           <p class="text-secondary mb-1">
//                             Full Stack Developer
//                           </p>
//                           <p class="text-muted font-size-sm">
//                             Bay Area, San Francisco, CA
//                           </p>
//                           <button class="btn btn-primary mt-1x">Follow</button>
//                           {/* <button class="btn btn-outline-primary">Message</button> */}
//                         </div>
//                       </div>
//       {/* <!-- Tabs content --> */}
//       <div class="tab-content" id="ex2-content">
//         <div
//           class="tab-pane fade show active"
//           id="ex2-tabs-1"
//           role="tabpanel"
//           aria-labelledby="ex2-tab-1"
//         >
//           <div className="row mt-3">
//             <div className="col-md-5 ms-5">
//               <div class="card mb-9">
//                 <div class="card-body">
//                   <div class="d-flex flex-column align-items-center text-center">
//                     <img
//                       src="https://bootdey.com/img/Content/avatar/avatar7.png"
//                       alt="Admin"
//                       class="rounded-circle"
//                       width="150"
//                     />
//                     <div class="mt-3">
//                       <h4>John Doe</h4>
//                       <p class="text-secondary mb-1">Full Stack Developer</p>
//                       <p class="text-muted font-size-sm">
//                         Bay Area, San Francisco, CA
//                       </p>
//                       <button class="btn btn-primary mt-1x">Follow</button>
//                       {/* <button class="btn btn-outline-primary">Message</button> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               class="tab-pane fade mb-14"
//               id="v-tabs-profile"
//               role="tabpanel"
//               aria-labelledby="v-tabs-profile-tab"
//             >
//               event content
//             </div>
//             <div
//               class="tab-pane fade mb-13"
//               id="v-tabs-messages"
//               role="tabpanel"
//               aria-labelledby="v-tabs-messages-tab"
//             >
//               todo content
//             </div>
//           </div>
//           {/* <!-- Tab content --> */}
//         </div>
//         <div
//           class="tab-pane fade"
//           id="ex2-tabs-2"
//           role="tabpanel"
//           aria-labelledby="ex2-tab-2"
//         >
//           <Todo />
//         </div>
//         <div
//           class="tab-pane fade"
//           id="ex2-tabs-3"
//           role="tabpanel"
//           aria-labelledby="ex2-tab-3"
//         >
//           Tab 3 content
//         </div>
//       </div>
//       {/* <!-- Tabs content --> */}
//     </div>
//   );
// }