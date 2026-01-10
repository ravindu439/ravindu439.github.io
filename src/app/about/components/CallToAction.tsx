import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CallToAction() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-brand-blue to-brand-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-primary-foreground mb-6">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-xl text-primary-foreground/90 font-body leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you're looking for a collaborator, team member, or technical partner, \
          I'm always excited to discuss new opportunities and innovative projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-cta text-white rounded-lg text-lg font-cta font-semibold hover:bg-brand-cta/90 transition-smooth shadow-interactive hover:shadow-elevated"
          >
            <Icon name="EnvelopeIcon" size={24} variant="solid" />
            <span>Get in Touch</span>
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-lg text-lg font-cta font-semibold hover:bg-primary-foreground/90 transition-smooth shadow-interactive hover:shadow-elevated"
          >
            <Icon name="BriefcaseIcon" size={24} variant="solid" />
            <span>View My Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}