//next image
import Image from 'next/image';

const Flower= () => {
    return (
    <div className='w-[200px] xl:w-[300px] absolute -top-1 -left-0 xl:-right-16 xl:-bottom-2 animate-pulse duration-75 z-10 xl:hidden'>
        <Image src={"/Flower.png"} width={260} height={200} alt='<a href="https://jp.freepik.com/free-vector/paw-prints-trail-across-screen_37409080.htm#query=%E7%8A%AC%20%E8%B6%B3%E8%B7%A1&position=0&from_view=keyword&track=ais">著作者：juicy_fish</a>／出典：Freepik' className='w-full h-full' />
    </div>
    );
};

export default Flower;