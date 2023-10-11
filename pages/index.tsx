import type { NextPage } from 'next'

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

const Home: NextPage = () => { 
    return ( 
    <div className='bg-black/90 h-full'>
        {/* text */}
        <div className='w-full h-full'>
            <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
                    Transforming Ideas <br /> Into{' '}
                    <span className='text-secondary'>Digital Reality</span>
                </motion.h1>
                {/* subtitle */}
                <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='mx-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
                「私は日本を拠点にフルスタック・デベロッパーを目指しています。UIのエフェクトやアニメーション、そして直感的でダイナミックなユーザーエクスペリエンスの創造に真剣に情熱を抱いています。」
                </motion.p>
                <div className='flex justify-center xl:hidden relative'>
                    <ProjectsBtn />
                </div>
                <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
                    <ProjectsBtn />
                </motion.div>
            </div>
        </div>
        {/* image */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
            {/* backImage */}
            <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right-0 xl:bg-no-repeat w-full h-full absolute mix-blend-lighten z-20'></div>
            {/* particles */}
            <ParticlesContainer />
        </div>
    </div>
    )
}

export default Home
