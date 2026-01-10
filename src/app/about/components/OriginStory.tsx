import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface OriginStoryProps {
  story: string;
  milestones: StoryMilestone[];
}

export default function OriginStory({ story, milestones }: OriginStoryProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            My Engineering Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            {story}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-interactive transition-smooth border border-border"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={milestone.icon as any} size={32} variant="solid" className="text-primary" />
              </div>
              <div className="text-sm font-mono text-accent mb-2">{milestone.year}</div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {milestone.title}
              </h3>
              <p className="text-secondary font-body leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}