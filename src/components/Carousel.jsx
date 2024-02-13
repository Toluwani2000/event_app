import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../style';

const carousel = () => {
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>   
}

export default carousel

// // src/components/Carousel.jsx
// import React, { useState } from 'react';
// import styles from '../style'; // Import the CSS file for styling

// const Carousel = ({ slides }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const goToPrevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   const goToNextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={goToPrevSlide}>&lt;</button>
//       <div className="slide-container">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${index === activeIndex ? 'active' : ''}`}
//           >
//             {slide}
//           </div>
//         ))}
//       </div>
//       <button onClick={goToNextSlide}>&gt;</button>
//     </div>
//   );
// };

// export default Carousel;
