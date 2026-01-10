'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = [
    'Engineering solutions that matter',
    'Where technical excellence meets real-world impact',
    'Building the future through thoughtful code',
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const currentTagline = taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTagline.length) {
          setDisplayedText(currentTagline.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTaglineIndex, isHydrated]);

  return (
    <section className={`relative bg-gradient-to-br from-primary via-brand-blue to-brand-slate text-primary-foreground py-24 lg:py-32 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
              <span className="text-sm font-body font-medium">Available for Opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                Hi, I'm <span className="text-accent">Ravindu Lakshan</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-white/90">
                4th Year Computer Engineering Undergraduate
              </h2>
            </div>

            <div className="h-20 flex items-center">
              <p className="text-xl sm:text-2xl font-body text-white/80 min-h-[3rem]">
                {isHydrated ? (
                  <>
                    {displayedText}
                    <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse"></span>
                  </>
                ) : (
                  taglines[0]
                )}
              </p>
            </div>

            <p className="text-lg font-body text-white/70 max-w-xl">
              Passionate about Computer Architecture, Embedded Systems, and Neuromorphic Computing. Hands-on experience in Machine Learning, Computer Vision, and Full-Stack Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-cta text-white rounded-lg font-cta font-semibold hover:bg-brand-cta/90 transition-smooth shadow-interactive hover:shadow-elevated"
              >
                <Icon name="BriefcaseIcon" size={20} variant="outline" />
                <span>View projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-body font-semibold hover:bg-white/20 transition-smooth border border-white/20"
              >
                <Icon name="EnvelopeIcon" size={20} variant="outline" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative lg:block hidden">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-brand-emerald rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-elevated">
              <div className="w-full h-full bg-gradient-to-br from-brand-slate to-primary flex items-center justify-center">
                <AppImage 
                  src="/assets/images/profile.png" 
                  alt="Profile" 
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-interactive animate-bounce">
                <Icon name="CodeBracketIcon" size={32} variant="solid" className="text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent rounded-xl p-4 shadow-interactive animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Icon name="CpuChipIcon" size={32} variant="solid" className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;