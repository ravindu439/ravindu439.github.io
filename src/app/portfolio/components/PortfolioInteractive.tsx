'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  alt?: string;
  technologies: string[];
  features: string[];
  myRole: string;
  myContribution: string;
  timeline: string;
  organization: string;
  type: string;
  status: string;
  website?: string;
  github?: string;
  featured: boolean;
}

const PortfolioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setIsHydrated(true);
    // Fetch projects from JSON
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.error('Error loading projects:', err));
  }, []);

  // Only compute these after hydration to avoid hydration mismatch
  const categories = isHydrated ? ['All', ...Array.from(new Set(projects.map((p) => p.category)))] : ['All'];
  const allTechnologies = isHydrated ? Array.from(new Set(projects.flatMap((p) => p.technologies))) : [];
  const technologies = ['All', ...allTechnologies];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTechnology = selectedTechnology === 'All' || project.technologies.includes(selectedTechnology);
    const matchesSearch = searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTechnology && matchesSearch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnology('All');
    setSearchQuery('');
  };

  const handleViewDetails = (id: number) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  };

  return (
    <div className="min-h-screen bg-background" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" suppressHydrationWarning>
        {!isHydrated ? (
          <div className="animate-pulse space-y-8">
            <div className="h-32 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <FilterBar
              categories={categories}
              technologies={technologies}
              selectedCategory={selectedCategory}
              selectedTechnology={selectedTechnology}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onTechnologyChange={setSelectedTechnology}
              onSearchChange={setSearchQuery}
              onClearFilters={handleClearFilters}
            />


            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                  No Projects Found
                </h3>
                <p className="text-base font-body text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-primary/90 transition-smooth shadow-card"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

    </div>);

};

export default PortfolioInteractive;