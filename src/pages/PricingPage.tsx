import React, { useState } from "react";
import {
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
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolid,
  CheckCircleIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { usePricingPlans } from "../hooks/usePricingPlans";
import { useFAQs } from "../hooks/useFAQs";
import { PricingCardShimmer, ShimmerLoader } from '../components/ShimmerLoader';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const {
    data: pricingPlans,
    loading: plansLoading,
    error: plansError,
  } = usePricingPlans();
  const { data: faqs, loading: faqsLoading, error: faqsError } = useFAQs();

  // Combine error states
  const error = plansError || faqsError;

  // Loading states will be handled inline with shimmer loaders

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">
            Failed to load pricing plans
          </p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // Icon mapping for API icon strings to React components
  const iconMap: { [key: string]: any } = {
    CheckCircleIcon,
    FireIcon,
    StarSolid,
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
    LockClosedIcon,
  };

  // Use only API data - no fallbacks
  const apiPlans = pricingPlans.map((plan) => ({
    ...plan,
    features: plan.features.map((feature) => ({
      ...feature,
      icon: iconMap[feature.icon] || CheckCircleIcon,
    })),
  }));

  const plans = apiPlans || [];

  // Process FAQs with icon mapping
  const apiFAQs = faqs.map((faq) => ({
    ...faq,
    icon: iconMap[faq.icon] || CheckCircleIcon,
  }));

  const faqData = apiFAQs || [];

  const stats = [
    { value: "10,000+", label: "Businesses Trust Us", icon: UsersIcon },
    { value: "99.9%", label: "Uptime SLA", icon: ShieldCheckIcon },
    { value: "24/7", label: "Support Available", icon: ClockIcon },
    { value: "30-day", label: "Money Back Guarantee", icon: CheckCircleIcon },
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
        {/* Beautiful Advanced Background */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/40"></div>
          
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100/30 via-transparent to-primary-100/20" style={{animation: 'gradient-shift 8s ease infinite'}}></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-100/20 via-transparent to-primary-200/30" style={{animation: 'gradient-shift 12s ease infinite reverse'}}></div>
          </div>
          
          {/* Large Morphing Blobs */}
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-primary-200/30 to-primary-300/20 blur-3xl" style={{animation: 'morphing-blob 20s ease-in-out infinite'}}></div>
          <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-l from-green-200/25 to-green-400/15 blur-3xl" style={{animation: 'morphing-blob 25s ease-in-out infinite reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-green-200/20 to-green-400/15 blur-3xl" style={{animation: 'morphing-blob 15s ease-in-out infinite'}}></div>
          
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
          {[...Array(15)].map((_, i) => (
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
              Choose the perfect plan for your business. All plans include our
              core features with no hidden fees. Start free, upgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-2xl p-2 mb-12 shadow-xl border border-gray-200">
              <span
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${!isAnnual ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" : "text-gray-600"}`}
              >
                Monthly
              </span>

              {/* Toggle Switch */}
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative mx-4 w-16 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 focus:outline-none transition-all duration-300"
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? "translate-x-10" : "translate-x-1"}`}
                ></div>
              </button>

              <span
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${isAnnual ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "text-gray-600"}`}
              >
                Annual
                <span className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-2">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
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
            {plansLoading ? (
              [...Array(3)].map((_, idx) => (
                <PricingCardShimmer key={idx} />
              ))
            ) : (
              plans.map((plan) => {
              const perMonth = isAnnual
                ? Math.round(plan.annualPrice / 12)
                : plan.monthlyPrice;

              return (
                <div
                  key={plan.id}
                  className={`relative group ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                  onMouseEnter={() => setHoveredPlan(plan.id.toString())}
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
                  <div
                    className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${plan.popular ? "shadow-2xl" : "shadow-xl"} ${hoveredPlan === plan.id.toString() ? "scale-105" : ""}`}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 ${plan.bg} opacity-50`}
                    ></div>

                    {/* Border Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl border-2 ${hoveredPlan === plan.id.toString() ? "border-blue-500/30" : "border-transparent"} transition-colors duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-gray-600 mb-6">{plan.tagline}</p>

                        {/* Price Display */}
                        <div className="mb-6">
                          <div className="flex items-baseline justify-center mb-2">
                            <span className="text-5xl font-bold text-gray-900">
                              ${perMonth}
                            </span>
                            <span className="text-gray-600 ml-2">/month</span>
                          </div>
                          {isAnnual && (
                            <div className="text-sm text-gray-500">
                              <span className="line-through">
                                ${plan.monthlyPrice}/month
                              </span>
                              <span className="ml-2 text-green-600 font-semibold">
                                Save $
                                {plan.monthlyPrice * 12 - plan.annualPrice}/year
                              </span>
                            </div>
                          )}
                          {!isAnnual && plan.annualPrice && (
                            <div className="text-sm text-blue-600 font-medium">
                              Switch to annual and save 20%
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <button
                          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${plan.popular ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105" : "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"} shadow-lg`}
                        >
                          {plan.popular
                            ? "Get Started Free"
                            : "Start Free Trial"}
                        </button>

                        <p className="text-sm text-gray-500 mt-4">
                          {isAnnual ? "Billed annually" : "Billed monthly"} •
                          30-day free trial
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          Everything included:
                        </h4>
                        <div className="space-y-3 mb-8">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <feature.icon className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {feature.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
              })
            )}
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
                  { icon: ShieldCheckIcon, text: "Bank-level Security" },
                  { icon: CloudIcon, text: "Daily Backups" },
                  { icon: DevicePhoneMobileIcon, text: "Mobile Apps" },
                  { icon: ClockIcon, text: "99.9% Uptime" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white rounded-xl p-4"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-2">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
              {faqsLoading ? (
                [...Array(6)].map((_, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <ShimmerLoader className="w-12 h-12 rounded-xl" />
                      <div className="flex-1">
                        <ShimmerLoader className="h-6 w-3/4 mb-3" />
                        <ShimmerLoader className="h-4 w-full mb-2" />
                        <ShimmerLoader className="h-4 w-5/6" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                faqData.map((faq, idx) => {
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
                })
              )}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <SparklesIcon className="h-4 w-4" />
              READY TO TRANSFORM YOUR BUSINESS?
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Start Your Free{" "}
              <span className="text-yellow-200">Trial Today</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 mb-12">
              Join thousands of successful businesses using Rino to streamline
              operations and boost growth. No credit card required, no setup
              fees.
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
                "No credit card required",
                "30-day free trial",
                "Cancel anytime",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3 text-white/80"
                >
                  <CheckCircleIcon className="h-5 w-5 text-green-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
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

export default PricingPage;
