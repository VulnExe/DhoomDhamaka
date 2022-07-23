import React from 'react'
import { useState } from 'react';

function Formbirthday() {
    const [checkedMusic, setCheckedMusic] = useState(false);
  return (
    <div class="container my-5">
  <div class="card">
    <form>
     
      <div class="card-header py-4 px-5 bg-light border-0">
        <h4 class="mb-0 fw-bold">Birthday Event Booking</h4>
      </div>

     
      <div class="card-body px-5">

        <div class="row gx-xl-5">
          <div class="col-md-3">
            <h5>Personal Details</h5>
            <p class="text-muted"></p>
          </div>

          <div class="col-md-9">
            <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Birthday Person Name</label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
            </div>
            <div class="mb-3">
              <label for="exampleInput2" class="form-label"
                     >Age</label
                >
              <input type="number" class="form-control" id="exampleInput2" style={{maxWidth: "500px"}}/>
            </div>
            <div class="mb-3">
              <label for="exampleInput3" class="form-label"
                     >City</label
                >
              <input type="text" class="form-control" id="exampleInput3" style={{maxWidth: "500px"}}/>
            </div>
            <div class="col-md-3">
                <label for="exampleInput5" class="form-label"  
                       >Gender</label
                  >
                <select 
                        id="exampleInput5"
                        class="form-select mb-3"
                        aria-label="Default select example"
                        >
                  <option selected value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
              </div>
          </div>
        </div>

        <hr class="my-5" />

      
        <div class="row gx-xl-5">
          <div class="col-md-3">
            <h5>Date & Timing</h5>
          </div>

          <div class="col-md-9">
            <div class="row">
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="exampleInput4" class="form-label">Date</label>
                  <input
                         type="date"
                         class="form-control"
                         id="exampleInput4"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="exampleInput4" class="form-label">From</label>
                  <input
                         type="time"
                         class="form-control"
                         id="exampleInput4"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="exampleInput4" class="form-label">To</label>
                  <input
                         type="time"
                         class="form-control"
                         id="exampleInput4"
                         />
                </div>
              </div>

              {/* <div class="col-md-4">
                <label for="exampleInput5" class="form-label"
                       >Billing</label
                  >
                <select
                        id="exampleInput5"
                        class="form-select mb-3"
                        aria-label="Default select example"
                        >
                  <option selected value="1">Monthly</option>
                  <option value="2">Annually</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>

        <hr class="my-5" />

       
        <div class="row gx-xl-5">
          <div class="col-md-3">
            <h5>Shows :</h5>
            
          </div>

          <div class="col-md-9">
            {/* <div class="mb-3">
              <label for="exampleInput6" class="form-label"
                     >Street address</label
                >
              <input type="text" class="form-control" id="exampleInput6" />
            </div> */}

           
            <div class="row">
            {/* <div class="col-md-3">
                <label for="exampleInput10" class="form-label"
                       >Dance</label
                  >
                <select
                        id="exampleInput10"
                        class="form-select mb-3"
                        aria-label="Default select example"
                        >
                  <option selected value="1">Folk</option>
                  <option value="2">Indian</option>
                  <option value="3">Western</option>
                </select>
              </div> */}
              

              {/* <div class="col-md-3">
                <label for="exampleInput10" class="form-label"
                       >Music</label
                  >
                <select
                        id="exampleInput10"
                        class="form-select mb-3"
                        aria-label="Default select example"
                        >
                  <option selected value="1">DJ</option>
                  <option value="2">classic</option>
                </select>
              </div> */}
            </div>
          
           <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                  <label for="flexCheckDefault1"
                   class="form-check-label" value="" style={{marginRight:"15px"}}>Games </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="flexCheckDefault1"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="flexCheckDefault2" 
                  class="form-check-label" value="" style={{marginRight:"15px"}}>Magic </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="flexCheckDefault2"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="flexCheckDefault3" 
                  class="form-check-label" value="" style={{marginRight:"15px"}}>Music </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="flexCheckDefault3"
                         checked={checkedMusic}
                            onChange={() => {
                              setCheckedMusic(!checkedMusic);
                            }}
                         />
                </div>
              </div>
            </div>
            {checkedMusic && (
            <div class="row">
            <div class="col-md-3">
                <label for="exampleInput10" class="form-label"
                       >Live Music</label
                  >
                <select
                        id="exampleInput10"
                        class="form-select mb-3"
                        aria-label="Default select example"
                        >
                  <option selected value="1">Folk</option>
                  <option value="2">Indian</option>
                  <option value="3">Western</option>
                </select>
              </div>
              

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="flexCheckDefault2" class="form-check-label" value="" style={{marginRight:"15px"}}>DJ </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="flexCheckDefault2"
                         />
                </div>
              </div>
            </div>)}
            <div class="col-md-3">
                <label for="exampleInput10" class="form-label "
                       >Live Music</label
                  >
                <select multiple
                        id="exampleInput10"
                        class="form-select mb-3 select"
                        aria-label="Default select example"
                        >
                  <option  selected value="1">Folk</option>
                  <option value="2">Indian</option>
                  <option value="3">Western</option>
                </select>
              </div>
           
              
          </div>
        </div>

            

        <hr class="my-5" />

        
        <div class="row gx-xl-5">
          <div class="col-md-4">
            <h5>Change password</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.</p>
          </div>

          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleInput11" class="form-label"
                         >Old password</label
                    >
                  <input
                         type="password"
                         class="form-control"
                         id="exampleInput11"
                         />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleInput12" class="form-label"
                         >New password</label
                    >
                  <input
                         type="password"
                         class="form-control"
                         id="exampleInput12"
                         />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div class="card-footer text-end py-4 px-5 bg-light border-0">
        <button class="btn btn-link btn-rounded" data-ripple-color="primary">Cancel</button>
        <button type="submit" class="btn btn-primary btn-rounded">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Formbirthday