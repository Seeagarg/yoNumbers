import React from 'react'
// import Swiper from 'swiper';
import classes from '../css/Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';





const CarouselComponent = () => {

  return (
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
    <img src="/assets/images/carousel_img1.jpeg" alt="" />
    <div className={classes.data}>
    <h3 className={classes.h3}>Free Games</h3>
    <p className={classes.p}>Play For Fun</p>
    <button className={classes.button}>Play Now</button>
    </div>
    </SwiperSlide>
    <SwiperSlide><img src="/assets/images/carousel_img2.jpeg" alt="" />
    <div className={classes.data}>
    <h3 className={classes.h3}>Free Games</h3>
    <p className={classes.p}>Play For Fun</p>
    <button className={classes.button}>Play Now</button>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <img src="/assets/images/carousel_img1.jpeg" alt="" />
    <div className={classes.data}>
    <h3 className={classes.h3}>Free Games</h3>
    <p className={classes.p}>Play For Fun</p>
    <button className={classes.button}>Play Now</button>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <img src="/assets/images/carousel_img2.jpeg" alt="" />
    <div className={classes.data}>
    <h3 className={classes.h3}>Free Games</h3>
    <p className={classes.p}>Play For Fun</p>
    <button className={classes.button}>Play Now</button>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <img src="/assets/images/carousel_img1.jpeg" alt="" />
    <div className={classes.data}>
    <h3 className={classes.h3}>Free Games</h3>
    <p className={classes.p}>Play For Fun</p>
    <button className={classes.button}>Play Now</button>
    </div>
    </SwiperSlide>
 
  </Swiper>
  )
}

export default CarouselComponent
