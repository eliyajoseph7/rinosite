import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayIcon, 
  MagnifyingGlassIcon, 
  XMarkIcon,
  StarIcon,
  EyeIcon,
  FireIcon,
  SparklesIcon,
  ChartBarIcon,
  TrophyIcon,
  CogIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  BookOpenIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarSolid,
  FireIcon as FireSolid,
  HeartIcon as HeartSolid
} from '@heroicons/react/24/solid';

const VideoLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'spotlight'>('masonry');
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const categoryGroups = [
    { 
      id: 'all', 
      name: 'All Videos', 
      icon: SparklesIcon,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500',
      description: 'Complete collection of demos and success stories',
      count: 24,
      bg: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    { 
      id: 'essentials', 
      name: 'Essentials', 
      icon: StarIcon,
      color: 'from-yellow-500 to-orange-500',
      gradient: 'bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500',
      description: 'Must-watch videos for getting started',
      count: 6,
      bg: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    { 
      id: 'growth', 
      name: 'Growth Hacks', 
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500',
      description: 'Strategies to scale your business',
      count: 8,
      bg: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    { 
      id: 'operations', 
      name: 'Operations', 
      icon: CogIcon,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500',
      description: 'Streamline your daily operations',
      count: 6,
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    { 
      id: 'success', 
      name: 'Success Stories', 
      icon: TrophyIcon,
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500',
      description: 'Real customer success stories',
      count: 4,
      bg: 'bg-gradient-to-br from-indigo-50 to-purple-50'
    }
  ];

  const allVideos = [
    // Essentials
    { 
      id: 1, 
      title: 'Rino Platform Masterclass', 
      duration: '5 min', 
      category: 'essentials',
      group: 'essentials',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop',
      description: 'See how Rino transforms your business operations in minutes with AI-powered insights',
      icon: '🚀',
      views: '12.5K',
      likes: '1.2K',
      featured: true,
      rating: 4.9,
      progress: 85,
      level: 'Beginner',
      instructor: 'Alex Johnson',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 2, 
      title: 'Business Dashboard Deep Dive', 
      duration: '8 min', 
      category: 'essentials',
      group: 'essentials',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      description: 'Your command center for real-time business insights and decision making',
      icon: '📊',
      views: '8.2K',
      likes: '845',
      featured: true,
      rating: 4.8,
      progress: 60,
      level: 'Intermediate',
      instructor: 'Sarah Miller',
      instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 3, 
      title: 'Quick Start & Setup Guide', 
      duration: '3 min', 
      category: 'essentials',
      group: 'essentials',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
      description: 'Get up and running in under 5 minutes with step-by-step instructions',
      icon: '⚡',
      views: '15.3K',
      likes: '2.1K',
      featured: false,
      rating: 4.7,
      progress: 100,
      level: 'Beginner',
      instructor: 'Mike Chen',
      instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    // Growth Hacks
    { 
      id: 4, 
      title: 'Boost Sales by 40% in 30 Days', 
      duration: '8 min', 
      category: 'sales',
      group: 'growth',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      description: 'How our clients increased revenue using advanced Rino sales automation',
      icon: '💰',
      views: '6.7K',
      likes: '932',
      featured: true,
      rating: 4.9,
      progress: 45,
      level: 'Advanced',
      instructor: 'Emily Davis',
      instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 5, 
      title: 'Sales Pipeline Automation Pro', 
      duration: '6 min', 
      category: 'sales',
      group: 'growth',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      description: 'Close deals faster with intelligent automated sales workflows',
      icon: '📝',
      views: '5.1K',
      likes: '623',
      featured: false,
      rating: 4.6,
      progress: 30,
      level: 'Intermediate',
      instructor: 'David Wilson',
      instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 6, 
      title: 'Customer Retention Secrets Revealed', 
      duration: '7 min', 
      category: 'customers',
      group: 'growth',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      description: 'Increase customer lifetime value by 50% with proven strategies',
      icon: '👥',
      views: '9.2K',
      likes: '1.1K',
      featured: true,
      rating: 4.8,
      progress: 75,
      level: 'Intermediate',
      instructor: 'Lisa Brown',
      instructorAvatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 7, 
      title: 'Smart Customer Segmentation Mastery', 
      duration: '5 min', 
      category: 'customers',
      group: 'growth',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      description: 'Target the right customers with precision marketing automation',
      icon: '🎯',
      views: '3.6K',
      likes: '421',
      featured: false,
      rating: 4.5,
      progress: 20,
      level: 'Advanced',
      instructor: 'Robert Taylor',
      instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    // Operations
    { 
      id: 8, 
      title: 'Inventory Optimization Pro Tips', 
      duration: '6 min', 
      category: 'inventory',
      group: 'operations',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
      description: 'Cut inventory costs by 30% with AI-powered smart management',
      icon: '📦',
      views: '7.3K',
      likes: '856',
      featured: true,
      rating: 4.7,
      progress: 90,
      level: 'Intermediate',
      instructor: 'James Wilson',
      instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 9, 
      title: 'Real-time Stock Tracking Masterclass', 
      duration: '7 min', 
      category: 'inventory',
      group: 'operations',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop',
      description: 'Never lose a sale due to stockouts with predictive analytics',
      icon: '📈',
      views: '4.8K',
      likes: '512',
      featured: false,
      rating: 4.6,
      progress: 40,
      level: 'Beginner',
      instructor: 'Maria Garcia',
      instructorAvatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    // Success Stories
    { 
      id: 10, 
      title: 'Fashion Boutique: 42% Growth Story', 
      duration: '10 min', 
      category: 'success',
      group: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop',
      description: 'How Sarah transformed her boutique with Rino in just 3 months',
      icon: '🏪',
      views: '11.2K',
      likes: '1.5K',
      featured: true,
      rating: 4.9,
      progress: 100,
      level: 'All Levels',
      instructor: 'Sarah Johnson',
      instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    { 
      id: 11, 
      title: 'Restaurant Revolution: 35% Revenue Boost', 
      duration: '8 min', 
      category: 'success',
      group: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      description: 'Michael streamlined operations and grew revenue dramatically',
      icon: '🍽️',
      views: '8.9K',
      likes: '987',
      featured: true,
      rating: 4.8,
      progress: 100,
      level: 'All Levels',
      instructor: 'Michael Chen',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const filteredVideos = useMemo(() => {
    return allVideos.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGroup = selectedGroup === 'all' || video.group === selectedGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, selectedGroup]);

  const featuredVideos = filteredVideos.filter(v => v.featured).slice(0, 3);
  const regularVideos = filteredVideos.filter(v => !v.featured);

  const learningStats = [
    { value: '24', label: 'Courses', icon: BookOpenIcon, color: 'text-purple-600', bg: 'bg-purple-100' },
    { value: '50K+', label: 'Learners', icon: UsersIcon, color: 'text-pink-600', bg: 'bg-pink-100' },
    { value: '4.8', label: 'Avg Rating', icon: StarSolid, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { value: '98%', label: 'Satisfaction', icon: HeartSolid, color: 'text-red-600', bg: 'bg-red-100' }
  ];

  const renderVideoCard = (video: any, size: 'normal' | 'large' | 'small' = 'normal') => {
    const sizeClasses = {
      small: 'col-span-1',
      normal: 'col-span-1 md:col-span-2 lg:col-span-1',
      large: 'col-span-1 md:col-span-2 lg:col-span-2'
    };

    const heightClasses = {
      small: 'h-48',
      normal: 'h-56',
      large: 'h-72'
    };

    const cardBg = categoryGroups.find(g => g.id === video.group)?.bg || 'bg-white';

    return (
      <Link 
        key={video.id} 
        to={`/video/${video.id}`}
        className={`${sizeClasses[size]} group block relative`}
        onMouseEnter={() => setHoveredVideo(video.id)}
        onMouseLeave={() => setHoveredVideo(null)}
      >
        {/* Glass Effect Card */}
        <div className={`relative ${cardBg} rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl border border-gray-100 h-full`}>
          {/* Thumbnail Container */}
          <div className="relative overflow-hidden">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className={`w-full ${heightClasses[size]} object-cover transition-transform duration-700 group-hover:scale-110`} 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Animated Play Button */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredVideo === video.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-5 rounded-full shadow-2xl border border-white/20">
                  <PlayIcon className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </div>
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {video.featured && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-sm"></div>
                  <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <FireSolid className="h-3 w-3" />
                    Featured
                  </div>
                </div>
              )}
              <div className={`bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 ${video.bg}`}>
                {video.level}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-16 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-full overflow-hidden">
                <div 
                  className="h-1 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                  style={{ width: `${video.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                {video.duration}
              </div>
              <div className="flex gap-2">
                <div className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
                  <EyeIcon className="h-4 w-4" />
                  {video.views}
                </div>
                <div className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
                  <HeartSolid className="h-4 w-4 text-red-400" />
                  {video.likes}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {video.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-purple-700 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolid 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(video.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2 font-medium">{video.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img 
                        src={video.instructorAvatar} 
                        alt={video.instructor}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">{video.instructor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
              {video.description}
            </p>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${video.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 flex justify-between">
                  <span>Progress</span>
                  <span className="font-medium">{video.progress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-purple-50/20">
      {/* Scroll Progress Bar */}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50/40"></div>
          
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.15) 25%, rgba(139, 92, 246, 0.1) 50%, rgba(244, 114, 182, 0.15) 75%, rgba(168, 85, 247, 0.1) 100%)',
                backgroundSize: '400% 400%',
                animation: 'gradient-shift 15s ease infinite'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-300/20 rounded-full blur-3xl" style={{ animation: 'float 20s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl" style={{ animation: 'float 25s ease-in-out infinite reverse' }}></div>
          
          {/* Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-purple-700 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-purple-200">
              <SparklesIcon className="h-4 w-4" />
              <span>Video Learning Center</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
              <span className="block">Master</span>
              <span className="">Business <span className="text-gradient">Excellence</span></span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Transform your business with step-by-step video tutorials, real success stories, 
              and expert strategies from industry leaders.
              <span className="font-semibold text-purple-700"> Learn at your own pace</span> and achieve remarkable results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {learningStats.map((stat, idx) => (
                <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`${stat.bg} rounded-xl p-2`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
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

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category Pills */}
            <div className="flex gap-3 overflow-x-auto pb-2 flex-1">
              {categoryGroups.map((group) => {
                const IconComponent = group.icon;
                const isActive = selectedGroup === group.id;
                return (
                  <button
                    key={group.id}
                    onClick={() => setSelectedGroup(group.id)}
                    className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                      isActive 
                        ? 'text-white shadow-xl scale-105' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {isActive && (
                      <div className={`absolute inset-0 ${group.gradient} rounded-2xl`}></div>
                    )}
                    <div className="relative z-10 flex items-center gap-3">
                      <IconComponent className="h-5 w-5" />
                      <span>{group.name}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        isActive ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        {group.count}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-gray-100 rounded-xl p-1.5">
              {[
                { mode: 'masonry' as const, label: 'Masonry', icon: '⊞' },
                { mode: 'grid' as const, label: 'Grid', icon: '⊟' },
                { mode: 'spotlight' as const, label: 'Spotlight', icon: '⬡' }
              ].map(({ mode, label, icon }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    viewMode === mode 
                      ? 'bg-white text-purple-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="text-lg">{icon}</span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Enhanced Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center px-4">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search videos, topics, success stories, or instructors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 px-4 py-5 text-lg border-0 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <XMarkIcon className="h-5 w-5 text-gray-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex gap-3">
                {[
                  { label: 'Beginner', icon: AcademicCapIcon },
                  { label: 'Popular', icon: FireIcon },
                  { label: 'New', icon: SparklesIcon }
                ].map((filter) => (
                  <button
                    key={filter.label}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <filter.icon className="h-4 w-4" />
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {(selectedGroup !== 'all' || searchTerm) && (
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="text-sm text-gray-600">Active filters:</div>
                {selectedGroup !== 'all' && (
                  <button
                    onClick={() => setSelectedGroup('all')}
                    className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {categoryGroups.find(g => g.id === selectedGroup)?.name}
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                )}
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    Search: "{searchTerm}"
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedGroup === 'all' ? 'All Videos' : categoryGroups.find(g => g.id === selectedGroup)?.name}
              </h2>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold text-gray-900">{filteredVideos.length}</span> video{filteredVideos.length !== 1 ? 's' : ''} available
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium hover:bg-purple-100 transition-colors">
                <LightBulbIcon className="h-4 w-4" />
                Learning Path
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Community
              </button>
            </div>
          </div>

          {/* Video Grid */}
          {filteredVideos.length > 0 ? (
            <div>
              {/* Masonry View */}
              {viewMode === 'masonry' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
                  {/* Featured Videos */}
                  {featuredVideos.map((video, idx) => 
                    renderVideoCard(video, idx === 0 ? 'large' : 'normal')
                  )}
                  {/* Regular Videos */}
                  {regularVideos.map((video) => renderVideoCard(video, 'normal'))}
                </div>
              )}

              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos.map((video) => renderVideoCard(video, 'normal'))}
                </div>
              )}

              {/* Spotlight View */}
              {viewMode === 'spotlight' && (
                <div className="space-y-12">
                  {/* Main Featured Section */}
                  {featuredVideos[0] && (
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-3xl blur-xl"></div>
                      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          {renderVideoCard(featuredVideos[0], 'large')}
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-gray-900">Editor's Pick</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our top recommendations to accelerate your learning journey
                          </p>
                          <div className="space-y-4">
                            {featuredVideos.slice(1, 3).map((video) => renderVideoCard(video, 'normal'))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* All Videos Grid */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">All Learning Content</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {regularVideos.map((video) => renderVideoCard(video, 'normal'))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-20">
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <MagnifyingGlassIcon className="h-12 w-12 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No videos found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Try adjusting your search terms or browse our curated collections above
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGroup('all');
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
              >
                <SparklesIcon className="h-5 w-5" />
                Show All Videos
              </button>
            </div>
          )}

          {/* Learning Path CTA */}
          {filteredVideos.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 max-w-3xl mx-auto border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to become a Rino expert?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of users who have transformed their business with our comprehensive video tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/learning-path"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl"
                  >
                    <AcademicCapIcon className="h-5 w-5" />
                    Start Learning Path
                    <ArrowTrendingUpIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/community"
                    className="inline-flex items-center gap-3 border-2 border-purple-200 text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    <UsersIcon className="h-5 w-5" />
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VideoLibraryPage;