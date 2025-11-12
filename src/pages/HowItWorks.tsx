import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserIcon, MessageCircleIcon, ShieldCheckIcon, ChevronDownIcon } from 'lucide-react';

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'users' | 'listeners'>('users');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: 'What if I need professional help?',
      answer:
        "While our listeners provide emotional support, they are not licensed therapists. If you're experiencing a mental health crisis or need professional treatment, we'll guide you to appropriate resources and encourage you to seek professional help.",
    },
    {
      question: 'How is my data protected?',
      answer:
        'We use end-to-end encryption for all conversations, maintain strict anonymity protocols, and never store personally identifiable information. Your privacy and security are our top priorities.',
    },
    {
      question: 'How long are typical conversations?',
      answer:
        'Conversations can range from 15 minutes to an hour, depending on your needs and preferences. You have complete control over the duration and can end the conversation at any time.',
    },
    {
      question: "What if I don't connect with my matched listener?",
      answer:
        "You can request a new listener at any time, no questions asked. We want to ensure you feel comfortable and supported in every conversation.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              How Heard Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're seeking support or want to become a listener, we make it simple to
              connect and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex justify-center gap-4">
            <Button
              variant={activeTab === 'users' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveTab('users')}
              className="font-normal text-base"
            >
              For Users
            </Button>
            <Button
              variant={activeTab === 'listeners' ? 'default' : 'outline'}
              size="lg"
              onClick={() => {
                setActiveTab('listeners');
                navigate('/become-listener');
              }}
              className="font-normal text-base"
            >
              For Listeners
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Support Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Getting Support in 3 Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="p-8 bg-accent border-none rounded-lg">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <UserIcon size={32} strokeWidth={1.5} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-2">Step 1</p>
                  <h3 className="font-sans font-semibold text-xl text-gray-900 mb-4">
                    Sign Up & Share Preferences
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Create your account and tell us your preferences for gender of listener, language,
                    and session duration.
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    Quick 2-minute signup process with optional preferences to help us match you better.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 bg-accent border-none rounded-lg">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <MessageCircleIcon size={32} strokeWidth={1.5} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-2">Step 2</p>
                  <h3 className="font-sans font-semibold text-xl text-gray-900 mb-4">
                    Get Matched with a Listener
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our AI matching system connects you with a trained listener in less than a minute.
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    Advanced algorithm considers your preferences, availability, and listener expertise.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 bg-accent border-none rounded-lg">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon size={32} strokeWidth={1.5} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary font-medium text-sm mb-2">Step 3</p>
                  <h3 className="font-sans font-semibold text-xl text-gray-900 mb-4">
                    Start Your Conversation
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Begin chatting securely and anonymously in a judgment-free environment.
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    End-to-end encrypted conversations with complete anonymity protection.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-card border border-border rounded-lg px-6 group"
              >
                <summary className="text-left font-sans font-semibold text-lg text-gray-900 py-6 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    size={20}
                    strokeWidth={1.5}
                    className="text-gray-500 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
            >
              <Link to="/start-conversation">Start Your Conversation Now!</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
