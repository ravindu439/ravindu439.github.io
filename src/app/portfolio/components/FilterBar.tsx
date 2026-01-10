'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const FilterBar = ({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  searchQuery,
  onCategoryChange,
  onTechnologyChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) => {
  const hasActiveFilters = selectedCategory !== 'All' || selectedTechnology !== 'All' || searchQuery !== '';

  return (
    <div className="bg-card rounded-lg shadow-card p-6 mb-8 border border-border">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              variant="outline"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="lg:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-input rounded-md text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Filter */}
        <div className="lg:w-48">
          <select
            value={selectedTechnology}
            onChange={(e) => onTechnologyChange(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-input rounded-md text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="px-4 py-2 bg-muted text-foreground rounded-md text-sm font-body font-medium hover:bg-muted/80 transition-smooth flex items-center gap-2 whitespace-nowrap"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;