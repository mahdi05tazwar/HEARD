import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeartIcon, GraduationCapIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, ClockIcon, MessageSquareIcon, ShieldIcon, StarIcon } from 'lucide-react';

export function BecomeListener() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: HeartIcon,
      title: 'Make a Real Impact',
      description: 'Help people feel heard, valued, and supported in their journey.',
    },
    {
      icon: GraduationCapIcon,
      title: 'Earn While Helping',
      description: 'Get paid to provide compassionate support. Flexible hours.',
    },
    {
      icon: TrendingUpIcon,
      title: 'Professional Development',
      description: 'Gain valuable skills in active listening, empathy, and communication.',
    },
    {
      icon: UsersIcon,
      title: 'Supportive Community',
      description: 'Join a network of compassionate listeners with ongoing support.',
    },
  ];

  const requirements = [
    { text: 'Must be 21 years or older', checked: true },
    { text: 'Empathetic and non-judgmental attitude', checked: true },
    { text: 'Commit to 5+ hours per week', checked: true },
    { text: 'Fluent in written/spoken English', checked: true },
    { text: 'Reliable internet connection', checked: true },
    { text: 'Pass background check + training course', checked: true },
  ];

  const trainingModules = [
    {
      number: 1,
      title: 'Active Listening Fundamentals',
      duration: '3 hours',
      topics: ['Reflective listening', 'Nonverbal cues', 'Empathic validation'],
    },
    {
      number: 2,
      title: 'Emotional Support Techniques',
      duration: '3 hours',
      topics: ['Crisis recognition', 'De-escalation', 'Managing triggers'],
    },
    {
      number: 3,
      title: 'Ethics & Boundaries',
      duration: '2 hours',
      topics: ['Confidentiality', 'Professional limits', 'Self-care'],
    },
    {
      number: 4,
      title: 'Platform & Safety',
      duration: '2 hours',
      topics: ['Platform tools', 'Safety protocols', 'Reporting procedures'],
    },
    {
      number: 5,
      title: 'Practical Application',
      duration: '4 hours',
      topics: ['Role-play scenarios', 'Feedback sessions', 'Certification test'],
    },
  ];

  const testimonials = [
    {
      name: 'Maria S.',
      role: 'Certified Listener, 2 months',
      rating: 5,
      quote: 'Being a listener has been incredibly rewarding. I\'ve learned so much and helped so many people find their voice.',
    },
    {
      name: 'David K.',
      role: 'Certified Listener, 1 year',
      rating: 5,
      quote: 'The training was comprehensive and the support from the community is amazing. I feel prepared and supported.',
    },
    {
      name: 'Sarah M.',
      role: 'Certified Listener, 6 months',
      rating: 5,
      quote: 'I love being able to make a difference in people\'s lives while working on my own schedule. It\'s truly fulfilling.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-medium">
                🎧 Now Hiring Listeners
              </span>
            </div>
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              Become a Certified Listener
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Make a meaningful difference in people's lives while developing valuable skills and earning flexible income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
              >
                <Link to="/listener-auth">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary bg-background hover:bg-primary/5 font-normal text-base"
              >
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Listener */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Why Become a Listener?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join a community of compassionate listeners who are making a real difference in the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <benefit.icon size={32} strokeWidth={1.5} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Listener Requirements */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Listener Requirements
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain high standards to ensure quality support for our users.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon size={24} strokeWidth={2} className="text-success flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{req.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Comprehensive Training Program
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              20 hours of professional training to prepare you for meaningful conversations.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {trainingModules.map((module) => (
              <Card
                key={module.number}
                className="p-6 bg-card border border-border rounded-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-sans font-bold text-lg">
                        {module.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-sans font-semibold text-xl text-gray-900">
                        {module.title}
                      </h3>
                      <span className="text-gray-500 text-sm">{module.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="bg-accent text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              What Our Listeners Say
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hear from certified listeners who are making a difference every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        size={20}
                        strokeWidth={1.5}
                        className={i < testimonial.rating ? 'fill-warning text-warning' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-sans font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-2">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-primary-foreground">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join our community of certified listeners and start your journey of helping others while growing personally and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-normal text-base"
              >
                <Link to="/listener-auth">Start Your Application</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background text-background bg-transparent hover:bg-background/10 font-normal text-base"
              >
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
