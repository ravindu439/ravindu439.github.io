'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    image: string;
    alt: string;
    technologies: string[];
    liveDemo?: string;
    github?: string;
    metrics: {
      label: string;
      value: string;
    }[];
    challenges: string[];
    solutions: string[];
    impact: string;
  } | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-body font-semibold text-accent uppercase tracking-wide">
              {project.category}
            </span>
            <h2 className="text-2xl font-headline font-bold text-foreground mt-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-smooth"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <AppImage
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-primary/90 transition-smooth flex items-center gap-2 shadow-card"
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} variant="outline" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md text-sm font-cta font-semibold hover:bg-secondary/90 transition-smooth flex items-center gap-2 shadow-card"
              >
                <Icon name="CodeBracketIcon" size={20} variant="outline" />
                View Code
              </a>
            )}
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-headline font-bold text-foreground mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted text-sm font-body font-medium text-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-headline font-bold text-foreground mb-3">
              Project Overview
            </h3>
            <p className="text-base font-body text-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-6">
            <h3 className="text-lg font-headline font-bold text-foreground mb-3">
              Impact Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric, index) => (
                <div key={index} className="bg-muted rounded-lg p-4">
                  <p className="text-xs font-body text-muted-foreground mb-1">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-headline font-bold text-primary">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h3 className="text-lg font-headline font-bold text-foreground mb-3">
              Technical Challenges
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon
                    name="ExclamationTriangleIcon"
                    size={20}
                    variant="outline"
                    className="text-warning mt-0.5 flex-shrink-0"
                  />
                  <span className="text-base font-body text-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="mb-6">
            <h3 className="text-lg font-headline font-bold text-foreground mb-3">
              Solutions Implemented
            </h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    variant="outline"
                    className="text-success mt-0.5 flex-shrink-0"
                  />
                  <span className="text-base font-body text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
            <h3 className="text-lg font-headline font-bold text-primary mb-3 flex items-center gap-2">
              <Icon name="SparklesIcon" size={24} variant="solid" />
              Business Impact
            </h3>
            <p className="text-base font-body text-foreground leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;