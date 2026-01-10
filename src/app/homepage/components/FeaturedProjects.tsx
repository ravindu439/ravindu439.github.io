'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  myRole: string;
  myContribution: string;
  timeline: string;
  organization: string;
  type: string;
  status: string;
  github?: string;
  website?: string;
  image: string;
  featured: boolean;
}

interface FeaturedProjectsProps {
  className?: string;
  showAll?: boolean;
}

const FeaturedProjects = ({ className = '', showAll = false }: FeaturedProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
        const filteredProjects = showAll 
          ? data.projects 
          : data.projects.filter((p: Project) => p.featured);
        setProjects(filteredProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [showAll]);

  if (loading) {
    return (
      <section className={`py-16 bg-background ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            {showAll ? 'All Projects' : 'Featured Projects'}
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            {showAll 
              ? 'Complete portfolio of academic and personal projects'
              : 'Showcasing my most impactful work in embedded systems, web development, and computer vision'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl shadow-card hover:shadow-interactive transition-smooth overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-headline font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-smooth"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="CodeBracketIcon" size={20} variant="outline" />
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-smooth"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="GlobeAltIcon" size={20} variant="outline" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm font-body text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-foreground text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-foreground text-xs font-mono rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="ClockIcon" size={14} variant="outline" />
                    <span>{project.timeline}</span>
                  </span>
                  <span className={`px-2 py-1 rounded ${
                    project.status === 'Completed' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth shadow-card hover:shadow-interactive"
            >
              <span>View All Projects</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
