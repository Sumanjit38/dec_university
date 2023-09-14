import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import TeacherSignin from "./components/teacher/auth/TeacherSignin"
import TeacherSignup from "./components/teacher/auth/TeacherSignup"
import OnlineCourses from "./components/allDepartments/OnlineCourses"
//import Teacher from "./components/teacher/dashboard/Teacher"
import AllSubjects from './components/allSubjects/AllSubjects'
import Policy from './components/policy/Policy'
import UniversitySignin from './components/university/auth/UniversitySignin'
import StudentSignin from './components/student/auth/StudentSignin'
import StaffSignin from './components/staff/auth/StaffSignin'
import StudentSignup from "./components/student/auth/StudentSignup"
import UniversitySignup from "./components/university/auth/UniversitySignup"
import StaffSignup from "./components/staff/auth/StaffSignup"
//import Btech from './components/allSubjects/data/Btech'
import Logout from "./components/common/header/Logout"
//import Paperbase from './components/teacher/pages/dashboard/Paperbase'
//import Dashboard from './components/teacher/pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <Router>
      
        <Header />
        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/all_departments' component={OnlineCourses} />
          <Route exact path='/all_subjects' component={AllSubjects} />
          <Route exact path='/policy' component={Policy} />
          <Route exact path='/university_signin' component={UniversitySignin} />
          <Route exact path='/university_signup' component={UniversitySignup} />
          <Route exact path='/teacher_signin' component={TeacherSignin} />
          
          <Route exact path='/teacher_signup' component={TeacherSignup} />
          <Route exact path='/student_signin' component={StudentSignin} />
          <Route exact path='/student_signup' component={StudentSignup} />
          <Route exact path='/staff_signin' component={StaffSignin} />
          <Route exact path='/staff_signup' component={StaffSignup} />
          <Route exact path='/contact' component={Contact} />
          
          
        </Switch>
        <Footer />    
        
      </Router>
      
    </>
  )
}

export default App

