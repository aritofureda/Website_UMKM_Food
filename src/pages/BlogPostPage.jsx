import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import AnimatedSection from '../components/shared/AnimatedSection';
import { blogPosts } from '../data/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation('blog');
  const lang = i18n.language;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Section>
        <Container>
          <div className="text-center">
            <p className="text-neutral-500">Post not found</p>
            <Link to="/blog" className="text-primary-500 mt-4 inline-block">{t('back')}</Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors mb-8">
              <ArrowLeft size={18} />
              {t('back')}
            </Link>

            <img
              src={post.image}
              alt={post.title[lang]}
              className="w-full aspect-[2/1] object-cover rounded-xl mb-8"
            />

            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              {post.title[lang]}
            </h1>

            <p className="text-neutral-600 leading-relaxed text-lg">
              {post.content[lang]}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
