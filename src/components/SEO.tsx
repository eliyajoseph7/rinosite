import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Rino Mfumo wa Biashara - Complete Business Management Software for SMEs in Tanzania',
  description = 'Transform your business with Rino - the all-in-one business management platform for SMEs in Tanzania. Manage inventory, sales, customers, accounting, and more. Start your free 30-day trial today!',
  keywords = 'business management software Tanzania, SME software, inventory management, POS system, accounting software, CRM Tanzania, business suite, Rino, point of sale, stock management',
  image = 'https://rino.co.tz/og-image.jpg',
  url = 'https://rino.co.tz/',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Rino Mfumo wa Biashara",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android, Windows",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "TZS",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "description": "30-day free trial"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "500"
          },
          "description": description,
          "url": url,
          "image": image,
          "publisher": {
            "@type": "Organization",
            "name": "Rino Mfumo wa Biashara",
            "url": "https://rino.co.tz",
            "logo": {
              "@type": "ImageObject",
              "url": "https://rino.co.tz/logo.png"
            }
          }
        })}
      </script>
    </Helmet>
  );
};
