import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portfolio - TechFolio Pro',
  description: 'Explore my technical portfolio showcasing innovative projects across machine learning, web development, IoT, blockchain, mobile apps, and cloud architecture with detailed case studies and impact metrics.',
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4">
                Technical Portfolio
              </h1>
              <p className="text-lg md:text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto">
                Explore my journey through innovative projects that solve real-world problems using cutting-edge technologies. Each project represents a unique challenge conquered through thoughtful engineering and creative problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Content */}
        <PortfolioInteractive />

        {/* CTA Section */}
        <section className="bg-card border-t border-border py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg font-body text-muted-foreground mb-8">
              Have a project in mind? I&apos;m always excited to collaborate on innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-brand-cta text-white rounded-md text-base font-cta font-semibold hover:bg-brand-cta/90 transition-smooth shadow-card hover:shadow-interactive"
              >
                Start a Project
              </a>
              <a
                href="/skills"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-md text-base font-cta font-semibold hover:bg-secondary/90 transition-smooth shadow-card hover:shadow-interactive"
              >
                View My Skills
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}