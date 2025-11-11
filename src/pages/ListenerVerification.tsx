// src/pages/ListenerVerification.tsx
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ClockIcon } from 'lucide-react';

export function ListenerVerification() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-xl mx-auto text-center">
          <Card className="p-12 bg-card border border-border rounded-lg">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ClockIcon size={28} className="text-primary" />
              </div>
              <h1 className="font-sans font-bold text-2xl text-gray-900">Application received</h1>
              <p className="text-gray-700">
                Thank you — you are currently waiting for manual verification. We will review your application and contact you when verification is complete.
              </p>
              <p className="text-sm text-gray-500">
                Typical review times are 1-3 business days.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
