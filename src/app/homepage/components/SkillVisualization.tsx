'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

interface SkillVisualizationProps {
  skills: Skill[];
}

const SkillVisualization = ({ skills }: SkillVisualizationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map((skill) => skill.proficiency));
    }, 300);

    return () => clearTimeout(timer);
  }, [isHydrated, skills]);

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-headline font-bold text-foreground flex items-center space-x-2">
            <Icon name="CodeBracketSquareIcon" size={24} variant="solid" className="text-primary" />
            <span>{category}</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-card rounded-lg p-4 shadow-card hover:shadow-interactive transition-smooth"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={skill.icon as any} size={20} variant="solid" className="text-primary" />
                      </div>
                      <span className="font-body font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-mono font-semibold text-primary">
                      {isHydrated ? `${skill.proficiency}%` : '0%'}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-brand-blue rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isHydrated ? `${animatedSkills[skills.indexOf(skill)] || 0}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillVisualization;