import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>EAT</span>
          <span>CLUB</span>
        </div>

        <div className="header-center">
          <div className="delivery-selector">
            <span className="delivery-label">DELIVERY</span>
            <span className="delivery-location">1-2, Brt Rd, Ganeesham Phase 2, S...</span>
          </div>
        </div>

        <nav className="header-right">
          <button className="nav-item">Why EatClub?</button>
          <div className="nav-item deals-dropdown">
            <span>Deals</span>
            <span className="dropdown-icon">∇</span>
          </div>
          <button className="nav-item cart-btn">
            <span className="cart-icon">🛒</span>
            <span>Cart</span>
          </button>
          <button className="get-app-btn">Get the app</button>
          <div className="nav-item profile-dropdown">
            <span className="profile-icon">👤</span>
            <span>Omkar Jagtap</span>
            <span className="dropdown-icon">∇</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
