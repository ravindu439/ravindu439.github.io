import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTACard {
  title: string;
  description: string;
  icon: string;
  href: string;
  buttonText: string;
  variant: 'primary' | 'secondary' | 'accent';
}

interface CTAPathwaysProps {
  className?: string;
}

const CTAPathways = ({ className = '' }: CTAPathwaysProps) => {
  const pathways: CTACard[] = [
    {
      title: 'Explore My Work',
      description: 'Browse through my portfolio of projects, case studies, and technical implementations across various domains.',
      icon: 'BriefcaseIcon',
      href: '/portfolio',
      buttonText: 'View Portfolio',
      variant: 'primary',
    },
    {
      title: 'Technical Skills',
      description: 'Discover my technology stack, proficiency levels, certifications, and continuous learning journey.',
      icon: 'CodeBracketSquareIcon',
      href: '/skills',
      buttonText: 'Explore Skills',
      variant: 'secondary',
    },
    {
      title: 'Get in Touch',
      description: 'Ready to collaborate? Let\'s discuss how we can work together on your next project or opportunity.',
      icon: 'EnvelopeIcon',
      href: '/contact',
      buttonText: 'Contact Me',
      variant: 'accent',
    },
  ];

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/90';
      case 'accent':
        return 'bg-brand-cta text-white hover:bg-brand-cta/90';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  };

  return (
    <section className={`bg-background py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Whether you're a recruiter, fellow developer, or potential collaborator, find the information you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-interactive transition-smooth flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name={pathway.icon as any} size={32} variant="solid" className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                {pathway.title}
              </h3>
              
              <p className="text-base font-body text-muted-foreground mb-6 flex-grow">
                {pathway.description}
              </p>
              
              <Link
                href={pathway.href}
                className={`inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-cta font-semibold transition-smooth shadow-card hover:shadow-interactive ${getVariantClasses(pathway.variant)}`}
              >
                <span>{pathway.buttonText}</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <p className="text-sm font-body text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 color text-foreground ">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-body font-medium hover:bg-blue-200 transition-smooth"
            >
              <Icon name="UserIcon" size={16} variant="outline" />
              <span>About Me</span>
            </Link>
            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-body font-medium hover:bg-blue-200 transition-smooth shadow-card"
            >
              <Icon name="ArrowDownTrayIcon" size={16} variant="outline" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAPathways;