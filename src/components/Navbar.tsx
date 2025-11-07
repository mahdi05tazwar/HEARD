import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from "@/assets/logo.png";
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  // close when clicking outside (works for More dropdown already)
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(".more-dropdown")) {
        setIsMoreOpen(false);
      }
      // If mobile menu is open, close it when clicking outside the menu panel
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileMenuOpen]);

  // close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [location.pathname]);

  // close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // focus first link when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      setTimeout(() => firstMobileLinkRef.current?.focus(), 50);
      // prevent body scroll while menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

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
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Heard Logo" className="h-8 lg:h-10" loading="eager" />
          </Link>

          {/* Desktop Navigation: hidden on small screens */}
          <div className="hidden md:flex items-center gap-6">
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
              <div className="relative more-dropdown" onClick={() => setIsMoreOpen(prev => !prev)}>
                <button
                  className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer px-3 py-2 whitespace-nowrap flex items-center gap-1"
                  aria-expanded={isMoreOpen}
                  aria-haspopup="menu"
                >
                  More
                  <ChevronDownIcon size={16} strokeWidth={1.5} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2" role="menu" aria-label="More links">
                      {moreLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${
                              isActive(link.path) ? 'bg-accent text-primary' : 'text-gray-700 hover:text-gray-900'
                            }`}
                            role="menuitem"
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

          {/* Right-side desktop buttons (hidden on small screens) */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay / panel */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* panel */}
        <div
          ref={mobileMenuRef}
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-xl p-6 max-h-[85vh] overflow-auto transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between mb-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
              <img src={logo} alt="Heard Logo" className="h-8" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <XIcon size={20} />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <li key={link.path}>
                  <Link
                    ref={idx === 0 ? firstMobileLinkRef : undefined}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-md ${
                      isActive(link.path) ? 'bg-accent text-primary' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* inline moreLinks for mobile: render as normal items (no nested dropdown) */}
              <br />
              <li aria-hidden="true" className="px-4">
                <div className="text-lg font-medium text-gray-700 whitespace-nowrap flex items-center">
                  More
                </div>
              </li>
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMoreOpen(false);
                    }}
                    className={`block px-4 py-2 pl-6 text-sm rounded-md ${
                      isActive(link.path) ? 'bg-accent text-primary' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}


              <li className="pt-3">
                <div className="flex flex-col gap-2">
                  <Button asChild variant="default" className="w-full">
                    <Link to="/become-listener" onClick={() => setIsMobileMenuOpen(false)}>Become a Listener</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login / Sign Up</Link>
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
