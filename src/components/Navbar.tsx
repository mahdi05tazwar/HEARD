import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from "@/assets/logo.png";
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  // close when clicking outside
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      // if the click is NOT inside the dropdown wrapper, close it
      if (!target.closest(".more-dropdown")) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'AI Support', path: '/ai-support' },
    { label: 'Become a Listener', path: '/become-listener' },
    { label: 'Resources', path: '/resources' },
  ];

  const moreLinks = [
    { label: 'Privacy & Safety', path: '/privacy' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Corporate', path: '/corporate' },
    { label: 'Technology', path: '/technology' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Heard Logo"
              className="h-8 lg:h-10"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer px-3 py-2 whitespace-nowrap ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div 
                className="relative more-dropdown"
                onClick={() => setIsMoreOpen(prev => !prev)}
              >
                <button className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer px-3 py-2 whitespace-nowrap flex items-center gap-1">
                  More
                  <ChevronDownIcon 
                    size={16} 
                    strokeWidth={1.5} 
                    className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      {moreLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${
                              isActive(link.path) ? 'bg-accent text-primary' : 'text-gray-700 hover:text-gray-900'
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

           {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal whitespace-nowrap"
            >
              <Link to="/become-listener">Become a Listener</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary bg-background hover:bg-primary/5 font-normal whitespace-nowrap"
            >
              <Link to="/login">Login / Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
