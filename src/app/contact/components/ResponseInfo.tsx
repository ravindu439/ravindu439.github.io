import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ResponseInfoProps {
  className?: string;
}

const ResponseInfo = ({ className = '' }: ResponseInfoProps) => {
  const responseDetails = [
    {
      id: '1',
      icon: 'ClockIcon',
      title: 'Response Time',
      description: 'I typically respond within 24-48 hours during business days'
    },
    {
      id: '2',
      icon: 'CalendarIcon',
      title: 'Availability',
      description: 'Open to full-time, contract, and freelance opportunities'
    },
    {
      id: '3',
      icon: 'GlobeAltIcon',
      title: 'Time Zone',
      description: 'Pacific Time (PST/PDT) - Available for global collaboration'
    },
    {
      id: '4',
      icon: 'ShieldCheckIcon',
      title: 'Privacy',
      description: 'Your information is secure and never shared with third parties'
    }
  ];

  return (
    <section className={`py-12 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary/5 to-brand-blue/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-foreground mb-3">
              What to Expect
            </h2>
            <p className="text-base text-secondary font-body">
              Communication preferences and response expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseDetails.map((detail) => (
              <div key={detail.id} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <Icon name={detail.icon as any} size={24} variant="outline" className="text-primary" />
                </div>
                <h3 className="text-base font-headline font-semibold text-foreground mb-2">
                  {detail.title}
                </h3>
                <p className="text-sm text-secondary font-body">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponseInfo;