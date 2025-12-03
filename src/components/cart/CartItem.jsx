import React from 'react'

export default function CartItem() {
  return (
    <div className="cart-item">
      <div className="item-info">
        <div className="item-name">Pizza</div>
        <div className="item-qty">Qty: 1</div>
      </div>
      <div className="item-price">$9.99</div>
    </div>
  )
}
