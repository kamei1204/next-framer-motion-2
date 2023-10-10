// nextImage
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { FaArrowRight } from "react-icons/fa";


const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-8">
      <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image src={'/rounded-text.png'} width={141} height={148} alt="" className='animate-spin-slow w-full h-full max-w-[241px] max-h-[248px]'/>
        <FaArrowRight className='absolute text-3xl  group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
