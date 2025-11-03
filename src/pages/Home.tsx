import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/FeatureCard';
import { StepCard } from '@/components/StepCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { DollarSignIcon, ShieldIcon, HeartIcon, SparklesIcon, MessageCircleIcon, UserCheckIcon, CheckCircleIcon, ClockIcon, UsersIcon, HeadphonesIcon, ArrowRightIcon } from 'lucide-react';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-1">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 leading-tight">
                Your Safe Space to Be Heard
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Connect with empathetic listeners for affordable, anonymous conversations. Get the support you need, whenever you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
                >
                  <Link to="/start-conversation">
                    Start a Conversation
                    <ArrowRightIcon size={20} strokeWidth={1.5} className="ml-2" />
                  </Link>
                </Button>
                <Link
                  to="/become-listener"
                  className="text-primary hover:text-primary/80 font-medium text-base flex items-center gap-2 cursor-pointer transition-colors py-3"
                >
                  Become a Listener
                  <ArrowRightIcon size={20} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="order-first lg:order-last">
                  <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1683498073270-888cec8e7abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBwZW9wbGUlMjBob2xkaW5nJTIwaGFuZHMlMjBzdXBwb3J0fGVufDF8fHx8MTc2MTAyMTQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Two people holding hands in support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Heard */}
      <section id="why-choose" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Why Choose Heard
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide a safe, supportive environment where you can share your thoughts and feelings without judgment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={DollarSignIcon}
              title="Affordable Support"
              description="Quality emotional support that fits your budget, with flexible pricing options."
            />
            <FeatureCard
              icon={ShieldIcon}
              title="Anonymous Conversations"
              description="Share freely without revealing your identity. Your privacy is our priority."
            />
            <FeatureCard
              icon={HeartIcon}
              title="Empathetic Listeners"
              description="Connect with trained listeners who genuinely care about your wellbeing."
            />
            <FeatureCard
              icon={SparklesIcon}
              title="AI Matching"
              description="Our smart algorithm pairs you with the perfect listener for your needs."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Getting support is simple. Follow these three easy steps to start your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StepCard
              number={1}
              icon={MessageCircleIcon}
              title="Share Your Story"
              description="Tell us what's on your mind. We're here to listen without judgment."
            />
            <StepCard
              number={2}
              icon={UserCheckIcon}
              title="Get Matched"
              description="Our AI connects you with a listener who understands your situation."
            />
            <StepCard
              number={3}
              icon={CheckCircleIcon}
              title="Start Talking"
              description="Begin your conversation and feel the relief of being truly heard."
            />
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
            >
              <Link to="/start-conversation">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Help You */}
      <section id="how-we-help" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              How We Help You
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform offers comprehensive support tailored to your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={ClockIcon}
              title="24/7 Availability"
              description="Support is available whenever you need it, day or night."
            />
            <FeatureCard
              icon={UsersIcon}
              title="Community Support"
              description="Join a caring community of people who understand what you're going through."
            />
            <FeatureCard
              icon={HeadphonesIcon}
              title="Active Listening"
              description="Experience the power of being truly heard by someone who cares."
            />
            <FeatureCard
              icon={HeartIcon}
              title="Emotional Wellness"
              description="Build resilience and improve your mental health through regular conversations."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Stories of Hope and Healing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Real stories from real people who found support and healing through Heard.
            </p>
          </div>
          <TestimonialCard
            image="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg"
            name="Sarah M."
            age={28}
            quote="Heard gave me a safe space to express my feelings without fear of judgment. My listener was incredibly supportive and helped me through a difficult time."
            rating={5}
          />
          <div className="flex justify-center gap-2 mt-8">
            <button
              className="w-3 h-3 rounded-full bg-primary cursor-pointer"
              aria-label="Testimonial 1"
            />
            <button
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"
              aria-label="Testimonial 2"
            />
            <button
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"
              aria-label="Testimonial 3"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-2">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-primary-foreground">
              Ready to Feel Lighter?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Take the first step towards emotional wellness. Start a conversation today and experience the relief of being truly heard.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-normal text-base"
            >
              <Link to="/start-conversation">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
