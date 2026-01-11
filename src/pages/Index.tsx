import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesCarousel from '../components/FeaturesCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesCarousel />
      </main>
    </div>
  );
};

export default Index;
