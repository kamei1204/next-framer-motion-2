// next link 
import Link from "next/link";

// icons
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLine} from "react-icons/fa6";

const Socials = () => {
  return (
      <div className="flex items-center gap-x-5 text-xl">
        <Link href={''} className=" hover:text-accent transition-all duration-300">
          <FaGithub />
        </Link>
        <Link href={''} className=" hover:text-accent transition-all duration-300">
          <FaXTwitter />
        </Link>
        <Link href={''} className=" hover:text-accent transition-all duration-300">
          <FaLine />
        </Link>
      </div>
  ) 
};

export default Socials;
