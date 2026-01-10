import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactFormSection from './components/ContactFormSection';
import SocialLinks from './components/SocialLinks';

import ResponseInfo from './components/ResponseInfo';

export const metadata: Metadata = {
  title: 'Contact - TechFolio Pro',
  description: 'Get in touch for job opportunities, freelance projects, collaborations, or mentorship. Multiple ways to connect including email, phone, and social media. Response within 24-48 hours.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactFormSection />
        <ResponseInfo />
        <SocialLinks />
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-secondary font-body">
              &copy; {new Date().getFullYear()}All rights reserved.
            </p>
            <p className="text-xs text-secondary/70 font-body mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}