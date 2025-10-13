import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="cinematic-text mb-8 text-3xl font-light md:text-5xl">
          Brand Statement
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          A cinematic preview that elevates BohemianClo's lookbook to an interactive,
          high-fashion experience — 3D brand identity, curated model photography, and
          signature motion design.
        </p>
      </motion.div>
    </section>
  );
}
