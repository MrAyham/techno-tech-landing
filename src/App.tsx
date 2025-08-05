import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/About';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4">
        <Header />
      </div>
      <Hero />
      <About />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <div className="mx-auto max-w-7xl px-4">
        <Footer />
      </div>
    </>
  );
}

export default App;

