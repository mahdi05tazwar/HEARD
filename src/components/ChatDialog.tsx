import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { XIcon, LoaderIcon, PhoneIcon } from 'lucide-react';

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'topic' | 'preference' | 'timing' | 'duration' | 'calling';

const TOPICS = [
  'Feeling anxious',
  'Feeling sad or down',
  'Stressed out',
  'Relationship issues',
  'Grief or loss',
  'Just need to talk',
];

const PREFERENCES = ['Male listener', 'Female listener', 'No preference'];
const TIMINGS = ['Right now', 'Schedule for later'];
const DURATIONS = ['15 minutes', '30 minutes', '45 minutes', '1 hour'];

const LISTENER_NAMES = [
  'Alex Carter',
  'Jordan Lee',
  'Taylor Morgan',
  'Sam Rivera',
  'Casey Brooks',
  'Jamie Nguyen',
  'Riley Patel',
  'Avery Kim',
  'Morgan Chen',
  'John Doe',
];

export function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [step, setStep] = useState<Step>('topic');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [listenerPref, setListenerPref] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [isMatching, setIsMatching] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [listenerName, setListenerName] = useState<string>('John Doe');

  // Disable background scrolling when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset all state when closing
  const handleClose = () => {
    setStep('topic');
    setSelectedTopic(null);
    setListenerPref(null);
    setTiming(null);
    setDuration(null);
    setIsMatching(false);
    setIsCalling(false);
    setListenerName('John Doe');
    onClose();
  };

  // Simulate matching when timing/duration chosen
  const simulateMatching = () => {
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      // pick a random listener name
      const idx = Math.floor(Math.random() * LISTENER_NAMES.length);
      setListenerName(LISTENER_NAMES[idx] || 'John Doe');
      setStep('calling');
      setIsCalling(true);
    }, 1500);
  };

  // Handlers for each step
  const handleTopicSelect = (t: string) => {
    setSelectedTopic(t);
    setStep('preference');
  };

  const handlePrefSelect = (p: string) => {
    setListenerPref(p);
    setStep('timing');
  };

  const handleTimingSelect = (t: string) => {
    setTiming(t);
    setStep('duration');
  };

  const handleDurationSelect = (d: string) => {
    setDuration(d);
    simulateMatching();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-[#121726] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-gray-700/40">
        {/* Header */}
        <div className="relative px-8 py-6 border-b border-gray-700/40 bg-[#161b2b]">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">🤖</span>
                </div>
                <h2 className="font-sans font-bold text-2xl text-gray-100">Heard AI Assistant</h2>
              </div>
              <p className="text-gray-400 text-sm">
                {isMatching ? 'Finding your perfect match…' : 'Tell me a bit so I can match you quickly'}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="Close dialog"
            >
              <XIcon size={24} strokeWidth={1.5} />
            </button>
          </div>
          {isMatching && (
            <div className="absolute top-6 right-20">
              <LoaderIcon size={24} strokeWidth={2} className="text-primary animate-spin" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="bg-[#121726] p-8 min-h-[520px]">
          {!isCalling ? (
            <div className="space-y-6">
              {/* AI Message bubble */}
              <div className="bg-[#1a2033] rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div className="flex-1">
                    {step === 'topic' && (
                      <p className="text-gray-100 leading-relaxed">
                        I’m here to help connect you with the right listener. What brings you here today?
                      </p>
                    )}
                    {step === 'preference' && (
                      <p className="text-gray-100 leading-relaxed">
                        Do you have a preference for who you’d like to talk with?
                      </p>
                    )}
                    {step === 'timing' && (
                      <p className="text-gray-100 leading-relaxed">
                        When would you like to have the conversation?
                      </p>
                    )}
                    {step === 'duration' && (
                      <p className="text-gray-100 leading-relaxed">
                        How much time do you have for this conversation?
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Step controls */}
              {step === 'topic' && (
                <div className="flex flex-wrap gap-3">
                  {TOPICS.map((t) => (
                    <Button
                      key={t}
                      variant="outline"
                      onClick={() => handleTopicSelect(t)}
                      className="bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all font-normal"
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              )}

              {step === 'preference' && (
                <div className="flex flex-wrap gap-3">
                  {PREFERENCES.map((p) => (
                    <Button
                      key={p}
                      variant="outline"
                      onClick={() => handlePrefSelect(p)}
                      className="bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all font-normal"
                    >
                      {p}
                    </Button>
                  ))}
                </div>
              )}

              {step === 'timing' && (
                <div className="flex flex-wrap gap-3">
                  {TIMINGS.map((t) => (
                    <Button
                      key={t}
                      variant="outline"
                      onClick={() => handleTimingSelect(t)}
                      className="bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all font-normal"
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              )}

              {step === 'duration' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {DURATIONS.map((d) => (
                    <Button
                      key={d}
                      variant="outline"
                      onClick={() => handleDurationSelect(d)}
                      className="bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all font-normal"
                    >
                      {d}
                    </Button>
                  ))}
                </div>
              )}

              {/* Progress / summary */}
              <div className="mt-4 text-sm text-gray-400">
                <span className="mr-2">Selected:</span>
                <span className="text-gray-300">
                  {selectedTopic || '—'} • {listenerPref || '—'} • {timing || '—'} • {duration || '—'}
                </span>
              </div>
            </div>
          ) : (
            // Calling screen
            <div className="flex flex-col items-center justify-center min-h-[420px] space-y-8">
              <div className="w-24 h-24 rounded-full bg-primary/25 flex items-center justify-center shadow-inner">
                <PhoneIcon size={40} className="text-primary animate-pulse" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-sans font-semibold text-2xl text-gray-100">Calling…</h3>
                <p className="text-gray-300">Listener: {listenerName}</p>
                <p className="text-gray-400 text-sm">
                  Topic: {selectedTopic} • {listenerPref || 'No preference'} • {duration}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setIsCalling(false)}
                  className="bg-white text-gray-900 hover:bg-white/90 font-normal"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleClose}
                  className="bg-primary text-white hover:bg-primary/90 font-normal"
                >
                  End
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
