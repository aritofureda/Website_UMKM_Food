import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/shared/AnimatedSection';
import { team } from '../data/team';

export default function TeamPage() {
  const { t, i18n } = useTranslation('team');
  const lang = i18n.language;

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <AnimatedSection key={member.id}>
              <Card className="text-center p-6 hover:shadow-md transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  loading="lazy"
                />
                <h3 className="font-semibold text-neutral-800 mb-1">{member.name}</h3>
                <p className="text-primary-500 text-sm font-medium mb-3">{member.role[lang]}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{member.bio[lang]}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
