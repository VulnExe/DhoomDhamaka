import React from 'react'
import "./becomevendor.css"

export default function Becomevendor() {
  return (
    <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
    <div class="wrapper wrapper--w680">
        <div class="card card-1">
            <div class="card-heading"></div>
            <div class="card-body">
                <h2 class="title">Registration Info</h2>
                <form method="POST">
                    <div class="input-group">
                        <input class="input--style-1" type="text" placeholder="Name of Enterprise" name="name"></input>
                    </div>
                    <div class="input-group">
                        <input class="input--style-1" type="text" placeholder="Vendor Type" name="name"></input>
                    </div>
                    <div class="row row-space">
                        <div class="col-2">
                            <div class="input-group">
                                <input class="input--style-1 js-datepicker" type="text" placeholder="City" name="birthday"></input>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div class="col-2">
                        <div class="input-group">
                                <input class="input--style-1 js-datepicker" type="text" placeholder="Area" name="birthday"></input>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row row-space">
                        <div class="col-2">
                            <div class="input-group">
                                <input class="input--style-1 js-datepicker" type="text" placeholder="Phone" name="birthday"></input>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div class="col-2">
                        <div class="input-group">
                                <input class="input--style-1 js-datepicker" type="text" placeholder="E-mail ID" name="birthday"></input>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row row-space">
                        <div class="col-2">
                            <div class="input-group">
                            Samples photos <input class="input--style-1 js-datepicker" type="file" placeholder="Photos" name="birthday"></input>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div class="col-2">
                        <div class="input-group">
                                <input class="input--style-1 js-datepicker" type="text" placeholder="Firm in Existence (Years)" name="birthday"></input>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                    </div>                 
                    
                    <div class="p-t-20">
                        <button class="btn btn--radius btn--green" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}






// <div class="row row-space">
//                         <div class="col-2">
//                             <div class="input-group">
//                                 <input class="input--style-1 js-datepicker" type="text" placeholder=" " name="birthday"></input>
//                                 <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
//                             </div>
//                         </div>
//                         <div class="col-2">
//                             <div class="input-group">
//                                 <div class="rs-select2 js-select-simple select--no-search">
//                                     <select name="gender">
//                                         <option disabled="disabled" selected="selected">GENDER</option>
//                                         <option>Male</option>
//                                         <option>Female</option>
//                                         <option>Other</option>
//                                     </select>
//                                     <div class="select-dropdown"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>