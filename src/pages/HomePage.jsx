import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PhotoCarousel from '../components/home/PhotoCarousel';
import CTABanner from '../components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <PhotoCarousel />
      <CTABanner />
    </>
  );
}
