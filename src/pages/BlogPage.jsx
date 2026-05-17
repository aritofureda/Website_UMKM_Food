import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/shared/AnimatedSection';
import { blogPosts } from '../data/blog';

export default function BlogPage() {
  const { t, i18n } = useTranslation('blog');
  const lang = i18n.language;

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              <Link to={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h3 className="font-semibold text-neutral-800 mb-2 group-hover:text-primary-500 transition-colors">
                      {post.title[lang]}
                    </h3>
                    <p className="text-sm text-neutral-500 flex-1">{post.excerpt[lang]}</p>
                    <span className="text-primary-500 text-sm font-medium mt-4 inline-block">
                      {t('read_more')} →
                    </span>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
