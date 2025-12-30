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
        <p className='text-sm text-gray-500 text-center bg-gray-800/70 p-2 md:p-5'>Made with &#10084;&#65039; by Sandip Kole.</p>
      </footer>
    </div>
  );
}

export default App;