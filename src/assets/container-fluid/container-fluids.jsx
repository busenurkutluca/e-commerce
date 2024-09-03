import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import "./container-fluids.css"
const items = [
    {
      src: '/public/asianwoman.png',
      overlaySrc: '/public/shop-hero-2.jpg', // Üst resmin yolu
      caption: [
        "SUMMER 2024",
        "Part of the Neural Unıverse",      
        "We know how large objects will act, but things We know how large objects will act, We know how are objects will act, We know a small scale.",
        
      ],
      buttonText: "BUY NOW",
      key: 1,
    },
    // Diğer slide'lar eklenebilir
  ];
  
  export function CustomCaption({ caption, buttonText }) {
    return (
      <div className="custom-caption">
        <h2>{caption[0]}</h2>
        <h3>{caption[1]}</h3>
        <p>{caption[2]}</p>
        <div className="button-group">
          {buttonText && <button className="shop-button">{buttonText}</button>}
          <button className="read-more-button">READ MORE</button>
        </div>
      </div>
    );
  }

export function Fluids(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="carousel-item">
          <img src={item.src} alt="Background" className="bg-image" />
          <img src={item.overlaySrc} alt="Overlay" className="overlay-image" />
          <CustomCaption
            caption={item.caption}
            buttonText={item.buttonText}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Fluids