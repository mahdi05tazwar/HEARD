import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MailIcon, PhoneIcon, MessageCircleIcon, MapPinIcon, ClockIcon } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: MailIcon,
      title: 'Email Support',
      description: 'Get in touch with our support team',
      primary: 'support@heard.com',
      secondary: 'Response within 24 hours',
    },
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      primary: '1-800-HEARD (43273)',
      secondary: 'Mon-Fri 9 AM - 8 PM EST',
    },
    {
      icon: MessageCircleIcon,
      title: 'Live Chat',
      description: 'Instant help when you need it',
      primary: 'Available on website',
      secondary: 'Response within minutes',
    },
  ];

  const faqs = [
    {
      question: 'How do I start a conversation with a listener?',
      answer: 'Simply create an account, complete your preferences, and our AI matching system will connect you with a suitable listener within minutes.',
    },
    {
      question: 'Is my conversation completely anonymous?',
      answer: 'Yes, all conversations are completely anonymous. We use end-to-end encryption and don\'t store any personally identifiable information.',
    },
    {
      question: 'What if I\'m having a mental health crisis?',
      answer: 'If you\'re in immediate danger, please contact emergency services at 911 or the National Suicide Prevention Lifeline at 988. Our listeners are trained to recognize crisis situations and will guide you to appropriate professional help.',
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer a free plan with basic features, a Premium plan at $19/month for 3 conversations, and a Premium plan at $39/month with unlimited conversations. Building trust takes time; institutions qualify for significant discounts.',
    },
    {
      question: 'Can I become a listener?',
      answer: 'Yes! We\'re always looking for empathetic listeners. You must be 21+, pass a background check, and complete our training program. Visit our \'Become a Listener\' page for more details.',
    },
    {
      question: 'What\'s the difference between Heard and therapy?',
      answer: 'Heard provides empathetic support through trained listeners, not licensed therapists. We complement therapy but don\'t replace professional treatment when needed.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              We're Here for You
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions, feedback, or need support? Our team is ready to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Methods */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-sans font-bold text-3xl text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <Card className="p-8 bg-card border border-border rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 bg-background border-border text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 bg-background border-border text-foreground"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="What is the nature of your inquiry?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12 bg-background border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none focus:outline-none focus:ring-1 focus:ring-ring"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Methods */}
            <div>
              <h2 className="font-sans font-bold text-3xl text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <Card
                    key={method.title}
                    className="p-6 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon size={24} strokeWidth={1.5} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{method.description}</p>
                        <p className="text-primary font-semibold mb-1">{method.primary}</p>
                        <p className="text-gray-500 text-sm">{method.secondary}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Banner */}
      <section className="py-12 bg-destructive/5">
        <div className="container mx-auto px-8 lg:px-16">
          <Card className="p-8 bg-destructive/10 border-2 border-destructive/20 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">
              Crisis Support
            </h3>
            <p className="text-gray-700 mb-6">
              If you're experiencing a mental health crisis or want to speak with someone, please contact emergency services or call the National Suicide Prevention Lifeline at 988.
            </p>
            <div className="space-y-2">
              <p className="text-gray-900">
                <strong>Emergency Services:</strong> 911
              </p>
              <p className="text-gray-900">
                <strong>National Suicide Prevention Lifeline:</strong> Call or text 988
              </p>
              <p className="text-gray-900">
                <strong>Crisis Text Line:</strong> Text TALK to 741741
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quick answers to common questions about Heard.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 bg-card border border-border rounded-lg"
              >
                <h3 className="font-sans font-semibold text-lg text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <MapPinIcon size={40} strokeWidth={1.5} className="text-primary" />
            </div>
            <h2 className="font-sans font-bold text-4xl text-gray-900 mb-6">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-700 mb-4">Heard Headquarters</p>
            <p className="text-gray-600 mb-2">123 Wellness Street, Suite 456</p>
            <p className="text-gray-600 mb-6">San Francisco, CA 94103</p>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <ClockIcon size={20} strokeWidth={1.5} />
              <span>Monday - Friday: 9:00 AM - 6:00 PM PST</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
