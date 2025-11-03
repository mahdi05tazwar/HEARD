import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ShieldIcon, LockIcon, FileTextIcon, ShieldCheckIcon, AlertTriangleIcon, PhoneIcon, FlagIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacyFeatures = [
    {
      icon: LockIcon,
      title: 'End-to-End Encryption',
      description: 'All conversations are encrypted using military-grade encryption. Only you and your listener can see messages.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Complete Anonymity',
      description: 'No personal details are shared. You choose what to reveal. We never ask for identifying information.',
    },
    {
      icon: FileTextIcon,
      title: 'Zero Data Logging',
      description: 'We don\'t log, record, or store your conversations. Once a session ends, it\'s gone forever.',
    },
    {
      icon: ShieldIcon,
      title: 'Strict Listener Confidentiality',
      description: 'All listeners sign strict confidentiality agreements and undergo background checks.',
    },
  ];

  const whatWeCollect = [
    'Account creation date',
    'Session frequency (not content)',
    'Technical data (IP address, browser type)',
    'Feedback and ratings (anonymous)',
    'Payment information (securely stored by Stripe)',
  ];

  const whatWeDontCollect = [
    'Real names or identities',
    'Your session or message content',
    'Screenshots or recordings',
    'Location data (beyond IP address)',
    'Social media or contact information',
    'Medical or health records',
  ];

  const safetyFeatures = [
    {
      icon: AlertTriangleIcon,
      title: 'AI Safety Monitoring',
      description: 'Our AI system monitors high-risk conversations and alerts our support team if intervention is needed.',
    },
    {
      icon: PhoneIcon,
      title: '24/7 Crisis Support',
      description: 'Immediate access to crisis resources and emergency services if you need urgent help.',
    },
    {
      icon: FlagIcon,
      title: 'Reporting System',
      description: 'Easy-to-use reporting system for any concerns about listener conduct or inappropriate behavior.',
    },
  ];

  const securityStandards = [
    { icon: CheckCircleIcon, text: 'SSL/TLS Certified' },
    { icon: CheckCircleIcon, text: 'HTTPS Encrypted' },
    { icon: CheckCircleIcon, text: 'SOC 2 Compliant' },
    { icon: CheckCircleIcon, text: 'Regular Security Audits' },
  ];

  const dataProtection = [
    { icon: CheckCircleIcon, text: 'AES-256 Encryption' },
    { icon: CheckCircleIcon, text: 'PCI DSS Compliant' },
    { icon: CheckCircleIcon, text: 'GDPR Compliant Standards' },
    { icon: CheckCircleIcon, text: 'Regular Penetration Testing' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-8">
              <ShieldIcon size={40} strokeWidth={1.5} className="text-primary" />
            </div>
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              We Value Your Trust
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy and safety are the core of everything we do. Learn how we protect your information and ensure a safe space for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Protection */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Privacy Protection
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've built our service on the principle that your conversations should be private and secure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon size={32} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Handle Your Data */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              How We Handle Your Data
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Complete transparency about what we collect, how we use it, and how we protect it.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What We Collect */}
              <Card className="p-8 bg-card border border-border rounded-lg">
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-6">
                  What We Collect
                </h3>
                <ul className="space-y-3">
                  {whatWeCollect.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon size={20} strokeWidth={2} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* What We DON'T Collect */}
              <Card className="p-8 bg-destructive/5 border-2 border-destructive/20 rounded-lg">
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-6">
                  What We DON'T Collect
                </h3>
                <ul className="space-y-3">
                  {whatWeDontCollect.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircleIcon size={20} strokeWidth={2} className="text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Data Retention */}
            <Card className="p-8 bg-accent border border-border rounded-lg mt-8">
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">
                Data Retention
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Our retention policy is simple:</strong> We keep data for as long as it's needed to provide our service. You can request deletion of your account and all associated data at any time. Once deleted, your data is permanently removed from our systems within 30 days. Conversation content is never stored and is deleted immediately after each session ends.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Safety Features
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Multiple layers of protection to ensure your safety and wellbeing in every conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {safetyFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <feature.icon size={32} strokeWidth={1.5} className="text-destructive" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Compliance & Standards
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We meet or exceed industry standards for privacy and data protection.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Security Standards */}
              <Card className="p-8 bg-card border border-border rounded-lg">
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-6">
                  Security Standards
                </h3>
                <ul className="space-y-3">
                  {securityStandards.map((standard, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <standard.icon size={20} strokeWidth={2} className="text-success" />
                      <span className="text-gray-700">{standard.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Data Protection */}
              <Card className="p-8 bg-card border border-border rounded-lg">
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-6">
                  Data Protection
                </h3>
                <ul className="space-y-3">
                  {dataProtection.map((protection, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <protection.icon size={20} strokeWidth={2} className="text-success" />
                      <span className="text-gray-700">{protection.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 lg:py-32 bg-gradient-2">
        <div className="container mx-auto px-8 lg:px-16">
          <Card className="p-12 bg-primary border-none rounded-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="font-sans font-bold text-4xl text-primary-foreground mb-6">
                Our Promise to You
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-6">
                We believe that trust is earned through transparency and action. Your privacy isn't just a policy—it's a fundamental right that we're committed to protecting every single day.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                If you have questions about our privacy practices, please don't hesitate to reach out. We're here to answer them.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
