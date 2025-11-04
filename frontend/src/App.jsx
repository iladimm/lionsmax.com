import { useState, useEffect } from 'react'
import './App.css'
import TopNavBar from './components/TopNavBar'
import HeroCarousel from './components/HeroCarousel'
import TrustBadgeBar from './components/TrustBadgeBar'
import BestSellers from './components/BestSellers'
import Bundles from './components/Bundles'
import LeadMagnet from './components/LeadMagnet'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <TopNavBar toggleDarkMode={toggleDarkMode} />
        <main className="flex-1">
          <HeroCarousel />
          <TrustBadgeBar />
          <BestSellers />
          <Bundles />
          <LeadMagnet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
