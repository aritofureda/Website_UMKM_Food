import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { faqItems } from '../data/faq';

export default function FAQPage() {
  const { t, i18n } = useTranslation('faq');
  const lang = i18n.language;
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item) => (
            <AnimatedSection key={item.id}>
              <div className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-800 pr-4">{item.question[lang]}</span>
                  <ChevronDown
                    size={20}
                    className={`text-neutral-400 shrink-0 transition-transform duration-200 ${
                      openId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-5 pb-5">
                    <p className="text-neutral-600 text-sm leading-relaxed">{item.answer[lang]}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
