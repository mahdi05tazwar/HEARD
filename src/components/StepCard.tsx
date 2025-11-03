import { Card } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface StepCardProps {
  number: number;
  icon: StarIcon;
  title: string;
  description: string;
}

export function StepCard({ number, icon: Icon, title, description }: StepCardProps) {
  return (
    <Card className="p-8 bg-card border border-border rounded-lg">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <span className="font-sans font-bold text-3xl text-primary-foreground">{number}</span>
          </div>
        </div>
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
          <Icon size={32} strokeWidth={1.5} className="text-primary" />
        </div>
        <h3 className="font-sans font-semibold text-xl text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
