
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
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];


const About = () => {
  const [ index, setIndex ] = useState(0);
  console.log(index);
  return (
      <div className="h-full py-40 xl:py-32 text-center xl:text-left">
        <Circles />
        <Flower />
        {/* Avatar image */}
        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-10 xl:mt-0">
          <div className="flex flex-1 flex-col justify-center">
            <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2">Captivating <span className="text-accent">stories</span><br/>birth magnificent designs.</motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">以前は料理の世界で多くの経験を積み、お客様に美味しい料理を提供することが喜びでした。最近、新しい挑戦を求めてエンジニアとしての道を選びました。
              料理人としての経験から得た創造力や細部への注意を、新しい分野で活かすことが目標です。エンジニアとしては、技術への情熱と問題解決能力を大切にしています。
              まだ経験は浅いですが、日々学びを重ねながら、新しい技術やプロジェクトに取り組んでいます。これからも成長を続け、技術を活用して社会に貢献することを目指しています。どうぞよろしくお願いいたします。
            </motion.p>
            {/* counters */}
            <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 ">
              <div className="flex flex-1 xl:gap-x-6 ">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} delay={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">Years of experience</div>
                </div>
                {/* //clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={250} duration={5} delay={0} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">Satisfied clients</div>
                </div>
                {/* //Finished projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={650} duration={5} delay={0} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">Finished projects</div>
                </div>
                {/* //Winning awards */}
                <div className="relative flex-1 ">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} delay={0} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
         
        </div>
      </div>
    )
};

export default About;
