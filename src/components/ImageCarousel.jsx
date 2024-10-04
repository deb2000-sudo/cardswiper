import { useEffect, useState,useRef } from 'react';
import Mycard from './Mycard';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNextButton, SlidePrevButton } from './Sliderbutton'; // Your custom buttons
import 'swiper/css'; // Swiper's CSS
import styles from './ImageCarousel.module.css'

const ImageCarousel = () => {
  const API_ENDPOINT = "https://picsum.photos/v2/list";

  const [photos, setPhotos] = useState([]);
  const [photosLoader, setPhotosLoader] = useState(false);
  const swiperRef=useRef(null); //reference of swiper instance

  useEffect(() => {
    const onLoadHandler = async () => {
      await performApiCall();
    };
    onLoadHandler();
  }, []);

  // Perform API call function
  const performApiCall = async () => {
    setPhotosLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setPhotosLoader(false);
      setPhotos(response.data); // Update with the actual data
    } catch (error) {
      setPhotosLoader(false);
      console.error('error in fetching data', error);
    }
  };

  return (
    <div className={styles.carouselContainer} style={{ position: 'relative', padding: '20px 0' }}>
      <Swiper
        slidesPerView={6}
        loop={false}
        spaceBetween={30}
        style={{ padding: '30px 50px',margin:'110px 5px' }} // Space for the custom buttons
        onSwiper={(swiper)=>(swiperRef.current=swiper)}
      >
        {photosLoader ? (
          <p>Loading</p>
        ) : (
          photos && photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Mycard key={photo.id} id={photo.id} cImage={photo.download_url} cAuthor={photo.author} />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <SlidePrevButton swiperRef={swiperRef}/>
      <SlideNextButton  swiperRef={swiperRef} />
    </div>
  );
};

export default ImageCarousel;
