import { useEffect } from 'react';

export function Technology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-96 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              How Heard Works
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Coming soon...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
