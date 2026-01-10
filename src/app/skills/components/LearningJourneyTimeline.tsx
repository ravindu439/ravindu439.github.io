interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'certification' | 'skill' | 'achievement';
}

interface LearningJourneyTimelineProps {
  events: TimelineEvent[];
}

export default function LearningJourneyTimeline({ events }: LearningJourneyTimelineProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'certification':
        return 'bg-emerald-500';
      case 'skill':
        return 'bg-amber-500';
      case 'achievement':
        return 'bg-red-600';
      default:
        return 'bg-slate-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education':
        return 'Education';
      case 'certification':
        return 'Certification';
      case 'skill':
        return 'Skill Acquired';
      case 'achievement':
        return 'Achievement';
      default:
        return 'Event';
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-20">
            <div className="absolute left-0 top-0 flex items-center justify-center">
              <div className={`w-16 h-16 rounded-full ${getTypeColor(event.type)} flex items-center justify-center text-white font-mono font-bold text-sm shadow-card`}>
                {event.year}
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-interactive transition-smooth">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-body font-semibold text-white ${getTypeColor(event.type)}`}>
                  {getTypeLabel(event.type)}
                </span>
              </div>
              <h4 className="text-lg font-headline font-bold text-foreground mb-2">
                {event.title}
              </h4>
              <p className="text-sm font-body text-secondary leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}