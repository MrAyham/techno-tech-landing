import Index from './pages/Index';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <>
      <Index />
      <CTASection />
      <div className="max-w-7xl mx-auto px-4">
        <Footer />
      </div>
    </>
  );
}

export default App;

