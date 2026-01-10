'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectPreviewCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    alt: string;
    technologies: string[];
    liveDemo?: string;
    github?: string;
  };
}

const ProjectPreviewCard = ({ project }: ProjectPreviewCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-interactive transition-smooth cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <AppImage
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-smooth ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 space-y-3">
            <div className="flex gap-2">
              {project.liveDemo && (
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-primary rounded-lg font-body font-medium hover:bg-white/90 transition-smooth"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                  <span>Live Demo</span>
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg font-body font-medium hover:bg-white/20 transition-smooth"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="CodeBracketIcon" size={16} variant="outline" />
                  <span>Code</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-body font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-headline font-bold text-foreground group-hover:text-primary transition-smooth">
            {project.title}
          </h3>
          <p className="text-sm font-body text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-foreground rounded-md text-xs font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-mono">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* View Details Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-primary font-body font-medium hover:text-primary/80 transition-smooth"
        >
          <span>View Details</span>
          <Icon name="ArrowRightIcon" size={16} variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreviewCard;