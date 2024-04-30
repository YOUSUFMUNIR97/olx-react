// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideimage from '../assets/images/449107134-800x600.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SMSlider=() => {
  return (
    <div className='container-fluid'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }} // Corrected autoplay prop
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img width='100%' src={slideimage} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img width='100%'  src={slideimage} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img width='100%'  src={slideimage} alt="Slide 3" /></SwiperSlide>
      
      </Swiper>
      </div>
  );
};

export default SMSlider;