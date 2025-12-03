import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-root">
      <Header />

      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
import Header from './components/Header'
import Hero from './components/Hero'
import OffersSection from './components/OffersSection'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Hero />
        <OffersSection />
      </main>
    </div>
  )
}
