import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SocialProofMetric {
  icon: string;
  value: string;
  label: string;
  color: string;
}

interface SocialProofSectionProps {
  className?: string;
}

const SocialProofSection = ({ className = '' }: SocialProofSectionProps) => {
  const metrics: SocialProofMetric[] = [
    {
      icon: 'AcademicCapIcon',
      value: '3.59',
      label: 'Current GPA',
      color: 'text-primary',
    },
    {
      icon: 'CodeBracketIcon',
      value: '5',
      label: 'Major Projects',
      color: 'text-brand-emerald',
    },
    {
      icon: 'CpuChipIcon',
      value: '2',
      label: 'Hardware Projects',
      color: 'text-accent',
    },
    {
      icon: 'UserGroupIcon',
      value: '4th',
      label: 'Year Undergraduate',
      color: 'text-brand-blue',
    },
  ];

  return (
    <section className={`bg-muted py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Academic & Project Highlights
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Building expertise through consistent learning and hands-on project experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-interactive transition-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={metric.icon as any} size={32} variant="solid" className={metric.color} />
              </div>
              <div className="text-3xl font-headline font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-body text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;