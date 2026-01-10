'use client';

import React from 'react';
import HeroSection from './HeroSection';
import ProjectPreviewCard from './ProjectPreviewCard';
import SkillVisualization from './SkillVisualization';
import SocialProofSection from './SocialProofSection';
import FeaturedProjects from './FeaturedProjects';
import AcademicSection from './AcademicSection';
import CTAPathways from './CTAPathways';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  alt: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
}

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

const HomepageInteractive = () => {

  const topSkills: Skill[] = [
  { name: "JavaScript", category: "Frontend Development", proficiency: 95, icon: "CodeBracketIcon" },
  { name: "React", category: "Frontend Development", proficiency: 92, icon: "WindowIcon" },
  { name: "TypeScript", category: "Frontend Development", proficiency: 90, icon: "CommandLineIcon" },
  { name: "Node.js", category: "Backend Development", proficiency: 88, icon: "ServerIcon" },
  { name: "Python", category: "Backend Development", proficiency: 85, icon: "CpuChipIcon" },
  { name: "MongoDB", category: "Backend Development", proficiency: 82, icon: "CircleStackIcon" },
  { name: "AWS", category: "Cloud & DevOps", proficiency: 80, icon: "CloudIcon" },
  { name: "Firebase", category: "Cloud & DevOps", proficiency: 78, icon: "CloudIcon" }];


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      <FeaturedProjects />

      {/* Academic Section */}
      <AcademicSection />

      {/* Skills Visualization Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="AcademicCapIcon" size={20} variant="solid" className="text-primary" />
              <span className="text-sm font-body font-semibold text-primary">Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology stack with proven proficiency across multiple domains
            </p>
          </div>

          <SkillVisualization skills={topSkills} />

          <div className="text-center mt-12">
            <a
              href="/skills"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth shadow-card hover:shadow-interactive">

              <span>Explore Full Skill Matrix</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* CTA Pathways Section */}
      <CTAPathways />
    </div>);

};

export default HomepageInteractive;