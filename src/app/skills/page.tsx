import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Skills & Expertise - TechFolio Pro',
  description: 'Comprehensive technical skills matrix showcasing proficiency in frontend, backend, DevOps, and emerging technologies with professional certifications and continuous learning journey.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkillsInteractive />
      </main>
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground font-body">
            <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}