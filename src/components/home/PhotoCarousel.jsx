import { motion } from 'framer-motion';

const row1Images = [
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
];

const row2Images = [
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
];

function CarouselRow({ images, direction = 'left', duration = 30 }) {
  const doubled = [...images, ...images];
  const totalWidth = images.length * 320;

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? [0, -totalWidth] : [-totalWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-72 h-48 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PhotoCarousel() {
  return (
    <section className="py-16 md:py-24 space-y-6 overflow-hidden">
      <CarouselRow images={row1Images} direction="left" duration={35} />
      <CarouselRow images={row2Images} direction="right" duration={28} />
    </section>
  );
}
