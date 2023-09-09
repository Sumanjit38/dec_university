import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/all_departments'>All Departments</Link>
            </li>
            <li>
              <Link to='/all_subjects'>All Subjects</Link>
            </li>
            <li>
              <Link to='/policy'>Policy</Link>
            </li>
            <li>
              <Link to='/university_signin'>University</Link>
            </li>
            <li>
              <Link to='/teacher_signin'>Teacher</Link>
            </li>
            <li>
              <Link to='/student_signin'>Student</Link>
            </li>
            <li>
              <Link to='/staff_signin'>Staff</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      
    </>
  )
}

export default Header
