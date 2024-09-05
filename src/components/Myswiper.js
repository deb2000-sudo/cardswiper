import React from 'react';
import { register } from 'swiper/element/bundle';
import styles from './Myswiper.module.css';
register();

const Myswiper = () => {
  return (
    <div className={styles.main}>
      <div className={styles.carouselContainer}>
        <swiper-container
          slides-per-view="7"
          space-between="50"
          mousewheel-invert="true"
          navigation="true"
          navigation-next-el={`${styles.customNextButton}`}
          navigation-prev-el=".custom-prev-button"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <swiper-slide>Slide 10</swiper-slide>
          <swiper-slide>Slide 11</swiper-slide>
          <swiper-slide>Slide 12</swiper-slide>
          <swiper-slide>Slide 13</swiper-slide>
          <swiper-slide>Slide 14</swiper-slide>
        </swiper-container>
        <div className={`${styles.navBtn} ${styles.customPrevButton}`}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
              fill="#000000"
              fill-opacity=".16"
              stroke="#000000"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="m14 16-4-4 4-4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={`${styles.navBtn} ${styles.customNextButton}`}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
              fill="#000000"
              fill-opacity=".16"
              stroke="#000000"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="m10 16 4-4-4-4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Myswiper;
