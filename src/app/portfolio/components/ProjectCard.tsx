'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    alt?: string;
    technologies: string[];
    website?: string;
    github?: string;
    liveDemo?: string;
    type: string;
    status: string;
    timeline: string;
  };
  onViewDetails: (id: number) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-smooth border border-border">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt || project.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
          <div className="flex gap-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-accent transition-smooth"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} variant="outline" className="text-primary" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-accent transition-smooth"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon name="CodeBracketIcon" size={20} variant="outline" className="text-primary" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-body font-semibold text-accent uppercase tracking-wide">
            {project.category}
          </span>
          <button
            onClick={() => onViewDetails(project.id)}
            className="text-primary hover:text-accent transition-smooth"
          >
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </button>
        </div>

        <h3 className="text-xl font-headline font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
          {project.title}
        </h3>

        <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-xs font-body font-medium text-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-muted text-xs font-body font-medium text-muted-foreground rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs font-body text-muted-foreground mb-1">Type</p>
            <p className="text-sm font-headline font-bold text-primary">{project.type}</p>
          </div>
          <div>
            <p className="text-xs font-body text-muted-foreground mb-1">Status</p>
            <p className="text-sm font-headline font-bold text-primary">{project.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;