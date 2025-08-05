import Header from '@/components/layout/Header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/About';
import ServicesSection from '@/components/sections/ServicesSection';
import Contact from '@/components/sections/contact';

function Index() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Header />
      </div>
      <Hero />
      <About />
      <ServicesSection />
      <Contact />
    </>
  );
}

export default Index;

