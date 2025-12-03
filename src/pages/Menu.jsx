import React from 'react'
import MenuHeader from '../components/menu/MenuHeader'
import MenuList from '../components/menu/MenuList'
import { useLocationContext } from '../context/LocationContext'

export default function Menu() {
  const { selectedAddress } = useLocationContext()

  return (
    <div className="page menu-page">
      <MenuHeader />
      {selectedAddress && (
        <div style={{ maxWidth: 1200, margin: '8px auto', padding: '0 20px', color: '#374151' }}>
          Showing menu for: <strong>{selectedAddress.label}</strong> — {selectedAddress.line}
        </div>
      )}
      <MenuList />
    </div>
  )
}
