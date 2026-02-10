import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import AdminLayout from './components/admin/AdminLayout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import SupportPage from './pages/SupportPage';
import DownloadPage from './pages/DownloadPage';
import VideoLibraryPage from './pages/VideoLibraryPage';
import BusinessSuccessPage from './pages/BusinessSuccessPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
// Admin Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import VideoManagementPage from './pages/admin/VideoManagementPage';
import PageManagementPage from './pages/admin/PageManagementPage';
import SettingsPage from './pages/admin/SettingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollProgress />
        <Header />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/videos" element={<VideoLibraryPage />} />
            <Route path="/success" element={<BusinessSuccessPage />} />
            <Route path="/video/:videoId" element={<VideoPlayerPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={
              <AdminLayout>
                <DashboardPage />
              </AdminLayout>
            } />
            <Route path="/admin/videos" element={
              <AdminLayout>
                <VideoManagementPage />
              </AdminLayout>
            } />
            <Route path="/admin/pages" element={
              <AdminLayout>
                <PageManagementPage />
              </AdminLayout>
            } />
            <Route path="/admin/settings" element={
              <AdminLayout>
                <SettingsPage />
              </AdminLayout>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
