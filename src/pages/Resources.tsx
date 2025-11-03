import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpenIcon, SearchIcon } from 'lucide-react';

export function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = [
    { id: 'all', label: 'All Resources' },
    { id: 'articles', label: 'Articles' },
    { id: 'audio', label: 'Audio/Video' },
    { id: 'tools', label: 'Interactive Tools' },
    { id: 'guides', label: 'User Guides' },
  ];

  const resources = [
    {
      icon: '🌱',
      category: 'Article',
      readTime: '5 min read',
      title: '5 Ways to Practice Self-Compassion Daily',
      description: 'Learn practical approaches to be kinder to yourself and build emotional resilience.',
      tags: ['Self-care', 'Mindfulness', 'Daily habits'],
      type: 'articles',
    },
    {
      icon: '🧠',
      category: 'Article',
      readTime: '8 min read',
      title: 'Understanding Anxiety: A Gentle Guide',
      description: 'Explore what anxiety is, why it happens, and gentle ways to manage anxious thoughts.',
      tags: ['Anxiety', 'Understanding', 'Coping'],
      type: 'articles',
    },
    {
      icon: '💛',
      category: 'Article',
      readTime: '6 min read',
      title: 'Building Healthy Boundaries in Relationships',
      description: 'Discover how to set and maintain healthy boundaries while preserving meaningful connections.',
      tags: ['Relationships', 'Boundaries', 'Communication'],
      type: 'articles',
    },
    {
      icon: '🌙',
      category: 'Audio',
      readTime: '10 min',
      title: '10-Minute Mindfulness for Beginners',
      description: 'A gentle introduction to mindfulness practice for reducing stress and increasing awareness.',
      tags: [],
      type: 'audio',
    },
    {
      icon: '😴',
      category: 'Audio',
      readTime: '20 min',
      title: 'Sleep Stories for Anxiety Relief',
      description: 'Calming stories designed to help you let go of tension and fall asleep easier.',
      tags: [],
      type: 'audio',
    },
    {
      icon: '🌬️',
      category: 'Audio',
      readTime: '5 min',
      title: 'Guided Breathing for Panic Attacks',
      description: 'Quick, effective breathing techniques to help manage panic and overwhelming feelings.',
      tags: [],
      type: 'audio',
    },
    {
      icon: '📊',
      category: 'Tool',
      readTime: 'Interactive',
      title: 'Daily Mood Tracker',
      description: 'Monitor your emotional well-being and identify patterns with our simple, private mood tracker.',
      tags: [],
      type: 'tools',
    },
    {
      icon: '📝',
      category: 'Tool',
      readTime: 'Interactive',
      title: 'Gratitude Journal Builder',
      description: 'Create personalized gratitude practices with guided prompts and reflection support.',
      tags: [],
      type: 'tools',
    },
    {
      icon: '🎯',
      category: 'Tool',
      readTime: 'Interactive',
      title: 'Stress Assessment Quiz',
      description: 'Understand your stress levels and get personalized recommendations for managing stress.',
      tags: [],
      type: 'tools',
    },
    {
      icon: '📖',
      category: 'Story',
      readTime: 'A personal reflection',
      title: 'Finding My Voice After Loss',
      description: 'Real story about grief, healing, and rediscovering hope after a difficult loss.',
      tags: ['Grief', 'Hope', 'Healing'],
      type: 'articles',
    },
    {
      icon: '🌟',
      category: 'Story',
      readTime: 'A navigation story',
      title: 'From Isolation to Connection',
      description: 'My journey from social anxiety to building meaningful relationships through small steps.',
      tags: ['Social anxiety', 'Connection', 'Growth'],
      type: 'articles',
    },
    {
      icon: '💬',
      category: 'Story',
      readTime: 'A collection of stories',
      title: 'Learning to Listen: A Listener\'s Story',
      description: 'What I\'ve learned about empathy, growth, and human connection as a Heard listener.',
      tags: ['Listening', 'Empathy', 'Growth'],
      type: 'articles',
    },
  ];

  const quickTools = [
    {
      icon: '😊',
      title: 'Mood Check-In',
      description: 'Quick 2-minute mood assessment',
      buttonText: 'Start Check-In',
    },
    {
      icon: '🌬️',
      title: 'Breathing Exercise',
      description: '5 min guided breathing',
      buttonText: 'Start Breathing',
    },
    {
      icon: '🙏',
      title: 'Gratitude Moment',
      description: 'Share what you\'re grateful for',
      buttonText: 'Add Gratitude',
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-8">
              <BookOpenIcon size={40} strokeWidth={1.5} className="text-primary" />
            </div>
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              Learn & Grow
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover helpful resources, tools, and stories to support your emotional wellbeing journey.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon
                  size={20}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 bg-background border-border text-foreground text-lg"
                />
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Try searching for: anxiety, self-care, relationships, or sleep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-accent border-y border-border">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className="font-normal"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-sans font-bold text-3xl text-gray-900">
              All Resources
            </h2>
            <span className="text-gray-600">{filteredResources.length} resources</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-600 text-sm">{resource.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-sm">{resource.readTime}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    {resource.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 font-normal w-full justify-start px-0">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-20 lg:py-32 bg-accent">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Quick Access Tools
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Instant access to tools that can help you right, now.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {quickTools.map((tool) => (
              <Card
                key={tool.title}
                className="p-8 bg-card border border-border rounded-lg text-center"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <Button
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal w-full"
                >
                  {tool.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Help */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <Card className="p-12 bg-destructive/5 border-2 border-destructive/20 rounded-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="font-sans font-bold text-3xl text-gray-900 mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out for immediate support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-semibold text-gray-900 mb-2">Emergency Services</p>
                  <p className="text-2xl font-bold text-destructive">Call 911</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 mb-2">Suicide Prevention</p>
                  <p className="text-2xl font-bold text-destructive">Call or Text 988</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 mb-2">Crisis Text Line</p>
                  <p className="text-2xl font-bold text-destructive">Text TALK to 741741</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
