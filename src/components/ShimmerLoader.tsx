import React from 'react';

interface ShimmerLoaderProps {
  className?: string;
}

export const ShimmerLoader: React.FC<ShimmerLoaderProps> = ({ className = '' }) => (
  <div 
    className={`rounded ${className}`}
    style={{
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s ease-in-out infinite'
    }}
  >
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `
    }} />
  </div>
);

// Video Card Shimmer
export const VideoCardShimmer: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
    {/* Thumbnail */}
    <ShimmerLoader className="w-full h-48" />
    
    <div className="p-6">
      {/* Title */}
      <ShimmerLoader className="h-6 w-3/4 mb-3" />
      
      {/* Description */}
      <ShimmerLoader className="h-4 w-full mb-2" />
      <ShimmerLoader className="h-4 w-2/3 mb-4" />
      
      {/* Meta info */}
      <div className="flex items-center justify-between">
        <ShimmerLoader className="h-4 w-20" />
        <ShimmerLoader className="h-4 w-16" />
      </div>
    </div>
  </div>
);

// Feature Card Shimmer
export const FeatureCardShimmer: React.FC = () => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    {/* Icon */}
    <ShimmerLoader className="w-16 h-16 rounded-2xl mb-6" />
    
    {/* Title */}
    <ShimmerLoader className="h-6 w-3/4 mb-4" />
    
    {/* Description */}
    <ShimmerLoader className="h-4 w-full mb-2" />
    <ShimmerLoader className="h-4 w-5/6 mb-2" />
    <ShimmerLoader className="h-4 w-2/3" />
  </div>
);

// Pricing Card Shimmer
export const PricingCardShimmer: React.FC = () => (
  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
    {/* Header */}
    <div className="text-center mb-8">
      <ShimmerLoader className="h-6 w-24 mx-auto mb-4" />
      <ShimmerLoader className="h-12 w-32 mx-auto mb-2" />
      <ShimmerLoader className="h-4 w-20 mx-auto" />
    </div>
    
    {/* Features */}
    <div className="space-y-4 mb-8">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <ShimmerLoader className="w-5 h-5 rounded-full" />
          <ShimmerLoader className="h-4 flex-1" />
        </div>
      ))}
    </div>
    
    {/* Button */}
    <ShimmerLoader className="h-12 w-full rounded-xl" />
  </div>
);

// List Item Shimmer
export const ListItemShimmer: React.FC = () => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
    <ShimmerLoader className="w-12 h-12 rounded-xl" />
    <div className="flex-1">
      <ShimmerLoader className="h-5 w-3/4 mb-2" />
      <ShimmerLoader className="h-4 w-1/2" />
    </div>
    <ShimmerLoader className="w-8 h-8 rounded-lg" />
  </div>
);

// Grid Shimmer (for video grids, feature grids, etc.)
interface GridShimmerProps {
  columns?: number;
  rows?: number;
  CardComponent?: React.FC;
}

export const GridShimmer: React.FC<GridShimmerProps> = ({ 
  columns = 3, 
  rows = 2, 
  CardComponent = VideoCardShimmer 
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-${Math.min(columns, 3)} lg:grid-cols-${columns} gap-6`}>
    {[...Array(columns * rows)].map((_, i) => (
      <CardComponent key={i} />
    ))}
  </div>
);

// Hero Section Shimmer
export const HeroShimmer: React.FC = () => (
  <div className="text-center max-w-4xl mx-auto">
    {/* Badge */}
    <ShimmerLoader className="h-8 w-48 mx-auto rounded-full mb-6" />
    
    {/* Title */}
    <ShimmerLoader className="h-12 w-full mb-4" />
    <ShimmerLoader className="h-12 w-3/4 mx-auto mb-6" />
    
    {/* Description */}
    <ShimmerLoader className="h-6 w-full mb-3" />
    <ShimmerLoader className="h-6 w-5/6 mx-auto mb-8" />
    
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <ShimmerLoader className="h-12 w-40 rounded-xl" />
      <ShimmerLoader className="h-12 w-32 rounded-xl" />
    </div>
  </div>
);

// Stats Shimmer
export const StatsShimmer: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="text-center">
        <ShimmerLoader className="h-8 w-16 mx-auto mb-2" />
        <ShimmerLoader className="h-4 w-20 mx-auto" />
      </div>
    ))}
  </div>
);

// Navigation Shimmer
export const NavigationShimmer: React.FC = () => (
  <div className="flex items-center justify-between p-4">
    <ShimmerLoader className="h-8 w-24" />
    <div className="flex gap-6">
      {[...Array(5)].map((_, i) => (
        <ShimmerLoader key={i} className="h-6 w-16" />
      ))}
    </div>
    <ShimmerLoader className="h-10 w-24 rounded-lg" />
  </div>
);
