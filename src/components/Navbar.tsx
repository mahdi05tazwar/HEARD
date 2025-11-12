import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { ChevronDownIcon, MenuIcon, XIcon, LogOutIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ChatDialog } from '@/components/ChatDialog';


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Resources', path: '/resources' },
  ];

  const moreLinks = [
    { label: 'Privacy & Safety', path: '/privacy' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Corporate', path: '/corporate' },
    { label: 'Technology', path: '/technology' },
  ];

  // close More dropdown when clicking outside
  useEffect(() => {
    function handleClick(ev: MouseEvent) {
      const target = ev.target as HTMLElement;
      if (!target.closest('.more-dropdown')) {
        setIsMoreOpen(false);
      }
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-toggle')) {
        // don't auto-close mobile menu when clicking inside it
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsMoreOpen(false);
        setIsMobileOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // prevent background scroll when mobile menu is open
  useEffect(() => {
    // remember previous overflow so we can restore it
    const prevOverflow = typeof document !== 'undefined' ? document.body.style.overflow : '';
    if (isMobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prevOverflow || '';
    return () => {
      // restore on unmount
      document.body.style.overflow = prevOverflow || '';
    };
  }, [isMobileOpen]);

  // Allow inner scrolling on iOS while body is locked
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = mobileScrollRef.current;
    if (!el) return;

    // Prevent touchmove on the body except when the touch starts inside the scrollable panel
    const handleTouchMove = (e: TouchEvent) => {
      // If the touch is inside our scrollable element, allow it
      if (e.target && el.contains(e.target as Node)) return;
      e.preventDefault();
    };

    if (isMobileOpen) {
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobileOpen]);


  // combined links for mobile (nav + more)
  const mobileLinks = [...navLinks, ...moreLinks];

  // action handlers
  const handleStartConversation = () => {
    // if not authenticated, send to login; otherwise open dialog
    if (!isAuthenticated) {
      navigate('/login');
      setIsMobileOpen(false);
      return;
    }
    setIsChatOpen(true);
    setIsMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsChatOpen(false);
    navigate('/');
    setIsMobileOpen(false);
  };

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
          <Link to="/" className="flex items-center flex-none z-10">
            <img
              src={logo}
              alt="Heard Logo"
              className="h-8 lg:h-10 w-auto flex-shrink-0 min-w-[40px] max-w-[220px]"
              loading="eager"
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation (hidden on small screens) */}
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

              {/* More Dropdown (desktop only) */}
              <div className="relative more-dropdown">
                <button
                  onClick={() => setIsMoreOpen((v) => !v)}
                  className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer px-3 py-2 whitespace-nowrap flex items-center gap-1"
                  aria-expanded={isMoreOpen}
                  aria-haspopup="menu"
                >
                  More
                  <ChevronDownIcon
                    size={16}
                    strokeWidth={1.5}
                    className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2" role="menu" aria-label="More links">
                      {moreLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${
                              isActive(link.path)
                                ? 'bg-accent text-primary'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                            role="menuitem"
                            onClick={() => setIsMoreOpen(false)}
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

          {/* Right-side buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal whitespace-nowrap"
              >
                <Link to="/become-listener">Become a Listener</Link>
              </Button>

              {/* Auth-dependent controls */}
              {isAuthenticated ? (
                <>
                  <Button
                    onClick={handleStartConversation}
                    className="bg-primary hover:bg-primary/90 font-normal whitespace-nowrap"
                  >
                    <span className="text-white">Start A Conversation</span>
                  </Button>

                  <button
                    onClick={handleLogout}
                    aria-label="Logout"
                    className="ml-2 p-2 rounded-md hover:bg-gray-100"
                  >
                    <LogOutIcon size={18} />
                  </button>
                </>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary bg-background hover:bg-primary/5 font-normal whitespace-nowrap"
                >
                  <Link to="/login">Login / Sign Up</Link>
                </Button>
              )}
            </div>

            {/* Mobile hamburger toggle */}
            <button
              className="md:hidden mobile-toggle p-2 rounded-md hover:bg-gray-100"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              {isMobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (small screens only) */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* dim backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />

          {/* centered panel */}
          <div className="relative z-10 mx-4 my-6 bg-background rounded-2xl shadow-xl overflow-hidden">
            {/* close button (top-right) */}
            <div className="absolute top-3 right-3 z-50">
              <button
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
                title="Close menu"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* scrollable area: limit height and allow touch scrolling on iOS */}
            <div
              ref={mobileScrollRef}
              className="max-h-[calc(100vh-6rem)] overflow-y-auto p-4"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'auto' }}
            >
              <div className="container mx-auto px-0 py-2">
                <nav>
                  <ul className="flex flex-col gap-1">
                    {mobileLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={`block px-3 py-3 rounded-md text-sm font-medium ${
                            isActive(link.path) ? 'bg-accent text-primary' : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-col gap-2">
                    <Button
                      asChild
                      variant="default"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal whitespace-nowrap"
                    >
                      <Link to="/become-listener" onClick={() => setIsMobileOpen(false)}>
                        Become a Listener
                      </Link>
                    </Button>

                    {isAuthenticated ? (
                      <>
                        <Button
                          onClick={handleStartConversation}
                          className="w-full bg-primary hover:bg-primary/90 font-normal whitespace-nowrap"
                        >
                          <span className="text-white">Start A Conversation</span>
                        </Button>

                        <button
                          onClick={handleLogout}
                          aria-label="Logout"
                          className="w-full mt-2 p-3 flex items-center justify-center gap-2 rounded-md border border-border bg-background hover:bg-gray-50"
                        >
                          <LogOutIcon size={16} />
                          <span className="text-sm font-medium">Logout</span>
                        </button>
                      </>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary text-primary bg-background hover:bg-primary/5 font-normal whitespace-nowrap"
                      >
                        <Link to="/login" onClick={() => setIsMobileOpen(false)}>
                          Login / Sign Up
                        </Link>
                      </Button>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}



      
      {isAuthenticated && (
        <ChatDialog
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </nav>
  );
}
