import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import { 
  PlayIcon, 
  PauseIcon, 
  SpeakerWaveIcon, 
  SpeakerXMarkIcon,
  BackwardIcon,
  ForwardIcon,
  ArrowLeftIcon,
  ClockIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  UsersIcon
} from '@heroicons/react/24/outline';


const VideoPlayerPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(300); // Mock 5 minutes in seconds
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  // Fetch video data from API
  const { data, loading, error } = useVideo(parseInt(videoId || '1'));
  
  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading video...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error || !data.video) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Failed to load video</p>
          <p className="text-gray-600">{error || 'Video not found'}</p>
          <Link to="/videos" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
            ← Back to Video Library
          </Link>
        </div>
      </div>
    );
  }

  // Use API data
  const currentVideo = data.video;
  const relatedVideos = data.relatedVideos;

  // Category names mapping
  const categoryNames: { [key: string]: string } = {
    'sales': 'Sales Management',
    'inventory': 'Inventory Management',
    'purchasing': 'Purchasing & Procurement',
    'financial': 'Financial Management',
    'operations': 'Operations Management'
  };

  // Document resources for each category
  const categoryDocuments: { [key: string]: Array<{title: string, type: string, size: string, description: string}> } = {
    'sales': [
      { title: 'Sales Pipeline Template', type: 'PDF', size: '2.4 MB', description: 'Ready-to-use sales pipeline tracking template' },
      { title: 'Customer Segmentation Guide', type: 'PDF', size: '1.8 MB', description: 'Complete guide to customer segmentation strategies' },
      { title: 'Sales Team KPI Dashboard', type: 'Excel', size: '850 KB', description: 'Track sales team performance metrics' },
      { title: 'Negotiation Scripts Handbook', type: 'PDF', size: '3.2 MB', description: 'Proven negotiation scripts and techniques' }
    ],
    'inventory': [
      { title: 'Inventory Control Checklist', type: 'PDF', size: '1.2 MB', description: 'Comprehensive inventory control checklist' },
      { title: 'Supply Chain Optimization Guide', type: 'PDF', size: '2.8 MB', description: 'Step-by-step supply chain optimization' },
      { title: 'Multi-location Inventory Template', type: 'Excel', size: '1.5 MB', description: 'Manage inventory across multiple locations' },
      { title: 'JIT Implementation Guide', type: 'PDF', size: '2.1 MB', description: 'Complete Just-in-Time implementation guide' }
    ],
    'purchasing': [
      { title: 'Procurement Strategy Template', type: 'PDF', size: '1.9 MB', description: 'Strategic procurement planning template' },
      { title: 'Vendor Evaluation Scorecard', type: 'Excel', size: '980 KB', description: 'Evaluate and score vendor performance' },
      { title: 'Purchase Order Automation Guide', type: 'PDF', size: '2.3 MB', description: 'Automate purchase order processing' },
      { title: 'Cost Analysis Framework', type: 'Excel', size: '1.3 MB', description: 'Comprehensive cost analysis framework' }
    ],
    'financial': [
      { title: 'Financial Dashboard Template', type: 'Excel', size: '2.7 MB', description: 'Professional financial dashboard template' },
      { title: 'Cash Flow Management Guide', type: 'PDF', size: '1.6 MB', description: 'Optimize cash flow effectively' },
      { title: 'Budget Planning Template', type: 'Excel', size: '1.4 MB', description: 'Annual and quarterly budget planning' },
      { title: 'Financial Reporting Package', type: 'ZIP', size: '4.2 MB', description: 'Complete financial reporting templates' }
    ],
    'operations': [
      { title: 'Process Mapping Toolkit', type: 'PDF', size: '3.1 MB', description: 'Complete business process mapping toolkit' },
      { title: 'Quality Control Manual', type: 'PDF', size: '2.5 MB', description: 'Comprehensive quality control procedures' },
      { title: 'Workflow Automation Templates', type: 'ZIP', size: '3.8 MB', description: 'Ready-to-use workflow automation templates' },
      { title: 'Performance Management System', type: 'Excel', size: '1.7 MB', description: 'Track and improve operational performance' }
    ]
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const skipBackward = () => {
    setCurrentTime(Math.max(0, currentTime - 10));
  };

  const skipForward = () => {
    setCurrentTime(Math.min(duration, currentTime + 10));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Video Player */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50/40 pt-32 pb-12">
        <div className="container-custom">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link 
              to="/videos" 
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back to Video Library</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6">
                {/* Video Container */}
                <div className="relative bg-black rounded-2xl overflow-hidden mb-6">
                  <div className="aspect-video flex items-center justify-center">
                    <img 
                      src={currentVideo.thumbnail || `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&auto=format`} 
                      alt={currentVideo.title}
                      className="w-full h-full object-cover"
                    />
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={handlePlayPause}
                          className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-2xl hover:scale-110 transition-transform"
                        >
                          <PlayIcon className="h-12 w-12 text-primary-600" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-white mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={skipBackward}
                          className="text-white hover:text-primary-400 transition-colors"
                        >
                          <BackwardIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={handlePlayPause}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors"
                        >
                          {isPlaying ? (
                            <PauseIcon className="h-5 w-5 text-white" />
                          ) : (
                            <PlayIcon className="h-5 w-5 text-white" />
                          )}
                        </button>
                        <button
                          onClick={skipForward}
                          className="text-white hover:text-primary-400 transition-colors"
                        >
                          <ForwardIcon className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={handleMuteToggle}
                            className="text-white hover:text-primary-400 transition-colors"
                          >
                            {isMuted ? (
                              <SpeakerXMarkIcon className="h-5 w-5" />
                            ) : (
                              <SpeakerWaveIcon className="h-5 w-5" />
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <select
                          value={playbackRate}
                          onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                          className="bg-white/20 backdrop-blur-sm text-white text-sm px-2 py-1 rounded border border-white/30"
                        >
                          <option value="0.5">0.5x</option>
                          <option value="1">1x</option>
                          <option value="1.25">1.25x</option>
                          <option value="1.5">1.5x</option>
                          <option value="2">2x</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center text-xl">
                      {currentVideo.icon}
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-1">{currentVideo.title}</h1>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{currentVideo.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <EyeIcon className="h-4 w-4" />
                          <span>{currentVideo.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircleIcon className="h-4 w-4" />
                          <span>{currentVideo.category?.name || 'Unknown Category'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{currentVideo.description}</p>
                  {currentVideo.benefit && (
                    <div className="mt-4 flex items-center space-x-2 text-green-600 font-medium">
                      <ArrowTrendingUpIcon className="h-4 w-4" />
                      <span>{currentVideo.benefit}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    <div className="flex items-center space-x-2">
                      <PlayIcon className="h-4 w-4" />
                      <span>Watch Next Video</span>
                    </div>
                  </button>
                  <button className="px-6 py-3 border-2 border-primary-200 text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                    Share Video
                  </button>
                  <button className="px-6 py-3 border-2 border-primary-200 text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                    Download Notes
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - Related Videos & Resources */}
            <div className="lg:col-span-1 space-y-6">
              {/* Related Videos */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {currentVideo.category?.name || 'Related Videos'}
                  </h2>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{relatedVideos.length + 1} videos</span>
                  </div>
                </div>
                
                {/* Current Video Indicator */}
                <div className="mb-4 p-3 bg-primary-50 rounded-xl border border-primary-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-lg">
                      {currentVideo.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 text-sm truncate">{currentVideo.title}</h3>
                      <div className="flex items-center space-x-2 text-xs text-primary-700">
                        <ClockIcon className="h-3 w-3" />
                        <span>{currentVideo.duration}</span>
                        <span>•</span>
                        <span>Now Playing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Videos List */}
                <div className="space-y-3">
                  {relatedVideos.map((video) => (
                    <Link
                      key={video.id}
                      to={`/video/${video.id}`}
                      className="group block p-3 bg-white/60 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0 w-20 h-14 bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src={video.thumbnail || `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&auto=format`} 
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate group-hover:text-primary-600 transition-colors">
                            {video.title}
                          </h3>
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ClockIcon className="h-3 w-3" />
                              <span>{video.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <EyeIcon className="h-3 w-3" />
                              <span>{video.views}</span>
                            </div>
                          </div>
                          {video.benefit && (
                            <div className="mt-1 flex items-center space-x-1 text-xs text-green-600 font-medium">
                              <ArrowTrendingUpIcon className="h-3 w-3" />
                              <span>{video.benefit}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Documents & Resources */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Resources & Documents
                  </h2>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{categoryDocuments[currentVideo.category?.name || 'default']?.length || 0} files</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {categoryDocuments[currentVideo.category?.name || 'default']?.map((doc: any, index: number) => (
                    <div key={index} className="group p-3 bg-white/60 rounded-xl hover:bg-white/80 hover:shadow-sm transition-all cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                          doc.type === 'PDF' ? 'bg-red-100 text-red-600' :
                          doc.type === 'Excel' ? 'bg-green-100 text-green-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {doc.type === 'PDF' ? '📄' : doc.type === 'Excel' ? '📊' : '📁'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate group-hover:text-primary-600 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{doc.description}</p>
                          <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                            <span className="font-medium">{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full py-2 px-4 bg-primary-100 text-primary-700 rounded-lg font-medium text-sm hover:bg-primary-200 transition-colors">
                    Download All Resources ({categoryDocuments[currentVideo.category?.name || 'default']?.length || 0} files)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Learning Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete {currentVideo.category?.name || 'this category'} Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master every aspect of {currentVideo.category?.name || 'this category'.toLowerCase()} with our comprehensive resources, 
              tools, and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Transcript & Key Takeaways */}
            <div className="lg:col-span-2 space-y-8">
              {/* Video Transcript */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Video Transcript</h2>
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Download Transcript →
                  </button>
                </div>
                <div className="prose prose-gray max-w-none">
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg font-semibold text-gray-900">
                      Introduction to {currentVideo.title}
                    </p>
                    <p>
                      Welcome to this comprehensive guide on {currentVideo.title.toLowerCase()}. 
                      In this video, we'll explore the key strategies and techniques that will help you 
                      achieve remarkable results with Rino's {currentVideo.category?.name || 'this category'.toLowerCase()} features.
                    </p>
                    <p>
                      {currentVideo.description} This approach has been tested and proven by thousands of 
                      businesses worldwide, with an average success rate that exceeds industry standards.
                    </p>
                    
                    <div className="bg-primary-50 p-4 rounded-xl border border-primary-200 my-6">
                      <h3 className="font-semibold text-primary-900 mb-3">Key Learning Points:</h3>
                      <ul className="space-y-2 text-primary-800">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Understanding core concepts and best practices</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Step-by-step implementation strategies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Common pitfalls and how to avoid them</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Measuring success and ROI</span>
                        </li>
                      </ul>
                    </div>

                    <p>
                      Throughout this demonstration, you'll see practical examples and real-world applications 
                      that you can implement immediately in your own business context. We'll cover everything 
                      from initial setup to advanced optimization techniques.
                    </p>
                    
                    {currentVideo.benefit && (
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200 my-6">
                        <h3 className="font-semibold text-green-900 mb-2 flex items-center space-x-2">
                          <ArrowTrendingUpIcon className="h-5 w-5" />
                          <span>Expected Business Impact</span>
                        </h3>
                        <p className="text-green-800 font-medium">{currentVideo.benefit}</p>
                        <p className="text-green-700 text-sm mt-2">
                          Based on data from 1,000+ businesses implementing these strategies
                        </p>
                      </div>
                    )}

                    <p className="text-lg font-semibold text-gray-900">
                      Next Steps & Implementation
                    </p>
                    <p>
                      Now that you understand the concepts, it's time to take action. Download the resources 
                      provided in the sidebar, follow the implementation checklist, and join our community 
                      to connect with other business owners on the same journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Implementation Steps */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Implementation Roadmap</h2>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Assessment & Planning', description: 'Evaluate current processes and create implementation plan', duration: '1-2 days' },
                    { step: 2, title: 'Setup & Configuration', description: 'Configure Rino settings and customize for your business', duration: '2-3 days' },
                    { step: 3, title: 'Team Training', description: 'Train your team on new processes and tools', duration: '1 week' },
                    { step: 4, title: 'Go Live & Monitor', description: 'Launch implementation and monitor key metrics', duration: '1-2 weeks' },
                    { step: 5, title: 'Optimize & Scale', description: 'Refine processes and scale across organization', duration: 'Ongoing' }
                  ].map((item) => (
                    <div key={item.step} className="flex space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                          <ClockIcon className="h-3 w-3" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Additional Resources */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Start Implementation
                  </button>
                  <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Join Live Q&A Session
                  </button>
                </div>
              </div>

              {/* Community & Support */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Community & Support</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <UsersIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Active Community</h3>
                      <p className="text-xs text-gray-600">10,000+ members online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Expert Support</h3>
                      <p className="text-xs text-gray-600">24/7 assistance available</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Success Stories</h3>
                      <p className="text-xs text-gray-600">500+ case studies</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full py-2 px-4 bg-primary-100 text-primary-700 rounded-lg font-medium text-sm hover:bg-primary-200 transition-colors">
                    Join Community Forum
                  </button>
                </div>
              </div>

              {/* Related Categories */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Other Areas</h2>
                <div className="space-y-2">
                  {Object.entries(categoryNames)
                    .filter(([key]) => key !== currentVideo.category?.name)
                    .slice(0, 4)
                    .map(([key, name]) => (
                      <Link
                        key={key}
                        to={`/videos`}
                        className="flex items-center justify-between p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-900">{name}</span>
                        <span className="text-xs text-gray-500">4 videos</span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPlayerPage;
