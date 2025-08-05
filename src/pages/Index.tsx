import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import CTA from '@/components/sections/cta';
import Contact from '@/components/sections/contact';

function Index() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Header />
      </div>
      <Hero />
      <About />
      <Services />
      <CTA />
      <Contact />
      <div className="max-w-7xl mx-auto px-4">
        <Footer />
      </div>
    </>
  );
}

export default Index;

