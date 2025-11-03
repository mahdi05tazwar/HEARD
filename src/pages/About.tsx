import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { HeartIcon, EyeIcon, ShieldIcon, DollarSignIcon } from 'lucide-react';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Heard was founded with a simple mission: make emotional support accessible to everyone.',
    },
    {
      year: '2021',
      title: 'Growing Community',
      description: 'We reached 10,000 users and trained our first 100 empathetic listeners.',
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched our AI matching system to connect users with the perfect listener.',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve users in 50 countries, providing support in multiple languages.',
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
      name: 'Dr. Sarah Johnson',
      title: 'Founder & CEO',
      bio: 'Clinical psychologist with 15 years of experience in mental health advocacy.',
    },
    {
      name: 'Michael Chen',
      title: 'Head of Technology',
      bio: 'AI specialist focused on creating ethical and effective matching algorithms.',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Community Director',
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
                key={item.year}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2">
                  <Card className="p-8 bg-card border border-border rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="font-sans font-bold text-xl text-primary-foreground">
                          {item.year}
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
                  <img
                    src='https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg'
                    alt={`${member.name} profile`}
                    className="w-24 h-24 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
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
