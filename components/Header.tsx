//next image
import Image from "next/image";

// next link
import Link from "next/link";

//components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6">
          {/* logo */}
          <Link href={"/"}>
            <h1 className="text-4xl text-white">kamebuhi dev <span className="text-red-800 text-5xl">.</span></h1>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  ) 
};

export default Header;
