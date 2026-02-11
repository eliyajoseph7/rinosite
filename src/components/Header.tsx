import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SparklesIcon, HomeIcon, CogIcon, CreditCardIcon, QuestionMarkCircleIcon, ArrowDownTrayIcon, PlayIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo/light.png';

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
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-primary-100/50' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          {/* Logo - Clean and Professional */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-15 group-hover:opacity-25 transition-all duration-300"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-3 group-hover:shadow-sm transition-all duration-300 group-hover:scale-105">
                <img src={logo} alt="Rino Business Suite" className="h-10 w-auto" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Fresh Clean Design */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl border border-primary-100/30 p-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50/50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Clean CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/download" 
              className="relative group flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105"
            >
              <SparklesIcon className="h-4 w-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-primary-100/30 text-gray-700 hover:text-primary-600 transition-all duration-200 hover:bg-primary-50"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-100/50 py-3 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/download"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                >
                  <SparklesIcon className="h-4 w-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
