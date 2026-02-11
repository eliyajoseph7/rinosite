import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Front Site Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

// Front Site Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import SupportPage from './pages/SupportPage';
import DownloadPage from './pages/DownloadPage';
import VideoLibraryPage from './pages/VideoLibraryPage';
import VideoPlayerPage from './pages/VideoPlayerPage';

// Front Site Layout Wrapper
const FrontSiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <ScrollProgress />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Front Site Routes */}
        <Route path="/" element={
          <FrontSiteLayout>
            <HomePage />
          </FrontSiteLayout>
        } />
        <Route path="/features" element={
          <FrontSiteLayout>
            <FeaturesPage />
          </FrontSiteLayout>
        } />
        <Route path="/pricing" element={
          <FrontSiteLayout>
            <PricingPage />
          </FrontSiteLayout>
        } />
        <Route path="/support" element={
          <FrontSiteLayout>
            <SupportPage />
          </FrontSiteLayout>
        } />
        <Route path="/download" element={
          <FrontSiteLayout>
            <DownloadPage />
          </FrontSiteLayout>
        } />
        <Route path="/videos" element={
          <FrontSiteLayout>
            <VideoLibraryPage />
          </FrontSiteLayout>
        } />
        <Route path="/video/:videoId" element={
          <FrontSiteLayout>
            <VideoPlayerPage />
          </FrontSiteLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
