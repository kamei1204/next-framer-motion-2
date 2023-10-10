//components
import Circles from "../../components/Circles";

// icon
import { BsArrowRight } from "react-icons/bs";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";
import { useRef, useState } from "react";

//emailjs
import emailjs from '@emailjs/browser';


const Contact = () => {

  const ref = useRef();
  const [ success, setSuccess ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_r5uir25', 'template_oos773v', ref.current, 'of_mDgTTxYTItH3FL')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
};

  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2">Lets <span className="text-accent">connect.</span></motion.h2>
          {/* form */}
          <motion.form ref={ref} onSubmit={handleSubmit} variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className="flex-1 flex flex-col gap-4 w-full mx-auto">
            {/* inner group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" name="name"/>
              {/* <input type="text" placeholder="email" className="input" name="email"/> */}
            </div>
            <input type="text" placeholder="email" className="input" name="email"/>
            <textarea placeholder="message" className="textarea" name="message"></textarea>
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Lets talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
            </button>
            {success && <p className="text-green-500">Message sent successfully!</p>}
            {success === false && <p className="text-red-500">Message failed to send!</p>}
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
