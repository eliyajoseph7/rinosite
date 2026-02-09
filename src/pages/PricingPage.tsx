import React, { useState } from 'react';
import { 
  XMarkIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  ServerIcon,
  CloudIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarSolid,
  CheckCircleIcon,
  FireIcon
} from '@heroicons/react/24/solid';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Perfect for small businesses just getting started',
      monthlyPrice: 29,
      annualPrice: 278, // 29 * 12 * 0.8 (20% discount)
      description: 'Essential tools to launch and grow your business',
      features: [
        { text: 'Up to 1,000 products', icon: CheckCircleIcon },
        { text: 'Basic POS system', icon: CheckCircleIcon },
        { text: 'Customer management', icon: CheckCircleIcon },
        { text: 'Basic reports & analytics', icon: CheckCircleIcon },
        { text: 'Email support', icon: CheckCircleIcon },
        { text: 'Mobile app access', icon: CheckCircleIcon },
        { text: '1 user account', icon: CheckCircleIcon },
        { text: 'Cloud storage (5GB)', icon: CheckCircleIcon }
      ],
      notIncluded: [
        'Advanced analytics',
        'Multi-location support',
        'API access',
        'Priority support'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 79,
      annualPrice: 758, // 79 * 12 * 0.8
      description: 'Advanced features for scaling your operations',
      features: [
        { text: 'Up to 10,000 products', icon: StarSolid },
        { text: 'Advanced POS system', icon: StarSolid },
        { text: 'Advanced customer management', icon: StarSolid },
        { text: 'Advanced analytics & insights', icon: StarSolid },
        { text: 'Priority email & chat support', icon: StarSolid },
        { text: 'Mobile app with offline mode', icon: StarSolid },
        { text: 'Up to 5 user accounts', icon: StarSolid },
        { text: 'Cloud storage (50GB)', icon: StarSolid },
        { text: 'Multi-location support', icon: StarSolid },
        { text: 'Inventory forecasting', icon: StarSolid },
        { text: 'Custom reports builder', icon: StarSolid },
        { text: 'Basic API access', icon: StarSolid }
      ],
      notIncluded: [
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      bg: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'For large businesses requiring maximum flexibility',
      monthlyPrice: 199,
      annualPrice: 1910, // 199 * 12 * 0.8
      description: 'Complete solution with dedicated support',
      features: [
        { text: 'Unlimited products', icon: SparklesIcon },
        { text: 'Enterprise POS system', icon: SparklesIcon },
        { text: 'Advanced customer segmentation', icon: SparklesIcon },
        { text: 'Real-time analytics dashboard', icon: SparklesIcon },
        { text: '24/7 dedicated phone support', icon: SparklesIcon },
        { text: 'Enterprise mobile apps', icon: SparklesIcon },
        { text: 'Unlimited user accounts', icon: SparklesIcon },
        { text: 'Unlimited cloud storage', icon: SparklesIcon },
        { text: 'Global multi-location support', icon: SparklesIcon },
        { text: 'AI-powered forecasting', icon: SparklesIcon },
        { text: 'Advanced custom reports', icon: SparklesIcon },
        { text: 'Full API access with webhooks', icon: SparklesIcon },
        { text: 'White-label solution', icon: SparklesIcon },
        { text: 'Custom integrations', icon: SparklesIcon },
        { text: 'Personal training & onboarding', icon: SparklesIcon },
        { text: 'Dedicated account manager', icon: SparklesIcon }
      ],
      notIncluded: [],
      popular: false,
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      bg: 'bg-gradient-to-br from-indigo-50 to-purple-50'
    }
  ];

  const features = [
    { name: 'Products', starter: '1,000', pro: '10,000', enterprise: 'Unlimited', icon: ServerIcon },
    { name: 'User Accounts', starter: '1', pro: '5', enterprise: 'Unlimited', icon: UsersIcon },
    { name: 'Cloud Storage', starter: '5GB', pro: '50GB', enterprise: 'Unlimited', icon: CloudIcon },
    { name: 'POS System', starter: 'Basic', pro: 'Advanced', enterprise: 'Enterprise', icon: DevicePhoneMobileIcon },
    { name: 'Customer Management', starter: '✓', pro: 'Advanced', enterprise: 'Premium', icon: UsersIcon },
    { name: 'Reports & Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Real-time', icon: ChartBarIcon },
    { name: 'Mobile Apps', starter: '✓', pro: '✓ + Offline', enterprise: 'Enterprise', icon: DevicePhoneMobileIcon },
    { name: 'API Access', starter: '✗', pro: 'Basic', enterprise: 'Full + Webhooks', icon: CogIcon },
    { name: 'Support', starter: 'Email', pro: 'Priority', enterprise: '24/7 Dedicated', icon: ChatBubbleLeftRightIcon },
    { name: 'Security', starter: 'Standard', pro: 'Advanced', enterprise: 'Enterprise', icon: ShieldCheckIcon },
    { name: 'Multi-location', starter: '✗', pro: '✓', enterprise: 'Global', icon: ArrowTrendingUpIcon },
    { name: 'Custom Integrations', starter: '✗', pro: '✗', enterprise: '✓', icon: CogIcon }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.',
      icon: ArrowTrendingUpIcon
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 30-day free trial with full access to all Professional plan features. No credit card required.',
      icon: StarSolid
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for annual subscriptions.',
      icon: CurrencyDollarIcon
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level AES-256 encryption, SOC 2 compliance, and regular security audits to protect your data.',
      icon: LockClosedIcon
    },
    {
      question: 'Do you offer discounts for annual payments?',
      answer: 'Yes, annual subscriptions receive a 20% discount compared to monthly billing. Save even more with 2-year commitments.',
      icon: CurrencyDollarIcon
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. Your data remains accessible for 30 days.',
      icon: XMarkIcon
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Businesses Trust Us', icon: UsersIcon },
    { value: '99.9%', label: 'Uptime SLA', icon: ShieldCheckIcon },
    { value: '24/7', label: 'Support Available', icon: ClockIcon },
    { value: '30-day', label: 'Money Back Guarantee', icon: CheckCircleIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50/40"></div>
          
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 25%, rgba(236, 72, 153, 0.1) 50%, rgba(6, 182, 212, 0.15) 75%, rgba(59, 130, 246, 0.1) 100%)',
                backgroundSize: '400% 400%',
                animation: 'gradient-shift 15s ease infinite'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-300/30 to-cyan-300/20 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-sky-300/10 to-teal-300/10 rounded-full blur-3xl" style={{ animation: 'float 25s ease-in-out infinite reverse' }}></div>
          
          {/* Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-blue-200">
              <SparklesIcon className="h-4 w-4" />
              <span>Transparent Pricing • No Hidden Fees</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
              <span className="block">Simple, Flexible</span>
              <span className="text-gradient">Pricing Plans</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees. Start free, upgrade anytime.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-2xl p-2 mb-12 shadow-xl border border-gray-200">
              <span className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${!isAnnual ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' : 'text-gray-600'}`}>
                Monthly
              </span>
              
              {/* Toggle Switch */}
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative mx-4 w-16 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 focus:outline-none transition-all duration-300"
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? 'translate-x-10' : 'translate-x-1'}`}></div>
              </button>
              
              <span className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'text-gray-600'}`}>
                Annual
                <span className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-2">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const perMonth = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;
              
              return (
                <div 
                  key={plan.id}
                  className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                          <FireIcon className="h-4 w-4" />
                          Most Popular
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Card Container */}
                  <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${plan.popular ? 'shadow-2xl' : 'shadow-xl'} ${hoveredPlan === plan.id ? 'scale-105' : ''}`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 ${plan.bg} opacity-50`}></div>
                    
                    {/* Border Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl border-2 ${hoveredPlan === plan.id ? 'border-blue-500/30' : 'border-transparent'} transition-colors duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-6">{plan.tagline}</p>
                        
                        {/* Price Display */}
                        <div className="mb-6">
                          <div className="flex items-baseline justify-center mb-2">
                            <span className="text-5xl font-bold text-gray-900">${perMonth}</span>
                            <span className="text-gray-600 ml-2">/month</span>
                          </div>
                          {isAnnual && (
                            <div className="text-sm text-gray-500">
                              <span className="line-through">${plan.monthlyPrice}/month</span>
                              <span className="ml-2 text-green-600 font-semibold">Save ${(plan.monthlyPrice * 12) - plan.annualPrice}/year</span>
                            </div>
                          )}
                          {!isAnnual && plan.annualPrice && (
                            <div className="text-sm text-blue-600 font-medium">
                              Switch to annual and save 20%
                            </div>
                          )}
                        </div>
                        
                        {/* CTA Button */}
                        <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105' : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50'} shadow-lg`}>
                          {plan.popular ? 'Get Started Free' : 'Start Free Trial'}
                        </button>
                        
                        <p className="text-sm text-gray-500 mt-4">
                          {isAnnual ? 'Billed annually' : 'Billed monthly'} • 30-day free trial
                        </p>
                      </div>
                      
                      {/* Features List */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          Everything included:
                        </h4>
                        <div className="space-y-3 mb-8">
                          {plan.features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <div className={`p-1 rounded-lg ${plan.popular ? 'bg-gradient-to-r from-purple-100 to-pink-100' : 'bg-blue-100'}`}>
                                  <Icon className={`h-4 w-4 ${plan.popular ? 'text-purple-600' : 'text-blue-600'}`} />
                                </div>
                                <span className="text-gray-700 text-sm flex-1">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Not Included Section */}
                        {plan.notIncluded.length > 0 && (
                          <div className="pt-6 border-t border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <XMarkIcon className="h-5 w-5 text-gray-400" />
                              Not included:
                            </h4>
                            <div className="space-y-2">
                              {plan.notIncluded.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <XMarkIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                  <span className="text-gray-500 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* All Plans Include Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                All plans include:
              </h3>
              <p className="text-gray-600 mb-6">
                These essential features come with every subscription
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheckIcon, text: 'Bank-level Security' },
                  { icon: CloudIcon, text: 'Daily Backups' },
                  { icon: DevicePhoneMobileIcon, text: 'Mobile Apps' },
                  { icon: ClockIcon, text: '99.9% Uptime' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-4">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-2">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <ChartBarIcon className="h-4 w-4" />
              DETAILED COMPARISON
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compare <span className="text-gradient">All Features</span>
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what each plan includes at a glance
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl">
            <table className="w-full bg-white">
              <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                <tr>
                  <th className="px-8 py-6 text-left text-lg font-bold text-gray-900 border-b border-gray-200">
                    Features
                  </th>
                  <th className="px-8 py-6 text-center border-b border-gray-200">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-lg font-bold text-gray-900">Starter</span>
                      <span className="text-sm text-gray-600">For small businesses</span>
                    </div>
                  </th>
                  <th className="px-8 py-6 text-center border-b border-gray-200">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-lg font-bold text-purple-600">Professional</span>
                      <span className="text-sm text-gray-600">Most popular</span>
                    </div>
                  </th>
                  <th className="px-8 py-6 text-center border-b border-gray-200">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-lg font-bold text-indigo-600">Enterprise</span>
                      <span className="text-sm text-gray-600">Large businesses</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 rounded-lg p-2">
                          <feature.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-900">{feature.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-center">
                      <span className="text-gray-700 font-medium">{feature.starter}</span>
                    </td>
                    <td className="px-8 py-4 text-center bg-gradient-to-b from-purple-50/30 to-transparent">
                      <span className="text-gray-700 font-medium">{feature.pro}</span>
                    </td>
                    <td className="px-8 py-4 text-center">
                      <span className="text-gray-700 font-medium">{feature.enterprise}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Comparison Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              All plans include a 30-day free trial. No credit card required to start.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
              COMMON QUESTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and plans
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, idx) => {
                const Icon = faq.icon;
                return (
                  <div key={idx} className="group cursor-pointer">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-3">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Contact Support
              </button>
              <button className="inline-flex items-center gap-3 border-2 border-blue-200 text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
                <RocketLaunchIcon className="h-5 w-5" />
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <SparklesIcon className="h-4 w-4" />
              READY TO TRANSFORM YOUR BUSINESS?
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Start Your Free <span className="text-yellow-200">Trial Today</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-12">
              Join thousands of successful businesses using Rino to streamline operations 
              and boost growth. No credit card required, no setup fees.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white text-gray-900 font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
                  <RocketLaunchIcon className="h-6 w-6" />
                  Start Free 30-Day Trial
                </div>
              </button>
              
              <button className="group bg-transparent text-white font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CurrencyDollarIcon className="h-6 w-6" />
                Talk to Sales
              </button>
            </div>
            
            {/* Guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                'No credit card required',
                '30-day free trial',
                'Cancel anytime'
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

export default PricingPage;