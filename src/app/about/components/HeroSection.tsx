import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({ name, tagline, image, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-blue to-brand-slate py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-primary-foreground mb-6 leading-tight">
              {name}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 font-body mb-8 leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 font-body">Computer Engineering</p>
              </div>
              <div className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 font-body">Problem Solver</p>
              </div>
              <div className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 font-body">Innovator</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-elevated">
                <AppImage
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}