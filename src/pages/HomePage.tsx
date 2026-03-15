import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHomepageData } from '../hooks/useHomepageData';
import { ShimmerLoader } from '../components/ShimmerLoader';
import heroBackground from '../assets/images/african-business-optimized.webp';
import { 
  ChartBarIcon,
  ShoppingCartIcon,
  UsersIcon,
  CogIcon,
  CheckIcon,
  PlayIcon,
  ShieldCheckIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ChartPieIcon,
  ArrowsPointingOutIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { 
  ArrowTrendingUpIcon as ArrowTrendingUpSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: homepageData, loading, error } = useHomepageData();

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icon mapping for features from API
  const iconMap: { [key: string]: any } = {
    ShoppingCartIcon,
    ChartBarIcon,
    UsersIcon,
    CogIcon,
  };

  // Use only API data - no fallbacks
  const features = (homepageData.features && homepageData.features.length > 0) ? homepageData.features.map(feature => ({
    icon: iconMap[feature.icon] || ShoppingCartIcon,
    title: feature.title,
    description: feature.description,
    color: feature.color || 'from-primary-500 to-primary-600',
    bgColor: feature.bg_color || 'from-primary-50 to-primary-100',
    gradient: feature.gradient || 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500',
    stats: feature.stats
  })) : [];

  // Icon mapping for benefits and metrics
  const benefitIconMap: { [key: string]: any } = {
    ArrowTrendingUpSolid,
    CurrencyDollarIcon,
    ClockIcon,
    StarSolid,
    ChartPieIcon,
    ArrowsPointingOutIcon,
  };

  // Use only API data - no fallbacks
  const benefits = (homepageData.benefits && homepageData.benefits.length > 0) ? homepageData.benefits.map(benefit => ({
    text: benefit.text,
    icon: benefitIconMap[benefit.icon] || ArrowTrendingUpSolid
  })) : [];

  // Use only API data - no fallbacks
  const testimonials = (homepageData.testimonials && homepageData.testimonials.length > 0) ? homepageData.testimonials : [];

  // Use only API data - no fallbacks
  const metrics = (homepageData.metrics && homepageData.metrics.length > 0) ? homepageData.metrics.map(metric => ({
    value: metric.value,
    label: metric.label,
    icon: iconMap[metric.icon] || UsersIcon
  })) : [];

  // Auto-rotate testimonials carousel
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  // Show skeleton loader while loading to prevent CLS
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20">
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
          {/* Same background as loaded state */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
              <div className="absolute inset-0" style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-black/85"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Skeleton for trust badge */}
              <div className="inline-flex h-10 w-48 bg-gray-700/30 rounded-lg mb-8 animate-pulse"></div>
              
              {/* Skeleton for headline */}
              <div className="space-y-4 mb-8">
                <div className="h-16 bg-gray-700/30 rounded-lg animate-pulse mx-auto max-w-4xl"></div>
                <div className="h-16 bg-gray-700/30 rounded-lg animate-pulse mx-auto max-w-3xl"></div>
              </div>
              
              {/* Skeleton for subheadline */}
              <div className="h-8 bg-gray-700/30 rounded-lg animate-pulse mx-auto max-w-2xl mb-12"></div>
              
              {/* Skeleton for buttons */}
              <div className="flex gap-4 justify-center flex-wrap">
                <div className="h-14 w-48 bg-gray-700/30 rounded-lg animate-pulse"></div>
                <div className="h-14 w-48 bg-gray-700/30 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20">
      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(90deg); }
          50% { transform: translate(0, -60px) rotate(180deg); }
          75% { transform: translate(-20px, -30px) rotate(270deg); }
        }
        .animate-particle-float {
          animation: particle-float 20s ease-in-out infinite;
        }
        .text-gradient {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 25%, #0f766e 50%, #115e59 75%, #134e4a 100%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 8s ease infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        .carousel-item-enter {
          animation: slideIn 0.6s ease-out forwards;
        }
        .carousel-item-exit {
          animation: slideOut 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section - Enhanced Background with Image */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
            <div className="absolute inset-0" style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}></div>
          </div>
          
          {/* Dark Transparent Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-black/85"></div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Accent Glow Effects */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative">
              {/* Main Content - Slide */}
              <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-lg px-5 py-2.5 mb-8 border border-primary-200">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarSolid key={i} className="w-4 h-4 text-primary-600" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold text-sm">
                  {homepageData.hero?.trust_badge_text}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {homepageData.hero && (
                  <>
                    <span className="block">{homepageData.hero.title}</span>
                    <span className="block mt-2 text-primary-400">{homepageData.hero.subtitle}</span>
                  </>
                )}
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                {homepageData.hero?.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                {homepageData.hero && (
                  <Link
                    to={homepageData.hero.cta_primary_link}
                    className="relative inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold text-base px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md group overflow-hidden"
                  >
                    {/* Subtle Pulsing Ring */}
                    <span className="absolute inset-0 rounded-lg border-2 border-white/30 animate-pulse"></span>
                    
                    <span className="relative"><SparklesIcon className="w-5 h-5" /></span>
                    <span className="relative">{homepageData.hero.cta_primary_text}</span>
                  </Link>
                )}
                
                {homepageData.hero && (
                  <Link
                    to={homepageData.hero.cta_secondary_link}
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold text-base px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-all duration-200"
                  >
                    <PlayIcon className="w-5 h-5" />
                    {homepageData.hero.cta_secondary_text}
                  </Link>
                )}
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { icon: CheckIcon, text: 'Free 30-day trial' },
                  { icon: ShieldCheckIcon, text: 'Enterprise security' },
                  { icon: ClockIcon, text: '24/7 support' },
                  { icon: RocketLaunchIcon, text: 'Quick setup' },
                  { icon: ChatBubbleLeftRightIcon, text: 'Dedicated manager' },
                  { icon: ArrowsPointingOutIcon, text: 'No limits' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 justify-center">
                    <item.icon className="w-5 h-5 text-primary-400" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center ${
                    currentSlide === index 
                      ? 'bg-primary-600/20' 
                      : 'bg-transparent hover:bg-gray-100'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className={`rounded-full ${
                    currentSlide === index 
                      ? 'w-8 h-3 bg-primary-600' 
                      : 'w-3 h-3 bg-gray-300'
                  }`}></span>
                </button>
              ))}
            </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white relative overflow-hidden hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="text-center group hover-lift p-8 rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-700 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-primary-600">Grow Your Business</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Powerful features designed to streamline your operations and boost productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              [...Array(4)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <ShimmerLoader className="w-12 h-12 rounded-lg mx-auto mb-4" />
                  <ShimmerLoader className="h-6 w-3/4 mx-auto mb-3" />
                  <ShimmerLoader className="h-4 w-full mb-2" />
                  <ShimmerLoader className="h-4 w-2/3 mx-auto" />
                </div>
              ))
            ) : (
              features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-primary-600">Rino?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Join thousands of successful businesses that have transformed their operations with Rino.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/features" className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Explore All Features
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-600 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-sm text-gray-700">Bank-level security with 99.9% uptime guarantee</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-600 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                  <p className="text-sm text-gray-700">Instant synchronization across all devices</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-600 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mobile Ready</h3>
                  <p className="text-sm text-gray-700">Full-featured mobile apps for iOS and Android</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-600 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <ComputerDesktopIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform</h3>
                  <p className="text-sm text-gray-700">Works seamlessly on desktop, tablet, and mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Guide Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-lg border border-primary-200 mb-6">
              <PlayIcon className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">Video Tutorials</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn <span className="text-primary-600">Rino</span> in Minutes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Watch our comprehensive video guides to master every feature of Rino with step-by-step tutorials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(homepageData.videos && homepageData.videos.length > 0) && homepageData.videos.map((video, index) => (
              <Link 
                key={index} 
                to={`/video/${video.id}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300 block"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover" 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <PlayIcon className="h-7 w-7 text-primary-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-700">
                    Step-by-step tutorial to master {video.title.toLowerCase()}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/videos" className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              View All Videos
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-lg border border-primary-200 mb-6">
              <StarSolid className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">Customer Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by <span className="text-primary-600">Thousands</span> of Businesses
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real stories from real business owners who transformed their operations with Rino
            </p>
          </div>

          {/* Clean Carousel */}
          {testimonials.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="relative min-h-[350px] flex items-center justify-center">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentTestimonial
                          ? 'opacity-100 translate-x-0 z-10'
                          : index < currentTestimonial
                          ? 'opacity-0 -translate-x-full z-0'
                          : 'opacity-0 translate-x-full z-0'
                      }`}
                    >
                      <div className="bg-gray-50 rounded-xl p-10 border border-gray-200">
                        <div className="flex items-center justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarSolid key={i} className="h-6 w-6 text-primary-600 mx-0.5" />
                          ))}
                        </div>
                        <blockquote className="text-center mb-8">
                          <p className="text-xl text-gray-800 leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-primary-600"
                          />
                          <div className="text-left">
                            <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-700">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-20 border border-gray-200"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-20 border border-gray-200"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all duration-300 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center ${
                      index === currentTestimonial
                        ? 'bg-primary-600/20'
                        : 'bg-transparent hover:bg-gray-100'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span className={`rounded-full ${
                      index === currentTestimonial
                        ? 'w-8 h-2 bg-primary-600'
                        : 'w-2 h-2 bg-gray-300'
                    }`}></span>
                  </button>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">15,000+</div>
                  <div className="text-sm text-gray-700">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-700">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                  <div className="text-sm text-gray-700">Would Recommend</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <div className="inline-flex items-center bg-primary-700 text-white px-4 py-2 rounded-lg mb-6">
            <span className="text-sm font-semibold">Join 10,000+ successful businesses</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses using Rino to streamline operations and boost growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.rino.co.tz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors">
              Start Your Free Trial
            </a>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
              View Pricing Plans
            </Link>
          </div>
          <p className="text-sm text-white mt-6">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
