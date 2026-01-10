import Icon from '@/components/ui/AppIcon';

interface Metric {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface TechnicalMetricsProps {
  metrics: Metric[];
}

export default function TechnicalMetrics({ metrics }: TechnicalMetricsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 shadow-card hover:shadow-interactive transition-smooth group"
        >
          <div className={`w-12 h-12 rounded-lg ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
            <Icon name={metric.icon as any} size={24} variant="solid" className="text-white" />
          </div>
          <div className="text-3xl font-headline font-bold text-foreground mb-1">
            {metric.value}
          </div>
          <div className="text-sm font-body text-secondary">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}