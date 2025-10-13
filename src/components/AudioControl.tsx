import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioControl() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: Audio file would need to be provided by user
    // For now, this is a placeholder structure
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Audio autoplay prevented by browser');
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      onClick={toggleMute}
      className="fixed bottom-6 left-6 z-50 frosted-glass p-4 rounded-full hover:bg-card transition-colors"
      aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      ) : (
        <Volume2 className="h-5 w-5 text-foreground" />
      )}
    </motion.button>
  );
}
