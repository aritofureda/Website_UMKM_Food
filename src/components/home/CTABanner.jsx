import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import AnimatedSection from '../shared/AnimatedSection';

export default function CTABanner() {
  const { t } = useTranslation('home');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-20%] bg-primary-500"
      />
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0px', '40px']) }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0px', '-40px']) }}
      />

      <Container className="relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta_banner.title')}
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('cta_banner.subtitle')}
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              {t('cta_banner.button')}
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
