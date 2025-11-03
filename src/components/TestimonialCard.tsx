import { Card } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface TestimonialCardProps {
  image: string;
  name: string;
  age: number;
  quote: string;
  rating: number;
}

export function TestimonialCard({ image, name, age, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="p-8 bg-card border border-border rounded-lg max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src={image}
          alt={`${name} testimonial`}
          className="w-24 h-24 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              size={20}
              strokeWidth={1.5}
              className={i < rating ? 'fill-warning text-warning' : 'text-gray-300'}
            />
          ))}
        </div>
        <blockquote className="text-gray-700 text-lg leading-relaxed italic">
          "{quote}"
        </blockquote>
        <div>
          <p className="font-sans font-semibold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{age} years old</p>
        </div>
      </div>
    </Card>
  );
}
