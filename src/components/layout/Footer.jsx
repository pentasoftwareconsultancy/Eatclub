import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './footer.css'

export default function Footer() {
  return (
    <footer className="ec-site-footer">
      <div className="footer-top">
        <div className="footer-col footer-brand">
          <h3>EatClub</h3>
          <p>EatClub Clone - a practice front-end project demonstrating a food delivery UI and layout patterns.</p>
          <p>Built as a demo to explore React, routing and component composition.</p>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>GET HELP</h4>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Delivery Policies</a></li>
            <li><a href="#">Privacy Policies</a></li>
            <li><a href="#">Disclaimers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>EXPLORE</h4>
          <ul>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Bulk Order</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">Copyright 2020 - 2025. EatClub Brands Pvt. Ltd. All rights reserved.</div>
        <div className="socials">
          <button aria-label="facebook" className="social-btn"><FaFacebookF /></button>
          <button aria-label="twitter" className="social-btn"><FaTwitter /></button>
          <button aria-label="instagram" className="social-btn"><FaInstagram /></button>
        </div>
      </div>
    </footer>
  )
}
