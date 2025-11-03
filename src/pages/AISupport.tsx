import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MicIcon, SendIcon, Volume2Icon } from 'lucide-react';

export function AISupport() {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availableListeners = [
    {
      name: 'Sarah',
      specialty: 'Anxiety & Panic',
      avatar: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg',
      available: true,
    },
    {
      name: 'Marcus',
      specialty: 'Depression & Mood',
      avatar: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg',
      available: true,
    },
    {
      name: 'Elena',
      specialty: 'Stress & Work-life',
      avatar: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg',
      available: true,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans font-bold text-5xl lg:text-6xl text-gray-900 mb-8">
              AI Support Assistant
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chat or speak with our AI to get personalized support and connect with the right listener
            </p>
          </div>
        </div>
      </section>

      {/* Main Chat Interface */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-border rounded-lg overflow-hidden flex flex-col h-[600px]">
                {/* Chat Messages */}
                <div className="flex-1 p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* AI Message */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-sans font-bold text-sm">AI</span>
                      </div>
                      <div className="flex-1">
                        <Card className="p-4 bg-accent border-none rounded-lg">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Hello! I'm Heard's AI assistant. I'm here to listen and help connect you with the right support. You can type your message or use voice - whatever feels most comfortable. How are you feeling today?
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80 hover:bg-primary/5 font-normal gap-2"
                            onClick={() => setIsListening(!isListening)}
                          >
                            <Volume2Icon size={16} strokeWidth={1.5} />
                            Listen
                          </Button>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-border bg-background">
                  <div className="flex gap-3 items-end">
                    <div className="flex-1 relative">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message or use voice..."
                        className="pr-12 h-12 bg-background border-border text-foreground resize-none"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary hover:bg-primary/5"
                        onClick={() => setIsListening(!isListening)}
                      >
                        <MicIcon size={20} strokeWidth={1.5} />
                      </Button>
                    </div>
                    <Button
                      size="icon"
                      className="h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0"
                      onClick={handleSendMessage}
                    >
                      <SendIcon size={20} strokeWidth={1.5} />
                    </Button>
                  </div>
                  <p className="text-gray-500 text-xs mt-3 text-center">
                    Press Enter to send, or use the microphone for voice input
                  </p>
                </div>
              </Card>
            </div>

            {/* Available Listeners Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans font-semibold text-xl text-gray-900">
                    Available Listeners
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/5 font-normal text-sm"
                  >
                    Refresh
                  </Button>
                </div>
                <div className="space-y-4">
                  {availableListeners.map((listener) => (
                    <Card
                      key={listener.name}
                      className="p-4 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={listener.avatar}
                          alt={`${listener.name} avatar`}
                          className="w-12 h-12 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <h4 className="font-sans font-semibold text-gray-900">
                            {listener.name}
                          </h4>
                          <p className="text-gray-600 text-sm">{listener.specialty}</p>
                        </div>
                        {listener.available && (
                          <div className="w-3 h-3 bg-success rounded-full flex-shrink-0" />
                        )}
                      </div>
                    </Card>
                  ))}
                  <p className="text-gray-500 text-sm text-center pt-2">
                    +3 more listeners available
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
