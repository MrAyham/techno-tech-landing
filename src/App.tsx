import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

function App() {
  return (
    <>
      <Header />
      <main className="px-4">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
