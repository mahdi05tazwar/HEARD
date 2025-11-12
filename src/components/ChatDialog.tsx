import { useEffect, useRef, useState } from 'react';
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

type Message = { id: string; sender: 'bot' | 'user'; text: string };

export function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [step, setStep] = useState<Step>('topic');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [listenerPref, setListenerPref] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [isMatching, setIsMatching] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [listenerName, setListenerName] = useState<string>('John Doe');

  // chat messages history
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm-0', sender: 'bot', text: "I'm here to help connect you with the right listener. What brings you here today?" },
  ]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Disable background scrolling when dialog is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // auto-scroll when messages change
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isCalling]);

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
    setMessages([{ id: 'm-0', sender: 'bot', text: "I'm here to help connect you with the right listener. What brings you here today?" }]);
    onClose();
  };

  // Helper to push messages
  const pushBot = (text: string) =>
    setMessages((m) => [...m, { id: `m-${Date.now()}`, sender: 'bot', text }]);

  const pushUser = (text: string) =>
    setMessages((m) => [...m, { id: `u-${Date.now()}`, sender: 'user', text }]);

  // Simulate matching when timing/duration chosen
  const simulateMatching = () => {
    setIsMatching(true);
    pushBot('Finding your perfect match…');

    setTimeout(() => {
      setIsMatching(false);
      // pick a random listener name
      const idx = Math.floor(Math.random() * LISTENER_NAMES.length);
      setListenerName(LISTENER_NAMES[idx] || 'John Doe');
      setStep('calling');
      setIsCalling(true);
      pushBot(`Connecting you to ${LISTENER_NAMES[idx] || 'John Doe'} — starting the call now.`);
    }, 1500);
  };

  // Handlers for each step
  const handleTopicSelect = (t: string) => {
    setSelectedTopic(t);
    pushUser(t);
    setListenerPref(null);
    setTiming(null);
    setDuration(null);
    setStep('preference');

    // small bot reply after user choice
    setTimeout(() => pushBot('Do you have a preference for who you’d like to talk with?'), 300);
  };

  const handlePrefSelect = (p: string) => {
    setListenerPref(p);
    pushUser(p);
    setStep('timing');

    setTimeout(() => pushBot('When would you like to have the conversation?'), 300);
  };

  const handleTimingSelect = (t: string) => {
    setTiming(t);
    pushUser(t);
    setStep('duration');

    setTimeout(() => pushBot('How much time do you have for this conversation?'), 300);
  };

  const handleDurationSelect = (d: string) => {
    setDuration(d);
    pushUser(d);
    // final bot acknowledgement then match
    setTimeout(() => pushBot('Great — I’ll find someone for you now.'), 300);
    simulateMatching();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-[#121726] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-gray-700/40 max-h-[90vh] flex flex-col">
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
        <div className="bg-[#121726] p-6 flex-1 flex flex-col min-h-0">
          {/* Messages area */}
          <div ref={containerRef} className="flex-1 overflow-y-auto space-y-4 pb-4 min-h-0">
            {messages.map((m) =>
              m.sender === 'bot' ? (
                <div key={m.id} className="bg-[#1a2033] rounded-2xl p-4 border border-gray-700/50 max-w-[78%]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div className="text-gray-100 leading-relaxed">{m.text}</div>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="flex justify-end">
                  <div className="bg-white text-gray-900 rounded-2xl p-3 max-w-[78%]">
                    {m.text}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Controls area */}
          {!isCalling ? (
            <div className="mt-4">
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

              <div className="mt-4 text-sm text-gray-400">
                <span className="mr-2">Selected:</span>
                <span className="text-gray-300">
                  {selectedTopic || '—'} • {listenerPref || '—'} • {timing || '—'} • {duration || '—'}
                </span>
              </div>
            </div>
          ) : (
            // Calling screen
            <div className="flex flex-col items-center justify-center min-h-[320px] space-y-8">
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
        {/* Inert chat input (placeholder for future features) */}
        <div className="mt-4 pt-3 border-t border-gray-700/40">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Type a message..."
                aria-label="Chat input (inactive)"
                disabled
                className="w-full bg-[#0f1624] text-gray-200 placeholder:text-gray-500 rounded-full py-3 px-4 border border-gray-700/30 focus:outline-none focus:ring-0 cursor-not-allowed"
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/40">
              {/* empty space reserved for future send/attachment icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
