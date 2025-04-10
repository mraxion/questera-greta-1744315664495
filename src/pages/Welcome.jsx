import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <motion.h1 
        className="text-3xl font-bold text-text mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ¡Aprende inglés fácil!
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/learn"
          className="bg-primary text-white text-xl py-4 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-colors"
        >
          Empezar
        </Link>
      </motion.div>
    </div>
  );
}