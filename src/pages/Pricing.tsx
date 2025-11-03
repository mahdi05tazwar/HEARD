import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckIcon, UsersIcon, DollarSignIcon, StarIcon } from 'lucide-react';

export function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      name: 'Single Session',
      price: '40',
      currency: 'HK$',
      subtitle: 'per 30 min call',
      description: 'Try a single session with no commitment',
      features: [
        '30-minute one-on-one session',
        'AI matching with listeners',
        'Anonymous and secure chat',
        'Access to support resources',
        'No subscription required',
        'Pay as you go',
      ],
      buttonText: 'Book a Session',
      buttonVariant: 'outline' as const,
      highlighted: false,
    },
    {
      name: '5 Session Pack',
      price: '180',
      currency: 'HK$',
      subtitle: '36 calls (36 HK$ each)',
      description: 'Save 10% with a session bundle',
      badge: 'Most Popular',
      features: [
        '5 × 30-minute sessions',
        'AI matching with listeners',
        'Anonymous and secure chats',
        'Priority support',
        'Advanced mood tracking',
        'Personalized wellness insights',
        'Valid for 3 months',
      ],
      buttonText: 'Buy 5 Sessions',
      buttonVariant: 'default' as const,
      highlighted: true,
    },
    {
      name: '10 Session Pack',
      price: '320',
      currency: 'HK$',
      subtitle: '(32 HK$ each)',
      description: 'Best value - save 20% on your sessions',
      features: [
        '10 × 30-minute sessions',
        'Priority listener matching (under 30 seconds)',
        'Extended sessions available (up to 90 minutes)',
        'Choose your listener preferences',
        'Session recordings for reflection',
        '24/7 crisis support access',
        'Exclusive wellness workshops',
        'Valid for 6 months',
      ],
      buttonText: 'Buy 10 Sessions',
      buttonVariant: 'outline' as const,
      highlighted: false,
    },
  ];

  const discounts = [
    {
      icon: UsersIcon,
      title: 'Students',
      discount: '50% off',
      description: 'Valid student ID required. Because mental health shouldn\'t wait for graduation.',
    },
    {
      icon: DollarSignIcon,
      title: 'Low Income',
      discount: 'Up to 75% off',
      description: 'Income-based discounts available. Everyone deserves to be heard.',
    },
    {
      icon: StarIcon,
      title: 'Corporate',
      discount: 'Custom pricing',
      description: 'Bulk pricing for organizations. Support your team\'s wellbeing.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              Call-Based Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pay per session with no monthly commitment. Save more with session packs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 bg-card rounded-lg relative ${
                  plan.highlighted
                    ? 'border-2 border-primary shadow-xl scale-105'
                    : 'border border-border'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-sans font-bold text-2xl text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="font-sans font-bold text-5xl text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>
                  {plan.description && (
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon
                        size={20}
                        strokeWidth={2}
                        className="text-success flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.buttonVariant}
                  size="lg"
                  className="w-full font-normal text-base"
                >
                  <Link to="/start-conversation">{plan.buttonText}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Call-Based Pricing */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Why Call-Based Pricing?
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-card border border-border rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Traditional therapy can cost $100-300 per session, making it inaccessible to many who need
                support. At Heard, our call-based pricing at just 40 HK$ per 30-minute session allows you to
                get support exactly when you need it—with no monthly commitment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our listeners undergo comprehensive training in active listening, emotional support, and crisis
                recognition. While they don't provide clinical treatment, they offer genuine human connection and
                support when you need it most. Pay per call means you're in control of your budget and support
                schedule.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Discounts */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Special Discounts
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe everyone deserves access to emotional support, regardless of their financial situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {discounts.map((discount) => (
              <Card
                key={discount.title}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center">
                    <discount.icon size={32} strokeWidth={1.5} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">
                      {discount.title}
                    </h3>
                    <p className="text-success font-bold text-2xl mb-3">{discount.discount}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {discount.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Book your first session for just 40 HK$ and start your journey to better
              emotional wellbeing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
              >
                <Link to="/start-conversation">Book Your First Call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary bg-background hover:bg-primary/5 font-normal text-base"
              >
                <Link to="/pricing">View Session Packs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
