import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, LockClosedIcon, ClockIcon, ArrowRightIcon, StarIcon, ArrowTrendingUpIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

const BusinessSuccessPage: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const successPath = [
    {
      id: 1,
      title: "Business Transformation Foundation",
      description: "Start your journey to business excellence with Rino",
      duration: "45 min",
      value: "Increase efficiency by 40%",
      lessons: 6,
      completed: 0,
      locked: false,
      icon: '🚀',
      color: 'from-green-500 to-emerald-600',
      roi: '300%',
      videos: [
        { id: 1, title: 'Business Process Optimization', duration: '5 min', completed: false, benefit: 'Save 10+ hours weekly' },
        { id: 2, title: 'Revenue Growth Strategies', duration: '8 min', completed: false, benefit: 'Increase sales by 25%' },
        { id: 3, title: 'Cost Reduction Techniques', duration: '6 min', completed: false, benefit: 'Cut operational costs by 20%' },
        { id: 4, title: 'Team Productivity Boost', duration: '4 min', completed: false, benefit: 'Improve team output by 35%' },
        { id: 5, title: 'Customer Experience Enhancement', duration: '7 min', completed: false, benefit: 'Boost satisfaction by 50%' },
        { id: 6, title: 'Competitive Advantage Setup', duration: '15 min', completed: false, benefit: 'Outperform competitors by 40%' }
      ]
    },
    {
      id: 2,
      title: "Sales Acceleration System",
      description: "Transform your sales process and revenue growth",
      duration: "60 min",
      value: "Boost revenue by 60%",
      lessons: 8,
      completed: 0,
      locked: true,
      icon: '💰',
      color: 'from-blue-500 to-cyan-600',
      roi: '450%',
      videos: [
        { id: 7, title: 'Sales Pipeline Automation', duration: '8 min', completed: false, benefit: 'Close deals 30% faster' },
        { id: 8, title: 'Lead Conversion Mastery', duration: '6 min', completed: false, benefit: 'Convert 40% more leads' },
        { id: 9, title: 'Customer Relationship Excellence', duration: '10 min', completed: false, benefit: 'Increase repeat business by 50%' },
        { id: 10, title: 'Sales Analytics Intelligence', duration: '12 min', completed: false, benefit: 'Make data-driven sales decisions' },
        { id: 11, title: 'Commission Optimization', duration: '8 min', completed: false, benefit: 'Maximize team motivation' },
        { id: 12, title: 'Cross-selling Strategies', duration: '10 min', completed: false, benefit: 'Increase average order value by 35%' },
        { id: 13, title: 'Sales Team Scaling', duration: '6 min', completed: false, benefit: 'Grow team 3x efficiently' },
        { id: 14, title: 'Revenue Forecasting Accuracy', duration: '10 min', completed: false, benefit: 'Improve forecasting by 80%' }
      ]
    },
    {
      id: 3,
      title: "Operational Excellence",
      description: "Streamline operations for maximum efficiency",
      duration: "50 min",
      value: "Reduce costs by 35%",
      lessons: 7,
      completed: 0,
      locked: true,
      icon: '⚙️',
      color: 'from-purple-500 to-pink-600',
      roi: '280%',
      videos: [
        { id: 15, title: 'Inventory Optimization System', duration: '10 min', completed: false, benefit: 'Reduce inventory costs by 30%' },
        { id: 16, title: 'Supply Chain Efficiency', duration: '8 min', completed: false, benefit: 'Cut supply chain costs by 25%' },
        { id: 17, title: 'Quality Control Automation', duration: '7 min', completed: false, benefit: 'Reduce defects by 60%' },
        { id: 18, title: 'Resource Allocation Mastery', duration: '6 min', completed: false, benefit: 'Optimize resource utilization by 40%' },
        { id: 19, title: 'Process Automation ROI', duration: '9 min', completed: false, benefit: 'Automate 70% of routine tasks' },
        { id: 20, title: 'Vendor Management Excellence', duration: '5 min', completed: false, benefit: 'Negotiate better terms by 20%' },
        { id: 21, title: 'Multi-location Optimization', duration: '5 min', completed: false, benefit: 'Manage locations 50% more efficiently' }
      ]
    },
    {
      id: 4,
      title: "Market Leadership Program",
      description: "Position your business for market dominance",
      duration: "75 min",
      value: "Achieve market leadership",
      lessons: 10,
      completed: 0,
      locked: true,
      icon: '👑',
      color: 'from-orange-500 to-red-600',
      roi: '600%',
      videos: [
        { id: 22, title: 'Competitive Intelligence System', duration: '15 min', completed: false, benefit: 'Outperform competitors by 50%' },
        { id: 23, title: 'Brand Positioning Strategy', duration: '12 min', completed: false, benefit: 'Increase brand value by 200%' },
        { id: 24, title: 'Market Expansion Tactics', duration: '20 min', completed: false, benefit: 'Enter new markets profitably' },
        { id: 25, title: 'Innovation Management Framework', duration: '10 min', completed: false, benefit: 'Launch innovations 3x faster' },
        { id: 26, title: 'Strategic Partnership Development', duration: '8 min', completed: false, benefit: 'Build high-value partnerships' },
        { id: 27, title: 'Digital Transformation Leadership', duration: '10 min', completed: false, benefit: 'Lead digital transformation in your industry' }
      ]
    }
  ];

  const totalProgress = successPath.reduce((acc, module) => {
    const moduleProgress = module.videos.filter(v => v.completed).length;
    return acc + moduleProgress;
  }, 0);

  const totalVideos = successPath.reduce((acc, module) => acc + module.videos.length, 0);
  const overallProgress = (totalProgress / totalVideos) * 100;

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Beautiful Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/40"></div>
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-r from-primary-200/20 to-primary-300/15 blur-3xl" style={{animation: 'morphing-blob 20s ease-in-out infinite'}}></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-l from-accent-200/20 to-primary-400/10 blur-3xl" style={{animation: 'morphing-blob 25s ease-in-out infinite reverse'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-xl">
              <ArrowTrendingUpIcon className="h-4 w-4" />
              <span>Business Success Path</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Transform Your <span className="gradient-text">Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Follow our proven success path to achieve remarkable business growth. 
              <span className="font-semibold text-primary-700"> Average 400% ROI</span> for businesses that complete the program.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Business Growth Potential</h2>
                <p className="text-gray-600">
                  Complete {totalProgress} of {totalVideos} strategies to transform your business
                </p>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{overallProgress.toFixed(0)}%</div>
                  <div className="text-sm text-gray-500">Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{totalProgress}</div>
                  <div className="text-sm text-gray-500">Strategies Learned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">400%</div>
                  <div className="text-sm text-gray-500">Avg. ROI</div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-4 rounded-full transition-all duration-500"
                  style={{width: `${overallProgress}%`}}
                ></div>
              </div>
            </div>
          </div>

          {/* Success Modules */}
          <div className="space-y-6">
            {successPath.map((module) => (
              <div 
                key={module.id} 
                className={`glass-card overflow-hidden transition-all duration-500 ${
                  module.locked ? 'opacity-75' : ''
                }`}
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-primary-50/50 transition-colors"
                  onClick={() => !module.locked && toggleModule(module.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Module Icon */}
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                        {module.locked && (
                          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                            <LockClosedIcon className="h-6 w-6 text-white" />
                          </div>
                        )}
                        {!module.locked && module.icon}
                      </div>
                      
                      {/* Module Info */}
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                          {module.completed === module.lessons && (
                            <CheckCircleSolid className="h-6 w-6 text-green-500" />
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{module.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <ArrowTrendingUpIcon className="h-4 w-4" />
                            <span>{module.value}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CurrencyDollarIcon className="h-4 w-4" />
                            <span>{module.roi} ROI</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <PlayIcon className="h-4 w-4" />
                            <span>{module.lessons} strategies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Arrow */}
                    <div className={`transform transition-transform duration-300 ${
                      expandedModule === module.id ? 'rotate-180' : ''
                    }`}>
                      <ArrowRightIcon className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Module Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${module.color} h-2 rounded-full transition-all duration-500`}
                        style={{width: `${(module.completed / module.lessons) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Content */}
                {expandedModule === module.id && !module.locked && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50/50">
                    <h4 className="font-semibold text-gray-900 mb-4">Business Growth Strategies</h4>
                    <div className="space-y-3">
                      {module.videos.map((video) => (
                        <Link 
                          key={video.id}
                          to={`/video/${video.id}`}
                          className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all cursor-pointer group block"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              video.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
                            } transition-colors`}>
                              {video.completed ? (
                                <CheckCircleSolid className="h-6 w-6" />
                              ) : (
                                <PlayIcon className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h5 className={`font-medium ${
                                video.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                              }`}>
                                {video.title}
                              </h5>
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-1 text-gray-500">
                                  <ClockIcon className="h-3 w-3" />
                                  <span>{video.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-green-600 font-medium">
                                  <ArrowTrendingUpIcon className="h-3 w-3" />
                                  <span>{video.benefit}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div 
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              video.completed
                                ? 'bg-gray-100 text-gray-500'
                                : 'bg-primary-500 text-white hover:bg-primary-600'
                            }`}
                          >
                            {video.completed ? 'Review' : 'Implement'}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of successful businesses that have achieved remarkable growth with Rino.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <UsersIcon className="h-4 w-4" />
                  <span>10,000+ businesses</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center space-x-1">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>400% avg ROI</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-4 w-4" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
              <button className="btn-primary px-8 py-3">
                <div className="flex items-center space-x-2">
                  <ArrowTrendingUpIcon className="h-5 w-5" />
                  <span>Start Your Transformation</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSuccessPage;
