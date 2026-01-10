import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MissionValue {
  title: string;
  description: string;
  icon: string;
}

interface PersonalMissionProps {
  mission: string;
  vision: string;
  values: MissionValue[];
}

export default function PersonalMission({ mission, vision, values }: PersonalMissionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-brand-blue/5 to-brand-slate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card rounded-lg p-8 shadow-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg">
                <Icon name="RocketLaunchIcon" size={32} variant="solid" className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-headline font-semibold text-foreground">My Mission</h3>
            </div>
            <p className="text-lg text-secondary font-body leading-relaxed">
              {mission}
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-lg">
                <Icon name="EyeIcon" size={32} variant="solid" className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-headline font-semibold text-foreground">My Vision</h3>
            </div>
            <p className="text-lg text-secondary font-body leading-relaxed">
              {vision}
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-headline font-semibold text-foreground mb-4">
            Core Values
          </h3>
          <p className="text-secondary font-body max-w-2xl mx-auto">
            The principles that guide my work and define my approach to engineering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-interactive transition-smooth border border-border text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-full mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Icon name={value.icon as any} size={28} variant="outline" className="text-white" />
              </div>
              <h4 className="text-lg font-headline font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-secondary font-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}