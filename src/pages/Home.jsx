import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturedDeals from '../components/home/FeaturedDeals'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home-main page home-page">
      <section className="home-hero">
        <h1>Welcome to EatClub Clone</h1>
        <p>This is a practice MERN front-end demonstrating a food-delivery UI and component composition.</p>
        <div className="hero-cta">
          <button className="primary" onClick={() => navigate('/menu')}>View Menu</button>
        </div>
      </section>

      <section className="why-section">
        <h2>Why EatClub?</h2>
        <div className="why-cards">
          <div className="card">Curated Restaurants</div>
          <div className="card">Big Savings</div>
          <div className="card">Fast Delivery</div>
        </div>
      </section>

      <FeaturedDeals />
    </main>
  )
}
