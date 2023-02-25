import React from "react";
import styles from "../../styles/Banner.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const data = [
  {
    image: "https://i.ibb.co/YcxtsZM/slide-01-home07.jpg",
    subtitle: "Upto 50% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
  // {
  //   image: "https://i.ibb.co/h7VZfc4/slide-01-home01.jpg",
  //   subtitle: "Upto 10% off on BookSelf product",
  //   title: "BookSelf is your Curious",
  //   month: "February",
  // },
  {
    image: "https://i.ibb.co/0f1XmC1/slide-02-home07.jpg",
    subtitle: "Upto 10% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
  {
    image: "https://i.ibb.co/WkBWwMW/slide-01-home08.jpg",
    subtitle: "Upto 10% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
];
const Banner = () => {
  return (
    <div>
      <div className="">
        {/*  */}
        <div className="">
          <Swiper
            navigation={false}
            loop={false}
            autoplay={false}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  w-full"
            style={{ "--swiper-theme-color": "#27AE61" }}
          >
            {data.map((bannerData) => (
              <SwiperSlide key={data}>
                <div
                  className={styles.bannerWrap}
                  style={{
                    backgroundImage: `url(${bannerData.image})`,
                  }}
                >
                  <div class="">
                    <div class="banner-text pl-8 md:pl-8 pt-[100px] md:pt-[10px] lg:pt-[20px] xl:pt-[100px] 2xl:pt-[220px]">
                      <h1
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="500"
                        className="uppercase text-sm md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold md:py-4 lg:py-8"
                      >
                        {bannerData.subtitle}
                      </h1>
                      <h3
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        className="capitalize text-sm md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] font-bold md:py-4 lg:py-8"
                      >
                        {bannerData.title} of {bannerData.month}
                      </h3>
                      <h5
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className=" capitalize text-sm md:text-[16px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] font-bold md:py-4 lg:py-8"
                      >
                        This is perfect to start your very own bookstore!
                      </h5>
                      <div className="mt-8">
                        <a
                          href="#"
                          data-aos="fade-left"
                          data-aos-delay="250"
                          data-aos-duration="1200"
                          className="text-[16px] bg-[#03AFEB] py-3 px-12  rounded-xl capitalize font-bold shadow-xl hover:bg-[#fff] hover:t"
                        >
                          Explore now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
