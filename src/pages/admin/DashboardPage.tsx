import React, { useState, useEffect } from 'react';
import { 
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  CogIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarSolid,
  HeartIcon as HeartSolid
} from '@heroicons/react/24/solid';

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    totalViews: 0,
    totalUsers: 0,
    totalVideos: 0,
    totalPages: 0,
    conversionRate: 0,
    avgRating: 0
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'video', title: 'New video uploaded', time: '2 hours ago', user: 'Admin' },
    { id: 2, type: 'page', title: 'Features page updated', time: '5 hours ago', user: 'Admin' },
    { id: 3, type: 'user', title: 'New user registered', time: '1 day ago', user: 'System' },
  ]);

  useEffect(() => {
    // Mock data - will be replaced with API calls
    setStats({
      totalViews: 15420,
      totalUsers: 892,
      totalVideos: 24,
      totalPages: 8,
      conversionRate: 3.2,
      avgRating: 4.8
    });
  }, []);

  const statCards = [
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      icon: EyeIcon,
      color: 'from-blue-500 to-cyan-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      icon: UsersIcon,
      color: 'from-purple-500 to-pink-500',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Videos',
      value: stats.totalVideos,
      icon: VideoCameraIcon,
      color: 'from-orange-500 to-red-500',
      change: '+2',
      changeType: 'positive'
    },
    {
      title: 'Pages',
      value: stats.totalPages,
      icon: DocumentTextIcon,
      color: 'from-green-500 to-emerald-500',
      change: '0',
      changeType: 'neutral'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your rinosite content and analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export Data
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'video' ? 'bg-red-100' :
                    activity.type === 'page' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'video' && <VideoCameraIcon className="h-5 w-5 text-red-600" />}
                    {activity.type === 'page' && <DocumentTextIcon className="h-5 w-5 text-blue-600" />}
                    {activity.type === 'user' && <UsersIcon className="h-5 w-5 text-green-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                <VideoCameraIcon className="h-5 w-5" />
                <span className="font-medium">Add New Video</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                <DocumentTextIcon className="h-5 w-5" />
                <span className="font-medium">Edit Page Content</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                <UsersIcon className="h-5 w-5" />
                <span className="font-medium">Manage Users</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                <ChartBarIcon className="h-5 w-5" />
                <span className="font-medium">View Analytics</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <CogIcon className="h-5 w-5" />
                <span className="font-medium">Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <StarSolid className="h-5 w-5 text-yellow-500" />
                <span className="text-2xl font-bold text-gray-900">{stats.avgRating}</span>
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</span>
              </div>
              <p className="text-gray-600">Conversion Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <HeartSolid className="h-5 w-5 text-red-500" />
                <span className="text-2xl font-bold text-gray-900">2.4K</span>
              </div>
              <p className="text-gray-600">Total Likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
