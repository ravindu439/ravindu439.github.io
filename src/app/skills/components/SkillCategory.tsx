interface Skill {
  name: string;
  level: number;
  yearsOfExperience: number;
  projects: number;
}

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
}

export default function SkillCategory({ title, icon, skills, color }: SkillCategoryProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-interactive transition-smooth">
      <div className="flex items-center space-x-3 mb-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-headline font-bold text-foreground">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-body font-medium text-foreground">{skill.name}</span>
              <span className="text-xs font-mono text-muted-foreground">
                {skill.yearsOfExperience}y • {skill.projects} projects
              </span>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${color} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="mt-1 text-xs font-body text-muted-foreground">
              Proficiency: {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}