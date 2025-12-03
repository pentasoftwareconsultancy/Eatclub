import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="promo-text">
              <span className="promo-main">Get</span>
              <h1 className="promo-heading">
                <span className="promo-percent">50%</span>
                <span className="promo-off">OFF</span>
                <span className="promo-text-on">on</span>
              </h1>
              <h2 className="promo-subheading">FIRST 3 APP ORDERS</h2>
              <p className="promo-description">+ No extra fees</p>
            </div>

            <div className="promo-code-section">
              <span className="code-label">Use Code:</span>
              <span className="code-value">FIRST3</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="qr-container">
              <div className="qr-code">
                <div className="qr-pattern"></div>
              </div>
              <p className="qr-text">Scan to download the app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
