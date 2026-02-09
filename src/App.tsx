import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import SupportPage from './pages/SupportPage';
import DownloadPage from './pages/DownloadPage';
import VideoLibraryPage from './pages/VideoLibraryPage';
import BusinessSuccessPage from './pages/BusinessSuccessPage';
import VideoPlayerPage from './pages/VideoPlayerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollProgress />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/videos" element={<VideoLibraryPage />} />
            <Route path="/success" element={<BusinessSuccessPage />} />
            <Route path="/video/:videoId" element={<VideoPlayerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
