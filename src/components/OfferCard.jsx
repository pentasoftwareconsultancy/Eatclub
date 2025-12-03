import React from 'react'
import '../styles/OfferCard.css'

export default function OfferCard({ 
  title, 
  subtitle, 
  image, 
  highlight 
}) {
  return (
    <div className={`offer-card ${highlight ? 'highlight' : ''}`}>
      <div className="offer-image">
        <div className="image-placeholder"></div>
      </div>
      <div className="offer-details">
        <h4 className="offer-title">{title}</h4>
        <p className="offer-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
