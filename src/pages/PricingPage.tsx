import React, { useState } from "react";
import heroBackground from '../assets/images/african-business.webp';
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
              <span>Transparent Pricing • No Hidden Fees</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span className="block">Simple, Flexible</span>
              <span className="text-primary-400">Pricing Plans</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Choose the perfect plan for your business. All plans include our
              core features with no hidden fees. Start free, upgrade anytime.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
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
            </div> */}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle - Centered */}
          <div className="flex justify-center mb-16 max-w-6xl mx-auto">
            <div className="inline-flex items-center bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
              <span
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${!isAnnual ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg" : "text-gray-600"}`}
              >
                Monthly
              </span>

              {/* Toggle Switch */}
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative mx-3 w-14 h-7 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 focus:outline-none transition-all duration-300"
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? "translate-x-8" : "translate-x-1"}`}
                ></div>
              </button>

              <span
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${isAnnual ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg" : "text-gray-600"}`}
              >
                Annual
                <span className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

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
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-50"></div>
                        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
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
                            <span className="text-3xl font-bold text-gray-900">
                              TSH {perMonth.toLocaleString()}
                            </span>
                            <span className="text-gray-600 ml-2">/month</span>
                          </div>
                          {isAnnual && (
                            <div className="text-sm text-green-600 font-semibold">
                              Save TSH {(plan.monthlyPrice * 12 - plan.annualPrice).toLocaleString()}/year
                            </div>
                          )}
                          {!isAnnual && plan.annualPrice && (
                            <div className="text-sm text-blue-600 font-medium">
                              Switch to annual and save 20%
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <a
                          href="https://app.rino.co.tz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${plan.popular ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-2xl hover:scale-105" : "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"} shadow-lg flex items-center justify-center`}
                        >
                          {plan.popular
                            ? "Get Started Free"
                            : "Start Free Trial"}
                        </a>

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
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Contact Support
              </button>
              <button className="inline-flex items-center gap-3 border-2 border-primary-200 text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                <RocketLaunchIcon className="h-5 w-5" />
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              <a href="https://app.rino.co.tz" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white text-gray-900 font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
                  <RocketLaunchIcon className="h-6 w-6" />
                  Start Free 30-Day Trial
                </div>
              </a>

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
