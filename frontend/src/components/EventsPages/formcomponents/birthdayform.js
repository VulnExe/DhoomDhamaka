import React from "react";
import "./birthdayform.css";

function Birthdayform() {
  return (
    <section class="h-100 bg-dark">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://www.finetoshine.com/wp-content/uploads/New-Happy-Birthday-Images-659x1024.jpg?v=1645172482"
                    alt="Sample photo"
                    class="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      width:"650px",
                      height:"936px"
                    }}
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">
                     Birthday Event Booking
                    </h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Name"
                          />
                          <label for="floatingInput"> Birthday person name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Date"
                          />
                          <label for="floatingInput">Date</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="time"
                            class="form-control"
                            id="floatingInput"
                            placeholder="From"
                          />
                          <label for="floatingInput">From</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="time"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">To</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-floating mb-4">
                      <input
                        type="address"
                        class="form-control"
                        id="floatingInput"
                        placeholder="address"
                      />
                      <label for="floatingInput">Address</label>
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h5 class="mb-0 me-4 fw-bold">Gender: </h5>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                        />
                        <label class="form-check-label" for="femaleGender">
                          Female
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label class="form-check-label" for="maleGender">
                          Male
                        </label>
                      </div>

                      <div class="form-check form-check-inline mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label class="form-check-label" for="otherGender">
                          Other
                        </label>
                      </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="To"
                          />
                          <label for="floatingInput">Age</label>
                        </div>
                      </div>
                      
                    </div>
                    <div class="row">
                    <h4>E-Invitation</h4>
                    <br/>
                    <br/>
                    <div class="col-md-4 mb-4"> 
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckCards"
                      />
                      <label class="form-check-label" for="flexCheckCards">
                        cards
                      </label>
                    </div>
                      </div>
                      
                  <div class="col-md-4 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckPhotos"
                      />  
                      <label class="form-check-label" for="flexCheckPhotos">
                        Photos
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckVideos"
                      />  
                      <label class="form-check-label" for="flexCheckVideos">
                        Videos
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                    <h4>Shows</h4>
                    <br/>
                    <br/>
                    <div class="col-md-3 mb-4"> 
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDance"
                      />
                      <label class="form-check-label" for="flexCheckDance">
                        Dance
                      </label>
                    </div>
                      </div>
                      
                  <div class="col-md-3 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckMusic"
                      />  
                      <label class="form-check-label" for="flexCheckMusic">
                        Music
                      </label>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckMagic"
                      />  
                      <label class="form-check-label" for="flexCheckMagic">
                        Magic
                      </label>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckGames"
                      />  
                      <label class="form-check-label" for="flexCheckGames">
                        Games
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                    <h4>Other Services :</h4>
                    <br/>
                    <br/>
                    <div class="col-md-4 mb-4"> 
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckPhysicalInvitation"
                      />
                      <label class="form-check-label" for="flexCheckPhysicalInvitation">
                        Physical Invitation
                      </label>
                    </div>
                      </div>
                      
                  <div class="col-md-4 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckPhotography"
                      />  
                      <label class="form-check-label" for="flexCheckPhotography">
                        Photography
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDecoration"
                      />  
                      <label class="form-check-label" for="flexCheckDecoration">
                        Decoration
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4"> 
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckCatering"
                      />
                      <label class="form-check-label" for="flexCheckCatering">
                        Catering
                      </label>
                    </div>
                      </div>
                      
                  <div class="col-md-4 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckBeauty"
                      />  
                      <label class="form-check-label" for="flexCheckBeauty">
                        Beauty
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckVenue"
                      />  
                      <label class="form-check-label" for="flexCheckVenue">
                        Venue
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                   <label for="exampleFormControlTextarea1">Special Services</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-warning btn-lg">
                        Reset all
                      </button>
                      <button type="button" class="btn btn-success btn-lg ms-2">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Birthdayform;
