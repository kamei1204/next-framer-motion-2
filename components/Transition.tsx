//framer motion
import { motion } from 'framer-motion';

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}
//上のコードの説明
//transitionVariantsは、アニメーションの状態を定義している。
//initial: {x: '100%', width: '100%',}は、初期状態で、x軸方向に100%移動し、幅は100%という意味。
//animate: {x: '0%', width: '0%',}は、アニメーション実行時に、x軸方向に0%移動し、幅は0%という意味。
//exit: {x: ['0%', '100%'], width: ['0%', '100%'],}は、アニメーション終了時に、x軸方向に0%から100%に移動し、幅は0%から100%に移動するという意味。




const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#0c0a13da]' variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}></motion.div>
      {/* //上のコードの説明 */}
      {/* //motion.divは、framer motionのdivコンポーネント。 */}
      {/* //className='fixed top-0 bottom-0 h-screen w-screen z-30 bg-[#2e2257]'は、fixedで、画面全体に表示されるようにしている。 */}
      {/* //variants={transitionVariants}は、variantsを使って、アニメーションの状態を定義している。 */}
      {/* //initial="initial"は、初期状態を指定している。 */}
      {/* //animate="animate"は、アニメーション実行時の状態を指定している。 */}
      {/* //exit="exit"は、アニメーション終了時の状態を指定している。 */}
      {/* //transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}は、アニメーションの設定をしている。 */}
      <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-[#f4f3f6]' variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}></motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-[#06040a]' variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}></motion.div>
    </>
  );
};

export default Transition;
