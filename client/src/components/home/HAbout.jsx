import React from "react"
import OnlineCourses from "../allDepartments/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allDepartments/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
