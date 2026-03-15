import React, { useState } from 'react';
import heroBackground from '../assets/images/african-business.webp';
import { 
  EnvelopeIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  VideoCameraIcon,
  BookOpenIcon,
  CalendarIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { 
  ChatBubbleLeftRightIcon as ChatBubbleSolid,
  PhoneIcon as PhoneSolid
} from '@heroicons/react/24/solid';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const supportChannels = [
    {
      icon: ChatBubbleSolid,
      title: 'Live Chat Support',
      description: 'Instant help from our expert support team',
      availability: '24/7 Available',
      responseTime: '< 2 minutes',
      action: 'Start Chat Now',
      color: 'from-primary-500 to-primary-600',
      gradient: 'bg-gradient-to-r from-primary-600 to-primary-700',
      bg: 'bg-white',
      status: 'online',
      badge: 'Fastest Response'
    },
    {
      icon: PhoneSolid,
      title: 'Phone Support',
      description: 'Speak directly with our solutions experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call +255 765 844 637',
      color: 'from-primary-500 to-primary-600',
      gradient: 'bg-gradient-to-r from-primary-600 to-primary-700',
      bg: 'bg-white',
      status: 'available',
      badge: 'Expert Advice'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Send detailed questions with attachments',
      availability: '24/7 Submission',
      responseTime: '< 4 hours',
      action: 'Email info@infonex.co.tz',
      color: 'from-primary-500 to-primary-600',
      gradient: 'bg-gradient-to-r from-primary-600 to-primary-700',
      bg: 'bg-white',
      status: '24/7',
      badge: 'Detailed Responses'
    },
    {
      icon: DocumentTextIcon,
      title: 'Help Center',
      description: 'Comprehensive guides & documentation',
      availability: 'Always Available',
      responseTime: 'Instant',
      action: 'Browse 500+ Articles',
      color: 'from-primary-500 to-primary-600',
      gradient: 'bg-gradient-to-r from-primary-600 to-primary-700',
      bg: 'bg-white',
      status: 'unlimited',
      badge: 'Self-Service'
    }
  ];

  // Support stats removed - not displayed

  const quickLinks = [
    { icon: RocketLaunchIcon, title: 'Quick Start Guide', category: 'getting-started' },
    { icon: VideoCameraIcon, title: 'Video Tutorials', category: 'tutorials' },
    { icon: BookOpenIcon, title: 'User Manual', category: 'documentation' },
    { icon: CalendarIcon, title: 'Schedule Training', category: 'training' },
    { icon: UserGroupIcon, title: 'Community Forum', category: 'community' },
    { icon: LightBulbIcon, title: 'Feature Requests', category: 'feedback' }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: 18 },
    { id: 'getting-started', name: 'Getting Started', count: 6 },
    { id: 'billing', name: 'Billing & Plans', count: 4 },
    { id: 'technical', name: 'Technical Support', count: 5 },
    { id: 'account', name: 'Account Management', count: 3 }
  ];

  const allFaqs = [
    {
      id: 1,
      question: 'How do I set up my first store?',
      answer: 'After signing up, you\'ll be guided through an intelligent setup wizard that helps configure your store, add products, set up payment methods, and customize your dashboard. Most businesses complete setup in under 30 minutes.',
      category: 'getting-started',
      views: '12.5K',
      helpful: '98%'
    },
    {
      id: 2,
      question: 'Can I import my existing product data?',
      answer: 'Yes! Rino supports CSV/Excel imports, and our migration specialists can help transfer data from Shopify, Square, QuickBooks, and other platforms. We offer free migration assistance for Professional and Enterprise plans.',
      category: 'getting-started',
      views: '8.7K',
      helpful: '96%'
    },
    {
      id: 3,
      question: 'How long does it take to get started?',
      answer: 'Most businesses are operational within 30 minutes using our pre-configured templates. Advanced customization and data migration may take 1-2 business days with our setup assistance.',
      category: 'getting-started',
      views: '15.2K',
      helpful: '97%'
    },
    {
      id: 4,
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade instantly. Changes take effect immediately with prorated billing. Enterprise plans include custom contract options.',
      category: 'billing',
      views: '6.3K',
      helpful: '99%'
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers for annual subscriptions. Enterprise clients can use purchase orders.',
      category: 'billing',
      views: '4.8K',
      helpful: '100%'
    },
    {
      id: 6,
      question: 'What if I need help with setup?',
      answer: 'All plans include free setup assistance. Professional and Enterprise plans include dedicated onboarding specialists who provide hands-on setup and training.',
      category: 'technical',
      views: '9.1K',
      helpful: '95%'
    },
    {
      id: 7,
      question: 'Do you provide training?',
      answer: 'Yes! We offer video tutorials, live webinars, and 1:1 training sessions. Enterprise customers receive personalized training programs for their teams.',
      category: 'technical',
      views: '7.4K',
      helpful: '96%'
    }
  ];

  const filteredFaqs = allFaqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-400 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-primary-400/30">
              <SparklesIcon className="h-4 w-4" />
              <span>24/7 Expert Support • 99% Satisfaction Rate</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span className="block">We're Here to</span>
              <span className="text-primary-400">Help You Succeed</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Get the <span className="font-semibold text-primary-300">expert support</span> you need to maximize your success with Rino. 
              Our dedicated team is committed to helping you every step of the way.
            </p>
            
            {/* Enhanced Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                  <div className="flex items-center px-4">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for answers, guides, or contact support..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-5 text-lg border-0 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Support Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {supportStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${stat.color.replace('text-', 'bg-')}/10`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to <span className="text-gradient">Get Help</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support channel that works best for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div 
                  key={index} 
                  className="group relative h-full"
                >
                  {/* Card Container */}
                  <div className={`relative ${channel.bg} rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl h-full border border-gray-200 hover:border-primary-600`}>
                    {/* Border Glow */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Icon & Badge */}
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${channel.color} shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                          {channel.badge}
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                      <p className="text-gray-600 mb-6 flex-1">{channel.description}</p>
                      
                      {/* Availability */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-2 h-2 rounded-full ${channel.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>
                        <span className="text-sm font-medium text-gray-700">{channel.availability}</span>
                      </div>
                      
                      {/* Response Time */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Response time:</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{channel.responseTime}</span>
                      </div>
                      
                      {/* Action Button */}
                      <button className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 ${channel.gradient} hover:shadow-lg hover:scale-105`}>
                        {channel.action}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links & FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Links Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h3>
                
                {/* Quick Links */}
                <div className="space-y-3 mb-8">
                  {quickLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={idx}
                        className="w-full flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5 text-primary-600" />
                        </div>
                        <span className="font-medium text-gray-700 flex-1 text-left">{link.title}</span>
                        <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                      </button>
                    );
                  })}
                </div>
                
                {/* Contact Info Card */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200">
                  <h4 className="font-bold text-gray-900 mb-4">Need Immediate Help?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <PhoneSolid className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-gray-900">+255 765 844 637</div>
                        <div className="text-sm text-gray-600">Mon-Fri, 9AM-6PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-gray-900">info@infonex.co.tz</div>
                        <div className="text-sm text-gray-600">Response within 4 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
                  <p className="text-gray-600">Find quick answers to common questions</p>
                </div>
                <div className="text-sm text-gray-500">
                  {filteredFaqs.length} of {allFaqs.length} questions
                </div>
              </div>
              
              {/* FAQ Categories */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="group">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                        <div className="ml-4 flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <EyeIcon className="h-4 w-4" />
                            <span>{faq.views}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                            <CheckCircleIcon className="h-4 w-4" />
                            <span>{faq.helpful} helpful</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {faq.category.replace('-', ' ').toUpperCase()}
                        </span>
                        <button className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1">
                          <span>Read more</span>
                          <ArrowRightIcon className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredFaqs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MagnifyingGlassIcon className="h-10 w-10 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h4>
                    <p className="text-gray-600">Try searching for something else or browse our categories</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Self-Help <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive library of learning materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.link}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${resource.color} inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium text-gray-500">{resource.count}</span>
                      <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700">
                        <span className="text-sm font-semibold">Explore</span>
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-4">
                    <PhoneSolid className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-2xl font-semibold text-gray-900 mb-1">+255 765 844 637</p>
                    <p className="text-gray-600">Monday - Friday, 9AM - 6PM EST</p>
                    <p className="text-sm text-gray-500 mt-2">Enterprise customers: Dedicated support line available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4">
                    <EnvelopeIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-2xl font-semibold text-gray-900 mb-1">info@infonex.co.tz</p>
                    <p className="text-gray-600">Response guaranteed within 4 hours</p>
                    <p className="text-sm text-gray-500 mt-2">For urgent matters, please use live chat or phone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4">
                    <MapPinIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-900">
                      123 Sinza Street<br />
                      Dar es salaam<br />
                      Tanzania
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Schedule an in-person consultation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Partnership Inquiry</option>
                    <option>Press & Media</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient with Plus Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <SparklesIcon className="h-4 w-4" />
              READY TO GET HELP?
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              We're Here When <span className="text-yellow-200">You Need Us</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-12">
              Our support team is standing by to ensure your success with Rino. 
              Get the help you need, when you need it.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white text-gray-900 font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
                  <ChatBubbleSolid className="h-6 w-6" />
                  Start Live Chat Now
                </div>
              </button>
              
              <button className="group bg-transparent text-white font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CalendarIcon className="h-6 w-6" />
                Schedule a Call
              </button>
            </div>
            
            {/* Guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                '24/7 Support Available',
                '< 2min Response Time',
                '99% Satisfaction'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 text-white/80">
                  <CheckCircleIcon className="h-5 w-5 text-green-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;