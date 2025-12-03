import React, { createContext, useContext, useState } from 'react'

const LocationContext = createContext(null)

export function LocationProvider({ children }) {
  const [coords, setCoords] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState({
    id: 'home',
    label: 'Home',
    line: '212, 2nd Floor, Ganesham Phase Building-G2, Sai Nagar Park',
  })

  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 'home',
      label: 'Home',
      line: '212, 2nd Floor, Ganesham Phase Building-G2, Sai Nagar Park',
    },
    {
      id: 'work',
      label: 'Work',
      line: '212, 2nd Floor, Ganesham Phase Building-G2, Sai Nagar Park',
    },
  ])

  const value = {
    coords,
    setCoords,
    selectedAddress,
    setSelectedAddress,
    savedAddresses,
    setSavedAddresses,
  }

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export function useLocationContext() {
  const ctx = useContext(LocationContext)
  if (!ctx) throw new Error('useLocationContext must be used inside LocationProvider')
  return ctx
}

export default LocationContext
