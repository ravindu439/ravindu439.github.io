'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Story {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  date: string;
}

interface BehindTheScenesProps {
  stories: Story[];
}

export default function BehindTheScenes({ stories }: BehindTheScenesProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Behind the Scenes
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            Personal insights, learning experiences, and the human side of my engineering journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-interactive transition-smooth border border-border group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-body font-semibold">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-secondary font-mono mb-3">{story.date}</p>
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {story.title}
                </h3>
                <p className="text-secondary font-body leading-relaxed mb-4">
                  {story.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-smooth">
                  <span>Read More</span>
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedStory && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <div
              className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={selectedStory.image}
                  alt={selectedStory.imageAlt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-interactive hover:bg-muted transition-smooth"
                >
                  <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-body font-semibold">
                    {selectedStory.category}
                  </span>
                  <span className="text-sm text-secondary font-mono">{selectedStory.date}</span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-foreground mb-6">
                  {selectedStory.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-secondary font-body leading-relaxed whitespace-pre-line">
                    {selectedStory.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}