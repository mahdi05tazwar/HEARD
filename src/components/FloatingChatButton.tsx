import { useState, useEffect } from 'react';
import { ChatDialog } from '@/components/ChatDialog';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export function FloatingChatButton() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // avoid hydration mismatch if SSR; mount-only behavior
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div
        aria-hidden={open}
        className="fixed right-4 bottom-4 z-[80] md:right-8 md:bottom-8"
      >
        <Button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full px-4 py-3 bg-primary text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Start a conversation"
          title="Start a conversation"
        >
          <MessageSquare size={18} />
          <span className="hidden md:inline">Chat</span>
        </Button>
      </div>

      <ChatDialog isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
