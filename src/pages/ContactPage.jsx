import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function ContactPage() {
  const { t } = useTranslation('contact');
  const { t: tc } = useTranslation('common');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: MapPin, label: t('info.address_label'), value: tc('footer.address') },
    { icon: Phone, label: t('info.phone_label'), value: tc('footer.phone') },
    { icon: Mail, label: t('info.email_label'), value: tc('footer.email') },
    { icon: Clock, label: t('info.hours_label'), value: t('info.hours_value') },
  ];

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input label={t('form.name')} placeholder={t('form.name')} required />
              <Input label={t('form.email')} type="email" placeholder={t('form.email')} required />
              <Input label={t('form.subject')} placeholder={t('form.subject')} required />
              <Textarea label={t('form.message')} placeholder={t('form.message')} required />
              <Button type="submit" size="lg" className="w-full">
                {t('form.submit')}
              </Button>
              {submitted && (
                <p className="text-secondary-500 text-sm text-center font-medium">{t('form.success')}</p>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800 text-sm">{item.label}</p>
                    <p className="text-neutral-500 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8 bg-neutral-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-neutral-400 text-sm">Map Placeholder</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
