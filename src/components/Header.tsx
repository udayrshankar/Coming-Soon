import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import pic from '../assets/Copy of Commercial Event Website in Black Turquoise Bold Gradient Style (5).png';
import { useState } from 'react';
import { PopupModal } from 'react-calendly';
import { useEffect } from 'react';

const Header = () => {
  const [isopen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // FIX: Mount to body instead of 'root' to avoid z-index wars with your header
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);
  return (


    <motion.header className="sm:fixed top-0 left-0 w-full z-50">
    <div className="backdrop-blur-sm shadow-2xl rounded-full mx-auto px-4 py-6 flex justify-between items-center max-w-7xl">


      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="flex items-center"
      >


        <div className="text-white text-2xl md:text-4xl font-bold tracking-tigh flex flex-row items-center gap-2 -translate-y-2">
          <img src={pic} alt="" className='md:h-8 md:w-8 h-6 w-6 translate-y-2'/>
          <span className='text-3xl translate-y-1.5 md:text-5xl md:translate-y-0'>anseru</span>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="
          border-white border-2 text-white md:text-lg text-sm
          px-3 py-2 rounded-full 
          flex items-center gap-3 
          transition-all duration-300 
          hover:shadow-lg hover:shadow-white/20
        "
        onClick={() => setIsOpen(true)}
      >
        <span className="font-medium min-w-20">Book a Call</span>

        <motion.div
         
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="
            md:w-9 md:h-9 w-6 h-6 rounded-full translate-x-2
            flex items-center justify-center 
            border border-black/30 bg-white
          "
        >
          <Phone className="w-4 h-4 text-black" strokeWidth={2.2} />
        </motion.div>
        
      </motion.button>
      <PopupModal
        url="https://calendly.com/kg-goutham-anseru/30min"
        onModalClose={() => setIsOpen(false)}
        open={isopen}
        rootElement={rootElement!}

        pageSettings={{
            backgroundColor: "1a1a1a",
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: "00a2ff",    
            textColor: "ffffff"      
        }}
      />
    </div>
    </motion.header>
  );
}

export default Header;