import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import Section from '../ui/Section';
import AnimatedSection from '../shared/AnimatedSection';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  const { t, i18n } = useTranslation('home');
  const { t: tc } = useTranslation('common');
  const lang = i18n.language;
  const featured = products.slice(0, 4);

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeading title={t('featured.title')} subtitle={t('featured.subtitle')} />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <AnimatedSection key={product.id}>
              <Card className="group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-800 mb-1">{product.name[lang]}</h3>
                  <p className="text-sm text-neutral-500 mb-3 line-clamp-2">{product.description[lang]}</p>
                  <p className="text-primary-500 font-bold">Rp {product.price.toLocaleString('id-ID')}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors">
            {tc('cta.view_all')}
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
