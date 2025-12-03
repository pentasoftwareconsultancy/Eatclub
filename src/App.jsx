import './App.css'
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
