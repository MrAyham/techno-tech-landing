import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/About';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import Contact from '@/components/sections/contact';
import CallToAction from '@/components/sections/CallToAction';

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
      <Contact />
      <CallToAction />
      <div className="mx-auto max-w-7xl px-4">
        <Footer />
      </div>
    </>
  );
}

export default App;

