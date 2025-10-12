import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <footer>
        <p className='text-sm text-gray-700 mt-4 text-center'>&copy; 2024 Sandip Kole. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;