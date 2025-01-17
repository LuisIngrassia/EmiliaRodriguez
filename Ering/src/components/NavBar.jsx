import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (el) => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-colors duration-300 ${
        scroll ? "bg-black" : "bg-transparent"
      }`}
    >
      <HashLink to="/#home" scroll={scrollTo}>
        <h1 className="select-none text-2xl font-bold text-[#e6d227]">
          Franco Cuatto
        </h1>
      </HashLink>
      <nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <Menu />
          </button>
        </div>
        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
        {/* Drawer Menu */}
        <div
          className={`fixed right-0 top-0 h-full w-64 transform bg-black p-4 transition-transform duration-300 ease-in-out md:static md:block md:w-auto md:transform-none md:bg-transparent md:p-0 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <X />
            </button>
          </div>
          <ul className="mt-8 select-none space-y-4 md:mt-0 md:flex md:space-x-4 md:space-y-0">
            <li>
              <HashLink
                to="/#home"
                className="block px-4 py-2 text-white hover:text-[#e6d227]"
                scroll={scrollTo}
                onClick={toggleMenu}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#sections"
                className="block px-4 py-2 text-white hover:text-[#e6d227]"
                scroll={scrollTo}
                onClick={toggleMenu}
              >
                Sections
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#about"
                className="block px-4 py-2 text-white hover:text-[#e6d227]"
                scroll={scrollTo}
                onClick={toggleMenu}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                className="block px-4 py-2 text-white hover:text-[#e6d227]"
                scroll={scrollTo}
                onClick={toggleMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
