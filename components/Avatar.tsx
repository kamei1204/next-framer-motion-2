//next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none animate-pulse'>
      <Image src={'/avatar.png'} width={737} height={678} alt='avatar' />
    </div>
  )
};

export default Avatar;
