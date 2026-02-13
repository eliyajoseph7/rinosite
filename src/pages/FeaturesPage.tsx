import React, { useState } from 'react';
import {
  ShoppingCartIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ClipboardDocumentListIcon,
  BellIcon,
  ShieldCheckIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ArrowsPointingOutIcon,
  ClockIcon,
  CheckCircleIcon,
  ChartPieIcon,
  ServerIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarSolid,
  CheckCircleIcon as CheckCircleSolid,
} from '@heroicons/react/24/solid';
import { useFeatureCategories } from '../hooks/useFeatureCategories';
import { ShimmerLoader } from '../components/ShimmerLoader';

const FeaturesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const { data: featureCategories, loading, error } = useFeatureCategories();

  // Loading states will be handled inline with shimmer loaders

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Failed to load features</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // Icon mapping for API icon strings to React components
  const iconMap: { [key: string]: any } = {
    ShoppingCartIcon,
    ChartBarIcon,
    UsersIcon,
    CogIcon,
    DocumentTextIcon,
    CurrencyDollarIcon,
    TruckIcon,
    ClipboardDocumentListIcon,
    BellIcon,
    ShieldCheckIcon,
    CloudIcon,
    DevicePhoneMobileIcon,
    ArrowRightIcon,
    SparklesIcon,
    RocketLaunchIcon,
    CpuChipIcon,
    ArrowsPointingOutIcon,
    ClockIcon,
    CheckCircleIcon,
    ChartPieIcon,
    ServerIcon,
    GlobeAltIcon,
    ChatBubbleLeftRightIcon,
    StarIcon: StarSolid,
    CheckCircleSolid,
  };

  // Use only API data - no fallbacks
  const apiFeatureCategories = featureCategories.map(category => ({
    ...category,
    icon: iconMap[category.icon] || CogIcon,
    features: category.features.map(feature => ({
      ...feature,
      icon: iconMap[feature.icon] || CheckCircleSolid,
    }))
  }));

  const filteredCategories = activeCategory === 'all' 
    ? apiFeatureCategories 
    : apiFeatureCategories.filter(cat => cat.id.toString() === activeCategory);

  const additionalFeatures = [
    {
      icon: DocumentTextIcon,
      title: 'Document Intelligence',
      description: 'AI-powered document processing and organization',
      highlight: 'Automated OCR & data extraction'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'Workflow Automation',
      description: 'Custom workflows for business processes',
      highlight: 'No-code automation builder'
    },
    {
      icon: BellIcon,
      title: 'Smart Notifications',
      description: 'Intelligent alerts across all channels',
      highlight: 'Context-aware alerts'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance',
      highlight: 'SOC 2 Type II certified'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Platform',
      description: 'Real-time sync across all devices',
      highlight: '99.9% uptime guarantee'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Experience',
      description: 'Full-featured iOS & Android apps',
      highlight: 'Offline capability'
    }
  ];

  const featureStats = [
    { value: '50+', label: 'Powerful Features', icon: SparklesIcon },
    { value: '10K+', label: 'Businesses Using', icon: UsersIcon },
    { value: '99.9%', label: 'Uptime', icon: ShieldCheckIcon },
    { value: '24/7', label: 'Support', icon: ClockIcon }
  ];

  const comparisons = [
    { feature: 'Real-time Inventory', rino: true, competitorA: false, competitorB: true },
    { feature: 'AI-Powered Analytics', rino: true, competitorA: false, competitorB: false },
    { feature: 'Mobile Apps', rino: true, competitorA: true, competitorB: true },
    { feature: 'Multi-location Sync', rino: true, competitorA: false, competitorB: true },
    { feature: 'Customer CRM', rino: true, competitorA: true, competitorB: false },
    { feature: 'Automated Reporting', rino: true, competitorA: true, competitorB: true },
    { feature: 'Cloud Backup', rino: true, competitorA: true, competitorB: false },
    { feature: '24/7 Support', rino: true, competitorA: false, competitorB: false },
    { feature: 'API Access', rino: true, competitorA: false, competitorB: true },
    { feature: 'Custom Integrations', rino: true, competitorA: false, competitorB: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20">
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes morphing-blob {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(30px, -50px) scale(1.1) rotate(90deg); }
          50% { transform: translate(-20px, 20px) scale(0.9) rotate(180deg); }
          75% { transform: translate(-30px, -30px) scale(1.05) rotate(270deg); }
        }
        @keyframes float-rotate {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(0, -60px) rotate(180deg); }
          75% { transform: translate(-30px, -30px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        .text-gradient {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 25%, #0f766e 50%, #115e59 75%, #134e4a 100%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/40"></div>
          
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100/30 via-transparent to-green-100/20" style={{animation: 'gradient-shift 8s ease infinite'}}></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-100/20 via-transparent to-primary-200/30" style={{animation: 'gradient-shift 12s ease infinite reverse'}}></div>
          </div>
          
          {/* Large Morphing Blobs */}
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-primary-200/30 to-primary-300/20 blur-3xl" style={{animation: 'morphing-blob 20s ease-in-out infinite'}}></div>
          <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-l from-accent-200/25 to-primary-400/15 blur-3xl" style={{animation: 'morphing-blob 25s ease-in-out infinite reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent-200/20 to-primary-200/15 blur-3xl" style={{animation: 'morphing-blob 15s ease-in-out infinite'}}></div>
          
          {/* Geometric Pattern Overlays */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-300/40 to-primary-400/30 rounded-full blur-xl" style={{animation: 'float-rotate 18s linear infinite'}}></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-l from-green-300/50 to-green-400/30 rounded-full blur-lg" style={{animation: 'float-rotate 14s linear infinite reverse'}}></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-tr from-green-300/60 to-green-400/40 rounded-full blur-md" style={{animation: 'bubble-float 16s ease-in-out infinite'}}></div>
          
          {/* Particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-700 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-primary-200">
              <SparklesIcon className="h-4 w-4" />
              <span>50+ Powerful Features • AI-Powered Intelligence</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
              <span className="block">Everything You Need to</span>
              <span className="text-gradient">Transform Your Business</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Discover how Rino's <span className="font-semibold text-primary-700">comprehensive feature suite</span> powered by 
              artificial intelligence can revolutionize your operations and accelerate growth.
            </p>
            
            {/* Feature Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {featureStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-primary-100 to-green-100 rounded-xl p-2">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-3 overflow-x-auto pb-2 flex-1">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Features
              </button>
              {apiFeatureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id.toString())}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id.toString()
                      ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Features - Enhanced Drawer Style */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-5xl mx-auto">
          {/* Features Header with Stats */}
          <div className="px-6 py-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Powerful Features
                </h3>
                <p className="text-gray-600">Everything you need to transform your business</p>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-500">Features</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features List - Enhanced */}
          <div className="space-y-8">
            {loading ? (
              [...Array(3)].map((_, categoryIndex) => (
                <div key={categoryIndex} className="group/category">
                  {/* Category Header Shimmer */}
                  <div className="relative overflow-hidden">
                    <div className="relative px-6 py-4 border-l-4 border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <ShimmerLoader className="h-6 w-48 mb-2" />
                          <ShimmerLoader className="h-4 w-64" />
                        </div>
                        <ShimmerLoader className="w-16 h-6 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Features Grid Shimmer */}
                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {[...Array(4)].map((_, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center gap-4">
                          <ShimmerLoader className="w-12 h-12 rounded-xl" />
                          <div className="flex-1">
                            <ShimmerLoader className="h-5 w-32 mb-2" />
                            <ShimmerLoader className="h-4 w-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              filteredCategories.map((category, categoryIndex) => {
                return (
                  <div key={category.id} className="group/category">
                    {/* Category Header with Gradient */}
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5`}></div>
                      <div className="relative px-6 py-4 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">
                              {category.title}
                            </h4>
                            <p className="text-sm text-gray-600">{category.description}</p>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1 rounded-full">
                            <span className="text-xs font-bold text-blue-700">{category.stats}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features Grid - Enhanced */}
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {category.features.map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      const uniqueId = `${categoryIndex}-${idx}`;
                      return (
                        <div
                          key={idx}
                          className={`group/item relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
                            hoveredFeature === uniqueId 
                              ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 shadow-lg transform scale-[1.02]' 
                              : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                          }`}
                          onMouseEnter={() => setHoveredFeature(uniqueId)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          {/* Animated Background */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 transition-opacity duration-300 ${
                            hoveredFeature === uniqueId ? 'opacity-5' : ''
                          }`}></div>
                          
                          <div className="relative p-4 flex items-center gap-4">
                            {/* Enhanced Icon */}
                            <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                              hoveredFeature === uniqueId 
                                ? `bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg` 
                                : 'bg-gray-100'
                            }`}>
                              <FeatureIcon className={`w-6 h-6 transition-colors duration-300 ${
                                hoveredFeature === uniqueId ? 'text-white' : 'text-gray-600'
                              }`} />
                              {/* Pulse effect */}
                              {hoveredFeature === uniqueId && (
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} animate-ping opacity-20`}></div>
                              )}
                            </div>
                            
                            {/* Enhanced Content */}
                            <div className="flex-1 min-w-0">
                              <h5 className={`text-base font-semibold mb-1 transition-colors duration-300 ${
                                hoveredFeature === uniqueId ? 'text-blue-700' : 'text-gray-900'
                              }`}>
                                {feature.name}
                              </h5>
                              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                            
                            {/* Enhanced Arrow with Badge */}
                            <div className="flex items-center gap-2">
                              {hoveredFeature === uniqueId && (
                                <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full animate-fade-in">
                                  Learn more
                                </div>
                              )}
                              <div className={`transform transition-all duration-300 ${
                                hoveredFeature === uniqueId ? 'translate-x-1 scale-110' : ''
                              }`}>
                                <ArrowRightIcon className={`w-5 h-5 transition-colors duration-300 ${
                                  hoveredFeature === uniqueId ? 'text-blue-600' : 'text-gray-400'
                                }`} />
                              </div>
                            </div>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Additional Features - Enhanced */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center px-6 py-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Enterprise-Grade Tools
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities that set Rino apart from the competition
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const hoverKey = `additional-${index}`;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${
                    hoveredFeature === hoverKey
                      ? 'bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-2xl transform scale-105'
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredFeature(hoverKey)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Animated Background Pattern */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                    hoveredFeature === hoverKey ? 'opacity-100' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  </div>
                  
                  <div className="relative p-6">
                    {/* Enhanced Icon */}
                    <div className={`relative mb-4 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      hoveredFeature === hoverKey
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg'
                        : 'bg-gradient-to-br from-gray-100 to-gray-200'
                    }`}>
                      <Icon className={`w-8 h-8 transition-all duration-500 ${
                        hoveredFeature === hoverKey ? 'text-white scale-110' : 'text-gray-600'
                      }`} />
                      {/* Glow effect */}
                      {hoveredFeature === hoverKey && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 blur-xl opacity-30 animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className={`text-lg font-bold transition-colors duration-300 ${
                          hoveredFeature === hoverKey ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h5>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${
                          hoveredFeature === hoverKey
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {feature.highlight}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Status and Action */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            hoveredFeature === hoverKey ? 'bg-green-400 animate-pulse' : 'bg-green-500'
                          }`}></div>
                          <span className="text-xs text-gray-500 font-medium">Available</span>
                        </div>
                        
                        <div className={`flex items-center gap-1 text-xs font-medium transition-all duration-300 ${
                          hoveredFeature === hoverKey
                            ? 'text-blue-600 transform translate-x-1'
                            : 'text-gray-400'
                        }`}>
                          <span>Explore</span>
                          <ArrowRightIcon className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison - Enhanced */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <SparklesIcon className="h-4 w-4" />
              COMPETITIVE ADVANTAGE
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Rino Dominates the Market
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our comprehensive platform outperforms the competition across every metric
            </p>
          </div>
          
          {/* Enhanced Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
              <div className="grid grid-cols-4 gap-6">
                <div className="text-left">
                  <span className="text-base font-bold text-gray-900">Feature Comparison</span>
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <span className="text-lg font-bold text-blue-600">Rino</span>
                    </div>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Complete Solution</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-base font-semibold text-gray-700 mb-2">Competitor A</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Basic Features</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-base font-semibold text-gray-700 mb-2">Competitor B</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Limited Solution</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {comparisons.map((item, idx) => (
                <div key={idx} className="px-8 py-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300 group">
                  <div className="grid grid-cols-4 gap-6 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:animate-pulse"></div>
                      <span className="font-medium text-gray-900">{item.feature}</span>
                    </div>
                    <div className="text-center">
                      {item.rino ? (
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-3 py-2 rounded-full border border-green-200">
                          <CheckCircleSolid className="h-4 w-4" />
                          <span className="text-sm font-bold">Included</span>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-lg">—</span>
                      )}
                    </div>
                    <div className="text-center">
                      {item.competitorA ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                          <span className="text-lg font-bold">✓</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-500 rounded-full">
                          <span className="text-lg font-bold">✗</span>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      {item.competitorB ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                          <span className="text-lg font-bold">✓</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-500 rounded-full">
                          <span className="text-lg font-bold">✗</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Summary */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircleSolid className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">The Clear Winner</span>
              </div>
              <p className="text-white/90">
                Rino delivers <span className="font-bold text-yellow-200">100% feature coverage</span> while competitors 
                provide only <span className="font-bold text-red-200">partial solutions</span>. Choose the platform that grows with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 md:p-12 text-white shadow-2xl">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                  <RocketLaunchIcon className="h-5 w-5 animate-bounce" />
                  <span className="font-bold">READY TO DOMINATE YOUR MARKET?</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  Start Your <span className="text-yellow-200">Success Story</span> Today
                </h3>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses already using Rino to 
                  <span className="font-semibold text-yellow-200"> increase revenue by 40%</span> and 
                  <span className="font-semibold text-yellow-200">reduce costs by 30%</span>
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="group relative overflow-hidden bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <RocketLaunchIcon className="h-6 w-6 group-hover:animate-bounce" />
                    <span>Start Free 30-Day Trial</span>
                  </div>
                </button>
                
                <button className="group bg-transparent text-white font-bold text-lg px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center gap-3">
                    <ShoppingCartIcon className="h-6 w-6 group-hover:animate-pulse" />
                    <span>View Pricing Plans</span>
                  </div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-200 mb-1">10,000+</div>
                  <div className="text-sm text-white/80">Happy Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-200 mb-1">99.9%</div>
                  <div className="text-sm text-white/80">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-200 mb-1">24/7</div>
                  <div className="text-sm text-white/80">Expert Support</div>
                </div>
              </div>
              
              {/* Guarantee */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                {[
                  'Full feature access',
                  'No credit card required',
                  'Cancel anytime',
                  '30-day money-back guarantee'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;