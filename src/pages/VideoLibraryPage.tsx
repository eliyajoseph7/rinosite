import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useVideos } from '../hooks/useVideos';
import { useVideoStats } from '../hooks/useVideoStats';
import { useVideoGroups } from '../hooks/useVideoGroups';
import { VideoCardShimmer, ShimmerLoader } from '../components/ShimmerLoader';
import heroBackground from '../assets/images/african-business.webp';
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
  const [selectedGroup, setSelectedGroup] = useState('__all_videos__');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'spotlight'>('masonry');
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  // Fetch data from API - ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  const { data: videoGroups, loading: groupsLoading, error: groupsError } = useVideoGroups();
  const { 
    data: videos, 
    pagination, 
    loading: videosLoading, 
    error: videosError, 
    loadMore, 
    goToPage 
  } = useVideos({ 
    group: selectedGroup === '__all_videos__' ? undefined : selectedGroup,
    search: searchTerm || undefined,
    per_page: 12
  });
  const { error: statsError } = useVideoStats();

  // Create icon mapping for API data
  const iconMap: { [key: string]: any } = useMemo(() => ({
    SparklesIcon,
    StarIcon,
    ChartBarIcon,
    CogIcon,
    TrophyIcon,
    FireIcon,
    UsersIcon,
    ClockIcon,
    BookOpenIcon,
    AcademicCapIcon,
    LightBulbIcon,
    ChatBubbleLeftRightIcon,
    ArrowTrendingUpIcon,
    EyeIcon,
    PlayIcon
  }), []);

  // Process video groups from API with icon mapping
  const processedVideoGroups = useMemo(() => {
    if (!videoGroups || videoGroups.length === 0) return [];
    
    return videoGroups.map(group => ({
      ...group,
      icon: iconMap[group.icon] || SparklesIcon,
    }));
  }, [videoGroups, iconMap]);

  const categoryGroups = useMemo(() => [
    {
      id: '__all_videos__',
      name: 'All Videos',
      icon: SparklesIcon,
      color: 'from-primary-500 to-primary-500',
      gradient: 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700',
      description: 'Complete collection of Rino app instructional videos',
      count: videos.length,
      bg: 'bg-gradient-to-br from-primary-50 to-primary-50'
    },
    ...processedVideoGroups
  ], [videos.length, processedVideoGroups]);

  // Since filtering is now handled by the backend API, we use videos directly
  const filteredVideos = videos;

  const featuredVideos = useMemo(() => filteredVideos.filter(v => v.featured).slice(0, 3), [filteredVideos]);
  const regularVideos = useMemo(() => filteredVideos.filter(v => !v.featured), [filteredVideos]);

  // Loading states will be handled inline with shimmer loaders

  // Show error state
  if (groupsError || videosError || statsError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-green-50/20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Failed to load video library</p>
          <p className="text-gray-600">{groupsError || videosError || statsError}</p>
        </div>
      </div>
    );
  }


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

    // const cardBg = categoryGroups.find(g => g.id === video.group)?.bg || 'bg-white';
    const cardBg = 'bg-white';

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
              src={video.thumbnail || `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&auto=format`} 
              alt={video.title} 
              className={`w-full ${heightClasses[size]} object-cover transition-transform duration-700 group-hover:scale-110`} 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Animated Play Button */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredVideo === video.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-primary-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-5 rounded-full shadow-2xl border border-white/20">
                  <PlayIcon className="h-8 w-8 text-green-600" />
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-green-100 to-primary-100 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {video.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-primary-700 transition-colors">
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
                        src="https://rino.co.tz/favicon.png"
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
                    className="h-full bg-gradient-to-r from-sky-500 to-primary-500 rounded-full transition-all duration-500"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-green-50/20">
      {/* Scroll Progress Bar */}

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
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
              <span>Video Learning Center</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span className="block">Master</span>
              <span className="">Rino <span className="text-primary-400">In Few Minutes</span></span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Transform your business with step-by-step video tutorials, real success stories, 
              and expert strategies from industry leaders.
              <span className="font-semibold text-primary-400"> Learn at your own pace</span> and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category Pills */}
            <div className="flex gap-3 overflow-x-auto pb-2 flex-1">
              {groupsLoading ? (
                [...Array(5)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-2xl">
                    <ShimmerLoader className="w-5 h-5 rounded" />
                    <ShimmerLoader className="h-4 w-20" />
                    <ShimmerLoader className="w-8 h-6 rounded-full" />
                  </div>
                ))
              ) : (
                categoryGroups.map((group) => {
                  const IconComponent = group.icon;
                  const isActive = selectedGroup === group.id;
                  return (
                    <button
                      key={group.id}
                      onClick={() => setSelectedGroup(group.id)}
                      className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                        isActive 
                          ? 'text-white shadow-xl scale-105 bg-gradient-to-r !from-primary-500 !via-primary-600 !to-primary-700' 
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
                })
              )}
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
                      ? 'bg-white text-primary-600 shadow-sm' 
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
            <div className="mb-8">
              {/* Enhanced Search Bar */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-900 rounded-2xl blur opacity-20"></div>
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
            </div>

            {/* Active Filters */}
            {(selectedGroup !== 'all' || searchTerm) && (
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="text-sm text-gray-600">Active filters:</div>
                {selectedGroup !== 'all' && (
                  <button
                    onClick={() => setSelectedGroup('all')}
                    className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-900 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
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
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-xl text-sm font-medium hover:bg-primary-100 transition-colors">
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
          {videosLoading ? (
            <div>
              {/* Shimmer Loading for different view modes */}
              {viewMode === 'masonry' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
                  {[...Array(12)].map((_, idx) => (
                    <VideoCardShimmer key={idx} />
                  ))}
                </div>
              )}

              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[...Array(12)].map((_, idx) => (
                    <VideoCardShimmer key={idx} />
                  ))}
                </div>
              )}

              {viewMode === 'spotlight' && (
                <div className="space-y-12">
                  {/* Main Featured Section Shimmer */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-100/30 to-primary-100/30 rounded-3xl blur-xl"></div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <VideoCardShimmer />
                      </div>
                      <div className="space-y-6">
                        <ShimmerLoader className="h-8 w-32" />
                        <ShimmerLoader className="h-4 w-full" />
                        <ShimmerLoader className="h-4 w-3/4" />
                        <div className="space-y-4">
                          <VideoCardShimmer />
                          <VideoCardShimmer />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* All Videos Grid Shimmer */}
                  <div>
                    <ShimmerLoader className="h-8 w-48 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {[...Array(8)].map((_, idx) => (
                        <VideoCardShimmer key={idx} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : filteredVideos.length > 0 ? (
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
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary-100/30 to-primary-100/30 rounded-3xl blur-xl"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-900 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-primary-100 to-primary-100 rounded-full flex items-center justify-center">
                  <MagnifyingGlassIcon className="h-12 w-12 text-primary-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No videos found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Try adjusting your search terms or browse our curated collections above
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGroup('__all_videos__');
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-900 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
              >
                <SparklesIcon className="h-5 w-5" />
                Show All Videos
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {pagination && pagination.last_page > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Showing {pagination.from} to {pagination.to} of {pagination.total} instructional videos
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToPage(pagination.current_page - 1)}
                  disabled={pagination.current_page === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
                    let pageNum;
                    if (pagination.last_page <= 5) {
                      pageNum = i + 1;
                    } else if (pagination.current_page <= 3) {
                      pageNum = i + 1;
                    } else if (pagination.current_page >= pagination.last_page - 2) {
                      pageNum = pagination.last_page - 4 + i;
                    } else {
                      pageNum = pagination.current_page - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          pageNum === pagination.current_page
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => goToPage(pagination.current_page + 1)}
                  disabled={pagination.current_page === pagination.last_page}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Load More Button (Alternative to pagination) */}
          {pagination && pagination.has_more_pages && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-900 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                <PlayIcon className="h-5 w-5" />
                Load More Videos
              </button>
            </div>
          )}

          {/* Learning Path CTA */}
          {filteredVideos.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-50 to-primary-50 rounded-3xl p-8 max-w-3xl mx-auto border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to become a Rino expert?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of users who have transformed their business with our comprehensive video tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center hidden">
                  <Link
                    to="/learning-path"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl"
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