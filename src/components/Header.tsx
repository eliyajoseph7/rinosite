import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SparklesIcon, HomeIcon, CogIcon, CreditCardIcon, QuestionMarkCircleIcon, ArrowDownTrayIcon, PlayIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo/light.webp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Videos', href: '/videos', icon: PlayIcon },
    { name: 'Features', href: '/features', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CreditCardIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Download', href: '/download', icon: ArrowDownTrayIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Clean and Professional */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Rino Mfumo wa Biashara" className="h-8 w-auto transition-opacity group-hover:opacity-80" style={{ aspectRatio: '87/40' }} />
          </Link>

          {/* Desktop Navigation - Clear and Easy to Use */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg font-medium text-base transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 font-bold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://app.rino.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <SparklesIcon className="h-4 w-4" />
              <span>Get Started</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-3 bg-white">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 font-bold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <a
                  href="https://app.rino.co.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <SparklesIcon className="h-5 w-5" />
                  <span>Get Started</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
