import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0) {
        setVisible(true);
        prevScrollY.current = 0;
        return;
      }

      if (currentY > prevScrollY.current && currentY > 50) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={`navbar w-full fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-md bg-[#131313]/80 flex justify-between p-4 shadow-md`}
    >
      <div className="navbar__logo">
        <h3 className="text-2xl font-bold">S</h3>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop links (hidden on small screens) */}
      <ul className="navbar__links hidden md:flex md:flex-row md:items-center md:space-x-8 md:w-auto md:h-auto md:visible md:p-0 md:text-sm text-center font-bold">
        <li className="py-2 md:py-0">
          <a href="#home">Home</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#projects">Projects</a>
        </li>
        {/* <li className="py-2 md:py-0">
          <a href="#about">About</a>
        </li> */}
        <li className="py-2 md:py-0">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* end of nav content */}
    </nav>

    {/* Mobile overlay + full-screen menu (rendered outside the nav so it won't be moved by nav transforms) */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 md:hidden"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    )}

    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#131313]/80 backdrop-blur-md text-center font-bold text-2xl p-8 gap-10 transition-transform duration-300 ease-in-out transition-opacity md:hidden ${
        isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)} aria-label="Close menu">
        <X size={28} />
      </button>

      <a onClick={() => setIsOpen(false)} href="#home" className="block py-2">Home</a>
      <a onClick={() => setIsOpen(false)} href="#projects" className="block py-2">Projects</a>
      {/* <a onClick={() => setIsOpen(false)} href="#about" className="block py-2">About</a> */}
      <a onClick={() => setIsOpen(false)} href="#contact" className="block py-2">Contact</a>
    </div>
    </>
  );
};

export default Navbar;
