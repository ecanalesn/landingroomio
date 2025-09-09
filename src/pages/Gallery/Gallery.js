import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Hotel',
      subtitle: 'Habitación',
      image: '/images/img01.png',
      alt: 'Interior de habitación de hotel'
    },
    {
      id: 2,
      title: 'Hotel',
      subtitle: 'Exterior con piscina',
      image: '/images/img02.png',
      alt: 'Exterior del hotel con piscina'
    },
    {
      id: 3,
      title: 'Casa Rural',
      subtitle: 'Habitación doble',
      image: '/images/img03.png',
      alt: 'Habitación doble en casa rural'
    },
    {
      id: 4,
      title: 'Casa Rural',
      subtitle: 'Exteriores de la casa',
      image: '/images/img04.png',
      alt: 'Exteriores de casa rural'
    },
    {
      id: 5,
      title: 'Bungalow',
      subtitle: 'Habitación doble',
      image: '/images/img05.png',
      alt: 'Interior de habitación en bungalow'
    },
    {
      id: 6,
      title: 'Bungalow',
      subtitle: 'Exterior',
      image: '/images/img06.png',
      alt: 'Vista exterior del bungalow'
    },
    {
      id: 7,
      title: 'Camping',
      subtitle: 'Habitación',
      image: '/images/img07.png',
      alt: 'Interior de alojamiento en camping'
    },
    {
      id: 8,
      title: 'Camping',
      subtitle: 'Exteriores',
      image: '/images/img08.png',
      alt: 'Exteriores del camping'
    }
  ];

  return (
    <div 
      className="gallery-page"
      style={{
        backgroundImage: `url('/images/gallery.png')`
      }}
    >
      <div className="gallery-header">
        <div className="container">
          <h1>Nuestros Alojamientos</h1>
        </div>
      </div>

      <div className="gallery-content">
        <div className="container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="gallery-swiper"
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="gallery-slide">
                  <div className="slide-content">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

