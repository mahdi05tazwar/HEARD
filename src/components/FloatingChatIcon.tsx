// src/components/FloatingChatIcon.tsx
import { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { SimpleChatWidget } from '@/components/SimpleChatWidget';

export function FloatingChatIcon() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // avoid scroll behind widget when open
  useEffect(() => {
    const prev = typeof document !== 'undefined' ? document.body.style.overflow : '';
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prev || '';
    }
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [open]);

  if (!isMounted) return null;

  return (
    <>
      <div className="fixed right-4 bottom-4 z-[90] md:right-8 md:bottom-8">
        <button
          aria-label="Open chat"
          title="Open chat"
          onClick={() => setOpen(true)}
          className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <MessageSquare size={20} />
        </button>
      </div>

      <SimpleChatWidget isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
