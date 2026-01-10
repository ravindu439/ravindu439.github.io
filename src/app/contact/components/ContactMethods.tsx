import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
  link: string;
  color: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      icon: 'EnvelopeIcon',
      title: 'Email',
      description: 'For detailed inquiries and project proposals',
      value: 'ravindulakshan.rl2002@gmail.com',
      link: 'mailto:ravindulakshan.rl2002@gmail.com',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: '2',
      icon: 'PhoneIcon',
      title: 'Phone',
      description: 'Quick calls and urgent matters',
      value: '+94 77 419 3013',
      link: 'tel:+94774193013',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      id: '3',
      icon: 'MapPinIcon',
      title: 'Location',
      description: 'Based in Peradeniya, Sri Lanka',
      value: 'Peradeniya, Sri Lanka',
      link: 'https://www.google.com/maps?q=University+of+Peradeniya,+Sri+Lanka&z=14',
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    }
  ];

  return (
    <section className={`py-12 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Direct Contact Methods
          </h2>
          <p className="text-lg text-secondary font-body max-w-2xl mx-auto">
            Choose the communication channel that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target={method.id === '3' ? '_blank' : undefined}
              rel={method.id === '3' ? 'noopener noreferrer' : undefined}
              className="group bg-card border-2 border-border rounded-lg p-6 hover:shadow-interactive transition-smooth hover:border-primary"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${method.color} mb-4 group-hover:scale-110 transition-smooth`}>
                <Icon name={method.icon as any} size={28} variant="outline" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-secondary font-body mb-3">
                {method.description}
              </p>
              <p className="text-base font-mono font-medium text-primary">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;