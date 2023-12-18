'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

export default function ProductSwiper({
  products,
}: {
  products: { [key: string]: any }[];
}) {
  const [spacing, setSpacing] = useState(30);
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    const updateSpacing = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSpacing(24);
        setSlidesPerView(4);
      } else if (screenWidth >= 600) {
        setSpacing(16);
        setSlidesPerView(3);
      } else {
        setSpacing(10);
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', updateSpacing);
    updateSpacing();

    return () => {
      window.removeEventListener('resize', updateSpacing);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spacing}
      freeMode={true}
      pagination={{
        clickable: true,
        renderBullet: function () {
          return `<span class="hidden"></span>`;
        },
      }}
      modules={[FreeMode, Pagination]}
      className="mt-4 lg:mt-6"
    >
      {products.map((product, i) => (
        <SwiperSlide key={i} className="">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
