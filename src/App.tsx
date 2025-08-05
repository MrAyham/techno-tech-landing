import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="px-4">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
