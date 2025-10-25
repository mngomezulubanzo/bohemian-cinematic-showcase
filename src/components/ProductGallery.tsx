import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';
import product4 from '@/assets/product4.jpg';
import product5 from '@/assets/product5.jpg';
import product6 from '@/assets/product6.jpg';

const products = [
  { id: 1, src: product1, alt: "BohemianClo — Jet black oversized hoodie with reflective white piping trim and signature flame logo, contemporary streetwear silhouette" },
  { id: 2, src: product2, alt: "BohemianClo — Classic black graphic tee featuring 'Path to Blessing' print with bold typography, paired with BohemianClo camo skull cap and signature branding" },
  { id: 3, src: product3, alt: "BohemianClo — Pure white oversized tee with relaxed fit, complemented by crisp white branded beanie and olive-grey tactical camo cargo pants with custom patches" },
  { id: 4, src: product4, alt: "BohemianClo — Collective campaign featuring signature white oversized tees, monochrome branded beanies, and military-inspired camo bottoms, outdoor lifestyle aesthetic" },
  { id: 5, src: product5, alt: "BohemianClo — Duo editorial showcasing premium black hoodies with contrasting white reflective piping, urban architecture backdrop, elevated street luxury" },
  { id: 6, src: product6, alt: "BohemianClo — Statement black tracksuit with vibrant '2048' graphic back print in pink gradient, complete matching joggers with white reflective side stripes, athletic heritage style" },
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % products.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + products.length) % products.length);
    }
  };

  return (
    <>
      <section id="collection-gallery" className="relative min-h-screen w-full px-6 py-24 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <h2 className="cinematic-text mb-16 text-center text-3xl font-light md:text-5xl">
            Collection Preview
          </h2>

          <TooltipProvider>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <Tooltip key={product.id} delayDuration={300}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative aspect-[3/4] cursor-pointer overflow-hidden frosted-glass"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="h-full w-full object-cover hover-depth"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-sm cinematic-text font-semibold mb-2">{product.alt.split('—')[0]}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{product.alt.split('—')[1]?.trim()}</p>
                        </div>
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-sm">{product.alt}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </motion.div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute right-6 top-6 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Close quick view"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={products[selectedImage].src}
                alt={products[selectedImage].alt}
                className="h-full w-full object-contain"
              />
              <p className="mt-4 text-center text-sm cinematic-text text-muted-foreground">
                {products[selectedImage].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
