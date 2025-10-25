import { motion } from 'framer-motion';

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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/bohemianclo.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 z-[1] bg-background/20"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

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