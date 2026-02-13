import React, { useState } from 'react';
import { 
  DevicePhoneMobileIcon,
  CloudArrowDownIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeAltIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowDownTrayIcon,
  CpuChipIcon,
  WifiIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  UsersIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarSolid,
  CheckCircleIcon,
  DevicePhoneMobileIcon as DevicePhoneMobileSolid,
  ComputerDesktopIcon as ComputerDesktopSolid
} from '@heroicons/react/24/solid';
import { useDownloadPlatforms } from '../hooks/useDownloadPlatforms';
import { ShimmerLoader } from '../components/ShimmerLoader';

const DownloadPage: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState('all');
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const { data: downloadPlatforms, loading, error } = useDownloadPlatforms();

  // Loading states will be handled inline with shimmer loaders

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Failed to load download options</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const platformStats = [
    { value: '500K+', label: 'Downloads', icon: ArrowDownTrayIcon },
    { value: '4.8', label: 'Avg Rating', icon: StarSolid },
    { value: '99.9%', label: 'Uptime', icon: ShieldCheckIcon },
    { value: '24/7', label: 'Support', icon: ClockIcon }
  ];

  // Icon mapping for API icon strings to React components
  const iconMap: { [key: string]: any } = {
    DevicePhoneMobileSolid,
    ComputerDesktopSolid,
    CloudArrowDownIcon,
    GlobeAltIcon,
  };

  // Use only API data - no fallbacks
  const apiDownloadOptions = downloadPlatforms.map(platform => ({
    ...platform,
    icon: iconMap[platform.icon] || DevicePhoneMobileSolid,
  }));

  const downloadOptions = apiDownloadOptions || [];
      

  const platformFeatures = [
    { icon: ShieldCheckIcon, text: 'Complete offline functionality', highlight: '100% offline capable' },
    { icon: WifiIcon, text: 'Real-time cloud synchronization', highlight: 'Instant sync' },
    { icon: LockClosedIcon, text: 'Military-grade data encryption', highlight: 'AES-256 encryption' },
    { icon: ArrowsPointingOutIcon, text: 'Multi-device seamless switching', highlight: '5+ devices' },
    { icon: SparklesIcon, text: 'Automatic background updates', highlight: 'Always latest' },
    { icon: CpuChipIcon, text: 'AI-powered performance optimization', highlight: 'Smart caching' }
  ];

  const systemRequirements = {
    mobile: {
      title: 'Mobile Requirements',
      icon: DevicePhoneMobileSolid,
      color: 'from-blue-500 to-cyan-500',
      ios: [
        { spec: 'OS Version', value: 'iOS 12.0 or later', icon: CheckCircleIcon },
        { spec: 'Device', value: 'iPhone 6s or newer', icon: CheckCircleIcon },
        { spec: 'RAM', value: '2GB minimum', icon: CheckCircleIcon },
        { spec: 'Storage', value: '1GB free space', icon: CheckCircleIcon },
        { spec: 'Chipset', value: 'A9 or newer', icon: CheckCircleIcon }
      ],
      android: [
        { spec: 'OS Version', value: 'Android 7.0 (API 24)', icon: CheckCircleIcon },
        { spec: 'RAM', value: '3GB minimum', icon: CheckCircleIcon },
        { spec: 'Storage', value: '1GB free space', icon: CheckCircleIcon },
        { spec: 'Processor', value: 'ARMv7 or newer', icon: CheckCircleIcon },
        { spec: 'Screen', value: '720p or higher', icon: CheckCircleIcon }
      ]
    },
    pwa: {
      title: 'PWA Requirements',
      icon: ComputerDesktopSolid,
      color: 'from-purple-500 to-pink-500',
      windows: [
        { spec: 'OS Version', value: 'Windows 10 (64-bit)', icon: CheckCircleIcon },
        { spec: 'RAM', value: '4GB minimum', icon: CheckCircleIcon },
        { spec: 'Storage', value: '2GB free space', icon: CheckCircleIcon },
        { spec: 'Processor', value: 'Intel Core i3 or equivalent', icon: CheckCircleIcon },
        { spec: 'Graphics', value: 'DirectX 11 compatible', icon: CheckCircleIcon }
      ],
      mac: [
        { spec: 'OS Version', value: 'macOS 10.14 or later', icon: CheckCircleIcon },
        { spec: 'RAM', value: '4GB minimum', icon: CheckCircleIcon },
        { spec: 'Storage', value: '2GB free space', icon: CheckCircleIcon },
        { spec: 'Processor', value: 'Intel or Apple Silicon', icon: CheckCircleIcon },
        { spec: 'Resolution', value: '1280x800 minimum', icon: CheckCircleIcon }
      ],
      linux: [
        { spec: 'OS Version', value: 'Ubuntu 18.04 or equivalent', icon: CheckCircleIcon },
        { spec: 'RAM', value: '4GB minimum', icon: CheckCircleIcon },
        { spec: 'Storage', value: '2GB free space', icon: CheckCircleIcon },
        { spec: 'Processor', value: 'x64 processor', icon: CheckCircleIcon },
        { spec: 'Graphics', value: 'OpenGL 3.3 compatible', icon: CheckCircleIcon }
      ]
    }
  };

  const quickStartSteps = [
    {
      step: '1',
      title: 'Download & Install',
      description: 'Get Rino for your platform in under 2 minutes.',
      icon: CloudArrowDownIcon,
      time: '2 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '2',
      title: 'Create Your Account',
      description: 'Sign up for free and customize your business profile.',
      icon: UsersIcon,
      time: '3 min',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '3',
      title: 'Start Selling',
      description: 'Add products and begin managing your business.',
      icon: ChartBarIcon,
      time: '5 min',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredPlatforms = activePlatform === 'all' 
    ? downloadOptions 
    : downloadOptions.filter(platform => platform.slug === activePlatform);

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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100/30 via-transparent to-accent-100/20" style={{animation: 'gradient-shift 8s ease infinite'}}></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-100/20 via-transparent to-primary-200/30" style={{animation: 'gradient-shift 12s ease infinite reverse'}}></div>
          </div>
          
          {/* Large Morphing Blobs */}
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-primary-200/30 to-primary-300/20 blur-3xl" style={{animation: 'morphing-blob 20s ease-in-out infinite'}}></div>
          <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-l from-primary-200/25 to-primary-400/15 blur-3xl" style={{animation: 'morphing-blob 25s ease-in-out infinite reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary-200/20 to-primary-200/15 blur-3xl" style={{animation: 'morphing-blob 15s ease-in-out infinite'}}></div>
          
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
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-tr from-green-300/60 to-primary-300/40 rounded-full blur-md" style={{animation: 'bubble-float 16s ease-in-out infinite'}}></div>
          
          {/* Device Icons */}
          <div className="absolute top-1/4 left-1/4">
            <DevicePhoneMobileSolid className="w-16 h-16 text-primary-500/20" />
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <ComputerDesktopSolid className="w-20 h-20 text-accent-500/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-700 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-primary-200">
              <SparklesIcon className="h-4 w-4" />
              <span>Available on All Platforms • 500K+ Downloads</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
              <span className="block">Get Rino on</span>
              <span className="text-gradient">All Your Devices</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Experience the power of comprehensive business management across all platforms. 
              Start your free 30-day trial and transform how you work.
            </p>
            
            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {platformStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-2">
                        <Icon className="h-6 w-6 text-blue-600" />
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
            
            {/* Quick Access */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'Free 30-day trial',
                'No credit card required',
                'Cancel anytime',
                'All features included'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Filter */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex gap-3 overflow-x-auto pb-2 flex-1">
              <button
                onClick={() => setActivePlatform('all')}
                className={`px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activePlatform === 'all'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Platforms
              </button>
              {downloadOptions.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatform(platform.id.toString())}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activePlatform === platform.id.toString()
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <platform.icon className="h-5 w-5" />
                  <span>{platform.platform}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-gradient">Platform</span>
            </h2>
            <p className="text-xl text-gray-600">
              Download Rino on your preferred platform and start transforming your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              [...Array(4)].map((_, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl h-full">
                  <div className="flex justify-between items-start mb-6">
                    <ShimmerLoader className="w-16 h-16 rounded-2xl" />
                    <ShimmerLoader className="w-12 h-6 rounded-full" />
                  </div>
                  <ShimmerLoader className="h-6 w-3/4 mb-2" />
                  <ShimmerLoader className="h-4 w-full mb-4" />
                  <ShimmerLoader className="h-4 w-2/3 mb-6" />
                  <div className="mt-auto">
                    <ShimmerLoader className="h-12 w-full rounded-xl" />
                  </div>
                </div>
              ))
            ) : (
              filteredPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div 
                  key={platform.id}
                  className="group relative h-full"
                  onMouseEnter={() => setHoveredPlatform(platform.id.toString())}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  {/* Card Container */}
                  <div className={`relative ${platform.bg} rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl h-full`}>
                    {/* Border Glow */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${platform.color.split('-')[1]}-500/30 transition-colors duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Platform Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${platform.color} shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                          {platform.deviceCount}
                        </div>
                      </div>
                      
                      {/* Platform Info */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.platform}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{platform.description}</p>
                      
                      {/* Specs */}
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Version</span>
                          <span className="font-medium text-gray-900">{platform.version}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Size</span>
                          <span className="font-medium text-gray-900">{platform.size}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Requirements</span>
                          <span className="font-medium text-gray-900 text-right">{platform.requirements}</span>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarSolid 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{platform.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({platform.reviews})</span>
                      </div>
                      
                      {/* Platform Features */}
                      {hoveredPlatform === platform.id.toString() && (
                        <div className="mb-6 pt-4 border-t border-gray-200">
                          <div className="text-xs font-medium text-gray-700 mb-2">Platform Features:</div>
                          <div className="flex flex-wrap gap-1">
                            {platform.features.map((feature, idx) => (
                              <span key={idx} className="text-xs bg-white/80 px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Download Button */}
                      <button className={`mt-auto w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 ${platform.gradient} hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2`}>
                        <CloudArrowDownIcon className="h-5 w-5" />
                        {platform.storeName}
                      </button>
                    </div>
                  </div>
                </div>
              );
              })
            )}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <SparklesIcon className="h-4 w-4" />
                WHY DOWNLOAD RINO?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built for <span className="text-gradient">Performance</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our native applications deliver the fastest, most reliable experience 
                with features optimized for each platform.
              </p>
              
              <div className="space-y-4">
                {platformFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-2">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-1">{feature.text}</div>
                        <div className="text-sm text-blue-600 font-medium">{feature.highlight}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 inline-flex mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Secure by Design</h3>
                  <p className="text-sm text-gray-600">End-to-end encryption with zero-knowledge architecture</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-600">Always Protected</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 inline-flex mb-4">
                    <WifiIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Sync</h3>
                  <p className="text-sm text-gray-600">Instant synchronization across all your devices</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-blue-600">Live Updates</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 inline-flex mb-4">
                    <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile First</h3>
                  <p className="text-sm text-gray-600">Optimized for mobile with offline capability</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-600">Always Available</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 inline-flex mb-4">
                    <CpuChipIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Optimized</h3>
                  <p className="text-sm text-gray-600">Smart performance optimization for your device</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-orange-600">Maximum Speed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              System <span className="text-gradient">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ensure your device is ready for the best Rino experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Requirements */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${systemRequirements.mobile.color}`}>
                  <systemRequirements.mobile.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{systemRequirements.mobile.title}</h3>
                  <p className="text-gray-600">Minimum requirements for mobile devices</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* iOS */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    iOS
                  </h4>
                  <div className="space-y-3">
                    {systemRequirements.mobile.ios.map((req, idx) => {
                      const Icon = req.icon;
                      return (
                        <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{req.spec}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">{req.value}</span>
                            <Icon className="h-4 w-4 text-green-500" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Android */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    Android
                  </h4>
                  <div className="space-y-3">
                    {systemRequirements.mobile.android.map((req, idx) => {
                      const Icon = req.icon;
                      return (
                        <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{req.spec}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">{req.value}</span>
                            <Icon className="h-4 w-4 text-green-500" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* PWA Requirements */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${systemRequirements.pwa.color}`}>
                  <systemRequirements.pwa.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{systemRequirements.pwa.title}</h3>
                  <p className="text-gray-600">Requirements for Progressive Web App</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Windows */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-center">Windows</h4>
                  <div className="space-y-2">
                    {systemRequirements.pwa.windows.map((req, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">{req.spec}</div>
                        <div className="text-sm font-medium text-gray-900">{req.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* macOS */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-center">macOS</h4>
                  <div className="space-y-2">
                    {systemRequirements.pwa.mac.map((req, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">{req.spec}</div>
                        <div className="text-sm font-medium text-gray-900">{req.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Linux */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-center">Linux</h4>
                  <div className="space-y-2">
                    {systemRequirements.pwa.linux.map((req, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">{req.spec}</div>
                        <div className="text-sm font-medium text-gray-900">{req.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <RocketLaunchIcon className="h-4 w-4" />
              QUICK START GUIDE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started in <span className="text-gradient">Minutes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Start using Rino and transform your business in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Step Connector */}
                  {index < quickStartSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-3/4 w-full h-1 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                  )}
                  
                  {/* Step Card */}
                  <div className="relative bg-white rounded-3xl p-8 border border-gray-200 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} inline-flex mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Time Estimate */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4" />
                      <span>{step.time}</span>
                    </div>
                    
                    {/* Hover Action */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                        <span>Get started</span>
                        <ArrowRightIcon className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <RocketLaunchIcon className="h-4 w-4" />
              READY TO GET STARTED?
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Download Rino <span className="text-yellow-200">Today</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-12">
              Join 500,000+ businesses that trust Rino to power their operations. 
              Start your free 30-day trial and experience the difference.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white text-gray-900 font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
                  <CloudArrowDownIcon className="h-6 w-6" />
                  Download Now
                </div>
              </button>
              
              <button className="group bg-transparent text-white font-bold text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <ArrowRightIcon className="h-6 w-6" />
                View Pricing
              </button>
            </div>
            
            {/* Platform Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {downloadOptions.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div key={platform.id} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{platform.platform}</span>
                  </div>
                );
              })}
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

export default DownloadPage;