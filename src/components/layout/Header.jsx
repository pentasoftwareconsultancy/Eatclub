import React, { useState, useRef, useEffect } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useLocationContext } from '../../context/LocationContext'

function LogoAndAddress() {
  const { selectedAddress, setSelectedAddress, savedAddresses, setCoords } = useLocationContext()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const btnRef = useRef(null)
  const panelRef = useRef(null)
  const [panelStyle, setPanelStyle] = useState({})

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  useEffect(() => {
    function updatePosition() {
      if (!open || !btnRef.current || !panelRef.current) return
      const rect = btnRef.current.getBoundingClientRect()
      const panelWidth = Math.min(380, window.innerWidth - 40)
      let left = rect.left + window.scrollX
      // if panel will overflow to right, shift it
      if (left + panelWidth > window.innerWidth) left = window.innerWidth - panelWidth - 12
      const top = rect.bottom + window.scrollY + 8
      setPanelStyle({ position: 'absolute', top: `${top}px`, left: `${left}px`, width: `${panelWidth}px` })
    }
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [open])

  return (
    <div className="logo-address" ref={ref}>
      <Link to="/" className="logo-link">
        <div className="logo-mark">
          <div className="logo-line">EAT</div>
          <div className="logo-line">CLUB</div>
        </div>
      </Link>

      <div className="delivery">
        <div className="delivery-label">DELIVERY</div>
        <button ref={btnRef} className={`address-btn ${selectedAddress ? 'address-selected' : ''}`} onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}>
          {selectedAddress ? `${selectedAddress.label} ${selectedAddress.line ? '· ' + selectedAddress.line.slice(0, 50) : ''}` : 'Enter delivery location'} ▾
        </button>

        {open && (
          <div ref={panelRef} className="location-panel" role="dialog" aria-label="Delivery location" style={panelStyle}>
            <div className="location-message">We need your delivery location to serve you a delicious meal.</div>
            <button className="loc-action" onClick={async (e) => {
              e.stopPropagation()
              if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser')
                return
              }
              navigator.geolocation.getCurrentPosition((pos) => {
                const lat = pos.coords.latitude
                const lng = pos.coords.longitude
                setCoords({ lat, lng })
                setSelectedAddress({ id: 'current', label: 'Current location', line: `${lat.toFixed(4)}, ${lng.toFixed(4)}` })
                setOpen(false)
              }, (err) => {
                alert('Unable to get location: ' + err.message)
              }, { enableHighAccuracy: true, timeout: 10000 })
            }}>Use my current location</button>

            <div className="saved-header">SAVED ADDRESS</div>
            <ul className="address-list">
              {savedAddresses.map((addr) => (
                <li key={addr.id} className="address-item" onClick={(e) => { e.stopPropagation(); setSelectedAddress(addr); setOpen(false) }}>
                  <div className="address-title">{addr.label}</div>
                  <div className="address-line">{addr.line}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function WhyEatClub() {
  return (
    <div className="why-eatclub">
      <a href="#" className="why-link">Why EatClub?</a>
    </div>
  )
}

function DealsDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <div className="deals-dropdown" ref={ref}>
      <button
        className="deals-btn"
        aria-expanded={open}
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}
      >
        Deals ▾
      </button>

      {open && (
        <div className="deals-menu" role="menu" aria-label="Deals">
          <a role="menuitem" href="#" onClick={(e) => { e.preventDefault(); setOpen(false) }}>Refer & Earn</a>
          <a role="menuitem" href="#" onClick={(e) => { e.preventDefault(); setOpen(false) }}>Bulk Order</a>
          <a role="menuitem" href="#" onClick={(e) => { e.preventDefault(); setOpen(false) }}>Offers</a>
        </div>
      )}
    </div>
  )
}

function CartIcon() {
  const count = 8 // demo count to match screenshot
  return (
    <button className="cart-icon-link" aria-label={`Cart with ${count} items`}>
      <span className="cart-emoji">🛒</span>
      <span className="cart-badge">{count}</span>
    </button>
  )
}

function ProfileMenu() {
  return (
    <div className="profile-menu-wrap">
      <button className="profile-btn">Profile ▾</button>
      <div className="profile-menu">
        <a href="#">My Profile</a>
        <a href="#">Manage Orders</a>
        <a href="#">Refer & Earn</a>
        <a href="#">Credits</a>
        <a href="#">Sign Out</a>
      </div>
    </div>
  )
}

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: '1', title: 'Dilli Rajma Meal', price: 181, qty: 1, group: 'BOX8 - Desi Meals' },
    { id: '2', title: 'Dilli Rajma Paratha Mini', price: 99, qty: 1, group: '₹99 Meals' },
    { id: '3', title: 'Masala Chicken - Light', price: 125, qty: 1, group: '₹99 Meals' },
  ])
  const overlayRef = useRef(null)
  const cartBtnRef = useRef(null)
  const cartPanelRef = useRef(null)
  const [cartPanelStyle, setCartPanelStyle] = useState({})

  const subtotal = cartItems.reduce((s, it) => s + it.price * it.qty, 0)

  function inc(id) {
    setCartItems(items => items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i))
  }
  function dec(id) {
    setCartItems(items => items.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
  }
  useEffect(() => {
    function onDocKey(e) {
      if (e.key === 'Escape') setCartOpen(false)
    }
    document.addEventListener('keydown', onDocKey)
    return () => document.removeEventListener('keydown', onDocKey)
  }, [])

  useEffect(() => {
    function updatePosition() {
      if (!cartOpen || !cartBtnRef.current || !cartPanelRef.current) return
      const rect = cartBtnRef.current.getBoundingClientRect()
      const panelWidth = Math.min(360, window.innerWidth - 40)
      // Align right edge of panel with right edge of button by default
      let left = rect.right - panelWidth + window.scrollX
      if (left < 12) left = 12
      if (left + panelWidth > window.innerWidth - 12) left = window.innerWidth - panelWidth - 12
      const top = rect.bottom + window.scrollY + 8
      setCartPanelStyle({ position: 'absolute', top: `${top}px`, left: `${left}px`, width: `${panelWidth}px` })
    }
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [cartOpen])

  useEffect(() => {
    function onDocClick(e) {
      if (cartPanelRef.current && cartBtnRef.current && !cartPanelRef.current.contains(e.target) && !cartBtnRef.current.contains(e.target)) {
        setCartOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [cartPanelRef, cartBtnRef])

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <LogoAndAddress />
        </div>

        <div className="header-center">
          <WhyEatClub />
          <DealsDropdown />
        </div>

        <div className="header-right">
          <button ref={cartBtnRef} className="cart-wrapper" onClick={() => setCartOpen(o => !o)} aria-haspopup="dialog" aria-expanded={cartOpen}>
            <CartIcon />
          </button>
          <Link to="#" className="get-app-btn">Get the app</Link>
          <ProfileMenu />
        </div>
      </div>
      {cartOpen && (
        <div className="cart-popup" ref={cartPanelRef} style={cartPanelStyle} role="dialog" aria-label="Cart">
          <div className="cart-panel-inner">
            <div className="cart-panel-header">
              <h3>Your cart</h3>
              <button className="close-btn" onClick={() => setCartOpen(false)}>✕</button>
            </div>

            <div className="cart-panel-scroll">
              <div className="cart-membership">
                <div className="membership-card">
                  <div className="membership-left">EAT<br/>CLUB</div>
                  <div className="membership-body">
                    <div className="muted">EATCLUB 12 Months</div>
                    <div className="bold">Membership</div>
                    <div className="muted small"><a href="#">Change Plan</a></div>
                  </div>
                  <div className="membership-right"><button className="remove">REMOVE</button></div>
                </div>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-left">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-desc">Tap to Customize</div>
                  </div>
                  <div className="cart-item-right">
                    <div className="cart-price">₹ {item.price}</div>
                    <div className="qty-controls">
                      <button onClick={() => dec(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => inc(item.id)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-panel-footer">
              <div className="subtotal">Subtotal <span>₹ {subtotal}</span></div>
              <button className="proceed">Proceed To Cart</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
