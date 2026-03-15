import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Front Site Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

// Front Site Pages - Code Splitting with React.lazy
const HomePage = lazy(() => import('./pages/HomePage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const VideoLibraryPage = lazy(() => import('./pages/VideoLibraryPage'));
const VideoPlayerPage = lazy(() => import('./pages/VideoPlayerPage'));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
