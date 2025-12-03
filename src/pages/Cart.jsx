import React from 'react'
import CartSummary from '../components/cart/CartSummary'
import CartItem from '../components/cart/CartItem'

export default function Cart() {
  return (
    <div className="page cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <CartItem />
        <CartItem />
      </div>
      <CartSummary />
    </div>
  )
}
