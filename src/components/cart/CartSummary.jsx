import React from 'react'

export default function CartSummary() {
  return (
    <aside className="cart-summary">
      <h3>Summary</h3>
      <div>Items: 2</div>
      <div>Subtotal: $27.98</div>
      <button>Checkout</button>
    </aside>
  )
}
