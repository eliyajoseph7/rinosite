import React, { useState, useEffect } from 'react';
import { 
  DocumentTextIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  GlobeAltIcon,
  CogIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  status: 'published' | 'draft' | 'archived';
  template: string;
  lastModified: string;
  modifiedBy: string;
  views: number;
  isHomePage: boolean;
}

const PageManagementPage: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPage, setEditingPage] = useState<Page | null>(null);

  const templates = [
    { id: 'default', name: 'Default Template' },
    { id: 'landing', name: 'Landing Page' },
    { id: 'features', name: 'Features Page' },
    { id: 'pricing', name: 'Pricing Page' },
    { id: 'blog', name: 'Blog Post' }
  ];

  useEffect(() => {
    // Mock data - will be replaced with API calls
    setPages([
      {
        id: '1',
        title: 'Home',
        slug: '/',
        description: 'Welcome to Rino Business Suite',
        content: '<h1>Transform Your Business Intelligence</h1><p>Complete business management solution...</p>',
        metaTitle: 'Rino Business Suite - Transform Your Business Intelligence',
        metaDescription: 'Complete business management solution with advanced analytics and automation.',
        status: 'published',
        template: 'landing',
        lastModified: '2024-01-20',
        modifiedBy: 'Admin',
        views: 5420,
        isHomePage: true
      },
      {
        id: '2',
        title: 'Features',
        slug: '/features',
        description: 'Explore our powerful features',
        content: '<h1>Powerful Features</h1><p>Discover everything Rino has to offer...</p>',
        metaTitle: 'Features - Rino Business Suite',
        metaDescription: 'Explore the comprehensive features of Rino Business Suite.',
        status: 'published',
        template: 'features',
        lastModified: '2024-01-18',
        modifiedBy: 'Admin',
        views: 2100,
        isHomePage: false
      },
      {
        id: '3',
        title: 'Pricing',
        slug: '/pricing',
        description: 'Flexible pricing plans for every business',
        content: '<h1>Pricing Plans</h1><p>Choose the perfect plan for your business...</p>',
        metaTitle: 'Pricing - Rino Business Suite',
        metaDescription: 'Flexible pricing plans for businesses of all sizes.',
        status: 'published',
        template: 'pricing',
        lastModified: '2024-01-15',
        modifiedBy: 'Admin',
        views: 1800,
        isHomePage: false
      },
      {
        id: '4',
        title: 'About Us',
        slug: '/about',
        description: 'Learn more about our company',
        content: '<h1>About Rino</h1><p>We are dedicated to helping businesses succeed...</p>',
        metaTitle: 'About Us - Rino Business Suite',
        metaDescription: 'Learn more about Rino Business Suite and our mission.',
        status: 'draft',
        template: 'default',
        lastModified: '2024-01-10',
        modifiedBy: 'Admin',
        views: 0,
        isHomePage: false
      }
    ]);
  }, []);

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || page.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDeletePage = (id: string) => {
    const page = pages.find(p => p.id === id);
    if (page?.isHomePage) {
      alert('Cannot delete the home page');
      return;
    }
    if (confirm('Are you sure you want to delete this page?')) {
      setPages(pages.filter(p => p.id !== id));
    }
  };

  const handleDuplicatePage = (id: string) => {
    const page = pages.find(p => p.id === id);
    if (page) {
      const newPage = {
        ...page,
        id: Date.now().toString(),
        title: `${page.title} (Copy)`,
        slug: `${page.slug}-copy`,
        status: 'draft' as const,
        lastModified: new Date().toISOString().split('T')[0],
        views: 0,
        isHomePage: false
      };
      setPages([...pages, newPage]);
    }
  };

  const handleStatusChange = (id: string, status: Page['status']) => {
    setPages(pages.map(p => 
      p.id === id ? { ...p, status, lastModified: new Date().toISOString().split('T')[0] } : p
    ));
  };

  const getStatusBadge = (status: Page['status']) => {
    const styles = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800',
      archived: 'bg-gray-100 text-gray-800'
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Page Management</h1>
              <p className="text-gray-600 mt-1">Manage your website pages and content</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusIcon className="h-5 w-5" />
              Add Page
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Pages Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slug
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Template
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Modified
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <DocumentTextIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900">
                              {page.title}
                            </div>
                            {page.isHomePage && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                Home
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">
                            {page.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {page.slug}
                      </code>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {templates.find(t => t.id === page.template)?.name || page.template}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(page.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <EyeIcon className="h-4 w-4 mr-1" />
                        {page.views.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        <div>{page.lastModified}</div>
                        <div className="text-xs text-gray-500">by {page.modifiedBy}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingPage(page)}
                          className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                          title="Edit"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDuplicatePage(page.id)}
                          className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded transition-colors"
                          title="Duplicate"
                        >
                          <DocumentTextIcon className="h-4 w-4" />
                        </button>
                        <select
                          value={page.status}
                          onChange={(e) => handleStatusChange(page.id, e.target.value as Page['status'])}
                          className="text-xs px-2 py-1 border border-gray-300 rounded"
                        >
                          <option value="published">Publish</option>
                          <option value="draft">Draft</option>
                          <option value="archived">Archive</option>
                        </select>
                        {!page.isHomePage && (
                          <button
                            onClick={() => handleDeletePage(page.id)}
                            className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredPages.length === 0 && (
          <div className="text-center py-12">
            <DocumentTextIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No pages found</h3>
            <p className="text-gray-600 mb-4">Get started by creating your first page</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusIcon className="h-5 w-5" />
              Add Page
            </button>
          </div>
        )}
      </div>

      {/* Add/Edit Modal (placeholder) */}
      {(showAddModal || editingPage) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {editingPage ? 'Edit Page' : 'Add New Page'}
            </h2>
            <p className="text-gray-600 mb-6">Page editor with rich text editing will be implemented here</p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Page title"
                  defaultValue={editingPage?.title}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="/page-url"
                  defaultValue={editingPage?.slug}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                  placeholder="Page content (rich text editor will be here)"
                  defaultValue={editingPage?.content}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingPage(null);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingPage(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingPage ? 'Update Page' : 'Create Page'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageManagementPage;
