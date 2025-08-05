import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Contact from '@/components/sections/contact';
import CallToAction from '@/components/sections/CallToAction';

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Header />
      </div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CallToAction />
      <Contact />
      <div className="max-w-7xl mx-auto px-4">
        <Footer />
      </div>
    </>
  );
}

export default App;
