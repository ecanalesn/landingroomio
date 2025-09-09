import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoSlider from '../../components/VideoSlider/VideoSlider';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const accommodations = [
    {
      id: 1,
      title: 'Hotel',
      subtitle: 'Resort',
      description: 'Descubre nuestro hotel resort, donde el confort se encuentra con la elegancia en un entorno paradisiaco. Disfruta de una escapada inolvidable con servicios de primera clase y vistas impresionantes.',
      video: '/videos/hotel.mp4',
      image: '/images/img01.png'
    },
    {
      id: 2,
      title: 'Casa',
      subtitle: 'Rural',
      description: 'Sumergete en el encanto de nuestra casa rural, un refugio acogedor en el corazon del campo. Ideal para una escapada tranquila, con un ambiente rustico y todas las comodidades.',
      video: '/videos/rural-house.mp4',
      image: '/images/img03.png'
    },
    {
      id: 3,
      title: 'Bungalow',
      subtitle: 'Acogedor',
      description: 'Relajate en la serenidad de nuestro bungalow, rodeado de naturaleza. Disfruta de un ambiente encantador con todas las facilidades para una estancia unica.',
      video: '/videos/bungalow.mp4',
      image: '/images/img05.png'
    },
    {
      id: 4,
      title: 'Camping',
      subtitle: 'Familiar',
      description: 'Vive una aventura autentica en nuestro camping, donde la naturaleza y el bienestar se encuentran. Una experiencia al aire libre en un entorno relajante.',
      video: '/videos/camping.mp4',
      image: '/images/img07.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % accommodations.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [accommodations.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      <VideoSlider 
        accommodations={accommodations}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
      />
      
      <div className={`content ${currentSlide === 0 ? 'active' : ''}`}>
        <h1>{accommodations[0].title}<br /><span>{accommodations[0].subtitle}</span></h1>
        <p>{accommodations[0].description}</p>
        <Link to="/galeria" className="cta-button">Ver más</Link>
      </div>
      
      <div className={`content ${currentSlide === 1 ? 'active' : ''}`}>
        <h1>{accommodations[1].title}<br /><span>{accommodations[1].subtitle}</span></h1>
        <p>{accommodations[1].description}</p>
        <Link to="/galeria" className="cta-button">Ver más</Link>
      </div>
      
      <div className={`content ${currentSlide === 2 ? 'active' : ''}`}>
        <h1>{accommodations[2].title}<br /><span>{accommodations[2].subtitle}</span></h1>
        <p>{accommodations[2].description}</p>
        <Link to="/galeria" className="cta-button">Ver más</Link>
      </div>
      
      <div className={`content ${currentSlide === 3 ? 'active' : ''}`}>
        <h1>{accommodations[3].title}<br /><span>{accommodations[3].subtitle}</span></h1>
        <p>{accommodations[3].description}</p>
        <Link to="/galeria" className="cta-button">Ver más</Link>
      </div>

      <div className="slider-navigation" role="tablist" aria-label="Accommodation types navigation">
        {accommodations.map((_, index) => (
          <button
            key={index}
            className={`nav-btn ${currentSlide === index ? 'active' : ''}`}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`${accommodations[index].title} ${accommodations[index].subtitle}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

