
import { useState } from "react";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants"

//counter 
import CountUp from "react-countup";

//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import Flower from '../../components/Flower'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

/* eslint-disable*/
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '前職(焼肉レストラン)10年永年勤続賞',
        stage: '2021',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'html /css / js / react / next.js / wordpress',
        stage: '2021 - 2023',
      },
    ],
  },
  {
    title: 'licenses',
    info: [
      {
        title: '調理師免許',
        stage: '2011',
      },
    ],
  },
];


const About = () => {
  const [ index, setIndex ] = useState(0);
  console.log(index);
  return (
      <div className="h-full pt-[7rem] pb-[5rem] xl:py-32 text-center xl:text-left">
        <Circles />
        <Flower />
        {/* Avatar image */}
        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-10 xl:mt-0">
          <div className="flex flex-1 flex-col justify-center">
            <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2">From chef <span className="text-accent">to</span><br/>web engineer</motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">エンジニアとして、技術への情熱と問題解決能力を大切にしています。
              まだ経験は浅いですが、日々学びを重ねながら、新しい技術やプロジェクトに取り組んでいます。これからも成長を続け、技術を活用して社会に貢献することを目指しています。どうぞよろしくお願いいたします。
            </motion.p>
            {/* counters */}
            <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 ">
              <div className="flex flex-1 xl:gap-x-6 ">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={2} duration={5} delay={7} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">Years of experience</div>
                </div>
                {/* //clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={10} duration={5} delay={2} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">Satisfied clients</div>
                </div>
                {/* //Finished projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={52} duration={5} delay={0} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">Finished projects</div>
                </div>
                {/* //Winning awards */}
                <div className="relative flex-1 ">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={1} duration={5} delay={6} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-[2rem] xl:mt-0">
          <div className="flex  gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item,itemIndex) => {
              return (
                <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-red-800 after:transition-all after:duration-300 '} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick = {() => setIndex(itemIndex)}>{item.title}</div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl;gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                {/* icons */}
                {item.icons?.map((icon,itemIndex) => {
                  return <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
                })}
                </div>
              </div>
              );
            })}
          </div>
          </motion.div>
        </div>
      </div>
    )
};

export default About;
