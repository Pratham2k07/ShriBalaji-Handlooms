import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/homepage/Hero';
import OurHistory from './components/history/OurHistory';
import Products from './components/products/Products';
import WhyUs from './components/why-us/WhyUs';
import ContactUs from './components/contact-us/ContactUs';
import LocateUs from './components/locate-us/LocateUs';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurHistory />
        <Products />
        <WhyUs />
        <ContactUs />
        <LocateUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
