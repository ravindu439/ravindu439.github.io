import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SocialLink {
  id: string;
  platform: string;
  icon: string;
  username: string;
  url: string;
  color: string;
  description: string;
}

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const socialLinks: SocialLink[] = [
    {
      id: '1',
      platform: 'LinkedIn',
      icon: 'UserGroupIcon',
      username: 'ravindu-lakshan',
      url: 'https://www.linkedin.com/in/ravindu-lakshan-45bb00278/',
      color: 'hover:bg-blue-50 hover:border-blue-500',
      description: 'Professional networking and career updates'
    },
    {
      id: '2',
      platform: 'GitHub',
      icon: 'CodeBracketIcon',
      username: 'ravindu439',
      url: 'https://github.com/ravindu439',
      color: 'hover:bg-slate-50 hover:border-slate-700',
      description: 'Open source contributions and code repositories'
    }
  ];

  return (
    <section className={`py-12 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Connect on Social Media
          </h2>
          <p className="text-lg text-secondary font-body max-w-2xl mx-auto">
            Follow me for tech insights, project updates, and industry discussions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card border-2 border-border rounded-lg p-6 transition-smooth ${link.color}`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon name={link.icon as any} size={24} variant="outline" className="text-primary" />
                <h3 className="text-lg font-headline font-semibold text-foreground">
                  {link.platform}
                </h3>
              </div>
              <p className="text-sm font-mono text-primary mb-2">
                {link.username}
              </p>
              <p className="text-xs text-secondary font-body">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;