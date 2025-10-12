import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar w-full fixed bg-[#131313] flex justify-between p-4 shadow-md">
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
      <ul
  className={`navbar__links backdrop-blur-md text-center bg-[#131313]/50 font-bold text-2xl h-screen flex flex-col gap-10 absolute w-full left-0 p-5 transition-all duration-300 ease-in-out z-10
    ${isOpen ? "visible top-16" : "invisible -top-full"}
    md:static md:flex md:flex-row md:items-center md:space-x-8 md:w-auto md:h-auto md:visible md:p-0 md:text-sm`}
>
        <li className="py-2 md:py-0"><a href="#home">Home</a></li>
        <li className="py-2 md:py-0"><a href="#projects">Projects</a></li>
        <li className="py-2 md:py-0"><a href="#about">About</a></li>
        <li className="py-2 md:py-0"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
