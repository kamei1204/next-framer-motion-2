//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return(
    <div className="h-full flex items-center py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2 xl:mt-12">
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className="mb-4 max-w-[400px] mx-auto xl:mx-0">WEB制作とコーディング、特にReactを活用したWEB開発を得意としています。最適なウェブ体験を提供いたします。</motion.p>
          </div>
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className="w-full xl:w-[65%]">
            {/* slider */}
            <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  ) 
};

export default Work;
