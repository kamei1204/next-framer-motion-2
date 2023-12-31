//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required swiper components
import { Pagination } from 'swiper';
import Image from "next/image";

//arrow
import { RxArrowRight } from "react-icons/rx";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/work.png',
        },
        {
          title: 'title',
          path: '/work.png',
        },
        {
          title: 'title',
          path: '/work.png',
        },
        {
          title: 'title',
          path: '/work.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/work-1.png',
        },
        {
          title: 'title',
          path: '/work-1.png',
        },
        {
          title: 'title',
          path: '/work-1.png',
        },
        {
          title: 'title',
          path: '/work-1.png',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return ( 
  <Swiper
  spaceBetween={10}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="h-[280px] sm:h-[480px] ">
    {workSlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => {
              return (
                <div key={index} className=" relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="flex items-center justify-center relative overflow-hidden group  h-28 md:h-48">
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt={image.title} />
                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#90909086] to-[#5453535d] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                         {/* title-1 */}
                        <div className="delay-100">Live</div>
                        {/* title-2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><RxArrowRight /></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>
  )
};

export default WorkSlider;
