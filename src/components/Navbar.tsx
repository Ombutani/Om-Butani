import { useState } from "react";
import { SiReact } from "react-icons/si";
import { FaUser, FaBookOpen, FaBriefcase, FaEnvelope, FaBars } from "react-icons/fa";
import Logo from "./ui/logo";

const navigationLinks = [
  { label: "About", href: "#about", Icon: FaUser },
  { label: "Education", href: "#education", Icon: FaBookOpen },
  { label: "Skills", href: "#skills", Icon: SiReact },
  { label: "Experience", href: "#experience", Icon: FaBriefcase },
  // { label: "Projects", href: "#projects", Icon: FaBriefcase },
  { label: "Contact", href: "#contact", Icon: FaEnvelope },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ label, href, Icon }: { label: string; href: string; Icon: any }) => (
    <a
      href={href}
      onClick={() => setIsMenuOpen(false)}
      className="group flex items-center gap-2 px-4 py-2 rounded-md transition-all
        hover:bg-primary/10 text-gray-200 hover:text-primary"
    >
      <Icon className="w-4 h-4 text-primary" />
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );

  return (
     <header className="fixed top-0 left-0 right-0 z-50">
    <div className="backdrop-blur-lg bg-zinc-950/70 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white hover:text-primary transition-colors">
            <Logo />
          </a>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navigationLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border-2 border-primary/20 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>
  
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-zinc-900/95 border-t border-primary/20">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
        </div>
      )}
    </div>
  </header>
  );
};

export default Navbar;
