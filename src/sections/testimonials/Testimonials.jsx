// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper";
import "./Testimonials.css";

import testimonialData from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>

      <div className="container" data-aos="fade-up">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            600: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          className="mySwiper"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
          }}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
