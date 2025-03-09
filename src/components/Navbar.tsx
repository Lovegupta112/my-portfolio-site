
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/#about' },
    { text: 'Experience', path: '/#experience' },
    { text: 'Projects', path: '/#projects' },
    { text: 'Resume', path: '/resume' },
    { text: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-card border-b border-gray-800' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-highlight transition-colors duration-300"
          >
            <span className="text-highlight">L</span>ove<span className="text-highlight">G</span>upta
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path) ? 'text-highlight' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.text}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-highlight transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-dark-accent bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden flex flex-col justify-center`}
        >
          <button 
            className="absolute top-5 right-6 text-gray-200 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-6 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-xl font-medium transition-colors duration-300 ${
                  isActive(link.path) ? 'text-highlight' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
