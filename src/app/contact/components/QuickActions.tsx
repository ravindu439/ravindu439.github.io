import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuickAction {
  id: string;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  color: string;
}

interface QuickActionsProps {
  className?: string;
}

const QuickActions = ({ className = '' }: QuickActionsProps) => {
  const quickActions: QuickAction[] = [
    {
      id: '1',
      icon: 'DocumentArrowDownIcon',
      title: 'Download Resume',
      description: 'Get my latest resume in PDF format',
      buttonText: 'Download PDF',
      buttonLink: '#',
      color: 'bg-blue-50 border-blue-200 hover:border-blue-500'
    },
    {
      id: '2',
      icon: 'CalendarDaysIcon',
      title: 'Schedule Meeting',
      description: 'Book a 30-minute consultation call',
      buttonText: 'View Calendar',
      buttonLink: '#',
      color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-500'
    },
    {
      id: '3',
      icon: 'NewspaperIcon',
      title: 'Newsletter',
      description: 'Subscribe for tech insights and updates',
      buttonText: 'Subscribe Now',
      buttonLink: '#',
      color: 'bg-purple-50 border-purple-200 hover:border-purple-500'
    }
  ];

  return (
    <section className={`py-12 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Quick Actions
          </h2>
          <p className="text-lg text-secondary font-body max-w-2xl mx-auto">
            Fast-track your inquiry with these convenient options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action) => (
            <div
              key={action.id}
              className={`bg-card border-2 rounded-lg p-6 transition-smooth ${action.color}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <Icon name={action.icon as any} size={28} variant="outline" className="text-primary" />
                </div>
                <h3 className="text-xl font-headline font-semibold text-foreground">
                  {action.title}
                </h3>
              </div>
              <p className="text-sm text-secondary font-body mb-6">
                {action.description}
              </p>
              <a
                href={action.buttonLink}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth shadow-card hover:shadow-interactive w-full justify-center"
              >
                <span>{action.buttonText}</span>
                <Icon name="ArrowRightIcon" size={18} variant="outline" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;