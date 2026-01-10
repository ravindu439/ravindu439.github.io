'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
  icon: string;
  type: 'education' | 'work' | 'achievement';
}

interface CareerTimelineProps {
  events: TimelineEvent[];
}

export default function CareerTimeline({ events }: CareerTimelineProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-brand-blue';
      case 'work':
        return 'bg-brand-emerald';
      case 'achievement':
        return 'bg-accent';
      default:
        return 'bg-primary';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Career Timeline
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            A journey of continuous learning, growth, and impactful contributions to the field of computer engineering.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                <div className="md:ml-20">
                  <div className={`absolute left-8 w-4 h-4 rounded-full ${getTypeColor(event.type)} border-4 border-background hidden md:block -translate-x-1/2`}></div>
                  
                  <div className="bg-card rounded-lg shadow-card hover:shadow-interactive transition-smooth border border-border overflow-hidden">
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`flex items-center justify-center w-12 h-12 ${getTypeColor(event.type)} rounded-lg flex-shrink-0`}>
                            <Icon name={event.icon as any} size={24} variant="outline" className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-mono text-accent font-semibold">{event.year}</span>
                              <span className="px-3 py-1 bg-muted rounded-full text-xs font-body text-secondary capitalize">
                                {event.type}
                              </span>
                            </div>
                            <h3 className="text-xl font-headline font-semibold text-foreground mb-1">
                              {event.title}
                            </h3>
                            <p className="text-secondary font-body">{event.organization}</p>
                          </div>
                        </div>
                        <Icon
                          name="ChevronDownIcon"
                          size={24}
                          variant="outline"
                          className={`text-secondary transition-smooth flex-shrink-0 ${
                            expandedId === event.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {expandedId === event.id && (
                      <div className="px-6 pb-6 pt-2 border-t border-border">
                        <p className="text-secondary font-body leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}