// src/components/SimpleChatWidget.tsx
import { useEffect, useRef, useState } from 'react';
import { XIcon, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SimpleChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

type Msg = { id: string; from: 'user' | 'bot'; text: string; time: number };

export function SimpleChatWidget({ isOpen, onClose }: SimpleChatWidgetProps) {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 'm1', from: 'bot', text: 'Hi — how can I help you today?', time: Date.now() },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // auto scroll to bottom on new message
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  // simple send handler and a simulated bot reply
  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { id: String(Date.now()), from: 'user', text, time: Date.now() };
    setMessages((s) => [...s, userMsg]);
    setInput('');

    // simulate bot reply
    setTimeout(() => {
      const reply: Msg = {
        id: 'b' + Date.now(),
        from: 'bot',
        text: 'Thanks for sharing. A human listener can help — would you like resources or to schedule?',
        time: Date.now(),
      };
      setMessages((s) => [...s, reply]);
    }, 700);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 bottom-20 z-[95] md:right-8 md:bottom-20 max-w-xs w-[92vw] md:w-96">
      <div className="flex flex-col bg-[#0f1724] border border-gray-700/60 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0b1220] border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-semibold">AI</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-100">Support Bot</div>
              <div className="text-xs text-gray-400">Instant help</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="p-1 rounded hover:bg-white/5 text-gray-300"
            >
              <XIcon size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          className="p-3 space-y-3 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700"
          role="log"
          aria-live="polite"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-snug ${
                  m.from === 'user'
                    ? 'bg-primary text-white rounded-br-md'
                    : 'bg-gray-800 text-gray-100 rounded-bl-md'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-3 py-3 bg-[#081023] border-t border-gray-700/50 flex gap-2 items-center">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-transparent placeholder:text-gray-500 text-gray-100 outline-none px-3 py-2 rounded-md border border-gray-700/30"
            aria-label="Message"
          />
          <Button
            onClick={sendMessage}
            className="px-3 py-2 bg-primary text-white rounded-md"
            aria-label="Send message"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
