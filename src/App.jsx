import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);




  return (
    <>
      <Loader loading={loading} />
      {!loading && (
        <div className="w-full h-screen">
          <Navbar />
          <Home />
          <Projects />
          <Contact />
          <footer>
            <p className='text-sm text-gray-500 text-center bg-gray-900 p-2 md:p-5'>Made with &#10084;&#65039; by Sandip Kole.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;