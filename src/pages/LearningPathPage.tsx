import React, { useState } from 'react';
import { PlayIcon, CheckCircleIcon, LockClosedIcon, ClockIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

const LearningPathPage: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const learningPath = [
    {
      id: 1,
      title: "Getting Started with Rino",
      description: "Learn the fundamentals and set up your account",
      duration: "45 min",
      lessons: 6,
      completed: 0,
      locked: false,
      icon: '🚀',
      color: 'from-green-500 to-emerald-600',
      videos: [
        { id: 1, title: 'Account Setup', duration: '5 min', completed: false },
        { id: 2, title: 'Dashboard Overview', duration: '8 min', completed: false },
        { id: 3, title: 'Basic Navigation', duration: '6 min', completed: false },
        { id: 4, title: 'Profile Settings', duration: '4 min', completed: false },
        { id: 5, title: 'Team Setup', duration: '7 min', completed: false },
        { id: 6, title: 'First Steps', duration: '15 min', completed: false }
      ]
    },
    {
      id: 2,
      title: "Sales Management",
      description: "Master sales processes and customer relationships",
      duration: "60 min",
      lessons: 8,
      completed: 0,
      locked: true,
      icon: '💰',
      color: 'from-blue-500 to-cyan-600',
      videos: [
        { id: 7, title: 'Sales Pipeline Setup', duration: '8 min', completed: false },
        { id: 8, title: 'Creating Sales Orders', duration: '6 min', completed: false },
        { id: 9, title: 'Customer Management', duration: '10 min', completed: false },
        { id: 10, title: 'Sales Reports', duration: '12 min', completed: false },
        { id: 11, title: 'Commission Tracking', duration: '8 min', completed: false },
        { id: 12, title: 'Sales Analytics', duration: '10 min', completed: false },
        { id: 13, title: 'Follow-up Management', duration: '6 min', completed: false },
        { id: 14, title: 'Sales Team Collaboration', duration: '10 min', completed: false }
      ]
    },
    {
      id: 3,
      title: "Inventory Control",
      description: "Efficiently manage your inventory and stock",
      duration: "50 min",
      lessons: 7,
      completed: 0,
      locked: true,
      icon: '📦',
      color: 'from-purple-500 to-pink-600',
      videos: [
        { id: 15, title: 'Inventory Setup', duration: '10 min', completed: false },
        { id: 16, title: 'Stock Management', duration: '8 min', completed: false },
        { id: 17, title: 'Purchase Orders', duration: '7 min', completed: false },
        { id: 18, title: 'Stock Alerts', duration: '6 min', completed: false },
        { id: 19, title: 'Inventory Reports', duration: '9 min', completed: false },
        { id: 20, title: 'Barcode Integration', duration: '5 min', completed: false },
        { id: 21, title: 'Multi-location Management', duration: '5 min', completed: false }
      ]
    },
    {
      id: 4,
      title: "Advanced Features",
      description: "Unlock the full potential of Rino",
      duration: "75 min",
      lessons: 10,
      completed: 0,
      locked: true,
      icon: '⚡',
      color: 'from-orange-500 to-red-600',
      videos: [
        { id: 22, title: 'Advanced Analytics', duration: '15 min', completed: false },
        { id: 23, title: 'Custom Reports', duration: '12 min', completed: false },
        { id: 24, title: 'API Integration', duration: '20 min', completed: false },
        { id: 25, title: 'Automation Rules', duration: '10 min', completed: false },
        { id: 26, title: 'Advanced Security', duration: '8 min', completed: false },
        { id: 27, title: 'Performance Optimization', duration: '10 min', completed: false }
      ]
    }
  ];

  const totalProgress = learningPath.reduce((acc, module) => {
    const moduleProgress = module.videos.filter(v => v.completed).length;
    return acc + moduleProgress;
  }, 0);

  const totalVideos = learningPath.reduce((acc, module) => acc + module.videos.length, 0);
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
              <StarIcon className="h-4 w-4" />
              <span>Structured Learning Path</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Start <span className="gradient-text">Learning</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Follow our structured learning path to master Rino step by step. 
              <span className="font-semibold text-primary-700"> Track your progress</span> and unlock new modules as you advance.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Learning Progress</h2>
                <p className="text-gray-600">
                  Complete {totalProgress} of {totalVideos} lessons to become a Rino expert
                </p>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{overallProgress.toFixed(0)}%</div>
                  <div className="text-sm text-gray-500">Overall Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{totalProgress}</div>
                  <div className="text-sm text-gray-500">Lessons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{totalVideos - totalProgress}</div>
                  <div className="text-sm text-gray-500">Lessons Remaining</div>
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

          {/* Learning Modules */}
          <div className="space-y-6">
            {learningPath.map((module) => (
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
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <PlayIcon className="h-4 w-4" />
                            <span>{module.lessons} lessons</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircleIcon className="h-4 w-4" />
                            <span>{module.completed}/{module.lessons} completed</span>
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
                    <h4 className="font-semibold text-gray-900 mb-4">Module Lessons</h4>
                    <div className="space-y-3">
                      {module.videos.map((video) => (
                        <div 
                          key={video.id}
                          className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all cursor-pointer group"
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
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <ClockIcon className="h-3 w-3" />
                                <span>{video.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          <button 
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              video.completed
                                ? 'bg-gray-100 text-gray-500'
                                : 'bg-primary-500 text-white hover:bg-primary-600'
                            }`}
                          >
                            {video.completed ? 'Review' : 'Start'}
                          </button>
                        </div>
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
                Ready to start your journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Begin with the first module and progress through the learning path at your own pace.
              </p>
              <button className="btn-primary px-8 py-3">
                <div className="flex items-center space-x-2">
                  <PlayIcon className="h-5 w-5" />
                  <span>Start First Lesson</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPathPage;
