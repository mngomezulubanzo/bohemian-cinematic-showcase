import { motion } from 'framer-motion';
import chromeLogo from '@/assets/chrome-logo-hero.jpg';
export default function Hero3D() {
  const handleScrollToCollection = () => {
    const gallerySection = document.querySelector('#collection-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mb-8 w-full max-w-6xl"
        >
          <img 
            src={chromeLogo} 
            alt="BOHEMIANCLO ONLINE STORE COMING SOON STAY TAPPED INN - 3D chrome metallic logo" 
            className="w-full h-auto object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 20px 60px rgba(255,255,255,0.15)) drop-shadow(0 0 40px rgba(255,255,255,0.1))'
            }}
          />
        </motion.div>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="metallic-text text-xl font-light md:text-2xl">
          bohemianclo — unconverted self reflection
        </motion.p>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute bottom-12 cursor-pointer" onClick={handleScrollToCollection} whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.95
      }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs cinematic-text text-muted-foreground">Scroll to explore</span>
            <svg className="h-6 w-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>;
}