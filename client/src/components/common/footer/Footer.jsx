import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest updates</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>

        <div className='container padding'>
          <div className='box logo'>
            <h1>DECENTRALIZED UNIVERSITY</h1>
            <span>Transparent Examination & Grading System</span>
            <p></p>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>

          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>All Departments</li>
              <li>All Subjects</li>
              <li>Policy</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                411 VIP Nagar, Kolkata - 700100, INDIA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +916295207699
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                sumanjitkuity87@gmail.com
              </li>
            </ul>
          </div>

        </div>
      </footer>

      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved  ||  This template is made <i className='fa fa-heart'></i> by Sumanjit Kuity
        </p>
      </div>
    </>
  )
}

export default Footer
