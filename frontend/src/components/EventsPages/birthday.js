import React from 'react'
import "./birthday.css"
import "./formcomponents/birthdayform.css"
import Birthdayform from "./formcomponents/birthdayform"
import Birthdayportfolio from './portfoliocomponents/birthdayportfolio'
import Birthdaycarousal from './carousal/birthdaycarousal'

export default function Birthday() {
  return (
    <div>
    <Birthdaycarousal/>
    <Birthdayportfolio/>
    <Birthdayform/>
	</div>
	
  )
}
