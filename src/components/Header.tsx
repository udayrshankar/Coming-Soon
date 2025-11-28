import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import pic from '../assets/Copy of Commercial Event Website in Black Turquoise Bold Gradient Style (5).png';

export function Header() {
  return (
    <motion.header className="sm:fixed top-0 left-0 w-full z-50">
    <div className="backdrop-blur-sm shadow-2xl rounded-full mx-auto px-4 py-6 flex justify-between items-center max-w-7xl">


      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="flex items-center"
      >


        <div className="text-white text-2xl md:text-4xl font-bold tracking-tigh flex flex-row items-center gap-2">
          <img src={pic} alt="" className='md:h-8 md:w-8 h-6 w-6 translate-y-0.5'/>
          Anseru.ai
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
      >
        <span className="font-medium min-w-20">Book a Call</span>

        <motion.div
          whileHover={{ rotate: 15 }}
          className="
            md:w-8 md:h-8 w-6 h-6 rounded-full translate-x-2
            flex items-center justify-center 
            border border-black/30 bg-white
          "
        >
          <Phone className="w-3.5 h-3.5 text-black" strokeWidth={2.2} />
        </motion.div>
      </motion.button>
    </div>
    </motion.header>
  );
}
