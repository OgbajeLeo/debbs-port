import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import clsx from "clsx";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 w-full z-[100] backdrop-blur-md transition-all duration-300",
          scrolled ? "bg-black/10 shadow-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-semibold text-base md:text-xl text-[#323131]"
          >
            Deborah Aigberuye Michael
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-[20px] font-medium text-[#323131]">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={clsx(
                    "relative py-1 transition-colors duration-200 hover:text-[#323131]",
                    location.pathname === item.to && "text-[#323131]"
                  )}
                >
                  {item.label}
                  {location.pathname === item.to && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5"
                    />
                  )}
                </Link>
              </li>
            ))}
            {/* button */}
            <li>
              <Link
                to="/contact"
                className="bg-[#252525] text-white px-[13px] py-[15px] text-base rounded-[36px] hover:bg-black transition-colors duration-200"
              >
                View My Work
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#323131] text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-[80%] bg-transparent backdrop-blur-lg z-[99] p-6 text-[#323131] md:hidden"
          >
            <ul className="flex flex-col gap-6 mt-16 text-[20px]">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
