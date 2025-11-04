import TopNavBar from './components/TopNavBar';
import HeroCarousel from './components/HeroCarousel';
import TrustBadgeBar from './components/TrustBadgeBar';
import BestSellers from './components/BestSellers';
import BundlesSection from './components/BundlesSection';
import LeadMagnetSection from './components/LeadMagnetSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <TopNavBar />
        <main className="flex-1">
          <HeroCarousel />
          <TrustBadgeBar />
          <BestSellers />
          <BundlesSection />
          <LeadMagnetSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
