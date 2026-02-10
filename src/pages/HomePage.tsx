import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  UsersIcon,
  CogIcon,
  CheckIcon,
  StarIcon,
  PlayIcon,
  ShieldCheckIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ChartPieIcon,
  ArrowsPointingOutIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { 
  ArrowTrendingUpIcon as ArrowTrendingUpSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: ShoppingCartIcon,
      title: 'Sales Management',
      description: 'Complete point-of-sale system with inventory tracking, receipt generation, and sales analytics.',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      gradient: 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500',
      stats: '30% avg. sales increase'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'AI-powered insights and predictive analytics for data-driven business decisions.',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
      gradient: 'bg-gradient-to-r from-accent-600 via-accent-500 to-primary-500',
      stats: '50+ report types'
    },
    {
      icon: UsersIcon,
      title: 'Customer Management',
      description: 'Intelligent CRM with automated segmentation and personalized marketing automation.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      gradient: 'bg-gradient-to-r from-emerald-600 via-teal-500 to-primary-500',
      stats: '45% customer retention'
    },
    {
      icon: CogIcon,
      title: 'Inventory Control',
      description: 'Real-time inventory tracking with AI-powered predictions and automated reordering.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      gradient: 'bg-gradient-to-r from-cyan-600 via-blue-500 to-primary-500',
      stats: '25% cost reduction'
    }
  ];

  const benefits = [
    { text: 'Increase sales by up to 30%', icon: ArrowTrendingUpSolid },
    { text: 'Reduce inventory costs by 25%', icon: CurrencyDollarIcon },
    { text: 'Save 15+ hours per week', icon: ClockIcon },
    { text: 'Improve customer satisfaction', icon: StarSolid },
    { text: 'Real-time business insights', icon: ChartPieIcon },
    { text: 'Multi-platform accessibility', icon: ArrowsPointingOutIcon }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Retail Store Owner',
      company: 'Fashion Forward Boutique',
      content: 'Rino transformed my business operations. Sales tracking is now effortless, and I have complete visibility into my inventory.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      stats: 'Revenue ↑ 42%'
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Manager',
      company: 'Urban Bistro',
      content: 'The analytics features helped us identify our best-selling items and optimize our menu. Revenue increased by 35% in just 3 months.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      stats: 'Costs ↓ 28%'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Boutique Owner',
      company: 'The Style Collective',
      content: 'Customer management has never been easier. I can track purchase history and send personalized offers that actually work.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      stats: 'Retention ↑ 56%'
    }
  ];

  const metrics = [
    { value: '10,000+', label: 'Businesses Trust Us', icon: UsersIcon },
    { value: '99.9%', label: 'Uptime Guarantee', icon: ShieldCheckIcon },
    { value: '24/7', label: 'Support Available', icon: ClockIcon },
    { value: '40%', label: 'Avg. Growth', icon: ArrowTrendingUpSolid }
  ];

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
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
        {/* Beautiful Advanced Background */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/40"></div>
          
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100/30 via-transparent to-accent-100/20" style={{animation: 'gradient-shift 8s ease infinite'}}></div>
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
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-l from-accent-300/50 to-accent-400/30 rounded-full blur-lg" style={{animation: 'float-rotate 14s linear infinite reverse'}}></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-tr from-accent-300/60 to-primary-300/40 rounded-full blur-md" style={{animation: 'bubble-float 16s ease-in-out infinite'}}></div>
          
          {/* Animated Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent" style={{animation: 'gradient-shift 6s ease infinite'}}></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-300/20 to-transparent" style={{animation: 'gradient-shift 8s ease infinite reverse'}}></div>
          
          {/* Scattered Geometric Elements */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary-400/60 rounded-full" style={{animation: 'float-rotate 12s linear infinite'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-accent-400/70 rotate-45" style={{animation: 'float-rotate 10s linear infinite reverse'}}></div>
          <div className="absolute top-2/3 left-1/6 w-8 h-8 bg-gradient-to-r from-primary-400/50 to-accent-400/40 rounded-full" style={{animation: 'bubble-float 14s ease-in-out infinite'}}></div>
          <div className="absolute bottom-1/6 right-1/6 w-5 h-5 bg-accent-400/60 rounded-full" style={{animation: 'float-rotate 16s linear infinite'}}></div>
          
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-200/50 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium">Trusted by 10,000+ businesses</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarSolid key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block">Transform Your</span>
                <span className="text-gradient block mt-2 pb-1.5">Business Intelligence</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                The most powerful <span className="font-semibold text-primary-700">AI-driven business suite</span> designed for modern enterprises. 
                Streamline operations, boost productivity, and accelerate growth with intelligent automation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link
                  to="/download"
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl">
                    <SparklesIcon className="w-6 h-6" />
                    Start Free Trial
                    <CloudArrowUpIcon className="w-5 h-5 ml-2" />
                  </div>
                </Link>
                
                <Link
                  to="/video/1"
                  className="group relative bg-transparent text-gray-700 font-bold text-lg px-10 py-5 rounded-2xl flex items-center justify-center gap-3 border-2 border-primary-300 hover:border-primary-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayIcon className="w-5 h-5 text-white ml-1" />
                  </div>
                  Watch Demo
                </Link>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: CheckIcon, text: 'Free 30-day trial' },
                  { icon: ShieldCheckIcon, text: 'Enterprise security' },
                  { icon: ClockIcon, text: '24/7 support' },
                  { icon: RocketLaunchIcon, text: 'Quick setup' },
                  { icon: ChatBubbleLeftRightIcon, text: 'Dedicated success manager' },
                  { icon: ArrowsPointingOutIcon, text: 'No limits' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Dashboard Preview */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Dashboard Container */}
              <div className="relative">
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl border border-primary-200/50 shadow-xl"></div>
                
                {/* Dashboard Content */}
                <div className="relative p-8">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Rino Dashboard</h3>
                      <p className="text-gray-600">Real-time business overview</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700 font-medium">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: 'Business Growth', value: '40%', change: '+15%', color: 'text-green-400' },
                      { label: 'Time Saved', value: '15+ hrs', change: '+25%', color: 'text-blue-400' },
                      { label: 'Cost Reduction', value: '25%', change: '+8%', color: 'text-yellow-400' },
                      { label: 'Customer Satisfaction', value: '95%', change: '+12%', color: 'text-primary-400' }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white/90 rounded-xl p-4 backdrop-blur-sm border border-primary-200/50 shadow-sm">
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <div className="flex items-end justify-between">
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <span className={`text-sm font-medium ${stat.color}`}>{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Activity Chart */}
                  <div className="bg-white/90 rounded-xl p-4 backdrop-blur-sm border border-primary-200/50 shadow-sm mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-gray-900 font-semibold">Business Performance</h4>
                      <span className="text-sm text-gray-600">Monthly Progress</span>
                    </div>
                    <div className="h-32 flex items-end gap-1">
                      {[40, 65, 75, 90, 85, 95, 100, 101, 110, 112].map((height, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-primary-500 to-primary-600 rounded-t-lg transition-all duration-300 hover:opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: ShoppingCartIcon, label: 'New Sale', color: 'from-primary-500 to-primary-600' },
                      { icon: UsersIcon, label: 'Add Client', color: 'from-blue-500 to-cyan-500' },
                      { icon: ChartBarIcon, label: 'Report', color: 'from-green-500 to-emerald-500' }
                    ].map((action, idx) => (
                      <button
                        key={idx}
                        className="group bg-white/90 rounded-xl p-3 backdrop-blur-sm border border-primary-200/50 hover:bg-white transition-all duration-300 shadow-sm"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform`}>
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-3">
                      <div className="flex items-center gap-2">
                        <SparklesIcon className="w-5 h-5 text-white" />
                        <span className="text-sm font-bold text-white">Business Focused</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="w-5 h-5 text-white" />
                        <span className="text-sm font-bold text-white">Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="badge-info mb-6">
              🚀 Comprehensive business management suite
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-shadow">
              Everything You Need to <span className="gradient-text">Grow Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to streamline your operations and boost productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 text-center group animate-scaleIn" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}>
                  <feature.icon className="h-8 w-8 text-primary-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-100 rounded-full opacity-30 animate-bounce-slow"></div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">Rino?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of successful businesses that have transformed their operations with Rino.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/features" className="btn-primary">
                  Explore All Features
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-sm text-gray-600">Bank-level security with 99.9% uptime guarantee</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary-600 font-medium">Enterprise Grade</span>
                  </div>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                  <p className="text-sm text-gray-600">Instant synchronization across all devices</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary-600 font-medium">Live Sync</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mobile Ready</h3>
                  <p className="text-sm text-gray-600">Full-featured mobile apps for iOS and Android</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary-600 font-medium">Native Apps</span>
                  </div>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <ComputerDesktopIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform</h3>
                  <p className="text-sm text-gray-600">Works seamlessly on desktop, tablet, and mobile</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary-600 font-medium">Universal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Guide Section - Enhanced Design */}
      <section className="section-padding relative overflow-hidden">
        {/* Beautiful Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/40"></div>
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-r from-primary-200/20 to-primary-300/15 blur-3xl" style={{animation: 'morphing-blob 20s ease-in-out infinite'}}></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-l from-accent-200/20 to-primary-400/10 blur-3xl" style={{animation: 'morphing-blob 25s ease-in-out infinite reverse'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-xl">
              <PlayIcon className="h-4 w-4" />
              <span>Video Tutorials</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              Learn <span className="gradient-text">Rino</span> in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Watch our comprehensive video guides to master every feature of Rino. 
              <span className="font-semibold text-primary-700"> Step-by-step tutorials</span> designed for all skill levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Getting Started', duration: '5 min', thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop', level: 'Beginner', icon: '🚀' },
              { title: 'Sales Management', duration: '8 min', thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop', level: 'Intermediate', icon: '💰' },
              { title: 'Inventory Control', duration: '6 min', thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop', level: 'Beginner', icon: '📦' },
              { title: 'Customer Management', duration: '7 min', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop', level: 'Intermediate', icon: '👥' },
              { title: 'Reports & Analytics', duration: '10 min', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop', level: 'Advanced', icon: '📊' },
              { title: 'Advanced Features', duration: '12 min', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop', level: 'Advanced', icon: '⚡' }
            ].map((video, index) => (
              <div key={index} className="glass-card group cursor-pointer hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Full Overlay on Hover - Scales with image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Play Button Overlay - Scales with image */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-full shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <PlayIcon className="h-10 w-10 text-primary-600" />
                    </div>
                  </div>
                  
                  {/* Duration Badge - Hidden on hover */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center text-lg">
                      {video.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{video.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                        <span className="text-xs text-gray-500 font-medium">{video.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Master {video.title.toLowerCase()} with our comprehensive step-by-step tutorial designed to help you succeed.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to become a Rino expert?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of users who have transformed their business with our comprehensive video tutorials.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Link to="/success" className="btn-primary px-8 py-3">
                  <div className="flex items-center space-x-2">
                    <ArrowTrendingUpIcon className="h-5 w-5" />
                    <span>Start Your Success</span>
                  </div>
                </Link>
                <Link to="/videos" className="px-8 py-3 border-2 border-primary-200 text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                  View All Videos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="badge-success mb-6">
              ⭐ Loved by 10,000+ business owners
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-shadow">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from successful business owners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 group animate-slideInRight" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">({testimonial.rating}.0)</span>
                </div>
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100 group-hover:ring-primary-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-primary-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-28 h-28 bg-accent-100 rounded-full opacity-20 animate-bounce-slow"></div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="badge-success mb-6 bg-white/20 text-white border-white/30">
            🎯 Join 10,000+ successful businesses
          </div>
          <h2 className="text-4xl font-bold mb-6 text-shadow">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of successful businesses using Rino to streamline operations and boost growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow-lg">
              Start Your Free Trial
            </Link>
            <Link to="/pricing" className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              View Pricing Plans
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full animate-pulse-slow"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
