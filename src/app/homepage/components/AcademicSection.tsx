'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface AcademicResult {
  subject: string;
  grade: string;
}

interface Achievements {
  zScore: string;
  nationalRank: string;
  districtRank: string;
  district: string;
}

interface Education {
  id: number;
  level: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  maxGpa?: string;
  status?: string;
  highlights?: string[];
  relevantCourses?: string[];
  results?: AcademicResult[];
  achievements?: Achievements;
}

interface AcademicSectionProps {
  className?: string;
}

const AcademicSection = ({ className = '' }: AcademicSectionProps) => {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('/data/academics.json');
        const data = await response.json();
        setEducation(data.education);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching education data:', error);
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <section className={`py-16 bg-muted ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading academic information...</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Academic Journey
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            A consistent track record of academic excellence from school to university
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-card rounded-xl shadow-card p-8 hover:shadow-interactive transition-smooth"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon 
                      name={edu.level === 'Undergraduate' ? 'AcademicCapIcon' : 'BookOpenIcon'} 
                      size={32} 
                      variant="solid" 
                      className="text-primary" 
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-headline font-bold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center space-x-2 text-secondary">
                        <Icon name="BuildingOffice2Icon" size={16} variant="outline" />
                        <span className="font-body">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-secondary mt-1">
                        <Icon name="MapPinIcon" size={16} variant="outline" />
                        <span className="font-body text-sm">{edu.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="CalendarIcon" size={16} variant="outline" />
                        <span className="font-mono">{edu.duration}</span>
                      </div>
                      {edu.gpa && (
                        <div className="mt-2">
                          <span className="text-3xl font-headline font-bold text-primary">
                            {edu.gpa}
                          </span>
                          <span className="text-lg text-muted-foreground">/{edu.maxGpa}</span>
                          {edu.status && (
                            <div className="mt-1">
                              <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded">
                                {edu.status}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Highlights for Undergraduate */}
                  {edu.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
                        <Icon name="StarIcon" size={16} variant="solid" className="text-accent" />
                        <span>Highlights</span>
                      </h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-secondary">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results for A/L and O/L */}
                  {edu.results && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Results</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {edu.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="bg-muted rounded-lg p-3 text-center"
                          >
                            <div className="text-lg font-headline font-bold text-primary mb-1">
                              {result.grade}
                            </div>
                            <div className="text-xs text-secondary font-body">
                              {result.subject}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements for A/L */}
                  {edu.achievements && (
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="TrophyIcon" size={16} variant="solid" className="text-accent" />
                        <span>Achievements</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Z-Score</div>
                          <div className="text-xl font-headline font-bold text-primary">
                            {edu.achievements.zScore}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">National Rank</div>
                          <div className="text-sm font-semibold text-foreground">
                            {edu.achievements.nationalRank}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">District Rank</div>
                          <div className="text-sm font-semibold text-foreground">
                            {edu.achievements.districtRank}
                            <div className="text-xs text-muted-foreground mt-1">
                              ({edu.achievements.district})
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Relevant Courses for Undergraduate */}
                  {edu.relevantCourses && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.slice(0, 8).map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
