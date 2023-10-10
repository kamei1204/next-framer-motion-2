//next image
import Image from "next/image";

const Bulb = () => {
  return(
    <div className="absolute -left-24 -top-12 rotate-12 animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image src={'/bulb.png'} width={260} height={200} alt="bulb" className="h-full w-full" />
    </div>
  ) 
};

export default Bulb;
