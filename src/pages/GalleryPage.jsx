import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { galleryImages } from '../data/gallery';

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className="group relative aspect-[4/3] rounded-xl overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
        <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {alt}
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const { t, i18n } = useTranslation('gallery');
  const lang = i18n.language;

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <AnimatedSection key={img.id}>
              <ParallaxImage src={img.src} alt={img.alt[lang]} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
