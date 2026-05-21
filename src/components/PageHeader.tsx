import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  category?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image, category }) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-brand-green" />
        )}
        <div className="absolute inset-0 bg-brand-warm-black/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          {category && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full w-fit mx-auto mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                {category}
              </span>
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
