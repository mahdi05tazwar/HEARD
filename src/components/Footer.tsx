import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src={logo}
                alt="Heard Logo"
                className="h-8 brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your safe space to be heard. Affordable, anonymous, and empathetic support whenever you need it.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/heard_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} strokeWidth={1.5} className="text-gray-100" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-6 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-6 text-gray-100">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Crisis Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Contact: +852 9817 4918
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Heard. All rights reserved. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
