import React from "react";
import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import userImg from "../../../assets/cable_sub.png";

const Testimonials = () => {
  return (
    <section className="container" id="testimonials">
      <h2>Testimonials</h2>
      <h5>What clients say's</h5>
      <div className="__testimonials">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial">
              <div className="user__info">
                <img src={userImg} alt="Testimonial" />
                <h1>Whiz Khaleel</h1>
                <h4>CEO FiveStarsData</h4>
              </div>
              <article className="user__comment">
                FiveStarsData is the best platform when it comes to affordable
                data plans and airtime discount, I really enjoy purchasing the
                services here.
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="user__info">
                <img src={userImg} alt="Testimonial" />
                <h1>Ibrahim al-Khaleel</h1>
                <h4>Retailer</h4>
              </div>
              <article className="user__comment">
                FiveStarsData is the best platform when it comes to affordable
                data plans and airtime discount, I really enjoy purchasing the
                services here.
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="user__info">
                <img src={userImg} alt="Testimonial" />
                <h1>Khaleel Ibn Ibrahim</h1>
                <h4>Customer</h4>
              </div>
              <article className="user__comment">
                FiveStarsData is the best platform when it comes to affordable
                data plans and airtime discount, I really enjoy purchasing the
                services here.
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="user__info">
                <img src={userImg} alt="Testimonial" />
                <h1>Name</h1>
                <h4>User Type</h4>
              </div>
              <article className="user__comment">
                FiveStarsData is the best platform when it comes to affordable
                data plans and airtime discount, I really enjoy purchasing the
                services here.
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="user__info">
                <img src={userImg} alt="Testimonial" />
                <h1>Customer</h1>
                <h4>User Type</h4>
              </div>
              <article className="user__comment">
                FiveStarsData is the best platform when it comes to affordable
                data plans and airtime discount, I really enjoy purchasing the
                services here.
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
