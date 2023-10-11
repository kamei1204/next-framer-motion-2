//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required swiper components
import { FreeMode ,Pagination } from 'swiper';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: '独自のブランドストーリーやバリューを明確に定義する。',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'ユーザビリティと視覚的吸引力を考慮したデザインを作成',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'クリーンで効率的なコードを書き品質と効率を向上させる。',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: '顧客のニーズや利点に焦点を当て強力な見出しと魅力で興味を',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: '適切なキーワードを含む高品質なコンテンツを作成・最適化を。',
  },
];

const ServiceSlider = () => {
  return ( 
  <Swiper breakpoints={{
    320: {slidesPerView: 1, spaceBetween: 15},
    640: {slidesPerView: 3, spaceBetween: 15},
  }}
  freeMode={true}
  //freeModeはスライドをスナップさせない
  pagination={{
    clickable: true,
    //clickableはpaginationをクリックできるようにする
    //色を変える場合は、swiper.cssを編集する
  }}
  modules={[FreeMode,Pagination]}
  //modulesを使うことで、swiperの機能を拡張できる
  className="h-[240px] sm:h-[340px] ">
    {/* //上記のように、classNameを指定することで、swiperのスタイルを変更できる */}
    {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          {/* //swiperSlideを使うことで、swiperのスライドを作成できる */}
          <div className="bg-[rgba(245,243,244,0.75)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(246,245,246,0.93)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title */}
            <div className="mb-8">
              <div className="mb-2 text-lg text-black">{item.title}</div>
              <p className="max-w-[350px] text-black leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="text-black group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
            </div>
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>
  )
};

export default ServiceSlider;
