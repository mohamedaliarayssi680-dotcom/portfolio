import { useEffect, useState } from "react";
import Logo from "./Logo";
import { MdMenu, MdClose } from "react-icons/md";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Gérer le style au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Détection de la section active
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Gérer le défilement du corps
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Projects", href: "#projects", icon: <FaBriefcase /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 py-3 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative flex items-center gap-2 px-4 py-2 text-gray-300 font-medium text-lg transition-all duration-300 hover:text-white group ${
                activeSection === item.href.substring(1) ? "text-white" : ""
              }`}
            >
              <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              {item.name}
              {/* Animated underline — only for active or hover */}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-500 ${
                  activeSection === item.href.substring(1)
                    ? "w-full left-0 opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:left-0 group-hover:opacity-100"
                }`}
              ></span>
            </a>
          ))}

          {/* Bouton "Hire Me" mis en avant */}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
          >
            ✨ Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-300 hover:text-cyan-300 focus:outline-none z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-start pt-12 space-y-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-2xl font-medium text-gray-300 hover:text-cyan-300 transition-colors duration-300"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl"
            >
              ✨ Hire Me
            </a>
          </div>
        </div>
      )}

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
