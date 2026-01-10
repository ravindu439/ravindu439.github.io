import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PhilosophyPrinciple {
  title: string;
  description: string;
  icon: string;
}

interface EngineeringPhilosophyProps {
  principles: PhilosophyPrinciple[];
}

export default function EngineeringPhilosophy({ principles }: EngineeringPhilosophyProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Engineering Philosophy
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            My approach to problem-solving combines technical excellence with practical impact, \
            always keeping the end user and business value at the forefront of every decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-interactive transition-smooth border border-border group"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-brand-blue rounded-lg mb-6 group-hover:scale-110 transition-smooth">
                <Icon name={principle.icon as any} size={36} variant="outline" className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="text-secondary font-body leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}