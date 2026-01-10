import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-brand-blue to-brand-slate text-primary-foreground py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="EnvelopeIcon" size={40} variant="outline" className="text-primary-foreground" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 font-body leading-relaxed">
            Whether you're looking to hire, collaborate, or just connect—I'm always excited to discuss new opportunities and innovative projects. Choose your preferred way to reach out below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;