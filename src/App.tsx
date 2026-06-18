/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Reservation from './components/Reservation';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Reservation />
        <AboutUs />
        <Contact />
      </main>
    </div>
  );
}
