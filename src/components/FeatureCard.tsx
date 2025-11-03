import { Card } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: StarIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 bg-card border border-border hover:border-primary/30 transition-all duration-200 rounded-lg">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
          <Icon size={32} strokeWidth={1.5} className="text-primary" />
        </div>
        <h3 className="font-sans font-semibold text-xl text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
