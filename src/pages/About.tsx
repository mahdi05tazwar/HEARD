import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { HeartIcon, EyeIcon, ShieldIcon, DollarSignIcon } from 'lucide-react';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    {
      month: 'Sep',
      title: 'The Beginning',
      description: 'Heard was founded with a simple mission: make emotional support accessible to everyone.',
    },
    {
      month: 'Oct',
      title: 'Bringing Heard to Life',
      description: 'We started the frontend development of Heard.',
    },
    {
      month: 'Nov',
      title: 'Pushing Further',
      description: 'Developing all the features that give Heard its purpose.',
    },
  ];

  const values = [
    {
      icon: HeartIcon,
      title: 'Empathy',
      description: 'We lead with compassion and understanding in every interaction.',
    },
    {
      icon: EyeIcon,
      title: 'Accessibility',
      description: 'Mental health support should be available to everyone, everywhere.',
    },
    {
      icon: ShieldIcon,
      title: 'Anonymity',
      description: 'Your privacy and security are our top priorities.',
    },
    {
      icon: DollarSignIcon,
      title: 'Affordability',
      description: 'Quality support that fits your budget, because everyone deserves help.',
    },
  ];

  const team = [
    {
      name: 'Abir Ahsan Habib',
      title: 'Team Leader/Manager',
      bio: 'Clinical psychologist with 15 years of experience in mental health advocacy.',
    },
    {
      name: 'Wang Yam Yuk',
      title: 'AI Engineer',
      bio: 'AI specialist focused on creating ethical and effective matching algorithms.',
    },
    {
      name: 'Md Mahdi Tajwar Raeed',
      title: 'Web Developer',
      bio: 'Passionate about building supportive communities and training empathetic listeners.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Heard, we believe everyone deserves a safe space to share their thoughts and feelings. We're building a world where emotional support is accessible, affordable, and always available.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-bold text-4xl text-gray-900 mb-8 text-center">
              Our Mission
            </h2>
            <Card className="p-12 bg-card border border-border rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To provide accessible, affordable, and anonymous emotional support to anyone who needs it. We connect people with empathetic listeners who genuinely care, creating a safe space where everyone can be heard without judgment. Through technology and human compassion, we're breaking down barriers to mental health support and building a more empathetic world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="font-sans font-bold text-4xl text-gray-900 mb-16 text-center">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.month}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2">
                  <Card className="p-8 bg-card border border-border rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="font-sans font-bold text-xl text-primary-foreground">
                          {item.month}
                        </span>
                      </div>
                      <h3 className="font-sans font-semibold text-2xl text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </Card>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className="w-1 h-24 bg-primary rounded-full hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="font-sans font-bold text-4xl text-gray-900 mb-16 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon size={32} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="font-sans font-bold text-4xl text-gray-900 mb-16 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card
                key={member.name}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
