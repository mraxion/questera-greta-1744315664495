import { HiQuestionMarkCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function HelpButton({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed right-4 top-4 bg-white p-4 rounded-full shadow-lg
                 text-primary border-2 border-primary"
      aria-label="Obtener ayuda"
    >
      <HiQuestionMarkCircle className="text-3xl" />
    </motion.button>
  );
}