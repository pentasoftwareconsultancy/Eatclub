import React from 'react'
import OfferCard from './OfferCard'
import { offersData } from '../constants/offers'
import '../styles/OffersSection.css'

export default function OffersSection() {
  return (
    <section className="offers-section">
      <div className="offers-container">
        <h3 className="offers-heading">Top offers today</h3>
        <div className="offers-grid">
          {offersData.map((offer) => (
            <OfferCard 
              key={offer.id} 
              {...offer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
