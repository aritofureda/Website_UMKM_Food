import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/shared/AnimatedSection';
import { testimonials } from '../data/testimonials';

export default function TestimonialsPage() {
  const { t, i18n } = useTranslation('testimonials');
  const lang = i18n.language;

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <AnimatedSection key={item.id}>
              <Card className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary-400 text-primary-400" />
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-6">
                  "{item.text[lang]}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium text-neutral-800 text-sm">{item.name}</p>
                    <p className="text-xs text-neutral-500">{item.role[lang]}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
