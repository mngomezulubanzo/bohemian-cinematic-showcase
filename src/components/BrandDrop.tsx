import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

export default function BrandDrop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated && brandRef.current) {
      setHasAnimated(true);

      // GSAP timeline for dramatic drop animation
      const tl = gsap.timeline();

      tl.fromTo(
        brandRef.current,
        {
          y: -300,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        }
      )
        .to(brandRef.current, {
          y: 10,
          duration: 0.15,
          ease: 'power2.in',
        })
        .to(brandRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'bounce.out',
        })
        .to(
          brandRef.current,
          {
            y: -5,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          },
          '+=0.5'
        );

      // Camera shake effect on parent
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          x: -3,
          duration: 0.05,
          yoyo: true,
          repeat: 3,
          ease: 'power1.inOut',
        });
      }
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Particle burst effect */}
      {hasAnimated && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-muted"
              initial={{ opacity: 1, scale: 0 }}
              animate={{
                opacity: 0,
                scale: [0, 1, 0],
                x: Math.cos((i / 20) * Math.PI * 2) * 200,
                y: Math.sin((i / 20) * Math.PI * 2) * 200,
              }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}

      <div ref={brandRef} className="text-center">
        <h2 className="text-7xl font-bold md:text-9xl lg:text-[12rem] leading-none">
          <span className="metallic-text">BOHEMIAN</span>
          <br />
          <span className="metallic-text">CLO</span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: hasAnimated ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 text-lg cinematic-text text-muted-foreground"
        >
          Unconverted Self Reflection
        </motion.p>
      </div>
    </section>
  );
}
