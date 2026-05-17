import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  const { t } = useTranslation('home');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[90vh] flex items-center">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-[var(--color-surface)] to-secondary-50"
      />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0px', '80px']) }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0px', '-60px']) }}
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products">
              <Button size="lg">
                {t('hero.cta_primary')}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                {t('hero.cta_secondary')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-surface)] to-transparent z-10" />
    </section>
  );
}
