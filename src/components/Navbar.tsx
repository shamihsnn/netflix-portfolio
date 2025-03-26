import React, { useEffect, useState } from "react";
import { Menu, X, Bell, Search } from "lucide-react";
import { myInfo } from "@/lib/data";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface NavbarProps {
  profileType?: string;
  profileAvatar?: string;
}

const Navbar = ({ profileType, profileAvatar }: NavbarProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`netflix-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-netflix-red font-bold text-3xl md:text-4xl tracking-tighter animate-fade-in">
          {myInfo.name.split(" ")[0]}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Search className="text-white hover:text-netflix-red cursor-pointer" size={20} />
            <Bell className="text-white hover:text-netflix-red cursor-pointer" size={20} />
            {profileAvatar && (
              <Link to="/profiles" className="block">
                <Avatar className="border-2 border-transparent hover:border-white transition-all duration-300">
                  <AvatarImage src={profileAvatar} alt={profileType || "User"} />
                  <AvatarFallback className="bg-netflix-red text-white">
                    {profileType?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-netflix-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center animate-fade-in">
            <nav className="flex flex-col items-center space-y-8 text-xl">
              <NavLinks closeMobileMenu={() => setIsMobileMenuOpen(false)} />
              {profileAvatar && (
                <Link 
                  to="/profiles" 
                  className="flex items-center gap-2 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={profileAvatar} alt={profileType || "User"} />
                    <AvatarFallback className="bg-netflix-red text-white">
                      {profileType?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span>{profileType}</span>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ closeMobileMenu }: { closeMobileMenu?: () => void } = {}) => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-white hover:text-netflix-red transition-colors duration-300"
          onClick={closeMobileMenu}
        >
          {item.label}
        </a>
      ))}
      <a
        href={myInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-netflix-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
        onClick={closeMobileMenu}
      >
        Resume
      </a>
    </>
  );
};

export default Navbar;
