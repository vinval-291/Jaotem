import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Jaotem Foundation | Changing Lives, Building Hope", 
  description = "A purpose-driven non-profit organization focused on impact, community development, empowerment, and humanitarian support.",
  image = "/og-image.jpg",
  url = "https://jaotemfoundation.org"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="https://i.postimg.cc/Kj5pR1k7/JAOTEM-LOGO-WITH-TEXT.png" />
      <link rel="shortcut icon" type="image/png" href="https://i.postimg.cc/Kj5pR1k7/JAOTEM-LOGO-WITH-TEXT.png" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
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
    </Helmet>
  );
};
