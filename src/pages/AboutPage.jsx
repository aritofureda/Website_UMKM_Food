import { useTranslation } from 'react-i18next';
import { Award, Heart, Leaf } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function AboutPage() {
  const { t } = useTranslation('about');

  const values = [
    { icon: Award, title: t('values.quality'), desc: t('values.quality_desc') },
    { icon: Leaf, title: t('values.authentic'), desc: t('values.authentic_desc') },
    { icon: Heart, title: t('values.love'), desc: t('values.love_desc') },
  ];

  return (
    <>
      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeading title={t('title')} />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">{t('story.title')}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">{t('story.p1')}</p>
              <p className="text-neutral-600 leading-relaxed">{t('story.p2')}</p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-700 mb-3">{t('mission.title')}</h3>
                <p className="text-neutral-600 leading-relaxed">{t('mission.text')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-secondary-50 rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-secondary-700 mb-3">{t('vision.title')}</h3>
                <p className="text-neutral-600 leading-relaxed">{t('vision.text')}</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-16">
            <AnimatedSection>
              <h3 className="font-display text-2xl font-bold text-neutral-900 text-center mb-10">{t('values.title')}</h3>
            </AnimatedSection>
            <div className="grid sm:grid-cols-3 gap-8">
              {values.map((item, i) => (
                <AnimatedSection key={i}>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon size={28} className="text-primary-500" />
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
