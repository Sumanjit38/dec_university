import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
const [click, setClick] = useState(false)

const history = useHistory();

const handleLogout = () => {
localStorage.removeItem("authToken");
history.push("/teacher_signin")
}

/*const handleDashboard = () => {
localStorage.removeItem("authToken");
history.push("/teacher_dashboard")
}*/

return (
<>
<Head />
<header>
<nav className='flexSB'>
<ul className= "flexSB ">
<li className="nav-item">
<Link className="nav-link active" aria-current="page" to='/'>Home</Link>
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
<Link to='/contact'>Contact</Link>
</li>

</ul>
{(!localStorage.getItem("authToken")) ?

<div className='d-flex'>

<Link to='/university_signin'>University</Link>
<Link to='/teacher_signin'>Teacher</Link>
<Link to='/student_signin'>Student</Link>
<Link to='/staff_signin'>Staff</Link>
</div>
:
<div>
<li>
<Link to='/teacher_dashboard'>TeacherDashboard</Link>
</li>
<div className="btn bg-white text-success mx-2" onClick={handleLogout}>
Logout
</div>

</div>
}
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


/*import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  let [authToken, setAuthToken] = useState('');
  let [authToken1, setAuthToken1] = useState('');

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    history.push("/teacher_signin")
  }
  const handleLogout1 = () => {
    localStorage.removeItem("authToke1");
    history.push("/student_signin")
  }

  useEffect(() => {
    authToken = setAuthToken(localStorage.getItem('authToken'));
    authToken1 = setAuthToken1(localStorage.getItem('authToken1'));
  }, []);

  /*const handleDashboard = () => {
    localStorage.removeItem("authToken");
    history.push("/teacher_dashboard")
  }*/
/*
  function renderNavbarLinks() {
    if (authToken) {
      // The user is logged in as a teacher.
      return (
        <ul>
          <li>
            <Link to='/teacher_dashboard'>Teacher Dashboard</Link>
          </li>
          <li>
            <Link to='/teacher_signin' onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      );
    } else if (authToken1) {
      // The user is logged in as a student.
      return (
        <ul>
          <li>
            <Link to='/student_dashboard'>Student Dashboard</Link>
          </li>
          <li>
            <Link to='/student_signin' onClick={handleLogout1}>Logout</Link>
          </li>
        </ul>
      );
    }  else {
      // The user is not logged in.
      return (
        <ul>
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
        </ul>
      );
    }
  }
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className= "flexSB ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
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
              <Link to='/contact'>Contact</Link>
            </li>

          </ul>
          <ul>{renderNavbarLinks()}</ul>
          
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
*/