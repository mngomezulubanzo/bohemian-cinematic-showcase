import Hero3D from '@/components/Hero3D';
import ProductGallery from '@/components/ProductGallery';
import BrandDrop from '@/components/BrandDrop';
import About from '@/components/About';
import Contact from '@/components/Contact';
import AudioControl from '@/components/AudioControl';

const Index = () => {
  return (
    <main className="relative">
      <AudioControl />
      <Hero3D />
      <ProductGallery />
      <BrandDrop />
      <About />
      <Contact />
      
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 BohemianClo. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
