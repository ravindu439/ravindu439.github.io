import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  title: string;
  institution: string;
  year: string;
  gpa: string;
  description: string;
  icon: string;
}

interface Course {
  name: string;
  category: string;
}

interface AcademicAchievementsProps {
  achievements: Achievement[];
  relevantCourses: Course[];
}

export default function AcademicAchievements({ achievements, relevantCourses }: AcademicAchievementsProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            A strong academic foundation built on rigorous coursework, research, and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-interactive transition-smooth border border-border"
            >
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg flex-shrink-0">
                  <Icon name={achievement.icon as any} size={32} variant="solid" className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-mono text-accent font-semibold">{achievement.year}</span>
                    <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-body font-semibold">
                      GPA: {achievement.gpa}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-secondary font-body mb-4">{achievement.institution}</p>
                  <p className="text-secondary font-body leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 bg-brand-blue rounded-lg">
              <Icon name="BookOpenIcon" size={28} variant="solid" className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-headline font-semibold text-foreground">
              Relevant Coursework
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantCourses.map((course, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-primary/5 transition-smooth"
              >
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-body font-medium">{course.name}</p>
                  <p className="text-xs text-secondary font-body mt-1">{course.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}